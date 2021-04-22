# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector", "contact_points"]

from functools import partial

import numpy as np
from jax import core
from jax import numpy as jnp
from jax.abstract_arrays import ShapedArray
from jax.interpreters import ad, batching, xla
from jax.lib import xla_client

from . import cpu_driver

xops = xla_client.ops

for _name, _value in cpu_driver.registrations().items():
    xla_client.register_cpu_custom_call_target(_name, _value)


try:
    from . import gpu_driver
except ImportError:
    pass
else:
    for _name, _value in gpu_driver.registrations().items():
        xla_client.register_custom_call_target(_name, _value, platform="gpu")


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


def _kepler_translation_rule(c, M, ecc):
    shapes = (c.get_shape(M), c.get_shape(ecc))
    if any(shape.element_type() != np.float64 for shape in shapes):
        raise ValueError("float64 precision is required")

    dims = tuple(shapes[0].dimensions())
    if dims != shapes[1].dimensions():
        raise ValueError("Dimension mismatch")
    N = np.prod(dims).astype(np.int32)

    order = tuple(range(len(dims) - 1, -1, -1))
    shape = xla_client.Shape.array_shape(jnp.dtype(np.float64), dims, order)

    return xops.CustomCallWithLayout(
        c,
        b"solve_kepler",
        operands=(xops.ConstantLiteral(c, N), M, ecc),
        shape_with_layout=xla_client.Shape.tuple_shape((shape, shape)),
        operand_shapes_with_layout=(
            xla_client.Shape.array_shape(jnp.dtype(jnp.int32), (), ()),
            shape,
            shape,
        ),
    )


def _kepler_gpu_translation_rule(c, M, ecc):
    shapes = (c.get_shape(M), c.get_shape(ecc))
    if any(shape.element_type() != np.float64 for shape in shapes):
        raise ValueError("float64 precision is required")

    dims = tuple(shapes[0].dimensions())
    if dims != shapes[1].dimensions():
        raise ValueError("Dimension mismatch")
    N = np.prod(dims).astype(np.int32)

    order = tuple(range(len(dims) - 1, -1, -1))
    shape = xla_client.Shape.array_shape(jnp.dtype(np.float64), dims, order)
    opaque = gpu_driver.cuda_descriptor(N)

    return xops.CustomCallWithLayout(
        c,
        b"cuda_kepler",
        operands=(M, ecc),
        shape_with_layout=xla_client.Shape.tuple_shape((shape, shape)),
        operand_shapes_with_layout=(shape, shape),
        opaque=opaque,
    )


def _kepler_jvp(args, tangents):
    M, e = args
    dM, de = tangents
    sinf, cosf = kepler(M, e)

    # Pre-compute some things
    ecosf = e * cosf
    ome2 = 1 - e ** 2

    # Propagate the derivatives
    df = 0.0
    if type(dM) is not ad.Zero:
        df += dM * (1 + ecosf) ** 2 / ome2 ** 1.5
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
xla.backend_specific_translations["cpu"][
    kepler_prim
] = _kepler_translation_rule
xla.backend_specific_translations["gpu"][
    kepler_prim
] = _kepler_gpu_translation_rule
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


def _quad_solution_vector_translation_rule(c, b, r):
    shapes = (c.get_shape(b), c.get_shape(r))
    if any(shape.element_type() != np.float64 for shape in shapes):
        raise ValueError("float64 precision is required")

    dims = tuple(shapes[0].dimensions())
    if dims != shapes[1].dimensions():
        raise ValueError("Dimension mismatch")
    N = np.prod(dims).astype(np.int32)

    out_shape = xla_client.Shape.array_shape(
        jnp.dtype(np.float64),
        dims + (3,),
        tuple(range(len(dims), -1, -1)),
    )

    return xops.CustomCallWithLayout(
        c,
        b"quad_solution_vector",
        operands=(xops.ConstantLiteral(c, N), b, r),
        shape_with_layout=xla_client.Shape.tuple_shape(
            (out_shape, out_shape, out_shape)
        ),
        operand_shapes_with_layout=(
            xla_client.Shape.array_shape(jnp.dtype(jnp.int32), (), ()),
            xla_client.Shape.array_shape(
                jnp.dtype(np.float64),
                dims,
                tuple(range(len(dims) - 1, -1, -1)),
            ),
            xla_client.Shape.array_shape(
                jnp.dtype(np.float64),
                dims,
                tuple(range(len(dims) - 1, -1, -1)),
            ),
        ),
    )


