# -*- coding: utf-8 -*-

__all__ = ["ops"]


def __set_compiler_flags():
    import aesara

    def add_flag(current, new):
        if new in current:
            return current
        return f"{current} {new}"

    current = aesara.config.gcc__cxxflags
    current = add_flag(current, "-Wno-c++11-narrowing")
    current = add_flag(current, "-fno-exceptions")
    current = add_flag(current, "-fno-unwind-tables")
    current = add_flag(current, "-fno-asynchronous-unwind-tables")
    aesara.config.gcc__cxxflags = current


__set_compiler_flags()


from exoplanet_core.pymc4 import ops

try:
    from exoplanet_core.pymc4 import jax_support  # noqa
except ImportError:
    pass
