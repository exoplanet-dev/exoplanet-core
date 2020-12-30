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

void contact_points(void *out_tuple, const void **in) {
  const double tol = 1e-10;

  void **out = reinterpret_cast<void **>(out_tuple);

  const int N = *reinterpret_cast<const int *>(in[0]);
  const double *a = reinterpret_cast<const double *>(in[1]);
  const double *e = reinterpret_cast<const double *>(in[2]);
  const double *cosw = reinterpret_cast<const double *>(in[3]);
  const double *sinw = reinterpret_cast<const double *>(in[4]);
  const double *cosi = reinterpret_cast<const double *>(in[5]);
  const double *sini = reinterpret_cast<const double *>(in[6]);
  const double *L = reinterpret_cast<const double *>(in[7]);
  double *M_left = reinterpret_cast<double *>(out[0]);
  double *M_right = reinterpret_cast<double *>(out[1]);
  int *flag = reinterpret_cast<int *>(out[2]);

  for (int n = 0; n < N; ++n) {
    auto const solver = exoplanet::contact_points::ContactPointSolver<double>(
        a[n], e[n], cosw[n], sinw[n], cosi[n], sini[n]);
    auto const roots = solver.find_roots(L[n], tol);
    flag[n] = std::get<0>(roots);
    M_left[n] = std::get<1>(roots);
    M_right[n] = std::get<2>(roots);
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

  m.def("contact_points", []() {
    const char *name = "xla._CUSTOM_CALL_TARGET";
    return py::capsule((void *)&contact_points, name);
  });
}