def _quad_solution_vector_gpu_translation_rule(c, b, r):
    shapes = (c.get_shape(b), c.get_shape(r))
    if any(shape.element_type() != np.float64 for shape in shapes):
        raise ValueError("float64 precision is required")

    dims = tuple(shapes[0].dimensions())
    if dims != shapes[1].dimensions():
        raise ValueError("Dimension mismatch")
    N = np.prod(dims).astype(np.int32)

    out_shape = xla_client.Shape.array_shape(
        jnp.dtype(np.float64),
        dims + (3,),
        tuple(range(len(dims), -1, -1)),
    )
    opaque = gpu_driver.cuda_descriptor(N)

    return xops.CustomCallWithLayout(
        c,
        b"cuda_quad_solution_vector",
        operands=(b, r),
        shape_with_layout=xla_client.Shape.tuple_shape(
            (out_shape, out_shape, out_shape)
        ),
        operand_shapes_with_layout=(
            xla_client.Shape.array_shape(
                jnp.dtype(np.float64),
                dims,
                tuple(range(len(dims) - 1, -1, -1)),
            ),
            xla_client.Shape.array_shape(
                jnp.dtype(np.float64),
                dims,
                tuple(range(len(dims) - 1, -1, -1)),
            ),
        ),
        opaque=opaque,
    )


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
xla.backend_specific_translations["cpu"][
    quad_solution_vector_prim
] = _quad_solution_vector_translation_rule
xla.backend_specific_translations["gpu"][
    quad_solution_vector_prim
] = _quad_solution_vector_gpu_translation_rule
ad.primitive_jvps[quad_solution_vector_prim] = _quad_solution_vector_jvp
batching.primitive_batchers[
    quad_solution_vector_prim
] = _quad_solution_vector_batch


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


def _contact_points_translation_rule(c, *args):
    shapes = list(map(c.get_shape, args))
    if any(shape.element_type() != np.float64 for shape in shapes):
        raise ValueError("float64 precision is required")

    dims = tuple(shapes[0].dimensions())
    if any(dims != s.dimensions() for s in shapes):
        raise ValueError("Dimension mismatch")
    N = np.prod(dims).astype(np.int32)

    order = tuple(range(len(dims) - 1, -1, -1))
    shape = xla_client.Shape.array_shape(jnp.dtype(np.float64), dims, order)

    return xops.CustomCallWithLayout(
        c,
        b"contact_points",
        operands=(xops.ConstantLiteral(c, N),) + args,
        shape_with_layout=xla_client.Shape.tuple_shape(
            (
                shape,
                shape,
                xla_client.Shape.array_shape(jnp.dtype(np.int32), dims, order),
            )
        ),
        operand_shapes_with_layout=(
            xla_client.Shape.array_shape(jnp.dtype(jnp.int32), (), ()),
        )
        + tuple(shape for _ in args),
    )


def _contact_points_batch(args, axes):
    assert axes[0] == axes[1]
    return contact_points(*args), axes


contact_points_prim = core.Primitive("contact_points")
contact_points_prim.multiple_results = True
contact_points_prim.def_impl(partial(xla.apply_primitive, contact_points_prim))
contact_points_prim.def_abstract_eval(_contact_points_abstract_eval)
xla.backend_specific_translations["cpu"][
    contact_points_prim
] = _contact_points_translation_rule
batching.primitive_batchers[contact_points_prim] = _contact_points_batch
