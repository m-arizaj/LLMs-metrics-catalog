---
id: percentage
title: Percentage Metrics
sidebar_label: Percentage Metrics
---

## Introduction
Percentage-based metrics quantify evaluation results as proportions or rates, representing the share of successful, applied, or authentic outputs relative to all generated samples. They are frequently used in program repair, robustness evaluation, and generative authenticity assessment to provide interpretable success ratios.

## Key Metrics

### 1. %Resolved
Measures the proportion of tasks correctly fixed by a model in program repair benchmarks such as SWE-bench and SWE-bench Lite.  
$$
\%Resolved = \frac{N_{resolved}}{N_{total}} \times 100
$$
It reflects execution-based functional success—whether the generated patch resolves all failing tests.

### 2. %Apply
Indicates the applicability of generated patches or code edits.  
$$
\%Apply = \frac{N_{applicable}}{N_{total}} \times 100
$$
Used to track if candidate fixes can be integrated without breaking compilation or dependencies.

### 3. %Breaking Resolved / %Partially Resolved
Represents finer-grained repair success, differentiating between fully and partially fixed issues.  
Useful for analyzing intermediate improvements in patch quality.

### 4. Drop%
Adopted in ReCode (2024), Drop% quantifies robustness degradation — the proportion of performance lost under perturbation.  
$$
Drop\% = \frac{Score_{baseline} - Score_{perturbed}}{Score_{baseline}} \times 100
$$

### 5. AuthPct (Percentage of Authentic Samples)
Used in generative image or text models (CIFAR10, ImageNet1k, FFHQ, LSUN-Bedroom).  
Measures how many outputs are classified as authentic or human-like by a discriminator.  
$$
AuthPct = \frac{N_{authentic}}{N_{generated}} \times 100
$$


## Interpretation
Percentage metrics provide direct interpretability and task-specific flexibility:  
- In software repair, %Resolved reflects the model’s functional reliability.  
- In robustness testing, Drop% captures resilience under noise or perturbations.  
- In generative evaluation, AuthPct represents realism or fidelity.  

They are complementary to absolute metrics like Accuracy or BLEU, since they express performance as a relative share, easily comparable across tasks and datasets.


## References in Database
- 14, 27, 67