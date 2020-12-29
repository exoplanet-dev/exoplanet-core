This repository contains the compiled components for the [exoplanet](https://github.com/exoplanet-dev/exoplanet/) project.
They are being developed here for several reasons, but the main one is that the code in this repo needs to change at a less frequent cadence than the main exoplanet modeling code and there is some cost associated with re-compiling the backend.
I'm hoping that this separation will make it easier for people to contribute to the exoplanet project without dealing with compilation issues.
This also means that some users can use just the computational components here without the heavy dependencies required by the exoplanet project.
This might be useful, for example, for people who just want a high performance solver for Kepler's equation or fast quadratically limb-darkened light curves.

[See benchmarks](https://exoplanet-dev.github.io/exoplanet-core/dev/bench/)
