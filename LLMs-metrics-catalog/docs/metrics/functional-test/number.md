---
id: number
title: Number Metrics
sidebar_label: Number Metrics
---
import { ReferencesIndex } from '@site/src/components/References';

# Number Metrics

## Introduction
Number-based metrics quantify model performance or efficiency through discrete counts, such as executed instructions, iterations, or user–model interactions. They provide a transparent measure of computational effort, optimization behavior, and feedback efficiency, especially relevant in code repair, LLM evaluation, and interactive programming tasks.

## Key Metrics

### 1. Number of Executed Instructions
Used in the EVALPERF (2024) benchmark, this metric represents the number of machine instructions executed between two program points.  EVALPERF obtains this value directly from hardware performance counters, which provide high reproducibility and low measurement overhead. A lower number of executed instructions generally indicates more efficient execution, although values may differ across hardware platforms due to architectural variation.


### 2. Number of Iterations
Applied in *ARepair* and *Alloy4Fun (2025)* benchmarks to assess iterative repair or synthesis processes. (Alhanahnah, M. et al, 2025)  
$$
Iter_{count} = \sum_{t=1}^{T} 1
$$
It captures how many iterations a system requires to reach a valid or repaired solution,  
serving as a direct indicator of convergence speed and algorithmic efficiency.


### 3. Number of Messages (with Feedback)
Introduced in *Coello, C. E. A et al (2024)*, this metric tracks how many model–user message exchanges occur before reaching a correct solution.  
$$
Msg_{count} = \text{Total interactions until correct output}
$$
It measures feedback efficiency, highlighting the model’s ability to learn or adapt through user guidance.


## Interpretation
Number metrics serve as process-oriented indicators:
- In code generation, they indicate computational effort by reporting the number of executed machine instructions.  
- In program repair, they reflect algorithmic convergence (iterations).  
- In LLM feedback tasks, they indicate interaction efficiency (messages).  
Collectively, they reveal how much computational or conversational effort is required for models to produce successful outcomes,  
offering a crucial complement to accuracy-based or functional metrics.

## References in Dataset
- <ReferencesIndex ids={['39','41','65']} />