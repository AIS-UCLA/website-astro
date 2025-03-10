---
layout: ../../layouts/SimpleLayout.astro
title: CUDA Track
---

# AI Safety Upskilling: CUDA Track

## Table of Contents

1. [Week 1: Intro to GPUs and writing your first kernel!](#week-1-intro-to-gpus-and-writing-your-first-kernel)
2. [Week 2 and 3: Learning to optimize your kernels!](#week-2-and-3-learning-to-optimize-your-kernels)
3. [Week 4 and 5: Learning to optimize with Tensor Cores!](#week-4-and-5-learning-to-optimize-with-tensor-cores)
4. [Week 6: Exploring other optimization parallel techniques!](#week-6-exploring-other-optimization-parallel-techniques)
5. [Week 7 & 8: Putting it all together in Flash Attention](#week-7--8-putting-it-all-together-in-flash-attention)

## Assignments
1. [Assignment 1: Puzzle Extravaganza](https://github.com/AIS-UCLA/cuda-track/tree/main/assign1)
2. [Assignment 2 Part 1: Implementing SGEMM Kernels](https://github.com/AIS-UCLA/cuda-track/tree/main/assign2_pt1)
3. [Assignment 2 Part 2: Implementing HGEMM Kernels](https://github.com/AIS-UCLA/cuda-track/tree/main/assign2_pt2)
4. [Assignment 3: CUDA Softmax: You're too slow!](https://github.com/AIS-UCLA/cuda-track/tree/main/assign3)
5. [Assignment 4: Running GPT2 inference w/ Flash Attention](https://github.com/AIS-UCLA/cuda-track/tree/main/assign4)

## Week 1: Intro to GPUs and writing your first kernel!
![gpu-devotes-more-transistors-to-data-processing](https://github.com/user-attachments/assets/2aca8245-ad88-4613-8b73-f94ad395edf4)

#### Can you guess which architecture more closely resembles a CPU? What about a GPU?
### Recommended Readings:
[Motivation for GPUs in Deep Learning](https://horace.io/brrr_intro.html)\
[A gentle introduction to CUDA](https://developer.nvidia.com/blog/even-easier-introduction-cuda/)
### Further resources/references to use:
[PMPP Book Access](https://dokumen.pub/qdownload/programming-massively-parallel-processors-a-hands-on-approach-4nbsped-9780323912310.html)\
[NVIDIA GPU Glossary](https://modal.com/gpu-glossary/device-hardware)

## Week 2 and 3: Learning to optimize your kernels! 
![gemm1](https://github.com/user-attachments/assets/d0349f57-d436-459e-920f-5b445a3771fa)

#### From the image, how many FLOPS (floating point operations) are in matrix multiplication?

### Recommended Readings: 
[Aalto University's Course on GPU Programming](https://ppc.cs.aalto.fi/ch4/)\
[Simon's Blog on SGEMM (Kernels 1-5 are the most relevant for the assignment)](https://siboehm.com/articles/22/CUDA-MMM)\
[How to use NCU profiler](https://www.youtube.com/watch?v=04dJ-aePYpE)

### Further references to use:
[NCU Documentation](https://docs.nvidia.com/nsight-compute/NsightCompute/index.html)

## Week 4 and 5: Learning to optimize with Tensor Cores!
![Tensor-Core-Matrix](https://github.com/user-attachments/assets/d6209037-dd9b-4285-b71e-d3df5184ea2a)
#### How much faster are Tensor Core operations compared to F32 CUDA Cores?

### Recommended Readings:
[Alex Armbruster's Blog on HGEMM](https://alexarmbr.github.io/2024/08/10/How-To-Write-A-Fast-Matrix-Multiplication-From-Scratch-With-Tensor-Cores.html)\
[Bruce's Blog on HGEMM](https://bruce-lee-ly.medium.com/nvidia-tensor-core-cuda-hgemm-advanced-optimization-5a17eb77dd85)\
[NVIDIA's Presentation on A100 Tensor Cores](https://developer.download.nvidia.com/video/gputechconf/gtc/2020/presentations/s21745-developing-cuda-kernels-to-push-tensor-cores-to-the-absolute-limit-on-nvidia-a100.pdf)

### Further references to use:
[Primer on Inline PTX Assembly](https://docs.nvidia.com/cuda/pdf/Inline_PTX_Assembly.pdf)\
[CUTLASS GEMM Documentation](https://github.com/NVIDIA/cutlass/blob/main/media/docs/implicit_gemm_convolution.md#shared-memory-layouts)\
[NVIDIA PTX ISA Documentation (Chapter 9.7 is most relevant)](https://docs.nvidia.com/cuda/parallel-thread-execution/index.html?highlight=mma#)

## Week 6: Exploring other optimization parallel techniques!
![reduction](https://github.com/user-attachments/assets/fadec7b2-eedb-44c2-9918-07f81a0b1604)

#### How could we compute the sum of all the elements in a 1-million sized vector?


### Recommended Readings:
[Primer on Parallel Reduction](https://developer.download.nvidia.com/assets/cuda/files/reduction.pdf)\
[Warp level Primitives](https://developer.nvidia.com/blog/using-cuda-warp-level-primitives/)\
[Vectorization](https://developer.nvidia.com/blog/cuda-pro-tip-increase-performance-with-vectorized-memory-access/)\
[Efficient Softmax Kernel](https://oneflow2020.medium.com/how-to-implement-an-efficient-softmax-cuda-kernel-oneflow-performance-optimization-sharing-405ad56e9031)\
[Online Softmax Paper](https://arxiv.org/pdf/1805.02867)

## Week 7 & 8: Putting it all together in Flash Attention
![flash-att](https://github.com/user-attachments/assets/9a1df84b-f36d-41a9-bf01-b8cd27a32fa5)

#### Is the self-attention layer in LLMs compute-bound or memory-bound?

### Recommended Readings:
[Flash Attention V1 Paper](https://arxiv.org/pdf/2205.14135)\
[Aleksa Gordic's Flash Attention Blog](https://gordicaleksa.medium.com/eli5-flash-attention-5c44017022ad)



