#include <pybind11/pybind11.h>

#include <type_traits>

#include "cuda_kernels.h"

namespace py = pybind11;

namespace exoplanet {
namespace {

template <typename T>
py::capsule EncapsulateFfiHandler(T* fn) {
  static_assert(std::is_invocable_r_v<XLA_FFI_Error*, T, XLA_FFI_CallFrame*>,
                "Encapsulated function must be an XLA FFI handler");
  return py::capsule(reinterpret_cast<void*>(fn));
}

pybind11::dict Registrations() {
  pybind11::dict dict;
  dict["solve_kepler"] = EncapsulateFfiHandler(CudaKepler);
  dict["quad_solution_vector"] = EncapsulateFfiHandler(CudaQuadSolutionVector);
  return dict;
}

PYBIND11_MODULE(gpu_driver, m) { m.def("registrations", &Registrations); }

}  // namespace
}  // namespace exoplanet
