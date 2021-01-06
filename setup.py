#!/usr/bin/env python

# Inspired by:
# https://hynek.me/articles/sharing-your-labor-of-love-pypi-quick-and-dirty/

import codecs
import distutils.sysconfig
import os
import platform
import re
import subprocess
import sys

from setuptools import find_packages, setup

sys.path.insert(0, "pybind11")

from pybind11.setup_helpers import (  # noqa isort:skip
    Pybind11Extension,
    build_ext,
)

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
SETUP_REQUIRES = [
    "setuptools>=42",
    "wheel",
    "setuptools_scm[toml]>=3.4",
    "pybind11[global]>=2.6",
    "cmake",
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


class CMakeBuild(build_ext):
    def build_extension(self, ext):
        if not (hasattr(ext, "target_name") and hasattr(ext, "source_dir")):
            return build_ext.build_extension(self, ext)

        extdir = os.path.abspath(
            os.path.dirname(self.get_ext_fullpath(ext.name))
        )

        # required for auto-detection of auxiliary "native" libs
        if not extdir.endswith(os.path.sep):
            extdir += os.path.sep

        # From PyTorch
        if platform.system() == "Windows":
            cmake_python_library = "{}/libs/python{}.lib".format(
                distutils.sysconfig.get_config_var("prefix"),
                distutils.sysconfig.get_config_var("VERSION"),
            )
            # Fix virtualenv builds
            if not os.path.exists(cmake_python_library):
                cmake_python_library = "{}/libs/python{}.lib".format(
                    sys.base_prefix,
                    distutils.sysconfig.get_config_var("VERSION"),
                )
        else:
            cmake_python_library = "{}/{}".format(
                distutils.sysconfig.get_config_var("LIBDIR"),
                distutils.sysconfig.get_config_var("INSTSONAME"),
            )
        cmake_python_include_dir = distutils.sysconfig.get_python_inc()

        cmake_args = [
            "-DCMAKE_LIBRARY_OUTPUT_DIRECTORY={}".format(extdir),
            "-DPython_EXECUTABLE={}".format(sys.executable),
            "-DPython_LIBRARIES={}".format(cmake_python_library),
            "-DPython_INCLUDE_DIRS={}".format(cmake_python_include_dir),
            "-DVERSION_INFO={}".format(self.distribution.get_version()),
            "-DCMAKE_BUILD_TYPE={}".format(
                "Debug" if self.debug else "Release"
            ),
        ]
        build_args = []

        if not os.path.exists(self.build_temp):
            os.makedirs(self.build_temp)
        subprocess.check_call(
            ["cmake", ext.source_dir] + cmake_args, cwd=self.build_temp
        )
        subprocess.check_call(
            ["cmake", "--build", ".", "--target", ext.target_name]
            + build_args,
            cwd=self.build_temp,
        )


class CMakeExtension(Pybind11Extension):
    def __init__(self, name, source_dir, target_name, *args, **kwargs):
        Pybind11Extension.__init__(self, name, *args, **kwargs)
        self.source_dir = os.path.abspath(source_dir)
        self.target_name = target_name


include_dirs = ["src/exoplanet_core/lib/include"]
ext_modules = [
    CMakeExtension(
        "exoplanet_core.driver",
        "src",
        "driver",
        ["src/exoplanet_core/driver.cpp"],
        include_dirs=include_dirs,
    ),
    CMakeExtension(
        "exoplanet_core.jax.cpu_driver",
        "src",
        "cpu_driver",
        ["src/exoplanet_core/jax/cpu_driver.cpp"],
        include_dirs=include_dirs + ["src/exoplanet_core/jax"],
    ),
    # CMakeExtension(
    #     "exoplanet_core.jax.gpu_driver",
    #     "src",
    #     "gpu_driver",
    #     [
    #         "src/exoplanet_core/jax/gpu_driver.cpp",
    #         "src/exoplanet_core/jax/cuda_kernels.cc.cu",
    #     ],
    #     include_dirs=include_dirs + ["src/exoplanet_core/jax"],
    # ),
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
        setup_requires=SETUP_REQUIRES,
        zip_safe=False,
        ext_modules=ext_modules,
        cmdclass={"build_ext": CMakeBuild},
    )
