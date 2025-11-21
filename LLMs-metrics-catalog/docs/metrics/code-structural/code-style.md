---
id: code-style
title: Code Style Adherence
sidebar_label: Code Style Adherence
---

## Introduction

Code Style Adherence (CSA) is one of the three Code Quality Assessment metrics in LoCoBench. It evaluates whether code produced by a model follows the conventions and best practices expected in professional software engineering. The authors explicitly define CSA as:
> “Style guide compliance measurement based on coding standards literature (Kernighan and Pike, 1999) and automated linting frameworks, evaluating naming conventions, formatting consistency, and language-specific best practices.”  
> (Qiu et al, 2025, p. 12)

Within the LoCoBench Score (LCBS), CSA contributes to the Code Quality dimension, which holds a 20% weight in the final composite score.


## Formula

The paper does not provide a standalone raw formula for CSA, because its computation depends on the underlying language-specific style tools. However, the authors explain that CSA is one of the metrics included in the Code Quality set:

> “Code Quality Assessment includes Security Analysis Score, Average Issues Found (inverted), and Code Style Adherence.”  
> (Qiu et al., 2025, p. 5)

While the raw CSA score is tool-dependent, LoCoBench provides a unified normalization function used for all metrics, including CSA:

$$
N(m_i) = \frac{m_i - \min(m_i)}{\max(m_i) - \min(m_i)}
$$

The normalized metrics are then aggregated into the Code Quality score:

$$
CQ = \frac{1}{3}\left(N(\text{SAS}) + N(\text{AIF}) + N(\text{CSA})\right)
$$

And the Code Quality dimension contributes to the LoCoBench Score via:

$$
\text{LCBS} = 5\,(0.4\,SE + 0.3\,FC + 0.2\,CQ + 0.1\,LCU)
$$


## Applications in Software Engineering

### Enforcing consistency in large codebases  
In multi-file, long-context scenarios, code style consistency is essential for maintainability and readability. LoCoBench therefore applies style tools during validation to reflect real engineering environments where style checks are part of CI pipelines.

### Evaluating cross-session consistency  
For multi-session tasks, the benchmark instructs models to:

> “Preserve naming conventions and code style.”  
> (Qiu et al., 2025, Appendix B.6.3)

CSA indirectly measures whether a model can maintain consistent style decisions when generating or modifying code across long development sequences.

### Complementing other quality metrics  
CSA complements:

- *SAS* (security)  
- *AIF* (static analysis code smell detection)

Together, these three measures provide a multi-dimensional view of code quality.

## Interpretation

### What a high CSA score means  
A high CSA score indicates that the model’s output:

- follows standard naming and formatting conventions,
- adheres to established best practices for the language,
- produces code that would pass typical style constraints in CI systems.

### Strengths  
- Corresponds to industry-standard evaluations (linting, formatting tools).  
- Reflects both readability and maintainability.  
- Useful in long-context settings where code consistency is critical.

### Limitations  
- The paper does not define how linting outputs are converted into numerical CSA scores.  
- CSA is tool-dependent, meaning different rulesets affect comparability.  
- No human judgment correlation studies are provided.


## References

1. Qiu, J., Liu, Z., Liu, Z., Murthy, R., Zhang, J., Chen, H., Wang, S., Zhu, M., Yang, L., Tan, J., Cen, Z., Qian, C., Heinecke, S., Yao, W., Savarese, S., Xiong, C., & Wang, H. (2025). LoCoBench: A benchmark for long-context large language models in complex software engineering. 
[https://doi.org/10.48550/arXiv.2509.09614](https://doi.org/10.48550/arXiv.2509.09614)