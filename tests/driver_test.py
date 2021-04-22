# -*- coding: utf-8 -*-

import numpy as np

from exoplanet_core import driver
from exoplanet_core.testing import get_mean_and_true_anomaly


def check_kepler(e, E):
    M, f = get_mean_and_true_anomaly(e, E)
    cosf0, sinf0 = np.nan + np.zeros_like(M), np.nan + np.zeros_like(M)
    driver.solve_kepler(M, e, sinf0, cosf0)
    assert np.all(np.isfinite(cosf0))
    np.testing.assert_allclose(cosf0, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf0))
    np.testing.assert_allclose(sinf0, np.sin(f), atol=1e-7)


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
