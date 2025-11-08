---
id: pearson
title: Pearson’s r
sidebar_label: Pearson’s r
---

## Introduction
Pearson’s r is a statistical correlation metric that quantifies the linear relationship between two continuous variables.  
In the context of software engineering and large language model evaluation, it measures how strongly a model’s predictions or metric scores align with human judgments or ground-truth references.
A Pearson coefficient close to +1 indicates a strong positive correlation (both values increase together), –1 a strong negative correlation, and 0 no linear relationship.

## Formula
The coefficient is defined as:

$$
r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}
{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}}
$$

Where:  
- $x_i$ are the predicted or computed metric values  
- $y_i$ are the corresponding reference or human-evaluated scores  
- $ \bar{x}$ and $\bar{y}$ are their respective means  

This formulation captures how closely two sets of scores vary together in a linear fashion.

## Variants
While the metric itself is standard, implementations may vary depending on the evaluation focus:
- Pearson’s rp: Used to explicitly denote Pearson’s correlation in datasets where multiple correlation metrics (e.g., Spearman’s ρ, Kendall’s τ) are also reported.
- Weighted Pearson correlation: Used when samples carry unequal importance or reliability weights.

## Application in Software Engineering
In SE contexts, Pearson’s r is widely applied to validate how well automatic evaluation metrics or model-generated scores reflect human judgments, code correctness, or performance measures.  
For instance, in defect prediction, code quality analysis, and LLM metric validation, Pearson’s r helps determine whether quantitative metrics track real-world outcomes such as defect counts or human ratings.
Recent research (Hrishikesh et al., 2025) used Pearson’s r to analyze correlations between Co-Change Graph Entropy and defect density, reporting values up to 0.54, indicating a moderately strong linear relationship between entropy and code defect rates.

## Interpretation
- High positive r (> 0.7): Strong agreement between automated metric and reference evaluation  
- Moderate r (0.3 – 0.7): Partial linear relationship; other nonlinear factors may exist  
- Low or near-zero r: Weak alignment, suggesting the metric captures a different dimension  

In LLM evaluation for code generation, Pearson’s r complements other correlation metrics (Spearman’s ρ, Kendall’s τ) by specifically revealing linear consistency between model outputs and human preferences.

## Contextual Examples from the Database
This metric appears in multiple SE and LLM evaluation settings:

- Correlation with Human Judgment: Used in datasets such as CoNaLa, HumanEval, Card2Code, and Summary-Assess to validate metric alignment with expert evaluations.  
- Correlation with Human Preference: Measures how predicted rankings or scores correspond to human-preferred solutions.  
- Correlation Evaluation (General): Applied to test whether automatic metrics track performance consistency across models and benchmarks.  

These uses highlight its role as a baseline measure of metric reliability and evaluation robustness in multi-metric LLM assessment pipelines.

## References
1. *Hrishikesh, E., Kumar, A., Bhardwaj, M., & Agarwal, S. (2025).* Co-Change Graph Entropy: A New Process Metric for Defect Prediction.  
[https://arxiv.org/abs/2504.18511](https://arxiv.org/abs/2504.18511) 

### Additional References in Dataset
- 11, 12, 24, 37
