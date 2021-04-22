#!/usr/bin/env python

# Inspired by:
# https://hynek.me/articles/sharing-your-labor-of-love-pypi-quick-and-dirty/

import codecs
import os
import platform
import re
import subprocess
import sys

import pybind11
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
    "pymc": ["pymc3>=3.9", "aesara-theano-fallback>=0.0.2"],
    "jax": ["jax", "jaxlib"],
    "test": ["pytest", "pytest-cov>=2.6.1"],
    "benchmark": [
        "pytest",
        "pytest-benchmark",
        "radvel",
        "kepler.py",
        "batman-package",
        "starry",
        "exoplanet==0.4.5",
    ],
}


# END PROJECT SPECIFIC

# CMAKE INTERFACE


def run_cmake(build_temp, install_dir, debug=False):
    import distutils.sysconfig
    from distutils import log

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
        "-DCMAKE_INSTALL_PREFIX={}".format(os.path.dirname(install_dir)),
        "-DCMAKE_LIBRARY_OUTPUT_DIRECTORY={}".format(install_dir),
        "-DPython_EXECUTABLE={}".format(sys.executable),
        "-DPython_LIBRARIES={}".format(cmake_python_library),
        "-DPython_INCLUDE_DIRS={}".format(cmake_python_include_dir),
        "-DCMAKE_BUILD_TYPE={}".format("Debug" if debug else "Release"),
        "-DCMAKE_PREFIX_PATH={}".format(pybind11.get_cmake_dir()),
    ]
    build_args = []

    if not os.path.exists(build_temp):
        os.makedirs(build_temp)
    log.info("cmake " + HERE + " " + " ".join(cmake_args))
    subprocess.check_call(["cmake", HERE] + cmake_args, cwd=build_temp)
    log.info("cmake --build . --target install " + " ".join(build_args))
    subprocess.check_call(
        ["cmake", "--build", ".", "--target", "install"] + build_args,
        cwd=build_temp,
    )


class DummyExtension(Pybind11Extension):
    pass


class BuildExt(build_ext):
    def build_extension(self, ext):
        if isinstance(ext, DummyExtension):
            extdir = os.path.abspath(
                os.path.dirname(self.get_ext_fullpath(ext.name))
            )
            run_cmake(self.build_temp, extdir, debug=self.debug)
        else:
            build_ext.build_extension(self, ext)


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

if os.environ.get("EXOPLANET_CORE_CUDA", "no").lower() == "yes":
    ext_modules.append(
        DummyExtension(
            "exoplanet_core.jax.gpu_driver",
            [
                "src/exoplanet_core/jax/gpu_driver.cpp",
                "src/exoplanet_core/jax/cuda_kernels.cc.cu",
            ],
            language="c++",
        )
    )

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
        cmdclass={"build_ext": BuildExt},
    )
