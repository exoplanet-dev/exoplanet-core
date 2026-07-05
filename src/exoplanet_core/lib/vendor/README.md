# Vendored headers

## `xla/ffi/api`

The XLA FFI API headers, copied unmodified from the `jaxlib` 0.10.2 wheel
(`jaxlib/include/xla/ffi/api/`). These are the self-contained, header-only
C/C++ interface for defining XLA custom call handlers, licensed under
Apache-2.0 by the OpenXLA authors:

https://github.com/openxla/xla/tree/main/xla/ffi/api

The FFI C API is versioned and designed to be forward- and
backward-compatible, so these headers do not need to track jaxlib releases
closely. To refresh them, copy the files from
`python -c "import jax.ffi; print(jax.ffi.include_dir())"` in an environment
with a newer jaxlib.
