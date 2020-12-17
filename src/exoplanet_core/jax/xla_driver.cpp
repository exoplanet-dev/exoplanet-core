#include <exoplanet/exoplanet.h>
#include <pybind11/pybind11.h>

namespace py = pybind11;

void solve_kepler(void *out_tuple, const void **in) {
  void **out = reinterpret_cast<void **>(out_tuple);

  const int N = *reinterpret_cast<const int *>(in[0]);
  const double *M = reinterpret_cast<const double *>(in[1]);
  const double *ecc = reinterpret_cast<const double *>(in[2]);
  double *cosf = reinterpret_cast<double *>(out[0]);
  double *sinf = reinterpret_cast<double *>(out[1]);

  for (int n = 0; n < N; ++n) {
    exoplanet::kepler::solve_kepler(M[n], ecc[n], cosf + n, sinf + n);
  }
}

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
    int sgn = exoplanet::sgn(b[n]);
    exoplanet::limbdark::quad_solution_vector<true>(std::abs(b[n]), r[n], s + offset,
                                                    dsdb + offset, dsdr + offset);
    dsdb[offset] *= sgn;
    dsdb[offset + 1] *= sgn;
    dsdb[offset + 2] *= sgn;
  }
}

PYBIND11_MODULE(xla_driver, m) {
  m.def("solve_kepler", []() {
    const char *name = "xla._CUSTOM_CALL_TARGET";
    return py::capsule((void *)&solve_kepler, name);
  });

  m.def("quad_solution_vector", []() {
    const char *name = "xla._CUSTOM_CALL_TARGET";
    return py::capsule((void *)&quad_solution_vector, name);
  });
}
