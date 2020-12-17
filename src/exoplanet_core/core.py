# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_limbdark_light_curve"]


import numpy as np

from . import driver


def kepler(mean_anomaly, eccentricity):
    mean_anomaly = np.ascontiguousarray(mean_anomaly, dtype=np.float64)
    eccentricity = np.ascontiguousarray(eccentricity, dtype=np.float64)
    cosf = np.empty_like(mean_anomaly)
    sinf = np.empty_like(mean_anomaly)
    return driver.solve_kepler(mean_anomaly, eccentricity, cosf, sinf)


def quad_limbdark_light_curve(u1, u2, b, r):
    c = np.array(
        (1 - u1 - 1.5 * u2, u1 + 2 * u2, -0.25 * u2), dtype=np.float64
    )
    b = np.ascontiguousarray(b, dtype=np.float64)
    r = np.ascontiguousarray(r, dtype=np.float64)
    s = np.empty(r.shape + (3,), dtype=np.float64)
    driver.quad_solution_vector(b, r, s)

    return np.dot(s, c)
