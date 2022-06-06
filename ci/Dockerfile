FROM nvidia/cuda:11.4.2-cudnn8-devel-ubuntu18.04

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
  git \
  python3-pip \
  && \
  apt-get autoremove --purge -y && \
  apt-get autoclean -y && \
  rm -rf /var/cache/apt/* /var/lib/apt/lists/*

RUN python3 -m pip install -U pip && \
  python3 -m pip install pytest && \
  python3 -m pip install -U "jax[cuda]" -f https://storage.googleapis.com/jax-releases/jax_releases.html
