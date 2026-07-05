# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector", "contact_points"]

import jax
import jax.numpy as jnp
import numpy as np

from exoplanet_core.jax import cpu_driver

for _name, _target in cpu_driver.registrations().items():
    jax.ffi.register_ffi_target(
        f"exoplanet_core_{_name}", _target, platform="cpu"
    )


try:
    from exoplanet_core.jax import gpu_driver
except ImportError:
    pass
else:
    for _name, _target in gpu_driver.registrations().items():
        jax.ffi.register_ffi_target(
            f"exoplanet_core_{_name}", _target, platform="CUDA"
        )


def _check_inputs(*args):
    args = tuple(jnp.asarray(a) for a in args)
    if any(a.dtype != jnp.float64 for a in args):
        raise ValueError("float64 precision is required")
    shape = args[0].shape
    if any(a.shape != shape for a in args[1:]):
        raise ValueError("Dimension mismatch")
    return args


# **********
# * KEPLER *
# **********
@jax.custom_jvp
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
    M, ecc = _check_inputs(M, ecc)
    out_type = jax.ShapeDtypeStruct(M.shape, M.dtype)
    return jax.ffi.ffi_call(
        "exoplanet_core_solve_kepler",
        (out_type, out_type),
        vmap_method="broadcast_all",
    )(M, ecc)


@kepler.defjvp
def _kepler_jvp(primals, tangents):
    M, e = primals
    dM, de = tangents
    sinf, cosf = kepler(M, e)

    # Pre-compute some things
    ecosf = e * cosf
    ome2 = 1 - e**2

    # Propagate the derivatives
    df = dM * (1 + ecosf) ** 2 / ome2**1.5
    df += de * (2 + ecosf) * sinf / ome2

    return (sinf, cosf), (cosf * df, -sinf * df)


# **********
# * STARRY *
# **********
def _base_quad_solution_vector(b, r):
    b, r = _check_inputs(b, r)
    out_type = jax.ShapeDtypeStruct(tuple(b.shape) + (3,), b.dtype)
    return jax.ffi.ffi_call(
        "exoplanet_core_quad_solution_vector",
        (out_type, out_type, out_type),
        vmap_method="broadcast_all",
    )(b, r)


# Note: like the old primitive-based implementation, this only supports
#       first-order differentiation; the JVP rule below calls the base op,
#       which doesn't have a JVP of its own.
@jax.custom_jvp
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


@quad_solution_vector.defjvp
def _quad_solution_vector_jvp(primals, tangents):
    b, r = primals
    db, dr = tangents
    s, dsdb, dsdr = _base_quad_solution_vector(b, r)
    ds = db[..., None] * dsdb + dr[..., None] * dsdr
    return s, ds


# ******************
# * CONTACT POINTS *
# ******************
def contact_points(a, e, cosw, sinw, cosi, sini, L):
    args = _check_inputs(a, e, cosw, sinw, cosi, sini, L)
    shape = args[0].shape
    out_type = jax.ShapeDtypeStruct(shape, np.float64)
    flag_type = jax.ShapeDtypeStruct(shape, np.int32)
    return jax.ffi.ffi_call(
        "exoplanet_core_contact_points",
        (out_type, out_type, flag_type),
        vmap_method="broadcast_all",
    )(*args)
