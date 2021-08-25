#ifndef _EXOPLANET_CONSTANTS_H_
#define _EXOPLANET_CONSTANTS_H_

#include <algorithm>
#include <cmath>

namespace exoplanet {

#ifdef __CUDACC__
#define EXOPLANET_DEVICE __host__ __device__
#define EXOPLANET_DEVICE_CONSTANT __constant__ __device__

template <class T>
EXOPLANET_DEVICE inline void swap(T& a, T& b) {
  T c(a);
  a = b;
  b = c;
}

#else
#define EXOPLANET_DEVICE
#define EXOPLANET_DEVICE_CONSTANT const

template <class T>
inline void swap(T& a, T& b) {
  std::swap(a, b);
}

template <class T>
inline void sincos(const T& x, T* sx, T* cx) {
  *sx = sin(x);
  *cx = cos(x);
}
#endif

#ifndef M_PI
#define M_PI 3.14159265358979323846264338327950288
#endif

EXOPLANET_DEVICE_CONSTANT double one_third = 1. / 3;
EXOPLANET_DEVICE_CONSTANT double one_sixth = 1. / 6;

EXOPLANET_DEVICE_CONSTANT double if3 = 1. / 6;
EXOPLANET_DEVICE_CONSTANT double if5 = 1. / (6. * 20);
EXOPLANET_DEVICE_CONSTANT double if7 = 1. / (6. * 20 * 42);
EXOPLANET_DEVICE_CONSTANT double if9 = 1. / (6. * 20 * 42 * 72);
EXOPLANET_DEVICE_CONSTANT double if11 = 1. / (6. * 20 * 42 * 72 * 110);
EXOPLANET_DEVICE_CONSTANT double if13 = 1. / (6. * 20 * 42 * 72 * 110 * 156);
EXOPLANET_DEVICE_CONSTANT double if15 = 1. / (6. * 20 * 42 * 72 * 110 * 156 * 210);

EXOPLANET_DEVICE_CONSTANT double pi = M_PI;
EXOPLANET_DEVICE_CONSTANT double pi_d_12 = M_PI / 12;
EXOPLANET_DEVICE_CONSTANT double pi_d_6 = M_PI / 6;
EXOPLANET_DEVICE_CONSTANT double pi_d_4 = M_PI / 4;
EXOPLANET_DEVICE_CONSTANT double pi_d_3 = M_PI / 3;
EXOPLANET_DEVICE_CONSTANT double fivepi_d_12 = M_PI * 5. / 12;
EXOPLANET_DEVICE_CONSTANT double pi_d_2 = M_PI / 2;
EXOPLANET_DEVICE_CONSTANT double sevenpi_d_12 = M_PI * 7. / 12;
EXOPLANET_DEVICE_CONSTANT double twopi_d_3 = M_PI * 2. / 3;
EXOPLANET_DEVICE_CONSTANT double threepi_d_4 = M_PI * 3. / 4;
EXOPLANET_DEVICE_CONSTANT double fivepi_d_6 = M_PI * 5. / 6;
EXOPLANET_DEVICE_CONSTANT double elevenpi_d_12 = M_PI * 11. / 12;
EXOPLANET_DEVICE_CONSTANT double twopi = M_PI * 2;
EXOPLANET_DEVICE_CONSTANT double fourpi = M_PI * 4;

template <typename T>
EXOPLANET_DEVICE inline int sgn(T val) {
  return (T(0) < val) - (val < T(0));
}

}  // namespace exoplanet

#endif
