#ifndef _EXOPLANET_LIMBDARK_H_
#define _EXOPLANET_LIMBDARK_H_

#include <algorithm>
#include <cmath>

#include "ellip.h"

namespace exoplanet {
namespace limbdark {

#ifdef __cpp_if_constexpr
#define if_constexpr if constexpr
#else
#define if_constexpr if
#endif

template <typename Scalar>
inline void set_zero3(Scalar* x) {
  x[0] = x[1] = x[2] = 0.0;
}

template <typename Scalar>
inline bool is_close(const Scalar& a, const Scalar& b,
                     const Scalar& eps = std::numeric_limits<Scalar>::epsilon()) {
  return unlikely(std::abs(a - b) <= eps);
}

// NOTE: Both b and r MUST BE POSITIVE!!
template <bool ComputeGradient, typename Scalar = double>
inline void quad_solution_vector(const Scalar& b_, const Scalar& r, Scalar* s, Scalar* dsdb,
                                 Scalar* dsdr) {
  using std::max;
  const Scalar eps = std::numeric_limits<Scalar>::epsilon();
  const Scalar third = 1.0 / 3;

  Scalar b = b_;

  // HACK: Fix an instability that exists *really* close to b = r = 0.5
  if (is_close(b, r, 5 * eps) && is_close(r, 0.5, 5 * eps)) {
    b = 0.5 + 5 * eps;
  }

  if_constexpr(ComputeGradient) {
    set_zero3(dsdb);
    set_zero3(dsdr);
  }

  // Special case: complete occultation
  if (unlikely(b < r - 1)) {
    set_zero3(s);
    return;
  }

  // Special case: no occultation
  if (is_close<Scalar>(r, 0) || (b > r + 1)) {
    s[0] = M_PI;
    s[1] = 2.0 * M_PI / 3.0;
    s[2] = 0.0;
    return;
  }

  Scalar b2 = b * b;
  Scalar r2 = r * r;
  Scalar invr = 1.0 / r;
  Scalar invb = 1.0 / b;
  Scalar bmr = b - r;
  Scalar bpr = b + r;
  Scalar fourbr = 4 * b * r;
  Scalar invfourbr = 0.25 * invr * invb;
  Scalar onembmr2 = (1.0 + bmr) * (1.0 - bmr);
  Scalar onembmr2inv = 1.0 / onembmr2;
  Scalar onembpr2 = (1.0 + bpr) * (1.0 - bpr);
  Scalar sqonembmr2 = sqrt(onembmr2);
  Scalar sqbr = sqrt(b * r);

  // Compute the kite area and the k^2 variables
  Scalar p0 = 1.0, p1 = b, p2 = r;
  if (p0 < p1) std::swap(p0, p1);
  if (p1 < p2) std::swap(p1, p2);
  if (p0 < p1) std::swap(p0, p1);
  Scalar sqarea = (p0 + (p1 + p2)) * (p2 - (p0 - p1)) * (p2 + (p0 - p1)) * (p0 + (p1 - p2));
  Scalar kite_area2 = sqrt(max<Scalar>(0.0, sqarea));

  Scalar ksq = INFINITY;
  Scalar kc = 1;
  Scalar kcsq = 1;
  Scalar invksq = 0;
  Scalar kap0 = 0;
  Scalar kap1 = 0;

  // S[0]
  if (is_close<Scalar>(b, 0) || is_close<Scalar>(r, 0)) {
    s[0] = M_PI * (1 - r2);
    if_constexpr(ComputeGradient) {
      // dsdb[0] = 0;
      dsdr[0] = -2 * M_PI * r;
    }
  } else {
    ksq = onembpr2 * invfourbr + 1.0;
    invksq = 1.0 / ksq;
    // k = sqrt(ksq);
    if (ksq > 1) {
      kcsq = onembpr2 * onembmr2inv;
      kc = sqrt(kcsq);
      s[0] = M_PI * (1 - r2);
      if_constexpr(ComputeGradient) {
        // dsdb[0] = 0;
        dsdr[0] = -2 * M_PI * r;
      }
    } else {
      kcsq = -onembpr2 * invfourbr;
      kc = sqrt(kcsq);
      kap0 = atan2(kite_area2, (r - 1) * (r + 1) + b2);
      kap1 = atan2(kite_area2, (1 - r) * (1 + r) + b2);
      Scalar Alens = kap1 + r2 * kap0 - kite_area2 * 0.5;
      s[0] = M_PI - Alens;
      if_constexpr(ComputeGradient) {
        dsdb[0] = kite_area2 * invb;
        dsdr[0] = -2.0 * r * kap0;
      }
    }
  }

  // S[1]
  Scalar Lambda1 = 0;
  Scalar Eofk = 0;
  Scalar Em1mKdm = 0;
  if ((b >= 1 + r) || is_close<Scalar>(r, 0) || (b <= r - 1.0)) {
    // No occultation (Case 1) or Full occultation (Case 11)
  } else {
    if (is_close<Scalar>(b, 0)) {
      // Case 10
      Scalar sqrt1mr2 = sqrt(1 - r2);
      Lambda1 = -2 * M_PI * sqrt1mr2 * sqrt1mr2 * sqrt1mr2;
      Eofk = 0.5 * M_PI;
      Em1mKdm = 0.25 * M_PI;
      if_constexpr(ComputeGradient) {
        // dsdb[1] = 0;
        dsdr[1] = -2.0 * M_PI * r * sqrt1mr2;
      }
    } else if (is_close<Scalar>(b, r)) {
      if (is_close<Scalar>(r, 0.5)) {
        // Case 6
        Lambda1 = M_PI - 4 * third;
        Eofk = 1;
        Em1mKdm = 1;
        if_constexpr(ComputeGradient) {
          dsdb[1] = 2.0 * third;
          dsdr[1] = -2.0;
        }
      } else if (r < 0.5) {
        // Case 5
        Scalar m = 4 * r2;
        Eofk = internal::ellip::CEL<Scalar>(m, 1, 1, 1 - m);
        Em1mKdm = internal::ellip::CEL<Scalar>(m, 1, 1, 0);
        Lambda1 = M_PI + 2.0 * third * ((2 * m - 3) * Eofk - m * Em1mKdm);
        if_constexpr(ComputeGradient) {
          dsdb[1] = -4.0 * r * third * (Eofk - 2 * Em1mKdm);
          dsdr[1] = -4.0 * r * Eofk;
        }
      } else {
        // Case 7
        Scalar m = 4 * r2;
        Scalar minv = 1 / m;
        Eofk = internal::ellip::CEL<Scalar>(minv, 1, 1, 1 - minv);
        Em1mKdm = internal::ellip::CEL<Scalar>(minv, 1, 1, 0);
        Lambda1 = M_PI + third * invr * (-m * Eofk + (2 * m - 3) * Em1mKdm);
        if_constexpr(ComputeGradient) {
          dsdb[1] = 2 * third * (2 * Eofk - Em1mKdm);
          dsdr[1] = -2 * Em1mKdm;
        }
      }
    } else {
      if (ksq < 1) {
        // Case 2, Case 8
        Scalar sqbrinv = 1 / sqbr;
        Scalar Piofk;
        internal::ellip::CEL<Scalar>(ksq, kc, (b - r) * (b - r) * kcsq, 0, 1, 1,
                                     3 * kcsq * (b - r) * (b + r), kcsq, 0, Piofk, Eofk, Em1mKdm);
        Lambda1 = onembmr2 * (Piofk + (-3 + 6 * r2 + 2 * b * r) * Em1mKdm - fourbr * Eofk) *
                  sqbrinv * third;
        if_constexpr(ComputeGradient) {
          dsdb[1] = 2 * r * onembmr2 * (-Em1mKdm + 2 * Eofk) * sqbrinv * third;
          dsdr[1] = -2 * r * onembmr2 * Em1mKdm * sqbrinv;
        }
      } else if (ksq > 1) {
        // Case 3, Case 9
        Scalar bmrdbpr = (b - r) / (b + r);
        Scalar mu = 3 * bmrdbpr * onembmr2inv;
        Scalar p = bmrdbpr * bmrdbpr * onembpr2 * onembmr2inv;
        Scalar Piofk;
        internal::ellip::CEL<Scalar>(invksq, kc, p, 1 + mu, 1, 1, p + mu, kcsq, 0, Piofk, Eofk,
                                     Em1mKdm);
        Lambda1 = 2 * sqonembmr2 * (onembpr2 * Piofk - (4 - 7 * r2 - b2) * Eofk) * third;
        if_constexpr(ComputeGradient) {
          dsdb[1] = -4 * r * third * sqonembmr2 * (Eofk - 2 * Em1mKdm);
          dsdr[1] = -4 * r * sqonembmr2 * Eofk;
        }
      } else {
        // Case 4
        Scalar rootr1mr = sqrt(r * (1 - r));
        Lambda1 = 2 * acos(1.0 - 2.0 * r) - 4 * third * (3 + 2 * r - 8 * r2) * rootr1mr -
                  2 * M_PI * int(r > 0.5);
        Eofk = 1;
        Em1mKdm = 1;
        if_constexpr(ComputeGradient) {
          dsdr[1] = -8 * r * rootr1mr;
          dsdb[1] = -dsdr[1] * third;
        }
      }
    }
  }
  s[1] = ((1.0 - int(r > b)) * 2 * M_PI - Lambda1) * third;

  // Special case
  if (is_close<Scalar>(b, 0)) {
    s[2] = -(1 - r2) * r2 * 2 * M_PI;
    if_constexpr(ComputeGradient) {
      // dsdb[2] = 0;
      dsdr[2] = -4 * M_PI * r;  //* (term - r * r);
    }
    return;
  }

  // Compute the quadratic term
  Scalar r2pb2 = (r2 + b2);
  Scalar eta2 = 0.5 * r2 * (r2pb2 + b2);
  Scalar four_pi_eta = 0;
  Scalar detadb = 0, detadr = 0;
  if (ksq > 1) {
    four_pi_eta = 4 * M_PI * (eta2 - 0.5);
    if_constexpr(ComputeGradient) {
      Scalar deta2dr = 2 * r * r2pb2;
      Scalar deta2db = 2 * b * r2;
      detadr = 4 * M_PI * deta2dr;
      detadb = 4 * M_PI * deta2db;
    }
  } else {
    four_pi_eta = 2 * (-(M_PI - kap1) + 2 * eta2 * kap0 - 0.25 * kite_area2 * (1.0 + 5 * r2 + b2));
    if_constexpr(ComputeGradient) {
      detadr = 8 * r * (r2pb2 * kap0 - kite_area2);
      detadb = 2.0 * invb * (4 * b2 * r2 * kap0 - (1 + r2pb2) * kite_area2);
    }
  }
  s[2] = 2 * s[0] + four_pi_eta;
  if_constexpr(ComputeGradient) {
    dsdb[2] = 2 * dsdb[0] + detadb;
    dsdr[2] = 2 * dsdr[0] + detadr;
  }
}

}  // namespace limbdark
}  // namespace exoplanet

#endif
