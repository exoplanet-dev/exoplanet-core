# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core import core

try:
    import starry
except ImportError:
    starry = None

try:
    import batman
except ImportError:
    batman = None


@pytest.mark.skipif(starry is None, reason="starry is not installed")
def test_compare_starry():
    u1 = 0.2
    u2 = 0.3
    b = np.linspace(-1.5, 1.5, 100)
    r = 0.1 + np.zeros_like(b)

    m = starry.Map(udeg=2)
    m[1:] = [u1, u2]
    expected = m.flux(xo=b, ro=r[0]).eval() - 1

    computed = core.quad_limbdark_light_curve(u1, u2, b, r)
    np.testing.assert_allclose(computed, expected, atol=1e-12)


@pytest.mark.skipif(batman is None, reason="batman is not installed")
def test_compare_batman():
    u1 = 0.2
    u2 = 0.3
    b = np.linspace(-1.5, 1.5, 100)
    r = 0.1 + np.zeros_like(b)

    expected = batman._quadratic_ld._quadratic_ld(b, r[0], u1, u2, 1) - 1

    computed = core.quad_limbdark_light_curve(u1, u2, b, r)
    np.testing.assert_allclose(computed, expected, atol=1e-8)
