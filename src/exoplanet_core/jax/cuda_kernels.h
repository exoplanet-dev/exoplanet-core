#ifndef _EXOPLANET_JAX_CUDA_KERNELS_H_
#define _EXOPLANET_JAX_CUDA_KERNELS_H_

#include <cuda_runtime_api.h>

#include <cstddef>
#include <string>

namespace exoplanet {

std::string BuildCudaDescriptor(int N);
void CudaKepler(cudaStream_t stream, void** buffers, const char* opaque, std::size_t opaque_len);
void CudaQuadSolutionVector(cudaStream_t stream, void** buffers, const char* opaque,
                            std::size_t opaque_len);

}  // namespace exoplanet

#endif
