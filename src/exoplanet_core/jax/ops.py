# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector"]

from functools import partial

import numpy as np
from jax import core
from jax import numpy as jnp
from jax.abstract_arrays import ShapedArray
from jax.interpreters import ad, batching, xla
from jax.lib import xla_client

from . import xla_driver

xops = xla_client.ops

#    _            _
#   | |_____ _ __| |___ _ _
#   | / / -_) '_ \ / -_) '_|
#   |_\_\___| .__/_\___|_|
#           |_|
xla_client.register_cpu_custom_call_target(
    b"solve_kepler", xla_driver.solve_kepler()
)


def kepler(M, ecc):
    return kepler_prim.bind(M, ecc)


def kepler_abstract_eval(M, ecc):
    if M.dtype != np.float64 or ecc.dtype != np.float64:
        raise ValueError("float64 precision is required")
    if M.shape != ecc.shape:
        raise ValueError("Dimension mismatch")
    out_shape = ShapedArray(M.shape, np.float64)
    return (out_shape, out_shape)


def kepler_translation_rule(c, M, ecc):
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


def kepler_jvp(args, tangents):
    M, e = args
    dM, de = tangents
    cosf, sinf = kepler(M, e)

    # Pre-compute some things
    ecosf = e * cosf
    ome2 = 1 - e ** 2

    # Propagate the derivatives
    df = 0.0
    if type(dM) is not ad.Zero:
        df += dM * (1 + ecosf) ** 2 / ome2 ** 1.5
    if type(de) is not ad.Zero:
        df += de * (2 + ecosf) * sinf / ome2

    return (cosf, sinf), (-sinf * df, cosf * df)


def kepler_batch(args, axes):
    assert axes[0] == axes[1]
    return kepler(*args), axes


kepler_prim = core.Primitive("kepler")
kepler_prim.multiple_results = True
kepler_prim.def_impl(partial(xla.apply_primitive, kepler_prim))
kepler_prim.def_abstract_eval(kepler_abstract_eval)
xla.backend_specific_translations["cpu"][kepler_prim] = kepler_translation_rule
ad.primitive_jvps[kepler_prim] = kepler_jvp
batching.primitive_batchers[kepler_prim] = kepler_batch

#       _
#    __| |_ __ _ _ _ _ _ _  _
#   (_-<  _/ _` | '_| '_| || |
#   /__/\__\__,_|_| |_|  \_, |
#                        |__/
xla_client.register_cpu_custom_call_target(
    b"quad_solution_vector", xla_driver.quad_solution_vector()
)


def quad_solution_vector(b, r):
    return quad_solution_vector_prim.bind(b, r)[0]


def quad_solution_vector_abstract_eval(b, r):
    if b.dtype != np.float64 or r.dtype != np.float64:
        raise ValueError("float64 precision is required")
    if b.shape != r.shape:
        raise ValueError("Dimension mismatch")
    out_shape = ShapedArray(tuple(b.shape) + (3,), np.float64)
    return (out_shape, out_shape, out_shape)


def quad_solution_vector_translation_rule(c, b, r):
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


# Note: this implementation only supports first-order differentiation and
#       returning None will cause higher order operations to fail with a
#       confusing error so there's probably a better solution. But that
#       solution is not returning ad.Zero because that makes higher-order
#       derivatives execute and spit out nonsense.
def quad_solution_vector_jvp(args, tangents):
    b, r = args
    db, dr = tangents

    s, dsdb, dsdr = quad_solution_vector_prim.bind(b, r)

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


def quad_solution_vector_batch(args, axes):
    assert axes[0] == axes[1]
    return quad_solution_vector(*args), axes


quad_solution_vector_prim = core.Primitive("quad_solution_vector")
quad_solution_vector_prim.multiple_results = True
quad_solution_vector_prim.def_impl(
    partial(xla.apply_primitive, quad_solution_vector_prim)
)
quad_solution_vector_prim.def_abstract_eval(quad_solution_vector_abstract_eval)
xla.backend_specific_translations["cpu"][
    quad_solution_vector_prim
] = quad_solution_vector_translation_rule
ad.primitive_jvps[quad_solution_vector_prim] = quad_solution_vector_jvp
batching.primitive_batchers[
    quad_solution_vector_prim
] = quad_solution_vector_batch
