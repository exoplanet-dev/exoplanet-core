# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector"]


import numpy as np

from .. import driver


def kepler(mean_anomaly, eccentricity):
    mean_anomaly = np.ascontiguousarray(mean_anomaly, dtype=np.float64)
    eccentricity = np.ascontiguousarray(eccentricity, dtype=np.float64)
    cosf = np.empty_like(mean_anomaly)
    sinf = np.empty_like(mean_anomaly)
    return driver.solve_kepler(mean_anomaly, eccentricity, cosf, sinf)


def quad_solution_vector(b, r):
    b = np.ascontiguousarray(b, dtype=np.float64)
    r = np.ascontiguousarray(r, dtype=np.float64)
    s = np.empty(r.shape + (3,), dtype=np.float64)
    return driver.quad_solution_vector(b, r, s)
