cmake_minimum_required(VERSION 3.12...3.18)
project(exoplanet_core LANGUAGES CXX)

find_package(Python COMPONENTS Interpreter Development REQUIRED)
find_package(pybind11 CONFIG REQUIRED)

include_directories(${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/lib/include)

pybind11_add_module(
    driver
    ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/driver.cpp)
install(TARGETS driver DESTINATION .)

include_directories(${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax)
pybind11_add_module(
    cpu_driver
    ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/cpu_driver.cpp)
install(TARGETS cpu_driver DESTINATION ./jax)

include(CheckLanguage)
check_language(CUDA)
if(CMAKE_CUDA_COMPILER)
    enable_language(CUDA)
    include_directories(${CMAKE_CUDA_TOOLKIT_INCLUDE_DIRECTORIES})
    pybind11_add_module(
        gpu_driver
        ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/cuda_kernels.cc.cu
        ${CMAKE_CURRENT_LIST_DIR}/src/exoplanet_core/jax/gpu_driver.cpp)
    install(TARGETS gpu_driver DESTINATION ./jax)
else()
    message(STATUS "No CUDA support")
endif()
