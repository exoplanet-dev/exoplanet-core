#define CATCH_CONFIG_MAIN
#include <exoplanet/limbdark.h>
#include <starry/limbdark.h>

#include "catch.hpp"

#define CHECK_SOLUTION(eps)                                                               \
  {                                                                                       \
    G.compute<true>(b, r);                                                                \
    exoplanet::limbdark::quad_solution_vector<true>(b, r, s, dsdb, dsdr);                 \
                                                                                          \
    for (int n = 0; n < 3; ++n) {                                                         \
      INFO("b = " << b << "; r = " << r << "; s[n] = " << s[n] << "; sT(n) = " << G.sT(n) \
                  << "\n");                                                               \
      REQUIRE((s[n] - G.sT(n)) < eps);                                                    \
    }                                                                                     \
    for (int n = 0; n < 3; ++n) {                                                         \
      INFO("b = " << b << "; r = " << r << "; dsdb[n] = " << dsdb[n]                      \
                  << "; dsTdb(n) = " << G.dsTdb(n) << "\n");                              \
      REQUIRE((dsdb[n] - G.dsTdb(n)) < eps);                                              \
    }                                                                                     \
    for (int n = 0; n < 3; ++n) {                                                         \
      INFO("b = " << b << "; r = " << r << "; dsdr[n] = " << dsdr[n]                      \
                  << "; dsTdr(n) = " << G.dsTdr(n) << "\n");                              \
      REQUIRE((dsdr[n] - G.dsTdr(n)) < eps);                                              \
    }                                                                                     \
  }

TEST_CASE("check the solution vector", "[limbdark]") {
  double b, r;
  double s[3], dsdb[3], dsdr[3];
  const int lmax = 3;
  exoplanet::test::limbdark::GreensLimbDark<double> G(lmax);

  for (b = 0.0; b < 2.0; b += 1.123e-3) {
    for (r = 0.0; r < 2.0; r += 1.123e-2) {
      CHECK_SOLUTION(1e-10);
    }
  }

  b = 0.5;
  r = 0.5;
  CHECK_SOLUTION(1e-5);

  b = 0.4;
  r = 0.0;
  CHECK_SOLUTION(1e-10);

  b = 0.0;
  r = 0.1;
  CHECK_SOLUTION(1e-10);

  b = 0.234;
  r = 0.234;
  CHECK_SOLUTION(1e-10);
}
