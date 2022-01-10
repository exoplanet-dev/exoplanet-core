# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core import core


def test_compare_starry():
    starry = pytest.importorskip("starry")
    u1 = 0.2
    u2 = 0.3
    b = np.linspace(-1.5, 1.5, 100)
    r = 0.1 + np.zeros_like(b)

    m = starry.Map(udeg=2)
    m[1:] = [u1, u2]
    expected = m.flux(xo=b, ro=r[0]).eval() - 1

    computed = core.quad_limbdark_light_curve(u1, u2, b, r)
    np.testing.assert_allclose(computed, expected, atol=1e-12)


def test_compare_batman():
    batman = pytest.importorskip("batman")
    u1 = 0.2
    u2 = 0.3
    b = np.linspace(-1.5, 1.5, 100)
    r = 0.1 + np.zeros_like(b)

    expected = batman._quadratic_ld._quadratic_ld(b, r[0], u1, u2, 1) - 1

    computed = core.quad_limbdark_light_curve(u1, u2, b, r)
    np.testing.assert_allclose(computed, expected, atol=1e-8)
