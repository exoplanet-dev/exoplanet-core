#include <exoplanet/exoplanet.h>
#include <pybind11/numpy.h>
#include <pybind11/pybind11.h>

namespace py = pybind11;

namespace driver {

template <typename Scalar, int ExtraFlags = py::array::forcecast>
struct flat_unchecked_array {
  flat_unchecked_array(py::array_t<Scalar, ExtraFlags> &array, bool require_mutable = false) {
    info = array.request();
    if (require_mutable && info.readonly) throw std::invalid_argument("outputs must be writeable");
    data = (Scalar *)info.ptr;
  }

  inline Scalar &operator()(ssize_t index) { return data[index]; }
  inline ssize_t shape(ssize_t index) const { return info.shape[index]; }
  inline ssize_t size() const { return info.size; }
  inline ssize_t ndim() const { return info.ndim; }

  py::buffer_info info;
  Scalar *data;
};

void solve_kepler(py::array_t<double, py::array::c_style> M_in,
                  py::array_t<double, py::array::c_style> ecc_in,
                  py::array_t<double, py::array::c_style> sinf_out,
                  py::array_t<double, py::array::c_style> cosf_out) {
  flat_unchecked_array<double, py::array::c_style> M(M_in), ecc(ecc_in);
  flat_unchecked_array<double, py::array::c_style> sinf(sinf_out, true), cosf(cosf_out, true);
  ssize_t N = M.size();
  if (ecc.size() != N || cosf.size() != N || sinf.size() != N)
    throw std::invalid_argument("dimension mismatch");
  for (ssize_t n = 0; n < N; ++n) {
    if (ecc(n) < 0 || ecc(n) > 1)
      throw std::invalid_argument("eccentricity must be in the range [0, 1)");
    exoplanet::kepler::solve_kepler(M(n), ecc(n), &(sinf(n)), &(cosf(n)));
  }
  // return std::make_tuple(cosf_out, sinf_out);
}

void quad_solution_vector(py::array_t<double, py::array::c_style> b_in,
                          py::array_t<double, py::array::c_style> r_in,
                          py::array_t<double, py::array::c_style> s_out) {
  flat_unchecked_array<double, py::array::c_style> b(b_in), r(r_in);
  flat_unchecked_array<double, py::array::c_style> s(s_out, true);
  const double eps = std::numeric_limits<double>::epsilon();

  ssize_t N = b.size();
  if (r.size() != N || s.size() != 3 * N) throw std::invalid_argument("dimension mismatch");
  for (ssize_t n = 0; n < N; ++n) {
    exoplanet::limbdark::quad_solution_vector<false>(eps, std::abs(b(n)), r(n), &(s(3 * n)),
                                                     (double *)NULL, (double *)NULL);
  }
  // return s_out;
}

void quad_solution_vector_with_grad(py::array_t<double, py::array::c_style> b_in,
                                    py::array_t<double, py::array::c_style> r_in,
                                    py::array_t<double, py::array::c_style> s_out,
                                    py::array_t<double, py::array::c_style> dsdb_out,
                                    py::array_t<double, py::array::c_style> dsdr_out) {
  flat_unchecked_array<double, py::array::c_style> b(b_in), r(r_in);
  flat_unchecked_array<double, py::array::c_style> s(s_out, true), dsdb(dsdb_out, true),
      dsdr(dsdr_out, true);
  const double eps = std::numeric_limits<double>::epsilon();
  ssize_t N = b.size();
  if (r.size() != N || s.size() != 3 * N || dsdb.size() != 3 * N || dsdr.size() != 3 * N)
    throw std::invalid_argument("dimension mismatch");
  for (ssize_t n = 0; n < N; ++n) {
    ssize_t ind = 3 * n;
    int sgn = exoplanet::sgn(b(n));
    exoplanet::limbdark::quad_solution_vector<true>(eps, std::abs(b(n)), r(n), &(s(ind)),
                                                    &(dsdb(ind)), &(dsdr(ind)));
    dsdb(ind) *= sgn;
    dsdb(ind + 1) *= sgn;
    dsdb(ind + 2) *= sgn;
  }
  // return s_out;
}

void contact_points(py::array_t<double, py::array::c_style> a_in,
                    py::array_t<double, py::array::c_style> e_in,
                    py::array_t<double, py::array::c_style> cosw_in,
                    py::array_t<double, py::array::c_style> sinw_in,
                    py::array_t<double, py::array::c_style> cosi_in,
                    py::array_t<double, py::array::c_style> sini_in,
                    py::array_t<double, py::array::c_style> L_in,
                    py::array_t<double, py::array::c_style> M_left_out,
                    py::array_t<double, py::array::c_style> M_right_out,
                    py::array_t<int, py::array::c_style> flag_out) {
  const double tol = 1e-10;
  flat_unchecked_array<double, py::array::c_style> a(a_in), e(e_in), cosw(cosw_in), sinw(sinw_in),
      cosi(cosi_in), sini(sini_in), L(L_in);
  flat_unchecked_array<double, py::array::c_style> M_left(M_left_out, true),
      M_right(M_right_out, true);
  flat_unchecked_array<int, py::array::c_style> flag(flag_out, true);
  ssize_t N = a.size();
  if (e.size() != N || cosw.size() != N || sinw.size() != N || cosi.size() != N ||
      sini.size() != N || L.size() != N || M_left.size() != N || M_right.size() != N ||
      flag.size() != N)
    throw std::invalid_argument("dimension mismatch");
  for (ssize_t n = 0; n < N; ++n) {
    auto const solver = exoplanet::contact_points::ContactPointSolver<double>(
        a(n), e(n), cosw(n), sinw(n), cosi(n), sini(n));
    auto const roots = solver.find_roots(L(n), tol);
    flag(n) = std::get<0>(roots);
    M_left(n) = std::get<1>(roots);
    M_right(n) = std::get<2>(roots);
  }
  // return std::make_tuple(M_left_out, M_right_out, flag_out);
}

}  // namespace driver

PYBIND11_MODULE(driver, m) {
  m.doc() = R"doc(
    The computation engine for exoplanet
)doc";
  m.def("solve_kepler", &driver::solve_kepler, py::arg("mean_anomaly"), py::arg("eccentricity"),
        py::arg("sin_true_anomaly").noconvert(), py::arg("cos_true_anomaly").noconvert());
  m.def("quad_solution_vector", &driver::quad_solution_vector, py::arg("b"), py::arg("r"),
        py::arg("s").noconvert());
  m.def("quad_solution_vector_with_grad", &driver::quad_solution_vector_with_grad, py::arg("b"),
        py::arg("r"), py::arg("s").noconvert(), py::arg("dsdb").noconvert(),
        py::arg("dsdr").noconvert());
  m.def("contact_points", &driver::contact_points, py::arg("a"), py::arg("e"), py::arg("cosw"),
        py::arg("sinw"), py::arg("cosi"), py::arg("sini"), py::arg("L"),
        py::arg("M_left").noconvert(), py::arg("M_right").noconvert(),
        py::arg("flag").noconvert());
}
