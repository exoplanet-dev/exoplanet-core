FROM nvidia/cuda:12.3.2-cudnn9-devel-ubuntu22.04

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
  git \
  python3-pip \
  cmake \
  && \
  apt-get autoremove --purge -y && \
  apt-get autoclean -y && \
  rm -rf /var/cache/apt/* /var/lib/apt/lists/*

RUN nvcc --version

RUN python3 -m pip install -U pip && \
  python3 -m pip install -U pytest && \
  python3 -m pip install -U "jax[cuda12]"
