FROM nvidia/cuda:11.4.2-cudnn8-devel-ubuntu20.04

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
  git \
  python3-pip \
  && \
  apt-get autoremove --purge -y && \
  apt-get autoclean -y && \
  rm -rf /var/cache/apt/* /var/lib/apt/lists/*

RUN nvcc --version

RUN python3 -m pip install -U pip && \
  python3 -m pip install pytest && \
  python3 -m pip install -U "jax==0.3.8" "jaxlib==0.3.8+cuda11.cudnn82" -f https://storage.googleapis.com/jax-releases/jax_releases.html
