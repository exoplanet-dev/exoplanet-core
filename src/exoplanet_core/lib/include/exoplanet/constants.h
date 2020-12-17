#ifndef _EXOPLANET_CONSTANTS_H_
#define _EXOPLANET_CONSTANTS_H_

#include <cmath>

namespace exoplanet {

#ifndef M_PI
#define M_PI 3.14159265358979323846264338327950288
#endif

const double one_third = 1. / 3;
const double one_sixth = 1. / 6;

const double if3 = 1. / 6;
const double if5 = 1. / (6. * 20);
const double if7 = 1. / (6. * 20 * 42);
const double if9 = 1. / (6. * 20 * 42 * 72);
const double if11 = 1. / (6. * 20 * 42 * 72 * 110);
const double if13 = 1. / (6. * 20 * 42 * 72 * 110 * 156);
const double if15 = 1. / (6. * 20 * 42 * 72 * 110 * 156 * 210);

const double pi = M_PI;
const double pi_d_12 = M_PI / 12;
const double pi_d_6 = M_PI / 6;
const double pi_d_4 = M_PI / 4;
const double pi_d_3 = M_PI / 3;
const double fivepi_d_12 = M_PI * 5. / 12;
const double pi_d_2 = M_PI / 2;
const double sevenpi_d_12 = M_PI * 7. / 12;
const double twopi_d_3 = M_PI * 2. / 3;
const double threepi_d_4 = M_PI * 3. / 4;
const double fivepi_d_6 = M_PI * 5. / 6;
const double elevenpi_d_12 = M_PI * 11. / 12;
const double twopi = M_PI * 2;
const double fourpi = M_PI * 4;

template <typename T>
int sgn(T val) {
  return (T(0) < val) - (val < T(0));
}

}  // namespace exoplanet

#endif
