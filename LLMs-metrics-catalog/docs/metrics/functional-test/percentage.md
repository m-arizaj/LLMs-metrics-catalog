---
id: percentage
title: Percentage Metrics
sidebar_label: Percentage Metrics
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Percentage-based metrics quantify evaluation outcomes as proportions or rates, expressing the share of successful, applicable, or authentic outputs relative to all evaluated samples. These metrics appear widely in software engineering tasks—especially program repair, robustness evaluation, and generative model analysis—because they provide interpretable ratios that summarize how often a system behaves correctly or reliably.

## Key Metrics

### 1. %Resolved
Used in program-repair benchmarks such as *SWE-bench* and *SWE-bench Lite*, %Resolved measures the proportion of problems for which the generated patch passes all tests.  
$$
\%Resolved = \frac{N_{resolved}}{N_{total}} \times 100
$$
This metric captures functional correctness, as a task is only counted as resolved when all target behaviors are satisfied.

### 2. %Apply
Represents the proportion of generated patches that can be applied without breaking compilation or dependencies.  
$$
\%Apply = \frac{N_{applicable}}{N_{total}} \times 100
$$
It reflects structural validity and integration feasibility, distinguishing syntactically valid patches from those that cannot be applied.

### 3. Drop%
In robustness evaluation—such as *ReCode* and *CodeFort*—Drop% quantifies the relative performance degradation under semantic-preserving perturbations.  
$$
Drop\% = \frac{Score_{baseline} - Score_{perturbed}}{Score_{baseline}} \times 100
$$
This metric is used to report robustness drop rates, particularly under code-syntax perturbations that strongly affect code-generation models.

### 4. AuthPct (Percentage of Authentic Samples)
Derived from generative-model evaluation literature, including large-scale perceptual studies, AuthPct measures the proportion of generated samples classified as authentic or realistic by a discriminator or by human-aligned evaluators.  
$$
AuthPct = \frac{N_{authentic}}{N_{generated}} \times 100
$$
It captures perceptual realism: how often generated images (or text/code variants) resemble genuine samples from the target distribution.

## Interpretation
Percentage metrics provide directly interpretable, task-specific measures of model performance:

- In *software repair*, %Resolved indicates functional reliability, while %Apply measures whether outputs can even be used.  
- In *robustness evaluation*, Drop% quantifies how severely perturbations degrade performance.  
- In *generative evaluation*, AuthPct reflects the realism and authenticity of produced samples.

Because these metrics express outcomes as ratios, they facilitate comparison across heterogeneous tasks, datasets, and models, complementing absolute metrics such as accuracy or distance-based similarity scores.


## References
- <ReferencesIndex ids={['14']} />: Jimenez et al. (2023). SWE-bench: A Benchmark for Systematic Evaluation of Code Generation Systems. 
- <ReferencesIndex ids={['27']} />: Zhang et al. (2024). CodeFort: Robust Training for Code Generation Models. EMNLP Findings 2024.
- <ReferencesIndex ids={['67']} />: Stein et al. (2023). Exposing Flaws of Generative Model Evaluation Metrics and Their Unfair Treatment of Diffusion Models. NeurIPS 2023.