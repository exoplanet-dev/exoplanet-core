#include <exoplanet/kepler.h>

#include "cuda_kernels.h"
#include "kernel_helpers.h"

namespace exoplanet {

namespace {
template <typename Scalar>
__global__ void KeplerKernel(int N, const Scalar* M, const Scalar* ecc, Scalar* cosf,
                             Scalar* sinf) {
  Scalar a, b;
  for (int idx = blockIdx.x * blockDim.x + threadIdx.x; idx < N; idx += blockDim.x * gridDim.x) {
    exoplanet::kepler::solve_kepler<Scalar>(M[idx], ecc[idx], &a, &b);
    cosf[idx] = a;
    sinf[idx] = b;
  }
}
}  // namespace

void ThrowIfError(cudaError_t error) {
  if (error != cudaSuccess) {
    throw std::runtime_error(cudaGetErrorString(error));
  }
}

struct KeplerDescriptor {
  int N;
};

std::string BuildCudaKeplerDescriptor(int N) {
  return PackDescriptorAsString(KeplerDescriptor{N});
}

void CudaKepler(cudaStream_t stream, void** buffers, const char* opaque, std::size_t opaque_len) {
  const double* M = reinterpret_cast<const double*>(buffers[0]);
  const double* ecc = reinterpret_cast<const double*>(buffers[1]);
  double* cosf = reinterpret_cast<double*>(buffers[2]);
  double* sinf = reinterpret_cast<double*>(buffers[3]);

  const auto& descriptor = *UnpackDescriptor<KeplerDescriptor>(opaque, opaque_len);
  int N = descriptor.N;

  const int block_dim = 128;
  const int grid_dim = std::min<int>(1024, (N + block_dim - 1) / block_dim);

  KeplerKernel<<<grid_dim, block_dim, 0, stream>>>(N, M, ecc, cosf, sinf);
  ThrowIfError(cudaGetLastError());
}

}  // namespace exoplanet
