cmake_minimum_required(VERSION 3.15...3.27)
project(
    ${SKBUILD_PROJECT_NAME}
    VERSION ${SKBUILD_PROJECT_VERSION}
    LANGUAGES CXX)

set(PYBIND11_NEWPYTHON ON)
find_package(pybind11 CONFIG REQUIRED)

include_directories("src/exoplanet_core/lib/include")

pybind11_add_module(driver "src/exoplanet_core/driver.cpp")
target_compile_features(driver PUBLIC cxx_std_14)
install(TARGETS driver LIBRARY DESTINATION ${SKBUILD_PROJECT_NAME})

pybind11_add_module(cpu_driver "src/exoplanet_core/jax/cpu_driver.cpp")
target_include_directories(cpu_driver PUBLIC "src/exoplanet_core/jax")
target_compile_features(cpu_driver PUBLIC cxx_std_14)
install(TARGETS cpu_driver LIBRARY DESTINATION ${SKBUILD_PROJECT_NAME}/jax)

if("$ENV{EXOPLANET_CORE_CUDA}" STREQUAL "yes")
    set(CMAKE_INTERPROCEDURAL_OPTIMIZATION OFF)
    enable_language(CUDA)
    set(CMAKE_CUDA_SEPARABLE_COMPILATION ON)
    find_package(CUDAToolkit REQUIRED)
    pybind11_add_module(
        gpu_driver
        "src/exoplanet_core/jax/cuda_kernels.cc.cu"
        "src/exoplanet_core/jax/gpu_driver.cpp")
    target_include_directories(gpu_driver PUBLIC ${CMAKE_CUDA_TOOLKIT_INCLUDE_DIRECTORIES})
    target_compile_features(gpu_driver PUBLIC cxx_std_14)
    install(TARGETS gpu_driver LIBRARY DESTINATION ${SKBUILD_PROJECT_NAME}/jax)
endif()
