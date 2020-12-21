# -*- coding: utf-8 -*-

__all__ = ["get_mean_and_true_anomaly"]

import numpy as np


def get_mean_and_true_anomaly(eccentricity, eccentric_anomaly):
    M = eccentric_anomaly - eccentricity * np.sin(eccentric_anomaly)
    f = 2 * np.arctan(
        np.sqrt((1 + eccentricity) / (1 - eccentricity))
        * np.tan(0.5 * eccentric_anomaly)
    )
    return M, f
