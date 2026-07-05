#include <exoplanet/exoplanet.h>
#include <pybind11/pybind11.h>

#include <cstdint>
#include <limits>

#include "xla/ffi/api/ffi.h"

namespace py = pybind11;
namespace ffi = xla::ffi;

namespace exoplanet {
namespace {

ffi::Error SolveKeplerImpl(ffi::Buffer<ffi::F64> M, ffi::Buffer<ffi::F64> ecc,
                           ffi::ResultBuffer<ffi::F64> sinf, ffi::ResultBuffer<ffi::F64> cosf) {
  const int64_t N = M.element_count();
  const double* M_data = M.typed_data();
  const double* ecc_data = ecc.typed_data();
  double* sinf_data = sinf->typed_data();
  double* cosf_data = cosf->typed_data();

  for (int64_t n = 0; n < N; ++n) {
    kepler::solve_kepler(M_data[n], ecc_data[n], sinf_data + n, cosf_data + n);
  }
  return ffi::Error::Success();
}

XLA_FFI_DEFINE_HANDLER_SYMBOL(SolveKepler, SolveKeplerImpl,
                              ffi::Ffi::Bind()
                                  .Arg<ffi::Buffer<ffi::F64>>()  // M
                                  .Arg<ffi::Buffer<ffi::F64>>()  // ecc
                                  .Ret<ffi::Buffer<ffi::F64>>()  // sinf
                                  .Ret<ffi::Buffer<ffi::F64>>()  // cosf
);

ffi::Error QuadSolutionVectorImpl(ffi::Buffer<ffi::F64> b, ffi::Buffer<ffi::F64> r,
                                  ffi::ResultBuffer<ffi::F64> s, ffi::ResultBuffer<ffi::F64> dsdb,
                                  ffi::ResultBuffer<ffi::F64> dsdr) {
  const int64_t N = b.element_count();
  const double* b_data = b.typed_data();
  const double* r_data = r.typed_data();
  double* s_data = s->typed_data();
  double* dsdb_data = dsdb->typed_data();
  double* dsdr_data = dsdr->typed_data();
  const double eps = std::numeric_limits<double>::epsilon();

  for (int64_t n = 0; n < N; ++n) {
    int64_t offset = 3 * n;
    int sgn = exoplanet::sgn(b_data[n]);
    limbdark::quad_solution_vector<true>(eps, std::abs(b_data[n]), r_data[n], s_data + offset,
                                         dsdb_data + offset, dsdr_data + offset);
    dsdb_data[offset] *= sgn;
    dsdb_data[offset + 1] *= sgn;
    dsdb_data[offset + 2] *= sgn;
  }
  return ffi::Error::Success();
}

XLA_FFI_DEFINE_HANDLER_SYMBOL(QuadSolutionVector, QuadSolutionVectorImpl,
                              ffi::Ffi::Bind()
                                  .Arg<ffi::Buffer<ffi::F64>>()  // b
                                  .Arg<ffi::Buffer<ffi::F64>>()  // r
                                  .Ret<ffi::Buffer<ffi::F64>>()  // s
                                  .Ret<ffi::Buffer<ffi::F64>>()  // dsdb
                                  .Ret<ffi::Buffer<ffi::F64>>()  // dsdr
);

ffi::Error ContactPointsImpl(ffi::Buffer<ffi::F64> a, ffi::Buffer<ffi::F64> e,
                             ffi::Buffer<ffi::F64> cosw, ffi::Buffer<ffi::F64> sinw,
                             ffi::Buffer<ffi::F64> cosi, ffi::Buffer<ffi::F64> sini,
                             ffi::Buffer<ffi::F64> L, ffi::ResultBuffer<ffi::F64> M_left,
                             ffi::ResultBuffer<ffi::F64> M_right,
                             ffi::ResultBuffer<ffi::S32> flag) {
  const double tol = 1e-10;
  const int64_t N = a.element_count();
  const double* a_data = a.typed_data();
  const double* e_data = e.typed_data();
  const double* cosw_data = cosw.typed_data();
  const double* sinw_data = sinw.typed_data();
  const double* cosi_data = cosi.typed_data();
  const double* sini_data = sini.typed_data();
  const double* L_data = L.typed_data();
  double* M_left_data = M_left->typed_data();
  double* M_right_data = M_right->typed_data();
  int32_t* flag_data = flag->typed_data();

  for (int64_t n = 0; n < N; ++n) {
    auto const solver = contact_points::ContactPointSolver<double>(
        a_data[n], e_data[n], cosw_data[n], sinw_data[n], cosi_data[n], sini_data[n]);
    auto const roots = solver.find_roots(L_data[n], tol);
    flag_data[n] = std::get<0>(roots);
    M_left_data[n] = std::get<1>(roots);
    M_right_data[n] = std::get<2>(roots);
  }
  return ffi::Error::Success();
}

XLA_FFI_DEFINE_HANDLER_SYMBOL(ContactPoints, ContactPointsImpl,
                              ffi::Ffi::Bind()
                                  .Arg<ffi::Buffer<ffi::F64>>()  // a
                                  .Arg<ffi::Buffer<ffi::F64>>()  // e
                                  .Arg<ffi::Buffer<ffi::F64>>()  // cosw
                                  .Arg<ffi::Buffer<ffi::F64>>()  // sinw
                                  .Arg<ffi::Buffer<ffi::F64>>()  // cosi
                                  .Arg<ffi::Buffer<ffi::F64>>()  // sini
                                  .Arg<ffi::Buffer<ffi::F64>>()  // L
                                  .Ret<ffi::Buffer<ffi::F64>>()  // M_left
                                  .Ret<ffi::Buffer<ffi::F64>>()  // M_right
                                  .Ret<ffi::Buffer<ffi::S32>>()  // flag
);

template <typename T>
py::capsule EncapsulateFfiHandler(T* fn) {
  static_assert(std::is_invocable_r_v<XLA_FFI_Error*, T, XLA_FFI_CallFrame*>,
                "Encapsulated function must be an XLA FFI handler");
  return py::capsule(reinterpret_cast<void*>(fn));
}

pybind11::dict Registrations() {
  pybind11::dict dict;
  dict["solve_kepler"] = EncapsulateFfiHandler(SolveKepler);
  dict["quad_solution_vector"] = EncapsulateFfiHandler(QuadSolutionVector);
  dict["contact_points"] = EncapsulateFfiHandler(ContactPoints);
  return dict;
}

PYBIND11_MODULE(cpu_driver, m) { m.def("registrations", &Registrations); }

}  // namespace
}  // namespace exoplanet
