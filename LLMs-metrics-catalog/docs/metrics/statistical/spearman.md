---
id: spearman
title: Spearman’s ρ
sidebar_label: Spearman’s ρ
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Spearman’s ρ (rho), also referred to as Spearman’s rank correlation coefficient (rₛ), is a non-parametric statistical measure used to evaluate the strength and direction of a *monotonic relationship* between two ranked variables. Unlike Pearson’s r, it does not assume linearity, normality, or equal variances, making it suitable for ordinal data and non-linear relationships.  
In software engineering and LLM evaluation, Spearman’s ρ is widely used to measure how consistently automatic metrics rank model outputs compared with human judgments. A high ρ value indicates that two rankings (e.g., human preference vs. metric-based ordering) follow the same relative order.

## Formula

For data without significant ties, Spearman’s ρ is computed as:

$$
\rho = 1 - \frac{6 \sum_{i=1}^{n} d_i^2}{n(n^2 - 1)}
$$

Where:  
- $d_i$ is the rank difference of the $i$-th pair,  
- $n$ is the number of paired observations.

When ties are present, Spearman’s ρ is defined as the Pearson correlation coefficient between the *rank-transformed variables*:

$$
\rho = \frac{\mathrm{cov}(rg_X,\, rg_Y)}{\sigma_{rg_X}\,\sigma_{rg_Y}}
$$

This formulation, also discussed in Xu et al. (2010), generalizes Spearman’s ρ to datasets where ranks are not strictly unique.

## Variants
- *Spearman’s rₛ:* Traditional notation for the coefficient based on ranked data.  
- *Spearman’s ρ:* Formal statistical notation used interchangeably with rₛ in empirical evaluation studies.

Both formulations refer to the same underlying measure.


## Applications in Software Engineering
Spearman’s ρ has been used across multiple SE and LLM evaluation benchmarks to examine the *rank-level agreement* between automated metrics and human evaluators.  
Within the broader SE literature (e.g., references 11, 12, 24, 37, 40 in the dataset), it is applied to:

- *Human–metric correlation:* Measuring how well a metric’s rankings of generated code or summaries align with human preferences.  
- *Metric comparison:* Comparing the ordering induced by metrics such as BLEU, CodeBLEU, or Pass@k against human correctness ratings.  
- *Benchmark-level ranking stability:* Evaluating whether different metrics rank LLMs consistently across tasks such as code generation, summarization, and explanation.

Although the Xu et al. (2010) paper focuses on theoretical properties of correlation coefficients, Spearman’s ρ is frequently adopted in SE evaluation settings for its robustness to non-linear relationships between predicted metric scores and human judgments.


## Interpretation
For software engineering evaluation:

- *ρ close to +1:* Strong positive monotonic relationship — metric and human rankings agree.  
- *ρ around 0:* No monotonic relationship — rankings are unrelated.  
- *ρ close to –1:* Strong negative monotonic relationship — rankings move in opposite directions.

Because it does not assume linearity, Spearman’s ρ is often preferred over Pearson’s r when dealing with ordinal human ratings, non-linear relationships between metric scores and correctness, or heterogeneous metric scales.


## References
1. Xu, W., Hou, Y., Hung, Y. S., & Zou, Y. (2010). Comparison of Spearman's rho and Kendall's tau in Normal and Contaminated Normal Models.  
[https://doi.org/10.48550/arXiv.1011.2009](https://doi.org/10.48550/arXiv.1011.2009)

### Additional References in Dataset
- <ReferencesIndex ids={['11','12','24','37','40']} />