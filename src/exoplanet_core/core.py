# -*- coding: utf-8 -*-

__all__ = ["quad_limbdark_light_curve"]


import numpy as np

from .numpy import ops


def quad_limbdark_light_curve(u1, u2, b, r):
    c = np.asarray(
        [1 - u1 - 1.5 * u2, u1 + 2 * u2, -0.25 * u2],
        dtype=np.float64,
        order="C",
    )
    c /= np.pi * (c[0] + c[1] / 1.5)
    b = np.asarray(b, dtype=np.float64, order="C")
    r = np.asarray(r, dtype=np.float64, order="C")
    return np.dot(ops.quad_solution_vector(b, r), c) - 1
