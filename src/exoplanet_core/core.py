# -*- coding: utf-8 -*-

__all__ = ["quad_limbdark_light_curve", "kepler"]

import numpy as np

from .numpy import ops


def get_cl(u1, u2):
    c = np.array([1 - u1 - 1.5 * u2, u1 + 2 * u2, -0.25 * u2])
    c /= np.pi * (c[0] + c[1] / 1.5)
    return c


def custom_broadcast_arrays(*arrays):
    b = np.broadcast(*arrays)
    return tuple(
        np.ascontiguousarray(np.broadcast_to(a, b.shape), dtype=np.float64)
        for a in arrays
    )


def quad_limbdark_light_curve(u1, u2, b, r):
    b, r = custom_broadcast_arrays(b, r)
    c = get_cl(float(u1), float(u2))
    return np.dot(ops.quad_solution_vector(b, r), c) - 1


def kepler(mean_anomaly, eccentricity):
    mean_anomaly, eccentricity = custom_broadcast_arrays(
        mean_anomaly, eccentricity
    )
    return ops.kepler(mean_anomaly, eccentricity)
