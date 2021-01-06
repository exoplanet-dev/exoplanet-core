include_directories(lib/include)
pybind11_add_module(driver driver.cpp)

add_subdirectory(jax)
