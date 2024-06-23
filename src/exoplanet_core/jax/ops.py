# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector", "contact_points"]

from functools import partial
from math import prod

import numpy as np
from jax import core
from jax.core import ShapedArray
from jax.interpreters import ad, batching, mlir, xla
from jax.lib import xla_client

from exoplanet_core.jax import cpu_driver

xops = xla_client.ops

for _name, _value in cpu_driver.registrations().items():
    xla_client.register_custom_call_target(_name, _value, platform="cpu")


try:
    from exoplanet_core.jax import gpu_driver
except ImportError:
    pass
else:
    for _name, _value in gpu_driver.registrations().items():
        xla_client.register_custom_call_target(_name, _value, platform="CUDA")


def _default_layouts(shapes):
    return [range(len(shape) - 1, -1, -1) for shape in shapes]


def _lowering_rule(target_name, ctx, *args):
    if any(a.dtype != np.float64 for a in ctx.avals_in):
        raise ValueError(f"{target_name} requires float64 precision")
    shapes = [a.shape for a in ctx.avals_in]
    assert shapes[0] == shapes[1]
    size = prod(shapes[0])
    if "cuda" in target_name:
        return mlir.custom_call(
            target_name,
            operands=args,
            operand_layouts=_default_layouts(
                aval.shape for aval in ctx.avals_in
            ),
            result_types=[
                mlir.aval_to_ir_type(aval) for aval in ctx.avals_out
            ],
            result_layouts=_default_layouts(
                aval.shape for aval in ctx.avals_out
            ),
            backend_config=gpu_driver.cuda_descriptor(size),
        ).results
    else:
        return mlir.custom_call(
            target_name,
            operands=(mlir.ir_constant(np.int32(size)),) + args,
            operand_layouts=[()]
            + _default_layouts(aval.shape for aval in ctx.avals_in),
            result_types=[
                mlir.aval_to_ir_type(aval) for aval in ctx.avals_out
            ],
            result_layouts=_default_layouts(
                aval.shape for aval in ctx.avals_out
            ),
        ).results


# **********
# * KEPLER *
# **********
def kepler(M, ecc):
    r"""Solve Kepler's equation

    This op numerically evaluates the solution to Kepler's equation for given
    mean anomaly ``M`` and eccentricity ``e``:

    .. math::

        M = E - e sin(E)

    For computational efficiency this op actually returns ``cos(f)`` and
    ``sin(f)``, where ``f`` is the true anomaly, defined as

    .. math::

        f = 2\,\arctan\left(\sqrt{\frac{1 + e}{1 - e}}\,\tan\frac{E}{2}\right)

    Args:
        mean_anomaly: The mean anomaly
        eccentricity: Eccentricity, like it says on the box

    Returns:
        (cos(f), sin(f)): The cosine and sine of the true anomaly ``f``.

    """
    return kepler_prim.bind(M, ecc)


def _kepler_abstract_eval(M, ecc):
    if M.dtype != np.float64 or ecc.dtype != np.float64:
        raise ValueError("float64 precision is required")
    if M.shape != ecc.shape:
        raise ValueError("Dimension mismatch")
    out_shape = ShapedArray(M.shape, np.float64)
    return (out_shape, out_shape)


def _kepler_jvp(args, tangents):
    M, e = args
    dM, de = tangents
    sinf, cosf = kepler(M, e)

    # Pre-compute some things
    ecosf = e * cosf
    ome2 = 1 - e**2

    # Propagate the derivatives
    df = 0.0
    if type(dM) is not ad.Zero:
        df += dM * (1 + ecosf) ** 2 / ome2**1.5
    if type(de) is not ad.Zero:
        df += de * (2 + ecosf) * sinf / ome2

    return (sinf, cosf), (cosf * df, -sinf * df)


def _kepler_batch(args, axes):
    assert axes[0] == axes[1]
    return kepler(*args), axes


kepler_prim = core.Primitive("kepler")
kepler_prim.multiple_results = True
kepler_prim.def_impl(partial(xla.apply_primitive, kepler_prim))
kepler_prim.def_abstract_eval(_kepler_abstract_eval)
mlir.register_lowering(
    kepler_prim, partial(_lowering_rule, "solve_kepler"), platform="cpu"
)
mlir.register_lowering(
    kepler_prim, partial(_lowering_rule, "cuda_kepler"), platform="cuda"
)
ad.primitive_jvps[kepler_prim] = _kepler_jvp
batching.primitive_batchers[kepler_prim] = _kepler_batch


