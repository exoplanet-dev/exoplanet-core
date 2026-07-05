#include <exoplanet/exoplanet.h>

#include <algorithm>
#include <cstdint>
#include <limits>

#include "cuda_kernels.h"
#include "xla/ffi/api/ffi.h"

namespace ffi = xla::ffi;

namespace exoplanet {

namespace {
template <typename Scalar>
__global__ void KeplerKernel(int64_t N, const Scalar* M, const Scalar* ecc, Scalar* sinf,
                             Scalar* cosf) {
  for (int64_t idx = blockIdx.x * blockDim.x + threadIdx.x; idx < N;
       idx += blockDim.x * gridDim.x) {
    kepler::solve_kepler<Scalar>(M[idx], ecc[idx], sinf + idx, cosf + idx);
  }
}

template <typename Scalar>
__global__ void QuadSolutionVectorKernel(Scalar eps, int64_t N, const Scalar* b, const Scalar* r,
                                         Scalar* s, Scalar* dsdb, Scalar* dsdr) {
  for (int64_t idx = blockIdx.x * blockDim.x + threadIdx.x; idx < N;
       idx += blockDim.x * gridDim.x) {
    int64_t offset = 3 * idx;
    int sgn = exoplanet::sgn(b[idx]);
    limbdark::quad_solution_vector<true>(eps, std::abs(b[idx]), r[idx], s + offset, dsdb + offset,
                                         dsdr + offset);
    dsdb[offset] *= sgn;
    dsdb[offset + 1] *= sgn;
    dsdb[offset + 2] *= sgn;
  }
}

ffi::Error CudaErrorToFfiError(cudaError_t error) {
  if (error != cudaSuccess) {
    return ffi::Error::Internal(cudaGetErrorString(error));
  }
  return ffi::Error::Success();
}

ffi::Error CudaKeplerImpl(cudaStream_t stream, ffi::Buffer<ffi::F64> M, ffi::Buffer<ffi::F64> ecc,
                          ffi::ResultBuffer<ffi::F64> sinf, ffi::ResultBuffer<ffi::F64> cosf) {
  const int64_t N = M.element_count();
  const int block_dim = 128;
  const int grid_dim = std::min<int64_t>(1024, (N + block_dim - 1) / block_dim);

  KeplerKernel<<<grid_dim, block_dim, 0, stream>>>(N, M.typed_data(), ecc.typed_data(),
                                                   sinf->typed_data(), cosf->typed_data());
  return CudaErrorToFfiError(cudaGetLastError());
}

ffi::Error CudaQuadSolutionVectorImpl(cudaStream_t stream, ffi::Buffer<ffi::F64> b,
                                      ffi::Buffer<ffi::F64> r, ffi::ResultBuffer<ffi::F64> s,
                                      ffi::ResultBuffer<ffi::F64> dsdb,
                                      ffi::ResultBuffer<ffi::F64> dsdr) {
  const int64_t N = b.element_count();
  const double eps = std::numeric_limits<double>::epsilon();
  const int block_dim = 128;
  const int grid_dim = std::min<int64_t>(1024, (N + block_dim - 1) / block_dim);

  QuadSolutionVectorKernel<<<grid_dim, block_dim, 0, stream>>>(
      eps, N, b.typed_data(), r.typed_data(), s->typed_data(), dsdb->typed_data(),
      dsdr->typed_data());
  return CudaErrorToFfiError(cudaGetLastError());
}

}  // namespace

XLA_FFI_DEFINE_HANDLER_SYMBOL(CudaKepler, CudaKeplerImpl,
                              ffi::Ffi::Bind()
                                  .Ctx<ffi::PlatformStream<cudaStream_t>>()
                                  .Arg<ffi::Buffer<ffi::F64>>()  // M
                                  .Arg<ffi::Buffer<ffi::F64>>()  // ecc
                                  .Ret<ffi::Buffer<ffi::F64>>()  // sinf
                                  .Ret<ffi::Buffer<ffi::F64>>()  // cosf
);

XLA_FFI_DEFINE_HANDLER_SYMBOL(CudaQuadSolutionVector, CudaQuadSolutionVectorImpl,
                              ffi::Ffi::Bind()
                                  .Ctx<ffi::PlatformStream<cudaStream_t>>()
                                  .Arg<ffi::Buffer<ffi::F64>>()  // b
                                  .Arg<ffi::Buffer<ffi::F64>>()  // r
                                  .Ret<ffi::Buffer<ffi::F64>>()  // s
                                  .Ret<ffi::Buffer<ffi::F64>>()  // dsdb
                                  .Ret<ffi::Buffer<ffi::F64>>()  // dsdr
);

}  // namespace exoplanet
