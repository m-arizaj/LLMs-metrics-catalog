---
id: spearman
title: Spearman’s ρ
sidebar_label: Spearman’s ρ
---

## Introduction
Spearman’s ρ (rho), also known as Spearman’s rank correlation coefficient (rs), is a non-parametric statistical measure that evaluates the monotonic relationship between two ranked variables.  
Unlike Pearson’s r, it does not assume linearity or normal distribution, making it suitable for ordinal or non-linear data.
In software engineering, Spearman’s ρ is commonly used to assess the consistency between automatic metrics and human judgments in tasks such as code generation, summarization, or LLM-based evaluation. A high ρ value indicates that both rankings (for instance, human and metric-based) are similarly ordered.


## Formula

Spearman’s ρ is calculated as:

$$
ρ = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)}
$$

Where:  
- di is the difference between the ranks of each paired observation.  
- n is the total number of observations.  

When ties are present, a generalized version of the formula applies, defined as the Pearson correlation of the ranked variables:

$$
ρ = \frac{\text{cov}(rg_X, rg_Y)}{\sigma_{rg_X}\sigma_{rg_Y}}
$$


## Variants
- Spearman’s rs: The traditional formulation, used when data can be ranked without significant ties.  
- Spearman’s ρ (rho): The formal statistical notation, frequently used in research comparing automatic and human evaluation rankings.

## Applications in Software Engineering
Spearman’s ρ has been applied in numerous SE evaluation benchmarks to measure how well automated metrics correlate with human judgments:

- In CoNaLa and Card2Code, it measures correlation with human judgment in code generation tasks.  
- In HumanEval (2024), it evaluates alignment between metric outputs and human assessments of functional correctness.  
- In CoNaLa (2023), it captures correlation with human preference, identifying metrics that reflect perceived code quality.  
- In HumanEval-X, CoNaLa, APPS, and BigCodeBench (2024), it supports general correlation evaluation among different code generation metrics. 

## Interpretation
In the context of software engineering evaluation:
- A ρ close to 1 indicates strong positive correlation between rankings (i.e., both rank items similarly).  
- A ρ close to 0 suggests no correlation.  
- A negative ρ implies an inverse relationship between rankings.  

Spearman’s ρ is particularly valuable for verifying whether automatic metrics (e.g., BLEU, CodeBLEU, or Pass@k) faithfully reflect human assessments of quality, functionality, or relevance. It provides a robust foundation for correlation-based evaluation of LLMs and code generation systems.

## References
1. Xu, W., Hou, Y., Hung, Y. S., & Zou, Y. (2010). Comparison of Spearman's rho and Kendall's tau in Normal and Contaminated Normal Models.  
[https://arxiv.org/abs/1011.2009](https://arxiv.org/abs/1011.2009)

### Additional References in Dataset
- 11, 12, 24, 37, 40