# **********
# * STARRY *
# **********
def _base_quad_solution_vector(b, r):
    return quad_solution_vector_prim.bind(b, r)


def quad_solution_vector(b, r):
    r"""Compute the "solution vector" for a quadratic limb-darkening model

    This will return a tensor with an extra dimension of size 3 on the right
    hand side which represents the solution vector for each pair of impact
    parameter ``b`` and radius ratio ``r`` values. See `Agol+ (2020)
    <https://arxiv.org/abs/1908.03222>`_ for more details.

    Args:
        b: The impact parameter
        r: The radius ratio

    Returns:
        The solution vector with the shape ``[..., 3]``, where ``...``
        indicates the shape of ``b`` or ``r``.

    """
    return _base_quad_solution_vector(b, r)[0]


def _quad_solution_vector_abstract_eval(b, r):
    if b.dtype != np.float64 or r.dtype != np.float64:
        raise ValueError("float64 precision is required")
    if b.shape != r.shape:
        raise ValueError("Dimension mismatch")
    out_shape = ShapedArray(tuple(b.shape) + (3,), np.float64)
    return (out_shape, out_shape, out_shape)


# Note: this implementation only supports first-order differentiation and
#       returning None will cause higher order operations to fail with a
#       confusing error so there's probably a better solution. But that
#       solution is not returning ad.Zero because that makes higher-order
#       derivatives execute and spit out nonsense.
def _quad_solution_vector_jvp(args, tangents):
    b, r = args
    db, dr = tangents

    s, dsdb, dsdr = _base_quad_solution_vector(b, r)

    disconnected_b = type(db) is ad.Zero
    disconnected_r = type(dr) is ad.Zero
    if disconnected_b and disconnected_r:
        return (s, dsdb, dsdr), (ad.Zero(s.aval), None, None)

    if disconnected_r and not disconnected_b:
        ds = db[..., None] * dsdb
    elif disconnected_b and not disconnected_r:
        ds = dr[..., None] * dsdr
    else:
        ds = db[..., None] * dsdb + dr[..., None] * dsdr

    return (s, dsdb, dsdr), (ds, None, None)


def _quad_solution_vector_batch(args, axes):
    assert axes[0] == axes[1]
    return quad_solution_vector(*args), axes


quad_solution_vector_prim = core.Primitive("quad_solution_vector")
quad_solution_vector_prim.multiple_results = True
quad_solution_vector_prim.def_impl(
    partial(xla.apply_primitive, quad_solution_vector_prim)
)
quad_solution_vector_prim.def_abstract_eval(
    _quad_solution_vector_abstract_eval
)
mlir.register_lowering(
    quad_solution_vector_prim,
    partial(_lowering_rule, "quad_solution_vector"),
    platform="cpu",
)
mlir.register_lowering(
    quad_solution_vector_prim,
    partial(_lowering_rule, "cuda_quad_solution_vector"),
    platform="cuda",
)
ad.primitive_jvps[quad_solution_vector_prim] = _quad_solution_vector_jvp
batching.primitive_batchers[quad_solution_vector_prim] = (
    _quad_solution_vector_batch
)


# ******************
# * CONTACT POINTS *
# ******************
def contact_points(a, e, cosw, sinw, cosi, sini, L):
    return contact_points_prim.bind(a, e, cosw, sinw, cosi, sini, L)


def _contact_points_abstract_eval(*args):
    if any(a.dtype != np.float64 for a in args):
        raise ValueError("float64 precision is required")
    shape = args[0].shape
    if any(a.shape != shape for a in args[1:]):
        raise ValueError("Dimension mismatch")
    return (
        ShapedArray(shape, np.float64),
        ShapedArray(shape, np.float64),
        ShapedArray(shape, np.int32),
    )


def _contact_points_batch(args, axes):
    assert axes[0] == axes[1]
    return contact_points(*args), axes


contact_points_prim = core.Primitive("contact_points")
contact_points_prim.multiple_results = True
contact_points_prim.def_impl(partial(xla.apply_primitive, contact_points_prim))
contact_points_prim.def_abstract_eval(_contact_points_abstract_eval)
mlir.register_lowering(
    contact_points_prim,
    partial(_lowering_rule, "contact_points"),
    platform="cpu",
)
batching.primitive_batchers[contact_points_prim] = _contact_points_batch
