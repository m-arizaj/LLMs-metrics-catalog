---
id: hallucination
title: Hallucination
sidebar_label: Hallucination
---

## Introduction
The Hallucination metric evaluates the degree to which a model generates content that is factually incorrect, irrelevant, or self-contradictory with respect to the input or known ground truth.  
In large language models and software engineering contexts, hallucination refers to statements, code, or outputs that appear syntactically valid but are semantically false or unverifiable.

This metric is crucial for assessing model reliability, truthfulness, and robustness in tasks such as code documentation, automated debugging, or generation of factual technical explanations.


## Formula and Structure

Although hallucination is typically measured via discrete rates rather than continuous scores, a general quantitative definition can be given as:

$$
H_{rate} = \frac{N_{hallucinated}}{N_{total}}
$$

where:
- $N_{hallucinated}$ is the number of responses containing factual or logical hallucinations,  
- $N_{total}$ is the total number of evaluated responses.  

Some studies instead define the Hallucination Ratio (Hal) as a normalized measure between 0 and 1 to capture the proportion of hallucinated content relative to the total generated text length or segments.

$$
Hal = \frac{\text{Length of hallucinated content}}{\text{Total output length}}
$$

These formulations can be adapted to measure hallucination in code generation by replacing textual segments with code statements or functions.


## Variants and Implementations

### 1. Hallucination Rate
Used in HELM (2024), this variant measures the proportion of hallucinated outputs across multiple tasks.  
It focuses on truthfulness and error handling robustness, identifying when the model produces plausible but factually incorrect information.

### 2. Hallucination Ratio (Hal)
Adopted in AMBER (2024) for generative multimodal tasks, this variant quantifies hallucination as a fraction of generated elements that deviate from factual or logical grounding.

### 3. General Hallucination Metric
Applied in Software Testing benchmarks for detecting hallucinated or misleading responses in automatically generated documentation or logs. This measure emphasizes reliability within technical code evaluations.

### 4. FEWL-based Factualness
From Wei et al. (2024), the FEWL (Factualness Evaluations via Weighting LLMs) framework proposes a model-based approach to hallucination detection without gold-standard answers. It aggregates judgments from several trusted models to compute a factualness score, penalizing superficial or inconsistent responses.


## Interpretation
Hallucination metrics reflect the factual integrity and trustworthiness of a model’s output.  
A lower hallucination rate indicates higher reliability and alignment with reference data or logical correctness.  
In software engineering, hallucination manifests as:
- Non-existent API calls,  
- Incorrect library imports,  
- Fabricated function arguments or values.  

Reducing hallucination improves debuggability, code maintainability, and developer trust in LLM-assisted programming.

## References
1. *Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2023).*  
   A Survey on Hallucination in Large Language Models.  
   [https://arxiv.org/abs/2311.05232](https://arxiv.org/abs/2311.05232)

2. *Wei, J., Chen, D., Xie, Y., Huang, S., & Xiong, C. (2024).*  
   Measuring and Reducing LLM Hallucination without Gold-Standard Answers.  
   [https://arxiv.org/abs/2402.10412](https://arxiv.org/abs/2402.10412)

### Additional References in Dataset
- 8, 9, 48, 62
