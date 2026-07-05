#ifndef _EXOPLANET_JAX_CUDA_KERNELS_H_
#define _EXOPLANET_JAX_CUDA_KERNELS_H_

#include "xla/ffi/api/ffi.h"

namespace exoplanet {

XLA_FFI_DECLARE_HANDLER_SYMBOL(CudaKepler);
XLA_FFI_DECLARE_HANDLER_SYMBOL(CudaQuadSolutionVector);

}  // namespace exoplanet

#endif
