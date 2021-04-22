# -*- coding: utf-8 -*-

__all__ = ["get_mean_and_true_anomaly", "check_contact_points"]

import numpy as np

from .numpy.ops import kepler


def get_mean_and_true_anomaly(eccentricity, eccentric_anomaly):
    M = eccentric_anomaly - eccentricity * np.sin(eccentric_anomaly)
    f = 2 * np.arctan(
        np.sqrt((1 + eccentricity) / (1 - eccentricity))
        * np.tan(0.5 * eccentric_anomaly)
    )
    return M, f


def _get_b2(sinf, cosf, a, e, cosw, sinw, cosi, sini):
    e2 = e ** 2
    factor = (a * (e2 - 1) / (e * cosf + 1)) ** 2
    return factor * (
        cosi ** 2 * (cosw * sinf + sinw * cosf) ** 2
        + (cosw * cosf - sinw * sinf) ** 2
    )


def check_contact_points(func, L, a, b, e, w):
    target = L ** 2
    cosw = np.cos(w)
    sinw = np.sin(w)

    incl_factor = (1 + e * sinw) / (1 - e ** 2)
    cosi = incl_factor * b * L / a
    if np.abs(cosi) >= 1:
        return
    i = np.arccos(cosi)
    sini = np.sin(i)

    M1, M2, flag = func(a, e, cosw, sinw, cosi, sini, L)
    if np.any(flag):
        return

    sinf1, cosf1 = kepler(M1, e)
    sinf2, cosf2 = kepler(M2, e)

    fs = [(sinf1, cosf1), (sinf2, cosf2)]
    assert np.all(np.isfinite(fs))
    for sinf, cosf in fs:
        np.testing.assert_allclose(
            target,
            _get_b2(sinf, cosf, a, e, cosw, sinw, cosi, sini),
            atol=1e-5,
        )
