# -*- coding: utf-8 -*-

__all__ = ["asarray"]

import aesara_theano_fallback.tensor as tt
from aesara_theano_fallback import aesara


def asarray(a, dtype=None, order=None):
    if dtype is None:
        dtype = aesara.config.floatX
    return tt.as_tensor_variable(a).astype(dtype)
