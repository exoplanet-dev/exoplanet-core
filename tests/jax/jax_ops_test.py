# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.numpy import ops as nops
from exoplanet_core.testing import (
    check_contact_points,
    get_mean_and_true_anomaly,
)

jax = pytest.importorskip("jax")
jnp = pytest.importorskip("jax.numpy")
ops = pytest.importorskip("exoplanet_core.jax.ops")

try:
    from jax.lib import xla_bridge
except ImportError:
    ON_GPU = False
else:
    ON_GPU = xla_bridge.get_backend().platform == "gpu"


def compare_to_numpy(nop, op, *args):
    expected = nop(*args)
    computed = op(*args)
    np.testing.assert_allclose(expected, computed)


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
    sinf, cosf = ops.kepler(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler_jit(kepler_data):
    M, e, f = kepler_data
    sinf, cosf = jax.jit(ops.kepler)(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler_grad(kepler_data):
    from jax.test_util import check_grads

    M, e, f = kepler_data
    m = (0.01 < e) & (e < 0.9)
    check_grads(lambda *args: ops.kepler(*args)[0], [M[m], e[m]], 2, eps=1e-6)
    check_grads(lambda *args: ops.kepler(*args)[1], [M[m], e[m]], 2, eps=1e-6)


@pytest.fixture
def limbdark_data():
    r = np.linspace(0.01, 1.5, 5)
    b = np.linspace(-1, 1, 500)[:, None] * (1 + r[None, :])
    return (b, r[None, :] + np.zeros_like(b))


def test_quad_solution_vector(limbdark_data):
    compare_to_numpy(
        nops.quad_solution_vector, ops.quad_solution_vector, *limbdark_data
    )


def test_quad_solution_vector_jit(limbdark_data):
    compare_to_numpy(
        nops.quad_solution_vector,
        jax.jit(ops.quad_solution_vector),
        *limbdark_data
    )


def test_quad_solution_vector_grad(limbdark_data):
    from jax.test_util import check_grads

    # The numerical estimate is bad at discontinuities
    eps = 1e-7
    b, r = limbdark_data
    m = np.abs(b) > 2 * eps
    m &= np.abs(np.abs(b) - (1 - r)) > 2 * eps
    m &= np.abs(np.abs(b) - (1 + r)) > 2 * eps

    check_grads(ops.quad_solution_vector, (b[m], r[m]), 1, eps=eps)


@pytest.mark.skipif(ON_GPU, reason="not implemented on GPU")
@pytest.mark.parametrize("a", [5.0, 12.1234, 20000.0])
@pytest.mark.parametrize("L", [0.7, 1.0, 1.5])
def test_contact_points(a, L):
    es = np.linspace(0, 1, 25)[:-1]
    ws = np.linspace(-np.pi, np.pi, 51)
    bs = np.linspace(0, 1 - 1e-5, 5)
    for bi, b in enumerate(bs):
        for ei, e in enumerate(es):
            for wi, w in enumerate(ws):
                check_contact_points(ops.contact_points, L, a, b, e, w)
