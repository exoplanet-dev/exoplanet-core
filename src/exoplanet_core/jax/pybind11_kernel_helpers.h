#ifndef _EXOPLANET_XLA_PYBIND11_KERNEL_HELPERS_H_
#define _EXOPLANET_XLA_PYBIND11_KERNEL_HELPERS_H_

#include <pybind11/pybind11.h>

#include "kernel_helpers.h"

namespace exoplanet {

template <typename T>
pybind11::bytes PackDescriptor(const T& descriptor) {
  return pybind11::bytes(PackDescriptorAsString(descriptor));
}

template <typename T>
pybind11::capsule EncapsulateFunction(T* fn) {
  return pybind11::capsule((void*)fn, "xla._CUSTOM_CALL_TARGET");
}

}  // namespace exoplanet

#endif
