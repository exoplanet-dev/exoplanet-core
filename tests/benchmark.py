# -*- coding: utf-8 -*-

import numpy as np
import pytest

from exoplanet_core.numpy import ops

try:
    import kepler
except ImportError:
    kepler = None


try:
    import radvel
except ImportError:
    radvel = None


@pytest.fixture(scope="module", params=[0.0, 0.25, 0.5, 0.75, 0.95])
def args(request):
    N = 10000
    return (np.linspace(-100, 100, N), request.param + np.zeros(N))


def test_numpy_kepler_benchmark(benchmark, args):
    benchmark(ops.kepler, *args)


@pytest.mark.skipif(kepler is None, reason="kepler.py is not installed")
def test_kepler_dot_py_kepler_benchmark(benchmark, args):
    benchmark(kepler.kepler, *args)


@pytest.mark.skipif(kepler is None, reason="radvel is not installed")
def test_radvel_kepler_benchmark(benchmark, args):
    M, ecc = args
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
        return cosf, sinf
