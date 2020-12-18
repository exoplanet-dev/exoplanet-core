# -*- coding: utf-8 -*-

import numpy as np

from exoplanet_core.numpy import ops


def get_M_and_f(e, E):
    M = E - e * np.sin(E)
    f = 2 * np.arctan(np.sqrt((1 + e) / (1 - e)) * np.tan(0.5 * E))
    return M, f


def check_kepler(e, E):
    M, f = get_M_and_f(e, E)
    cosf, sinf = ops.kepler(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler():
    e = np.linspace(0, 1, 500)[:-1]
    E = np.linspace(-300, 300, 1001)
    e = e[None, :] + np.zeros((len(E), len(e)))
    E = E[:, None] + np.zeros_like(e)
    check_kepler(e, E)


def test_kepler_edge_cases():
    E = np.array([0.0, 2 * np.pi, -226.2, -170.4])
    e = (1 - 1e-6) * np.ones_like(E)
    e[-1] = 0.9939879759519037
    check_kepler(e, E)


def test_kepler_at_pi():
    e = np.linspace(0, 1.0, 100)[:-1]
    E = np.pi + np.zeros_like(e)
    check_kepler(e, E)
