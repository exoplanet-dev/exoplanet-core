# -*- coding: utf-8 -*-

__all__ = ["asarray"]

import theano
import theano.tensor as tt


def asarray(a, dtype=None, order=None):
    if dtype is None:
        dtype = theano.config.floatX
    return tt.as_tensor_variable(a).astype(dtype)
