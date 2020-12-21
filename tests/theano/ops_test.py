# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.testing import get_mean_and_true_anomaly

theano = pytest.importorskip("theano")
ops = pytest.importorskip("exoplanet_core.theano.ops")


@pytest.fixture
def kepler_data():
    e = np.linspace(0, 1, 500)[:-1]
    E = np.linspace(-300, 300, 1001)
    e = e[None, :] + np.zeros((len(E), len(e)))
    E = E[:, None] + np.zeros_like(e)
    M, f = get_mean_and_true_anomaly(e, E)
    return M, e, f


def test_kepler(kepler_data):
    M, e, f = kepler_data
    cosf, sinf = theano.function([], ops.kepler(M, e))()
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler_grad(kepler_data):
    M, e, f = kepler_data
    np.random.seed(1324)
    ind = 100
    theano.tensor.verify_grad(
        lambda *x: ops.kepler(*x)[0],
        [M[:, ind], e[:, ind]],
        rng=np.random,
        eps=1e-8,
    )
