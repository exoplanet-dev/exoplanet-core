#include <pybind11/pybind11.h>

#include "cuda_kernels.h"
#include "pybind11_kernel_helpers.h"

namespace exoplanet {
namespace {

pybind11::dict Registrations() {
  pybind11::dict dict;
  dict["cuda_kepler"] = EncapsulateFunction(CudaKepler);
  return dict;
}

PYBIND11_MODULE(gpu_driver, m) {
  m.def("registrations", &Registrations);
  m.def("cuda_kepler_descriptor", [](int N) {
    std::string result = BuildCudaKeplerDescriptor(N);
    return pybind11::bytes(result);
  });
}

}  // namespace
}  // namespace exoplanet
