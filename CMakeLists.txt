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

add_library(cuda_kernels STATIC ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/cuda_kernels.cu.cc)
set_target_properties(cuda_kernels PROPERTIES POSITION_INDEPENDENT_CODE ON
                                              CUDA_VISIBILITY_PRESET "hidden")

add_library(gpu_driver MODULE ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/gpu_driver.cpp)
set_target_properties(gpu_driver PROPERTIES CXX_VISIBILITY_PRESET "hidden"
                                            CUDA_VISIBILITY_PRESET "hidden")

target_link_libraries(gpu_driver PRIVATE cuda_kernels)
target_link_libraries(gpu_driver PRIVATE pybind11::module pybind11::lto pybind11::windows_extras)
