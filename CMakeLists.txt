cmake_minimum_required(VERSION 3.12...3.18)
project(exoplanet_core LANGUAGES CXX CUDA)

set(CMAKE_CXX_STANDARD 14 CACHE STRING "C++ version selection")
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

find_package(Python COMPONENTS Interpreter Development REQUIRED)
find_package(pybind11 CONFIG REQUIRED)

include_directories(${CMAKE_CUDA_TOOLKIT_INCLUDE_DIRECTORIES})
include_directories(${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/lib/include)
include_directories(${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax)
pybind11_add_module(gpu_driver ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/cuda_kernels.cc.cu ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/gpu_driver.cpp)
