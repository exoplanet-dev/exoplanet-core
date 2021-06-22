<p align="center">
  <img width="240" src="https://raw.githubusercontent.com/exoplanet-dev/exoplanet/main/docs/_static/logo.png">
  <br><br>
  <a href="https://github.com/exoplanet-dev/exoplanet-core/actions/workflows/tests.yml">
    <img src="https://github.com/exoplanet-dev/exoplanet-core/actions/workflows/tests.yml/badge.svg" alt="Tests">
  </a>
</p>

# exoplanet-core

This repository contains the compiled components for the
[exoplanet](https://github.com/exoplanet-dev/exoplanet/) project, with
implementations for NumPy, JAX, and PyMC3. Most users probably won't install or
interact with `exoplanet-core` directly, instead using it via
[exoplanet](https://docs.exoplanet.codes) itself. However, there are a few
reasons why you might be here:

1. You want to evaluate a quadratically limb darkened light curve or solve
   Kepler's equation in numpy, JAX, or PyMC3, using fast and well-tested code.
2. You might have found an issue with one of the compiled ops for `exoplanet`
   and want to [report](https://github.com/exoplanet-dev/exoplanet-core/issues)
   or [fix](https://github.com/exoplanet-dev/exoplanet-core/pulls) it.
3. You might be looking to build a better alternative to `exoplanet`.

All of these are excellent reasons to be here, so welcome!

## Motivation

This library is developed separately from the `exoplanet` codebase for several
reasons, but the main one is that the code in this repo needs to change at a
less frequent cadence than the main exoplanet modeling code and there is some
cost associated with re-compiling the backend. I'm hoping that this separation
will make it easier for people to contribute to the exoplanet project without
dealing with compilation issues. This also means that some users can use just
the computational components here without the heavy dependencies required by the
exoplanet project. This might be useful, for example, for people who just want a
high performance solver for Kepler's equation or fast quadratically
limb-darkened light curves.

## Installation

The best way to install `exoplanet-core` is using [pip](https://pip.pypa.io):

```bash
python -m pip install exoplanet-core
```

By default this will only install the `numpy` ops and its dependencies (only
`numpy` itself). So if you want to install the dependencies for the `jax` or
`pymc` versions, you can run:

```bash
python -m pip install "exoplanet-core[jax]"
# or
python -m pip install "exoplanet-core[pymc]"
```

You can also install `exoplanet-core` using [conda](https://docs.conda.io) from
`conda-forge`:

```bash
conda install -c conda-forge exoplanet-core
```

## Usage

If you're developing new ops or fixing existing ones, you'll probably want to
skip to the next section, but if you just want to solve Kepler's equation or
compute a limb darkened light curve, you can use the following snippets.

To solve Kepler's equation and compute the true anomaly for an array of
eccentricities:

```python
from exoplanet_core import kepler

ecc = 0.3
M = # compute the mean anomaly as a function of time for your measurements

sinf, cosf = kepler(M, ecc)

# Use the true anomaly to evaluate your model
```

To compute the relative flux for a quadratically limb darkened light curve at
some projected center-to-center distance `b` and radius ratio `ror`:

```python
from exoplanet_core import quad_limbdark_light_curve

u1, u2 = 0.3, 0.2
ror = 0.05
b = # Compute the impact parameter as a function of time
flux = quad_limbdark_light_curve(u1, u2, b, ror)
```

where `u1` and `u2` are the usual limb darkening parameters and the resulting
flux is in relative units where `0` is the unocculted flux. Some other
implementations that you might be familiar with return this value plus one.

## API Reference

`exoplanet-core` currently provides three ops, but only two are intended for
general consumption: `kepler` and `quad_solution_vector`. The three interfaces
(`numpy`, `jax`, and `pymc`) are designed to have the same API, so you can
import them interchangeably as:

```python
from exoplanet_core.{interface} import ops
```

where `{interface}` is `numpy`, `jax`, or `pymc`.

#### `kepler`

```python
sin_true_anomaly, cos_true_anomaly = ops.kepler(mean_anomaly, eccentricity)
```

Solve Kepler's equation and convert to the true anomaly using a fast method
(Brandt et al., in prep) that gives nearly machine precision across the full
valid parameter range.

| Parameter      | Type    | Description                             |
| :------------- | :------ | :-------------------------------------- |
| `mean_anomaly` | `array` | This does not need to be range reduced. |
| `eccentricity` | `array` | Must be in the range `[0, 1)`.          |

| Returns            | Type    | Description                             |
| :----------------- | :------ | :-------------------------------------- |
| `sin_true_anomaly` | `array` | The sine and cosine of the true anomaly |
| `cos_true_anomaly` | `array` | evaluated at the input coordinates.     |

#### `quad_solution_vector`

```python
soln = ops.quad_solution_vector(impact_parameter, radius_ratio)
```

Compute the "solution vector" as defined by [Agol et al.
(2020)](https://arxiv.org/abs/1908.03222) for a quadratically limb darkened
light curve. This can then be dotted into a vector of coefficients (a function
of the usual limb darkening parameters) to compute the integrated flux.

| Parameter          | Type    | Description                                        |
| :----------------- | :------ | :------------------------------------------------- |
| `impact_parameter` | `array` | The projected center to center distance.           |
| `radius_ratio`     | `array` | The radius of the occulter in units of the target. |

| Returns | Type    | Description                                               |
| :------ | :------ | :-------------------------------------------------------- |
| `soln`  | `array` | The quadratic solution vector at each `impact_parameter`. |
