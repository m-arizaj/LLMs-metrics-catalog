---
id: time
title: Time Metrics
sidebar_label: Time Metrics
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Time-based metrics measure the temporal efficiency of Large Language Models (LLMs) and software engineering systems during code generation, testing, or execution. These metrics capture how quickly a model performs inference, generates code, executes tests, or completes a task. They are central to evaluating performance, efficiency, and resource utilization, particularly when balancing speed against quality or correctness.
Time metrics include Execution Time, Runtime, Latency, Response Time, Task Completion Time, and Timeout Ratios, each emphasizing a different aspect of performance in LLM-based software engineering tasks.

## Formula and Structure
There is no single formula for runtime metrics; rather, they rely on direct measurement of elapsed time across specific operational phases.  
Common representations include:
- *Execution Time ($Tₑ$):*  
  $$ Tₑ = t_{end} - t_{start} $$  
  Measures total time for code execution or inference.
- *Runtime per Token ($Rₜ$):*  
  $$ Rₜ = \frac{T_{total}}{N_{tokens}} $$  
  Evaluates per-token generation speed.
- *Latency ($L$):*  
  Time delay between input submission and the first output token.  
  $$ L = t_{first output} - t{input} $$
- *Average Normalized Runtime:*  
  Mean runtime across benchmarks normalized by reference implementation or baseline model.  
  $$ \bar{T}{norm} = \frac{1}{n} \sum_i \frac{T_i}{T{baseline}} $$
- *Timeout Ratio:*  
  Proportion of tasks exceeding a predefined time threshold.  
  $$ TimeoutRatio = \frac{N_{timeouts}}{N_{total}} $$

### Derived Metrics from lm-Meter (Wang et al., 2025)
- *Phase-level latency profiling:* Embedding, prefill, decoding, sampling.  
- *Accuracy of latency measurement ($αₖ$):*  
  $$ αₖ = (1 - |t_{lm} - t_{GT}| / t_{GT}) \times 100\% $$  
- *Scaled Error Rate ($ε★ₖ$):*  
  $$ ε★ₖ = (10^3 Δₖ [μs]) / t_{GT} [ms] $$
These formulations provide detailed profiling at microsecond precision to assess performance bottlenecks.

## Variants
1. *Execution Time:* Measures overall duration of model execution or code runtime. [10,42] 
2. *Runtime / Average Normalized Runtime:* Focuses on total time for task completion, often normalized against a baseline. 
[21,38]  
3. *Latency:* Measures inference delay or reaction time during generation. [28]  
4. *Median Time to Generate Tests:* Used in test generation tasks. [64] 
5. *Response Time and Run Duration:* Applied in symbolic regression and evolutionary code generation benchmarks. [30] 
6. *Timeout Rate / Timeout Ratio:* Quantifies performance degradation when tasks exceed runtime limits. [20,31]
7. *Task Completion Time:* Measures end-to-end productivity for multi-step coding workflows. [19] 
8. *Average Refactoring Time:* Used in refactoring or code editing tasks to measure time efficiency. [18]  
9. *Time Taken:* Tracks total duration of automated program repair or specification synthesis. [65]

## Interpretation
Runtime-based metrics offer a direct measure of efficiency and responsiveness in LLM-assisted code generation.  
Lower runtime or latency values indicate higher efficiency but must be balanced against accuracy, correctness, and energy consumption.  
In software engineering contexts:
- Low Execution Time or Latency → Efficient model inference or code execution.  
- High Timeout Ratios → Potential inefficiencies or unoptimized model reasoning.  
- Average Refactoring Time and Task Completion Time provide insights into productivity, reflecting user or system-level efficiency.  
Recent studies such as lm-Meter (Wang et al., 2025) emphasize detailed profiling of on-device inference latency, enabling deeper understanding of phase-level bottlenecks and trade-offs between quality and performance.

## References
1. Wang, H., Tu, X., Ke, H., Chai, H., Chen, D., & Han, K. (2025).  
   *lm-Meter: Unveiling Runtime Inference Latency for On-Device Language Models.*  
   arXiv preprint. https://arxiv.org/abs/2510.06126  

### Additional References in Dataset
- <ReferencesIndex ids={['10','18','19','20','21','28','30','31','38','42','64','65']} />