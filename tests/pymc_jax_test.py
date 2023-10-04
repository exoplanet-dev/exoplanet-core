from functools import partial

import numpy as np
import pytest

from exoplanet_core.testing import get_mean_and_true_anomaly

jax = pytest.importorskip("jax")
pytensor = pytest.importorskip("pytensor")
ops = pytest.importorskip("exoplanet_core.pymc.ops")


try:
    import pytensor.tensor as at
    from pytensor.compile.mode import Mode
    from pytensor.compile.sharedvalue import SharedVariable
    from pytensor.graph.fg import FunctionGraph
    from pytensor.graph.rewriting.db import RewriteDatabaseQuery
    from pytensor.link.jax import JAXLinker
except ImportError:
    pass
else:
    opts = RewriteDatabaseQuery(
        include=[None], exclude=["cxx_only", "BlasOpt"]
    )
    jax_mode = Mode(JAXLinker(), opts)
    py_mode = Mode("py", opts)


def compare_jax_and_py(
    fgraph, test_inputs, assert_fn=None, must_be_device_array=True
):
    if assert_fn is None:
        assert_fn = partial(np.testing.assert_allclose, rtol=1e-4)

    fn_inputs = [i for i in fgraph.inputs if not isinstance(i, SharedVariable)]
    pytensor_jax_fn = pytensor.function(
        fn_inputs, fgraph.outputs, mode=jax_mode
    )
    jax_res = pytensor_jax_fn(*test_inputs)

    pytensor_py_fn = pytensor.function(fn_inputs, fgraph.outputs, mode=py_mode)
    py_res = pytensor_py_fn(*test_inputs)

    if len(fgraph.outputs) > 1:
        for j, p in zip(jax_res, py_res):
            assert_fn(j, p)
    else:
        assert_fn(jax_res, py_res)

    return jax_res


@pytest.fixture
def kepler_data():
    e = np.linspace(0, 1, 500)[:-1]
    E = np.linspace(-300, 300, 1001)
    e = e[None, :] + np.zeros((len(E), len(e)))
    E = E[:, None] + np.zeros_like(e)
    M, f = get_mean_and_true_anomaly(e, E)
    return M, e, f


def test_kepler(kepler_data):
    M = at.tensor(
        dtype=pytensor.config.floatX, shape=[False] * kepler_data[0].ndim
    )
    e = at.tensor(
        dtype=pytensor.config.floatX, shape=[False] * kepler_data[1].ndim
    )
    fg = FunctionGraph([M, e], ops.kepler(M, e))
    compare_jax_and_py(fg, kepler_data[:2])


@pytest.fixture
def limbdark_data():
    r = np.linspace(0.01, 1.5, 5)
    b = np.linspace(-1, 1, 500)[:, None] * (1 + r[None, :])
    return (b, r[None, :] + np.zeros_like(b))


def test_quad_solution_vector(limbdark_data):
    b = pytensor.tensor.matrix()
    r = pytensor.tensor.matrix()
    fg = FunctionGraph([b, r], [ops.quad_solution_vector(b, r)])
    compare_jax_and_py(fg, limbdark_data)


def test_contact_points():
    args = [pytensor.tensor.scalar() for _ in range(7)]
    out = ops.contact_points(*args)
    fg = FunctionGraph(args, out)

    L = 0.7
    a = 12.1234
    b = 0.6
    e = 0.1
    w = -0.3
    cosw = np.cos(w)
    sinw = np.sin(w)
    incl_factor = (1 + e * sinw) / (1 - e**2)
    cosi = incl_factor * b * L / a
    if np.abs(cosi) >= 1:
        return
    i = np.arccos(cosi)
    sini = np.sin(i)

    compare_jax_and_py(fg, [a, e, cosw, sinw, cosi, sini, L])
