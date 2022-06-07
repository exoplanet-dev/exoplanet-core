from aesara.link.jax.dispatch import jax_funcify

from exoplanet_core.jax import ops as jax_ops
from exoplanet_core.pymc4 import ops as pymc4_ops


@jax_funcify.register(pymc4_ops.Kepler)
def jax_funcify_Kepler(op, **kwargs):
    def kepler(M, ecc):
        return jax_ops.kepler(M, ecc)

    return kepler


@jax_funcify.register(pymc4_ops.QuadSolutionVector)
def jax_funcify_QuadSolutionVector(op, **kwargs):
    def quad_solution_vector(b, r):
        return jax_ops._base_quad_solution_vector(b, r)

    return quad_solution_vector


@jax_funcify.register(pymc4_ops.ContactPoints)
def jax_funcify_ContactPoints(op, **kwargs):
    def contact_points(a, e, cosw, sinw, cosi, sini, L):
        return jax_ops.contact_points(a, e, cosw, sinw, cosi, sini, L)

    return contact_points
