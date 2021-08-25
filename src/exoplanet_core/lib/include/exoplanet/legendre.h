#ifndef _EXOPLANET_LEGENDRE_H_
#define _EXOPLANET_LEGENDRE_H_

#include "constants.h"

namespace exoplanet {
namespace legendre {

EXOPLANET_DEVICE_CONSTANT int ORDER = 5;
EXOPLANET_DEVICE_CONSTANT float roots[ORDER] = {-0.90617985, -0.53846931, 0., 0.53846931,
                                                0.90617985};
EXOPLANET_DEVICE_CONSTANT float weights[ORDER] = {0.23692689, 0.47862867, 0.56888889, 0.47862867,
                                                  0.23692689};

}  // namespace legendre
}  // namespace exoplanet

#endif
