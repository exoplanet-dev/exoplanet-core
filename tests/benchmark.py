# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core import core
from exoplanet_core.numpy import ops

try:
    import kepler
except ImportError:
    kepler = None

try:
    import radvel
except ImportError:
    radvel = None

try:
    import exoplanet
except ImportError:
    exoplanet = None
else:
    from packaging import version

    if version.parse(exoplanet.__version__) != version.parse("0.4.5"):
        exoplanet = None

try:
    import starry
except ImportError:
    starry = None

try:
    import batman
except ImportError:
    batman = None


@pytest.fixture(scope="module", params=[0.0, 0.25, 0.5, 0.75, 0.95])
def kepler_args(request):
    N = 10000
    return np.linspace(-100, 100, N), request.param + np.zeros(N)


@pytest.mark.benchmark(group="kepler")
def test_numpy_kepler_benchmark(benchmark, kepler_args):
    benchmark(ops.kepler, *kepler_args)


@pytest.mark.skipif(kepler is None, reason="kepler.py is not installed")
@pytest.mark.benchmark(group="kepler")
def test_kepler_dot_py_kepler_benchmark(benchmark, kepler_args):
    benchmark(kepler.kepler, *kepler_args)


@pytest.mark.skipif(radvel is None, reason="radvel is not installed")
@pytest.mark.benchmark(group="kepler")
def test_radvel_kepler_benchmark(benchmark, kepler_args):
    M, ecc = kepler_args
    ecc = ecc[0]

    @benchmark
    def _radvel_kepler():
        E = radvel._kepler.kepler_array(M, ecc)
        cosE, sinE = np.cos(E), np.sin(E)
        denom = 1 + cosE
        tanf2 = np.sqrt((1 + ecc) / (1 - ecc)) * sinE / denom
        tanf2_2 = tanf2 * tanf2
        denom = 1 / (1 + tanf2_2)
        cosf = (1 - tanf2_2) * denom
        sinf = 2 * tanf2 * denom
        return sinf, cosf


@pytest.fixture(scope="module", params=[0.01, 0.1, 0.9])
def limbdark_args(request):
    N = 10000
    u1 = 0.2
    u2 = 0.3
    b = np.linspace(-1.0 - request.param, 1.0 + request.param, N)
    r = request.param + np.zeros_like(b)
    return u1, u2, b, r


@pytest.mark.benchmark(group="limbdark")
def test_quad_limbdark_benchmark(benchmark, limbdark_args):
    benchmark(core.quad_limbdark_light_curve, *limbdark_args)


@pytest.mark.skipif(exoplanet is None, reason="old exoplanet is not installed")
@pytest.mark.benchmark(group="limbdark")
def test_quad_limbdark_exoplanet_benchmark(benchmark, limbdark_args):
    u1, u2, b, r = limbdark_args
    ld = exoplanet.theano_ops.driver.SimpleLimbDark()

    @benchmark
    def _exoplanet():
        ld.set_u([-1, u1, u2])
        return ld.apply(b, r)


@pytest.mark.skipif(starry is None, reason="starry is not installed")
@pytest.mark.benchmark(group="limbdark", warmup=True)
def test_quad_limbdark_starry_benchmark(benchmark, limbdark_args):
    import aesara_theano_fallback.tensor as tt
    from aesara_theano_fallback import aesara

    u1, u2, b, r = limbdark_args
    args = (u1, u2, b, r[0])

    u1_ = tt.dscalar()
    u2_ = tt.dscalar()
    b_ = tt.dvector()
    r_ = tt.dscalar()
    m = starry.Map(udeg=2)
    m[1] = u1_
    m[2] = u2_
    func = aesara.function([u1_, u2_, b_, r_], m.flux(xo=b_, ro=r_) - 1)
    func(*args)
    benchmark(func, *args)


@pytest.mark.skipif(batman is None, reason="batman is not installed")
@pytest.mark.benchmark(group="limbdark")
def test_quad_limbdark_batman_benchmark(benchmark, limbdark_args):
    u1, u2, b, r = limbdark_args

    @benchmark
    def _batman():
        return batman._quadratic_ld._quadratic_ld(b, r[0], u1, u2, 1) - 1
