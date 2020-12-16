#include <exoplanet/limbdark.h>
#include <pybind11/pybind11.h>

namespace py = pybind11;

void quad_solution_vector(void *out_tuple, const void **in) {
  void **out = reinterpret_cast<void **>(out_tuple);

  const int N = *reinterpret_cast<const int *>(in[0]);
  const double *b = reinterpret_cast<const double *>(in[1]);
  const double *r = reinterpret_cast<const double *>(in[2]);
  double *s = reinterpret_cast<double *>(out[0]);
  double *dsdb = reinterpret_cast<double *>(out[1]);
  double *dsdr = reinterpret_cast<double *>(out[2]);

  for (int n = 0; n < N; ++n) {
    int offset = 3 * n;
    exoplanet::limbdark::quad_solution_vector<true>(b[n], r[n], s + offset, dsdb + offset,
                                                    dsdr + offset);
  }
}

PYBIND11_MODULE(xla_driver, m) {
  m.def("quad_solution_vector", []() {
    const char *name = "xla._CUSTOM_CALL_TARGET";
    return py::capsule((void *)&quad_solution_vector, name);
  });
}
