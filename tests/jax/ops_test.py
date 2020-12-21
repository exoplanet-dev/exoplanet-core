# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.testing import get_mean_and_true_anomaly

jax = pytest.importorskip("jax")
jnp = pytest.importorskip("jax.numpy")
ops = pytest.importorskip("exoplanet_core.jax.ops")


@pytest.fixture
def kepler_data():
    e = jnp.linspace(0, 1, 500)[:-1]
    E = jnp.linspace(-300, 300, 1001)
    e = e[None, :] + jnp.zeros((len(E), len(e)))
    E = E[:, None] + jnp.zeros_like(e)
    M, f = get_mean_and_true_anomaly(e, E)
    return M, e, f


def test_kepler(kepler_data):
    M, e, f = kepler_data
    cosf, sinf = ops.kepler(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler_jit(kepler_data):
    M, e, f = kepler_data
    cosf, sinf = jax.jit(ops.kepler)(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler_grad(kepler_data):
    from jax.test_util import check_grads

    M, e, f = kepler_data
    m = (0.01 < e) & (e < 0.9)
    check_grads(ops.kepler, [M[m], e[m]], 2, eps=1e-6)
