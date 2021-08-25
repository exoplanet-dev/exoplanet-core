from scipy.special import roots_legendre

orders = [3, 4, 5, 10, 11, 50, 51]

for n in orders:
    roots, weights = roots_legendre(n)
