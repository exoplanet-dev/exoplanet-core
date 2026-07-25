import jax
import jax.numpy as jnp
from pytensor.link.jax.dispatch import jax_funcify

from exoplanet_core.jax import ops as jax_ops
from exoplanet_core.pymc import ops as pymc_ops


@jax_funcify.register(pymc_ops.Kepler)
def jax_funcify_Kepler(op, **kwargs):
    def kepler(M, ecc):
        return jax_ops.kepler(M, ecc)

    return kepler


# The PyTensor QuadSolutionVector Op has three outputs -- (s, dsdb, dsdr) --
# so its JAX conversion has to return all three, which the public
# `jax_ops.quad_solution_vector` (single output) cannot do. Calling
# `_base_quad_solution_vector` directly has the right shape but inherits its
# lack of a differentiation rule, so the funcified graph evaluates while
# `jax.grad` of it raises
#
#     ValueError: The FFI call to `exoplanet_core_quad_solution_vector`
#                 cannot be differentiated.
#
# That is precisely what a JAX-based NUTS sampler does to a PyMC model
# (`pymc.sampling.jax` funcifies the *logp* and differentiates it with JAX),
# so a limb-darkened model worked with the C and numba backends -- where the
# Op's own `grad` assembles the gradient from outputs 1 and 2 -- but not with
# `nuts_sampler="numpyro"` or `"blackjax"`.
#
# The wrapper below keeps the three-output signature and attaches the same JVP
# rule the public single-output function uses. `_base_quad_solution_vector`
# already returns the derivatives, so this adds no extra FFI call.
#
# As with `jax_ops.quad_solution_vector`, this supports first-order
# differentiation only: `dsdb` and `dsdr` carry zero tangents, since
# differentiating them would need second derivatives the C++ kernel does not
# compute. PyTensor's gradient graph consumes those two outputs as values
# rather than re-differentiating them, and a likelihood only ever reads output
# 0, so no supported use is restricted.
@jax.custom_jvp
def _quad_solution_vector_with_grads(b, r):
    return jax_ops._base_quad_solution_vector(b, r)


@_quad_solution_vector_with_grads.defjvp
def _quad_solution_vector_with_grads_jvp(primals, tangents):
    b, r = primals
    db, dr = tangents
    s, dsdb, dsdr = jax_ops._base_quad_solution_vector(b, r)
    ds = db[..., None] * dsdb + dr[..., None] * dsdr
    return (s, dsdb, dsdr), (ds, jnp.zeros_like(dsdb), jnp.zeros_like(dsdr))


@jax_funcify.register(pymc_ops.QuadSolutionVector)
def jax_funcify_QuadSolutionVector(op, **kwargs):
    def quad_solution_vector(b, r):
        return _quad_solution_vector_with_grads(b, r)

    return quad_solution_vector


@jax_funcify.register(pymc_ops.ContactPoints)
def jax_funcify_ContactPoints(op, **kwargs):
    def contact_points(a, e, cosw, sinw, cosi, sini, L):
        return jax_ops.contact_points(a, e, cosw, sinw, cosi, sini, L)

    return contact_points
