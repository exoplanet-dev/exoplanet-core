cmake_minimum_required(VERSION 3.12...3.18)
project(exoplanet_core LANGUAGES CXX)

find_package(Python COMPONENTS Interpreter Development REQUIRED)

# execute_process(
#   COMMAND
#     "${Python_EXECUTABLE}" -c
#     "import pybind11; print(pybind11.get_cmake_dir())"
#   OUTPUT_VARIABLE _tmp_dir
#   OUTPUT_STRIP_TRAILING_WHITESPACE COMMAND_ECHO STDOUT)
# list(APPEND CMAKE_PREFIX_PATH "${_tmp_dir}")
find_package(pybind11 CONFIG REQUIRED)

add_subdirectory(exoplanet_core)

# include_directories(src/exoplanet_core/lib/include)

# pybind11_add_module(driver src/exoplanet_core/driver.cpp)
# install(TARGETS driver DESTINATION src/exoplanet_core)

# include_directories(src/exoplanet_core/jax)
# pybind11_add_module(cpu_driver src/exoplanet_core/jax/cpu_driver.cpp)
# install(TARGETS cpu_driver DESTINATION src/exoplanet_core/jax)

# include(CheckLanguage)
# check_language(CUDA)
# if(CMAKE_CUDA_COMPILER)
#   enable_language(CUDA)
#   include_directories(${CMAKE_CUDA_TOOLKIT_INCLUDE_DIRECTORIES})
#   pybind11_add_module(
#     gpu_driver
#     src/exoplanet_core/jax/cuda_kernels.cc.cu
#     src/exoplanet_core/jax/gpu_driver.cpp)
#   install(TARGETS gpu_driver DESTINATION src/exoplanet_core/jax)
# else()
#   message(STATUS "No CUDA support")
# endif()
