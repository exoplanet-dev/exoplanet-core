# -*- coding: utf-8 -*-

__all__ = ["kepler", "quad_solution_vector"]

from itertools import chain

import aesara_theano_fallback.tensor as tt
import numpy as np
from aesara_theano_fallback import aesara
from aesara_theano_fallback.graph import basic, op

from .. import driver


def as_tensor_variable(x, dtype="float64", **kwargs):
    t = tt.as_tensor_variable(x, **kwargs)
    if dtype is None:
        return t
    return t.astype(dtype)


def resize_or_set(outputs, n, shape, dtype=np.float64):
    if outputs[n][0] is None:
        outputs[n][0] = np.empty(shape, dtype=dtype)
    else:
        outputs[n][0] = np.ascontiguousarray(
            np.resize(outputs[n][0], shape), dtype=dtype
        )
    return outputs[n][0]


# **********
# * KEPLER *
# **********
class Kepler(op.Op):
    r"""Solve Kepler's equation

    This op numerically evaluates the solution to Kepler's equation for given
    mean anomaly ``M`` and eccentricity ``e``:

    .. math::

        M = E - e sin(E)

    For computational efficiency this op actually returns ``cos(f)`` and
    ``sin(f)``, where ``f`` is the true anomaly, defined as

    .. math::

        f = 2\,\arctan\left(\sqrt{\frac{1 + e}{1 - e}}\,\tan\frac{E}{2}\right)

    Args:
        mean_anomaly: The mean anomaly
        eccentricity: Eccentricity, like it says on the box

    Returns:
        (cos(f), sin(f)): The cosine and sine of the true anomaly ``f``.

    """
    __props__ = ()

    def make_node(self, M, ecc):
        in_args = [as_tensor_variable(M), as_tensor_variable(ecc)]
        if any(i.dtype != "float64" for i in in_args):
            raise ValueError("float64 precision is required")
        out_args = [in_args[0].type(), in_args[0].type()]
        return basic.Apply(self, in_args, out_args)

    def infer_shape(self, *args):
        return args[-1]

    def perform(self, node, inputs, outputs):
        M, ecc = inputs
        sinf = resize_or_set(outputs, 0, M.shape)
        cosf = resize_or_set(outputs, 1, M.shape)
        driver.solve_kepler(M, ecc, sinf, cosf)

    def grad(self, inputs, gradients):
        M, e = inputs
        sinf, cosf = self(M, e)

        ecosf = e * cosf
        ome2 = 1 - e ** 2
        dfdM = (1 + ecosf) ** 2 / ome2 ** 1.5
        dfde = (2 + ecosf) * sinf / ome2

        bM = tt.zeros_like(M)
        be = tt.zeros_like(M)
        if not isinstance(gradients[0].type, aesara.gradient.DisconnectedType):
            bM += gradients[0] * cosf * dfdM
            be += gradients[0] * cosf * dfde

        if not isinstance(gradients[1].type, aesara.gradient.DisconnectedType):
            bM -= gradients[1] * sinf * dfdM
            be -= gradients[1] * sinf * dfde

        return [bM, be]

    def R_op(self, inputs, eval_points):
        if eval_points[0] is None:
            return eval_points
        return self.grad(inputs, eval_points)


kepler = Kepler()


# **********
# * STARRY *
# **********
class QuadSolutionVector(op.Op):
    r"""Compute the "solution vector" for a quadratic limb-darkening model

    Note that you probably don't ever want to directly instantiate this op.
    Use ``exoplanet_core.pymc.ops.quad_solution_vector`` instead.

    This will return a tensor with an extra dimension of size 3 on the right
    hand side which represents the solution vector for each pair of impact
    parameter ``b`` and radius ratio ``r`` values. See `Agol+ (2020)
    <https://arxiv.org/abs/1908.03222>`_ for more details.

    Args:
        b: The impact parameter
        r: The radius ratio

    Returns:
        (s, dsdb, dsdr): The solution vector and its first derivatives. Each
            will have the shape ``[..., 3]``, where ``...`` indicates the shape
            of ``b`` or ``r``.

    """
    __props__ = ()

    def make_node(self, b, r):
        in_args = [as_tensor_variable(b), as_tensor_variable(r)]
        if any(i.dtype != "float64" for i in in_args):
            raise ValueError("float64 precision is required")
        x = in_args[0]
        o = [
            tt.tensor(
                broadcastable=tuple(x.broadcastable) + (False,),
                dtype=x.dtype,
            )
            for _ in range(3)
        ]
        return basic.Apply(self, in_args, o)

    def infer_shape(self, *args):
        shapes = args[-1]
        shape = tuple(shapes[0]) + (3,)
        return shape, shape, shape

    def perform(self, node, inputs, outputs):
        b, r = inputs
        shape = b.shape + (3,)
        s = resize_or_set(outputs, 0, shape)
        dsdb = resize_or_set(outputs, 1, shape)
        dsdr = resize_or_set(outputs, 2, shape)
        driver.quad_solution_vector_with_grad(b, r, s, dsdb, dsdr)

    def grad(self, inputs, gradients):
        b, r = inputs
        s, dsdb, dsdr = self(b, r)
        bs = gradients[0]

        for g in gradients[1:]:
            if not isinstance(g.type, aesara.gradient.DisconnectedType):
                raise ValueError(
                    "Backpropagation is only supported for the solution vector"
                )

        if isinstance(bs.type, aesara.gradient.DisconnectedType):
            return [
                aesara.gradient.DisconnectedType()(),
                aesara.gradient.DisconnectedType()(),
            ]

        return [tt.sum(bs * dsdb, axis=-1), tt.sum(bs * dsdr, axis=-1)]

    def R_op(self, inputs, eval_points):
        if eval_points[0] is None:
            return eval_points
        return self.grad(inputs, eval_points)


_quad_solution_vector = QuadSolutionVector()


def quad_solution_vector(b, r):
    return _quad_solution_vector(b, r)[0]


# ******************
# * CONTACT POINTS *
# ******************
class ContactPoints(op.Op):
    __props__ = ()

    def make_node(self, a, e, cosw, sinw, cosi, sini, L):
        in_args = list(
            map(as_tensor_variable, (a, e, cosw, sinw, cosi, sini, L))
        )
        if any(i.dtype != "float64" for i in in_args):
            raise ValueError("float64 precision is required")
        out_args = [
            in_args[0].type(),
            in_args[0].type(),
            tt.tensor(
                broadcastable=tuple(in_args[0].broadcastable),
                dtype="int32",
            ),
        ]
        return basic.Apply(self, in_args, out_args)

    def infer_shape(self, *args):
        shapes = args[-1]
        return (shapes[0], shapes[0], shapes[0])

    def perform(self, node, inputs, outputs):
        shape = inputs[0].shape
        M_left = resize_or_set(outputs, 0, shape)
        M_right = resize_or_set(outputs, 1, shape)
        flag = resize_or_set(outputs, 2, shape, dtype=np.int32)
        driver.contact_points(*chain(inputs, (M_left, M_right, flag)))


contact_points = ContactPoints()
