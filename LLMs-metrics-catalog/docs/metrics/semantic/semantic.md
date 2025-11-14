---
id: semantic-metrics
title: Semantic Metrics
sidebar_label: Semantic
---

## Introduction

In the context of code generation and evaluation, **semantic** metrics and techniques move beyond assessing surface-level syntax (i.e., "is this valid code?") to evaluate the underlying *meaning*, *logic*, and *intent* of the code or the problem description.

This category includes metrics that evaluate the "semantic quality" of a generated output (like a fuzzing seed) as well as benchmark techniques designed to *test* a model's semantic understanding by intentionally altering a problem's meaning.

## 1. Semantic Correctness (Seed Quality)
### Definition
**Semantic Correctness** is a metric used to evaluate the quality of LLM-generated inputs, particularly fuzzing seeds. Rather than just generating random or syntactically valid strings, this metric assesses whether the generated seeds are *semantically valid* and *meaningful* according to the expected data format of the target function (e.g., generating a valid YAML document for a YAML parser, not just random text).

### Purpose
To measure the quality and effectiveness of LLM-generated seeds for fuzzing, determining if the model understands the *intent* of the target function's data requirements.

### Applications
* LLM-driven Fuzzing 
* Security Testing 
* LLM Evaluation 


## 2. Semantic Perturbation (Robustness Testing)

### Definition
**Semantic Perturbation** is not a direct output metric but rather a *benchmark technique* used to evaluate the robustness of a code generation model. It involves applying "alterations to problem meaning for added complexity" to the problem description.
For example, a problem might be altered from "calculate the sum of all *even* numbers" to "calculate the sum of all *odd* numbers." This tests whether the model is truly understanding the semantic details of the request or just repeating a learned pattern.

### Purpose

To assess an LLM's robustness and its ability to handle nuanced changes in a problem's semantic requirements, which is a more advanced test than simple surface-level or syntactic perturbations.
### Applications

* Evaluating the robustness of code generation models.
* Creating more challenging benchmark problems.

## 3. Comparative Summary

| Metric / Technique | Type | Measures | Typical Domain |
| --- | --- | --- | --- |
| **Semantic Correctness** | Output Metric | The structural and logical validity of generated data (e.g., fuzz seeds). | Fuzzing, Security  |
| **Semantic Perturbation** | Evaluation Technique | A model's robustness by altering the *meaning* of a problem's prompt. | Benchmark Robustness  |

## References

* Black, G., Vaidyan, V. M., & Comert, G. (2024). *Evaluating Large Language Models for Enhanced Fuzzing: An Analysis Framework for LLM-Driven Seed Generation*. IEEE Access. https://doi.org/10.1109/ACCESS.2024.3484947
* Anand, A., Chopra, S., & Arora, M. (2025). *Analysis of LLM Code Synthesis in Software Productivity*. In M. Saraswat & R. Kumari (eds.), Applied Intelligence and Computing. https://doi.org/10.56155/978-81-955020-9-7-24
* (Excel Data: Papers 59, 18)