# -*- coding: utf-8 -*-

import numpy as np

from exoplanet_core.numpy import ops
from exoplanet_core.testing import get_mean_and_true_anomaly


def test_kepler():
    e = np.linspace(0, 1, 500)[:-1]
    E = np.linspace(-300, 300, 1001)
    e = e[None, :] + np.zeros((len(E), len(e)))
    E = E[:, None] + np.zeros_like(e)
    M, f = get_mean_and_true_anomaly(e, E)
    cosf, sinf = ops.kepler(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)
