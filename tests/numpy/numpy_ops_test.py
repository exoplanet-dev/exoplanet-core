# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.numpy import ops
from exoplanet_core.testing import (
    check_contact_points,
    get_mean_and_true_anomaly,
)


def test_kepler():
    e = np.linspace(0, 1, 500)[:-1]
    E = np.linspace(-300, 300, 1001)
    e = e[None, :] + np.zeros((len(E), len(e)))
    E = E[:, None] + np.zeros_like(e)
    M, f = get_mean_and_true_anomaly(e, E)
    sinf, cosf = ops.kepler(M, e)
    assert np.all(np.isfinite(cosf))
    np.testing.assert_allclose(cosf, np.cos(f), atol=1e-7)
    assert np.all(np.isfinite(sinf))
    np.testing.assert_allclose(sinf, np.sin(f), atol=1e-7)


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
