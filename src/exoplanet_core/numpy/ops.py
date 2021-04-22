# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector", "contact_points"]


import numpy as np

from .. import driver


def kepler(mean_anomaly, eccentricity):
    mean_anomaly = np.ascontiguousarray(mean_anomaly, dtype=np.float64)
    eccentricity = np.ascontiguousarray(eccentricity, dtype=np.float64)
    sinf = np.empty_like(mean_anomaly)
    cosf = np.empty_like(mean_anomaly)
    driver.solve_kepler(mean_anomaly, eccentricity, sinf, cosf)
    return sinf, cosf


def quad_solution_vector(b, r):
    b = np.ascontiguousarray(b, dtype=np.float64)
    r = np.ascontiguousarray(r, dtype=np.float64)
    s = np.empty(r.shape + (3,), dtype=np.float64)
    driver.quad_solution_vector(b, r, s)
    return s


def contact_points(a, e, cosw, sinw, cosi, sini, L):
    a = np.ascontiguousarray(a, dtype=np.float64)
    e = np.ascontiguousarray(e, dtype=np.float64)
    cosw = np.ascontiguousarray(cosw, dtype=np.float64)
    sinw = np.ascontiguousarray(sinw, dtype=np.float64)
    cosi = np.ascontiguousarray(cosi, dtype=np.float64)
    sini = np.ascontiguousarray(sini, dtype=np.float64)
    L = np.ascontiguousarray(L, dtype=np.float64)
    M_left = np.empty_like(a)
    M_right = np.empty_like(a)
    flag = np.empty_like(a, dtype=np.int32)
    driver.contact_points(
        a, e, cosw, sinw, cosi, sini, L, M_left, M_right, flag
    )
    return M_left, M_right, flag
