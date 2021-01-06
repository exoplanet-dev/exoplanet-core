#!/usr/bin/env python

# Inspired by:
# https://hynek.me/articles/sharing-your-labor-of-love-pypi-quick-and-dirty/

import codecs
import os
import re

from pybind11.setup_helpers import Pybind11Extension, build_ext
from setuptools import find_packages, setup

# PROJECT SPECIFIC

NAME = "exoplanet_core"
PACKAGES = find_packages(where="src")
META_PATH = os.path.join("src", "exoplanet_core", "__init__.py")
CLASSIFIERS = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "Intended Audience :: Science/Research",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
    "Programming Language :: Python",
    "Programming Language :: Python :: 3",
]
INSTALL_REQUIRES = ["numpy>=1.13.0"]
EXTRA_REQUIRE = {
    "test": ["pytest", "pytest-cov>=2.6.1"],
    "benchmark": [
        "pytest",
        "pytest-benchmark",
        "radvel",
        "kepler.py",
        "batman-package",
        "exoplanet==0.4.3",
    ],
}


# END PROJECT SPECIFIC

# CMAKE INTERFACE


include_dirs = ["src/exoplanet_core/lib/include"]
ext_modules = [
    Pybind11Extension(
        "exoplanet_core.driver",
        ["src/exoplanet_core/driver.cpp"],
        include_dirs=include_dirs,
        language="c++",
    ),
    Pybind11Extension(
        "exoplanet_core.jax.cpu_driver",
        ["src/exoplanet_core/jax/cpu_driver.cpp"],
        include_dirs=include_dirs + ["src/exoplanet_core/jax"],
        language="c++",
    ),
]

# END CMAKE INTERFACE

HERE = os.path.dirname(os.path.realpath(__file__))


def read(*parts):
    with codecs.open(os.path.join(HERE, *parts), "rb", "utf-8") as f:
        return f.read()


def find_meta(meta, meta_file=read(META_PATH)):
    meta_match = re.search(
        r"^__{meta}__ = ['\"]([^'\"]*)['\"]".format(meta=meta), meta_file, re.M
    )
    if meta_match:
        return meta_match.group(1)
    raise RuntimeError("Unable to find __{meta}__ string.".format(meta=meta))


if __name__ == "__main__":
    setup(
        name=NAME,
        author=find_meta("author"),
        author_email=find_meta("email"),
        maintainer=find_meta("author"),
        maintainer_email=find_meta("email"),
        url=find_meta("uri"),
        license=find_meta("license"),
        description=find_meta("description"),
        long_description=read("README.md"),
        long_description_content_type="text/markdown",
        packages=PACKAGES,
        package_dir={"": "src"},
        include_package_data=True,
        install_requires=INSTALL_REQUIRES,
        extras_require=EXTRA_REQUIRE,
        classifiers=CLASSIFIERS,
        zip_safe=False,
        ext_modules=ext_modules,
        cmdclass={"build_ext": build_ext},
    )
