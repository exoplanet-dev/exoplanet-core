#include <exoplanet/exoplanet.h>

#include <limits>

#include "cuda_kernels.h"
#include "kernel_helpers.h"
namespace exoplanet {

namespace {
template <typename Scalar>
__global__ void KeplerKernel(int N, const Scalar* M, const Scalar* ecc, Scalar* sinf,
                             Scalar* cosf) {
  for (int idx = blockIdx.x * blockDim.x + threadIdx.x; idx < N; idx += blockDim.x * gridDim.x) {
    kepler::solve_kepler<Scalar>(M[idx], ecc[idx], sinf + idx, cosf + idx);
  }
}

template <typename Scalar>
__global__ void QuadSolutionVectorKernel(Scalar eps, int N, const Scalar* b, const Scalar* r,
                                         Scalar* s, Scalar* dsdb, Scalar* dsdr) {
  for (int idx = blockIdx.x * blockDim.x + threadIdx.x; idx < N; idx += blockDim.x * gridDim.x) {
    int offset = 3 * idx;
    int sgn = exoplanet::sgn(b[idx]);
    limbdark::quad_solution_vector<true>(eps, std::abs(b[idx]), r[idx], s + offset, dsdb + offset,
                                         dsdr + offset);
    dsdb[offset] *= sgn;
    dsdb[offset + 1] *= sgn;
    dsdb[offset + 2] *= sgn;
  }
}

}  // namespace

void ThrowIfError(cudaError_t error) {
  if (error != cudaSuccess) {
    throw std::runtime_error(cudaGetErrorString(error));
  }
}

struct SizeDescriptor {
  int N;
};

std::string BuildCudaDescriptor(int N) { return PackDescriptorAsString(SizeDescriptor{N}); }

void CudaKepler(cudaStream_t stream, void** buffers, const char* opaque, std::size_t opaque_len) {
  const double* M = reinterpret_cast<const double*>(buffers[0]);
  const double* ecc = reinterpret_cast<const double*>(buffers[1]);
  double* sinf = reinterpret_cast<double*>(buffers[2]);
  double* cosf = reinterpret_cast<double*>(buffers[3]);

  const auto& descriptor = *UnpackDescriptor<SizeDescriptor>(opaque, opaque_len);
  int N = descriptor.N;

  const int block_dim = 128;
  const int grid_dim = std::min<int>(1024, (N + block_dim - 1) / block_dim);

  KeplerKernel<<<grid_dim, block_dim, 0, stream>>>(N, M, ecc, sinf, cosf);
  ThrowIfError(cudaGetLastError());
}

void CudaQuadSolutionVector(cudaStream_t stream, void** buffers, const char* opaque,
                            std::size_t opaque_len) {
  const double* b = reinterpret_cast<const double*>(buffers[0]);
  const double* r = reinterpret_cast<const double*>(buffers[1]);
  double* s = reinterpret_cast<double*>(buffers[2]);
  double* dsdb = reinterpret_cast<double*>(buffers[3]);
  double* dsdr = reinterpret_cast<double*>(buffers[4]);

  const auto& descriptor = *UnpackDescriptor<SizeDescriptor>(opaque, opaque_len);
  int N = descriptor.N;

  const double eps = std::numeric_limits<double>::epsilon();

  const int block_dim = 128;
  const int grid_dim = std::min<int>(1024, (N + block_dim - 1) / block_dim);

  QuadSolutionVectorKernel<<<grid_dim, block_dim, 0, stream>>>(eps, N, b, r, s, dsdb, dsdr);
  ThrowIfError(cudaGetLastError());
}

}  // namespace exoplanet
