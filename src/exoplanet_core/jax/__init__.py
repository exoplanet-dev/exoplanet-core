# -*- coding: utf-8 -*-

import logging

logger = logging.getLogger(__name__)

try:
    from jax.config import config
except ImportError:
    logger.warning("Please install jax if you want to use the jax ops")
else:
    if not config.read("jax_enable_x64"):
        logger.warning(
            "exoplanet_core.jax only works with dtype float64. "
            "We're enabling x64 now, but you might run into issues if you've "
            "already run some jax code.\n"
            "You can squash this warning by setting the environment variable "
            "'JAX_ENABLE_X64=True' or by running:\n"
            ">>> from jax.config import config\n"
            ">>> config.update('jax_enable_x64', True)"
        )
        config.update("jax_enable_x64", True)

    __all__ = ["quad_solution_vector"]
    from .ops import quad_solution_vector
