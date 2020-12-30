# -*- coding: utf-8 -*-

from functools import partial

import numpy as np
import pytest

from exoplanet_core.testing import get_mean_and_true_anomaly

jax = pytest.importorskip("jax")
jnp = pytest.importorskip("jax.numpy")
theano = pytest.importorskip("theano")
tt = pytest.importorskip("theano.tensor")
ops = pytest.importorskip("exoplanet_core.theano.ops")

try:
    from theano.link.jax import JAXLinker
except ImportError:
    try:
        from theano.sandbox.jax_linker import JAXLinker
    except ImportError:
        pytest.skip("Theano-PyMC not installed", allow_module_level=True)


@pytest.fixture
def kepler_data():
    e = np.linspace(0, 1, 500)[:-1]
    E = np.linspace(-300, 300, 1001)
    e = e[None, :] + np.zeros((len(E), len(e)))
    E = E[:, None] + np.zeros_like(e)
    M, f = get_mean_and_true_anomaly(e, E)
    return M, e, f


@pytest.fixture
def limbdark_data():
    r = np.linspace(0.01, 1.5, 5)
    b = np.linspace(-1, 1, 500)[:, None] * (1 + r[None, :])
    return (b, r[None, :] + np.zeros_like(b))


def compare_theano_and_jax(
    fgraph,
    inputs,
    assert_fn=None,
    must_be_device_array=True,
):
    if assert_fn is None:
        assert_fn = partial(np.testing.assert_allclose, rtol=1e-4)

    opts = theano.gof.Query(include=[None], exclude=["cxx_only", "BlasOpt"])
    jax_mode = theano.compile.mode.Mode(JAXLinker(), opts)
    py_mode = theano.compile.Mode("py", opts)

    theano_jax_fn = theano.function(
        fgraph.inputs, fgraph.outputs, mode=jax_mode
    )
    jax_res = theano_jax_fn(*inputs)

    if must_be_device_array:
        if isinstance(jax_res, list):
            assert all(
                isinstance(res, jax.interpreters.xla.DeviceArray)
                for res in jax_res
            )
        else:
            assert isinstance(jax_res, jax.interpreters.xla.DeviceArray)

    theano_py_fn = theano.function(fgraph.inputs, fgraph.outputs, mode=py_mode)
    py_res = theano_py_fn(*inputs)

    if len(fgraph.outputs) > 1:
        for j, p in zip(jax_res, py_res):
            assert_fn(j, p)
    else:
        assert_fn(jax_res, py_res)

    return jax_res


def test_kepler(kepler_data):
    M = tt.dmatrix()
    e = tt.dmatrix()
    out_fg = theano.gof.FunctionGraph([M, e], ops.kepler(M, e))
    compare_theano_and_jax(out_fg, kepler_data[:2])


def test_quad_solution_vector(limbdark_data):
    b = tt.dmatrix()
    r = tt.dmatrix()
    out_fg = theano.gof.FunctionGraph([b, r], [ops.quad_solution_vector(b, r)])
    compare_theano_and_jax(out_fg, limbdark_data)


def test_contact_points():
    args = [tt.dvector() for _ in range(7)]

    N = 25
    L = 1.2 + np.zeros(N)
    a = 12.56 + np.zeros(N)
    e = np.linspace(0, 1, N)
    w = np.linspace(-np.pi, np.pi, N)
    b = np.linspace(0, 1 - 1e-5, N)

    cosw = np.cos(w)
    sinw = np.sin(w)
    incl_factor = (1 + e * sinw) / (1 - e ** 2)
    cosi = incl_factor * b * L / a
    i = np.arccos(cosi)
    sini = np.sin(i)

    out_fg = theano.gof.FunctionGraph(args, ops.contact_points(*args))
    compare_theano_and_jax(out_fg, [a, e, cosw, sinw, cosi, sini, L])
