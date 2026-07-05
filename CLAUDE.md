# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

`exoplanet-core` is the compiled C++ backend for the [exoplanet](https://github.com/exoplanet-dev/exoplanet/) project. It provides three astronomical computations — Kepler's equation solver, quadratic limb-darkening solution vector, and orbital contact points — exposed through three Python interfaces: NumPy, JAX, and PyMC (v5+). Legacy PyMC3 (Theano-based) code remains in the tree (`src/exoplanet_core/pymc3/`, `tests/pymc3_test.py`) but is unsupported: there is no installable extra for it and it is not tested in CI.

Requires Python >= 3.12; the JAX interface requires `jax >= 0.5.0`.

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

Tests are run per-backend with `uv run` and the matching extras (this is what CI does; tests for backends that aren't installed are skipped via `importorskip`):

```bash
# Run all default tests (numpy ops)
uv run --extra test pytest tests

# Run a specific backend's tests
uv run --extra test --extra jax pytest tests/jax_test.py
uv run --extra test --extra pymc pytest tests/pymc_test.py
uv run --extra test --extra pymc --extra jax pytest tests/pymc_jax_test.py

# Run a single test
uv run --extra test pytest tests/numpy_test.py::test_kepler
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
numpy/ops.py               jax/ops.py (jax.ffi calls with custom_jvp rules)
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

The JAX interface is built on the [JAX FFI](https://docs.jax.dev/en/latest/ffi.html). `cpu_driver.cpp` (and `cuda_kernels.cc.cu` for GPU) define typed XLA FFI handlers with `XLA_FFI_DEFINE_HANDLER_SYMBOL` and expose them to Python as capsules via a pybind11 `registrations()` dict. `jax/ops.py` registers those handlers with `jax.ffi.register_ffi_target` (target names prefixed `exoplanet_core_`, CPU and CUDA registered under the same names on different platforms) and invokes them with `jax.ffi.ffi_call(..., vmap_method="broadcast_all")`. Derivatives are defined with `jax.custom_jvp`: `kepler` supports higher-order differentiation; `quad_solution_vector` is first-order only (its JVP calls the base FFI op, which has no JVP of its own). The base `quad_solution_vector` FFI call returns `(s, dsdb, dsdr)` — the public function strips the gradient outputs, and the JVP rule uses them.

The XLA FFI headers (`xla/ffi/api/`) are vendored in `src/exoplanet_core/lib/vendor/` (see the README there for how to refresh them), so jax/jaxlib is not needed at build time.

The CUDA handlers are compile-untested on this machine (no CUDA); GPU builds remain opt-in via `EXOPLANET_CORE_CUDA=yes`.

### PyMC integration

`pymc/ops.py` defines pytensor `Op` subclasses (`Kepler`, `QuadSolutionVector`, `ContactPoints`) with `perform`, `grad`, and `R_op` methods. These wrap the same `driver` shared library as the numpy ops. `pymc/jax_support.py` bridges the pytensor ops to JAX when using PyMC with a JAX backend.

### Version

Version is managed by `setuptools_scm` from git tags and written to `src/exoplanet_core/exoplanet_core_version.py` at build time (this file is not in the repo but is included in sdists).
