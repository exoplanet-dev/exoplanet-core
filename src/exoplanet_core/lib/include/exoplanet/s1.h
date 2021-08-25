#ifndef _EXOPLANET_S1_H_
#define _EXOPLANET_S1_H_

#include "constants.h"
#include "legendre.h"

namespace exoplanet {
namespace s1 {

template <typename Scalar>
EXOPLANET_DEVICE Scalar numerical_p1(const Scalar& b, const Scalar& r, const Scalar& phi) {
  Scalar f1 = r * r + b * b;
  Scalar f2 = 2 * b * r;

  Scalar x1 = static_cast<Scalar>(3 * M_PI / 2);
  Scalar x2 = static_cast<Scalar>(2 * M_PI) + phi;
  Scalar m = (x2 - x1) / 2;

  Scalar accum = static_cast<Scalar>(0.);
  for (int j = 0; j < exoplanet::legendre::ORDER; j++) {
    Scalar root = static_cast<Scalar>(exoplanet::legendre::roots[j]);
    Scalar w = static_cast<Scalar>(exoplanet::legendre::weights[j]);

    root = m * root + (x1 + x2) / 2;
    Scalar s = sin(root);
    Scalar arg = f1 + f2 * s;
    arg = fmin(static_cast<Scalar>(1.), arg);
    Scalar marg = 1 - arg;
    marg = marg * sqrt(marg);
    Scalar y = (b * s + r) * (1 - marg) / arg;
    accum += m * w * y;
  }
  accum *= r;
  return accum * 2 / 3;
}

}  // namespace s1
}  // namespace exoplanet

#endif
