---
id: cpu
title: CPU Utilization
sidebar_label: CPU Utilization
---

## Introduction
CPU Utilization is a performance and efficiency metric that quantifies how effectively the computational resources of a Central Processing Unit (CPU) are used during Large Language Model inference or code execution.  
In the context of LLM evaluation, it measures the percentage of CPU cycles actively processing tokens versus idle or waiting states, serving as a critical indicator of inference throughput, latency, and energy efficiency.

This metric was emphasized by Chen et al. (2025) in A Survey on Evaluating Large Language Models in Code Generation Tasks, where CPU utilization, execution time, and energy consumption were introduced as part of performance and efficiency evaluation metrics within EffiBench and Mercury frameworks.  
*Ditto et al. (2024)* later operationalized this metric in Inference Acceleration for Large Language Models on CPUs, demonstrating its role in optimizing LLM inference performance through parallelization, batching, and NUMA node isolation.

## Formula and Computation  

CPU utilization is defined as the proportion of time the CPU spends executing active processes relative to the total available processing time:

$$
\text{CPU Utilization} (\%) = \frac{T_\text{active}}{T_\text{total}} \times 100
$$

Where:  
- $T_\text{active}$ = time spent performing active computation (e.g., matrix multiplications, token generation).  
- $T_\text{total}$ = total wall-clock time of the inference session.

For LLM-specific evaluations, CPU utilization is often correlated with:
- *Processed Token Throughput* (tokens/sec processed)  
- *Generated Token Throughput* (tokens/sec emitted)  
- *Execution Time* (total inference duration)  
- *Energy per 1k Tokens* (Watt-hours per 1,000 tokens)

These metrics together describe both computational efficiency and environmental impact during LLM inference.

## Evaluation Context  

CPU-based inference metrics are typically integrated into *EffiBench* and *Mercury*, two major benchmarking frameworks for LLM-generated code efficiency:

| Benchmark | Metric Components | Description |
|------------|-------------------|--------------|
| *EffiBench (Huang et al., 2024)* | Execution Time, Memory Usage, CPU Utilization, Code Complexity | Assesses code efficiency and runtime behavior of LLM outputs in standardized environments. |
| *Mercury (Du et al., 2024)* | Execution Time, Memory Usage, Energy Consumption, CPU Utilization | Focuses on real execution performance, measuring total compute and energy cost. |

Both frameworks use CPU utilization as a measure of how efficiently LLM-generated code or inference processes use available computational resources.

## Application in LLM Inference  

*Ditto et al. (2024)* propose a practical implementation for CPU-based inference metrics using *Intel® Xeon® Scalable Processors*.  
Their study introduced the Bud Inference Engine, a parallelized framework achieving up to *22× improvement* in generated tokens/sec on CPUs compared to baseline runs, with *~49% lower power consumption* versus GPU-based inference.

### Example Metrics (4th Gen Intel Xeon Scalable Processor)
| Model | vCPU | Processed Tokens/s | Generated Tokens/s | CPU Utilization | Power (1k tokens) |
|--------|-------|------------------|--------------------|-----------------|-------------------|
| bigcode/starcoderbase-3B | 32 | 992.36 | 167.58 |  ≈ 85 % |  613 W |
| CodeLlama-7B (hf) | 32 | 593.74 | 93.69 |  ≈ 82 % |  — |
| LLaMA-2-7B (hf) | NUMA × 4 | 1852.32 | 305.30 |  > 90 % |  — |

Higher CPU utilization correlates with improved throughput and reduced latency, particularly when inference workloads are distributed across NUMA nodes and optimized with AVX/AMX instructions.


## Interpretation  

High CPU utilization in LLM inference indicates:
- Efficient batching and memory management (reduced fragmentation).  
- Balanced load across CPU cores (parallel token generation).  
- Lower energy cost per token generated.  
- Increased throughput (tokens/sec) without significant latency penalties.
However, over-utilization (>95 %) may indicate CPU saturation, potentially causing thermal throttling or degraded latency under concurrent workloads.


## Relation to Other Metrics  

| Metric | Focus | Relationship to CPU Utilization |
|---------|--------|--------------------------------|
| *Execution Time* | Total time to process an input | Inversely proportional under fixed load |
| *Memory Usage* | RAM consumption during inference | Often correlated; inefficient memory allocation lowers CPU utilization |
| *Energy Consumption* | Power cost per operation | Positively correlated; higher utilization can mean better performance per watt |
| *Throughput (tokens/s)* | Number of tokens processed per second | Directly proportional; core efficiency indicator |

## Advantages  
- Quantifies *hardware efficiency* beyond correctness metrics (e.g., Pass@k, BLEU).  
- Enables *sustainable evaluation*, connecting compute usage to environmental cost.  
- Offers a *hardware-agnostic benchmark* for CPU-based deployments (Xeon, EPYC, ARM).  

## Limitations  
- Results depend heavily on hardware architecture (e.g., number of cores, memory bandwidth).  
- High utilization does not always translate to low latency in small-batch settings.  
- Not directly comparable to GPU metrics due to architectural differences (parallel vs SIMD).  

## References  

1. *Ditto P. S., Jithin V. G., & Adarsh M. S. (2024).* Inference Acceleration for Large Language Models on CPUs.
   [https://arxiv.org/abs/2406.07553](https://arxiv.org/abs/2406.07553)

2. *Chen, L., Guo, Q., Jia, H., Zeng, Z., Wang, X., et al. (2025).* A Survey on Evaluating Large Language Models in Code Generation Tasks. 
[https://arxiv.org/abs/2408.16498](https://arxiv.org/abs/2408.16498)

3. *Huang, D., Zhang, J. M., Qing, Y., & Cui, H. (2024).* EffiBench: Benchmarking the Efficiency of Automatically Generated Code. 
[https://doi.org/10.48550/arXiv.2402.02037](https://doi.org/10.48550/arXiv.2402.02037)

4. *Du, M., Luu, A. T., Ji, B., & Ng, S. K. (2024).* Mercury: A Code Efficiency Benchmark for Code Large Language Models. [https://doi.org/10.48550/arXiv.2402.07844](https://doi.org/10.48550/arXiv.2402.07844)  
