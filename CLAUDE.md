# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

`exoplanet-core` is the compiled C++ backend for the [exoplanet](https://github.com/exoplanet-dev/exoplanet/) project. It provides three astronomical computations — Kepler's equation solver, quadratic limb-darkening solution vector, and orbital contact points — exposed through three Python interfaces: NumPy, JAX, and PyMC (v5+). PyMC3 (Theano-based) is also supported as a legacy interface.

## Build

The package uses `scikit-build-core` with `pybind11` to compile the C++ extension. To install for development:

```bash
pip install -e ".[test]"
# For optional backends:
pip install -e ".[test,jax]"
pip install -e ".[test,pymc]"
```

The build produces two shared libraries: `driver` (numpy/pymc backend) and `cpu_driver` (JAX backend). GPU (CUDA) support is opt-in via `EXOPLANET_CORE_CUDA=yes` environment variable at build time.

## Testing

Tests are run per-backend via nox sessions:

```bash
# Run all default tests (numpy ops)
python -m nox -s test

# Run a specific backend's tests
python -m nox -s test_jax
python -m nox -s test_pymc
python -m nox -s test_pymc3

# Run a single test file directly (after pip install -e .)
pytest tests/numpy_test.py
pytest tests/jax_test.py -v

# Run a single test
pytest tests/numpy_test.py::test_kepler
```

## Linting and formatting

```bash
# Format with black and isort (via pre-commit)
pre-commit run --all-files

# Or individually:
black src tests
isort src tests
```

Line length is 79. `black` and `isort` config is in `pyproject.toml`.

## Architecture

### Layer structure

```
C++ headers (src/exoplanet_core/lib/include/exoplanet/)
    ↓ compiled via pybind11
driver.so  (numpy/pymc)      cpu_driver.so  (JAX)
    ↓                              ↓
numpy/ops.py               jax/ops.py (JAX primitives with JVP/batching rules)
pymc/ops.py (pytensor Ops)
    ↓
core.py  (top-level convenience functions using numpy backend)
__init__.py  (re-exports kepler + quad_limbdark_light_curve from core.py)
```

### The three ops

All three interfaces (`exoplanet_core.numpy.ops`, `exoplanet_core.jax.ops`, `exoplanet_core.pymc.ops`) expose the same three functions:

- **`kepler(mean_anomaly, eccentricity)`** → `(sin_f, cos_f)`: Solves Kepler's equation and returns the sine/cosine of the true anomaly. All inputs must be `float64`.
- **`quad_solution_vector(b, r)`** → `s` of shape `(..., 3)`: Computes the Agol et al. (2020) solution vector for quadratic limb darkening.
- **`contact_points(a, e, cosw, sinw, cosi, sini, L)`** → `(M_left, M_right, flag)`: Finds orbital contact point mean anomalies; `flag != 0` means no transit.

### C++ core

`src/exoplanet_core/lib/include/exoplanet/` contains the header-only C++ implementations:
- `kepler.h`: Fast Kepler solver (Brandt et al.)
- `limbdark.h`: Quadratic limb-darkening solution vector with optional gradient output
- `contact_points.h`: Transit contact point solver
- `ellip.h`: Elliptic integral helpers

### JAX integration

`jax/ops.py` registers custom XLA primitives (`kepler_prim`, `quad_solution_vector_prim`, `contact_points_prim`) with JVP rules and batching rules. The `_lowering_rule` dispatches to CPU or CUDA XLA custom calls. The `quad_solution_vector` primitive internally returns `(s, dsdb, dsdr)` — the public `quad_solution_vector` function strips the gradient outputs.

### PyMC integration

`pymc/ops.py` defines pytensor `Op` subclasses (`Kepler`, `QuadSolutionVector`, `ContactPoints`) with `perform`, `grad`, and `R_op` methods. These wrap the same `driver` shared library as the numpy ops. `pymc/jax_support.py` bridges the pytensor ops to JAX when using PyMC with a JAX backend.

### Version

Version is managed by `setuptools_scm` from git tags and written to `src/exoplanet_core/exoplanet_core_version.py` at build time (this file is not in the repo but is included in sdists).
