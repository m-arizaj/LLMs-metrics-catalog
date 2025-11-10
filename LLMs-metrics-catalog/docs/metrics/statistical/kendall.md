---
id: kendall
title: Kendall’s τ
sidebar_label: Kendall’s τ
---

## Introduction
Kendall’s τ (Kendall’s tau) is a rank correlation coefficient that measures the degree of agreement between two ranked variables. It evaluates how consistently two sets of rankings (for example, human judgments and automatic metric scores) order the same items. In software engineering evaluation, it is widely applied to assess how well an automatic metric correlates with human or functional correctness evaluations, particularly in code generation, metric validation, and LLM-based assessments.

## Formula and Structure
Kendall’s τ compares all possible pairs of items to determine whether their relative orderings are consistent (concordant) or inconsistent (discordant).

Formally, given $C$ concordant pairs and $D$ discordant pairs:

$$
\tau = \frac{C - D}{\frac{1}{2}n(n-1)}
$$

Alternatively, to handle ties in ranking values, the more robust variant *Kendall’s τ₍b₎* is used:

$$
\tau_b = \frac{C - D}{\sqrt{(C + D + T_h)(C + D + T_m)}}
$$

Where:  
- $T_h$: number of ties in the human ranking  
- $T_m$: number of ties in the metric ranking  

The resulting value of τ ranges from −1 to +1:
- *+1:* perfect agreement (identical ranking)  
- *−1:* perfect disagreement (inverse ranking)  
- *0:* no correlation (random order)

### Example Interpretation
If an automatic code quality metric and human evaluations order 100 solutions similarly, and 70 pairs are concordant while 30 are discordant:
$$
\tau = \frac{70 - 30}{100} = 0.4
$$
This indicates a moderate positive correlation between the automatic metric and human judgment.

## Applications in Software Engineering
Kendall’s τ is a core tool for meta-evaluation of metrics in software engineering. It quantifies how well automated evaluation metrics reproduce human-like rankings of generated code or model outputs.
Recent studies (Deutsch et al., 2023) show that Kendall’s τ can struggle with ties in modern metrics and propose improved formulations such as pairwise accuracy and tie calibration to enhance its sensitivity and robustness.

## Usage Across Datasets
In recent evaluations, Kendall’s τ has been applied widely across code generation and LLM benchmarks.  
For instance, CoNaLa, Card2Code, APR-Assess, and Summary-Assess (2025) use it to measure the correlation between automatic metrics and human judgment.  
Similarly, HumanEval (2024) employs it to analyze both alignment with human evaluation and functional correctness correlations.   
These consistent applications demonstrate its value as a statistical backbone for assessing agreement and reliability among automated and human evaluations in software engineering.

## Interpretation
In SE metric analysis:
- High τ values indicate that the metric mirrors human judgment effectively.  
- Low or negative τ values reveal divergence, meaning the metric ranks outputs differently than humans or functional tests.  
- The inclusion of tie-aware variants (τ₍b₎) is crucial in LLM evaluation scenarios where several outputs may share equal scores.

This makes Kendall’s τ a benchmark correlation measure for assessing reliability and consistency across diverse evaluation metrics.

## References
1. *Deutsch, D., Foster, G., & Freitag, M. (2023).* Ties Matter: Meta-Evaluating Modern Metrics with Pairwise Accuracy and Tie Calibration.  
[https://arxiv.org/abs/2305.14324](https://arxiv.org/abs/2305.14324)

### Additional References in Dataset
- 11, 12, 24, 37, 40