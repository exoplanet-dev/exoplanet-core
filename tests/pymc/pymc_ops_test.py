# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.numpy import ops as nops
from exoplanet_core.testing import (
    check_contact_points,
    get_mean_and_true_anomaly,
)

aesara = pytest.importorskip("aesara_theano_fallback.aesara")
ops = pytest.importorskip("exoplanet_core.pymc.ops")


def compare_to_numpy(nop, op, *args):
    expected = nop(*args)
    computed = op(*args)
    np.testing.assert_allclose(expected, computed)


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
    sinf, cosf = aesara.function([], ops.kepler(M, e))()
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


def test_kepler_grad(kepler_data):
    M, e, f = kepler_data
    np.random.seed(1324)
    ind = 100
    aesara.tensor.verify_grad(
        lambda *x: ops.kepler(*x)[0],
        [M[:, ind], e[:, ind]],
        rng=np.random,
        eps=1e-8,
    )
    aesara.tensor.verify_grad(
        lambda *x: ops.kepler(*x)[1],
        [M[:, ind], e[:, ind]],
        rng=np.random,
        eps=1e-8,
    )


@pytest.fixture
def limbdark_data():
    r = np.linspace(0.01, 1.5, 5)
    b = np.linspace(-1, 1, 500)[:, None] * (1 + r[None, :])
    return (b, r[None, :] + np.zeros_like(b))


def test_quad_solution_vector(limbdark_data):
    b_ = aesara.tensor.dmatrix()
    r_ = aesara.tensor.dmatrix()
    func = aesara.function([b_, r_], ops.quad_solution_vector(b_, r_))
    compare_to_numpy(nops.quad_solution_vector, func, *limbdark_data)


def test_quad_solution_vector_grad(limbdark_data):
    # The numerical estimate is bad at discontinuities
    eps = 1e-7
    b, r = limbdark_data
    m = np.abs(b) > 2 * eps
    m &= np.abs(np.abs(b) - (1 - r)) > 2 * eps
    m &= np.abs(np.abs(b) - (1 + r)) > 2 * eps

    aesara.tensor.verify_grad(
        ops.quad_solution_vector, (b[m], r[m]), rng=np.random, eps=eps
    )


@pytest.mark.parametrize("a", [5.0, 12.1234, 20000.0])
@pytest.mark.parametrize("L", [0.7, 1.0, 1.5])
def test_contact_points(a, L):
    args = [aesara.tensor.dscalar() for _ in range(7)]
    func = aesara.function(args, ops.contact_points(*args))

    es = np.linspace(0, 1, 25)[:-1]
    ws = np.linspace(-np.pi, np.pi, 51)
    bs = np.linspace(0, 1 - 1e-5, 5)
    for bi, b in enumerate(bs):
        for ei, e in enumerate(es):
            for wi, w in enumerate(ws):
                check_contact_points(func, L, a, b, e, w)
