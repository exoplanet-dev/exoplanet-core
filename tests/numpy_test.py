# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.numpy import ops
from exoplanet_core.testing import (
    check_contact_points,
    get_mean_and_true_anomaly,
)


def check_kepler(e, E):
    M, f = get_mean_and_true_anomaly(e, E)
    sinf, cosf = ops.kepler(M, e)
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


def test_kepler_edge():
    E = np.array([0.0, 2 * np.pi, -226.2, -170.4])
    e = (1 - 1e-6) * np.ones_like(E)
    e[-1] = 0.9939879759519037
    check_kepler(e, E)

    e = np.linspace(0, 1.0, 100)[:-1]
    E = np.pi + np.zeros_like(e)
    check_kepler(e, E)

    E = 2 * np.pi + np.zeros_like(e)
    check_kepler(e, E)


@pytest.mark.parametrize("a", [5.0, 12.1234, 100.0, 1000.0, 20000.0])
@pytest.mark.parametrize("L", [0.7, 0.9, 1.0, 1.1, 1.5])
def test_contact_points(a, L):
    es = np.linspace(0, 1, 25)[:-1]
    ws = np.linspace(-np.pi, np.pi, 51)
    bs = np.linspace(0, 1 - 1e-5, 5)
    for bi, b in enumerate(bs):
        for ei, e in enumerate(es):
            for wi, w in enumerate(ws):
                check_contact_points(ops.contact_points, L, a, b, e, w)


def test_contact_points_shape_exception():
    args = [
        np.array(16.38049484),
        np.array([0.0002, 0.0002]),
        np.array([0.70710678, 0.70710678]),
        np.array([0.70710678, 0.70710678]),
        np.array([0.04579264, 0.04579264]),
        np.array([0.99895097, 0.99895097]),
        np.array([1.51741758]),
    ]

    with pytest.raises(ValueError):
        ops.contact_points(*args)


@pytest.mark.parametrize("r", [0.01, 0.05, 0.1, 0.3, 0.5, 0.7, 0.9, 1.2])
def test_quad_solution_vector_continuous_at_b_equals_r(r):
    # The special case b == r is taken for |b - r| <= eps; the solution vector
    # must be continuous across it, from both sides.
    eps = np.finfo(float).eps
    b = r + np.arange(-64, 65) * np.spacing(r)
    b = b[np.abs(b - r) <= 4 * eps]
    s = ops.quad_solution_vector(b, r + np.zeros_like(b))
    s0 = ops.quad_solution_vector(np.array([r]), np.array([r]))
    np.testing.assert_allclose(s, np.broadcast_to(s0, s.shape), atol=1e-10)
