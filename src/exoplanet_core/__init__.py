# -*- coding: utf-8 -*-

__all__ = ["__version__", "quad_limbdark_light_curve", "kepler"]

from .core import kepler, quad_limbdark_light_curve
from .exoplanet_core_version import version as __version__

__uri__ = "https://docs.exoplanet.codes"
__author__ = "Daniel Foreman-Mackey"
__email__ = "foreman.mackey@gmail.com"
__license__ = "MIT"
__description__ = "The compiled backend for exoplanet"
