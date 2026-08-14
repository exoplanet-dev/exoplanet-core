# -*- coding: utf-8 -*-

import logging

import jax
from jax import config

logger = logging.getLogger(__name__)

# ops.py registers its FFI targets through jax.ffi, which only became public
# in jax 0.5.0 (it was jax.extend.ffi before that). pyproject already
# declares jax>=0.5.0 for the "jax" extra, but nothing enforces it at
# runtime, so an older jax reaches jax.ffi.register_ffi_target and raises
#
#     AttributeError: module 'jax' has no attribute 'ffi'
#
# from the middle of ops.py. The EXCEPTION TYPE is what matters here:
# exoplanet_core/pymc/__init__.py wraps its jax_support import in
# `try: ... except ImportError: pass`, and an AttributeError sails straight
# through it -- so `import exoplanet_core.pymc` fails outright on an old
# jax instead of falling back to the non-JAX path. Raising ImportError
# makes that existing guard behave as intended and gives a direct user of
# this module an actionable message.
#
# Checked before touching jax's x64 config, so a version that is going to
# be rejected does not first mutate global jax state.
if not hasattr(jax, "ffi"):
    raise ImportError(
        "exoplanet_core.jax requires jax>=0.5.0, which introduced the "
        f"public jax.ffi module; the installed jax is {jax.__version__}. "
        "Upgrade jax, or use the numpy or pymc backends, neither of which "
        "needs it."
    )

if not config.read("jax_enable_x64"):
    logger.warning(
        "exoplanet_core.jax only works with dtype float64. "
        "We're enabling x64 now, but you might run into issues if you've "
        "already run some jax code.\n"
        "You can squash this warning by setting the environment variable "
        "'JAX_ENABLE_X64=True' or by running:\n"
        ">>> from jax import config\n"
        ">>> config.update('jax_enable_x64', True)"
    )
    config.update("jax_enable_x64", True)

__all__ = ["ops"]

from exoplanet_core.jax import ops  # noqa isort:skip
