---
id: equivalent
title: Equivalent
sidebar_label: Equivalent
---

## Definition

**Equivalent** (or **Mathematical Equivalence**) is an accuracy metric used in the evaluation of mathematical reasoning tasks. It defines a model's output as correct if the final answer is **mathematically equivalent** to the ground-truth reference, even if the string representation is different.

This metric is specifically designed for scenarios where numerical answers can be expressed in multiple valid formats (e.g., as fractions, decimals, or with different notation). The correctness condition is whether the model's generation is mathematically equivalent to the correct reference.

***

## Evaluation (General Idea)
The metric is a binary correctness check (True/False) rather than a complex formula. It evaluates to **True** (or 1) if the model's final answer is mathematically equivalent to the reference, and **False** (or 0) otherwise.

For example:
* **Reference:** `\box{1/2}`
* **Model Output:** `\box{0.5}`
* **Result:** `Equivalent` (True)

The metric specifically checks the final answer, which in datasets like MATH, is enclosed in a `\boxed{...}` environment.

***

## Purpose
To provide a robust measure of **mathematical correctness** for models evaluated on problem-solving tasks. It is intentionally more flexible than "Exact Match" to avoid penalizing models for correct answers that are simply formatted differently.

***

## Domains

* LLM Evaluation / Mathematics 
* Reasoning 
* Mathematical Reasoning

***

## Benchmarks

* **MATH** (It is the default accuracy metric for this benchmark) 
* **MATH (chain-of-thoughts)** (It is the default accuracy metric for this variant)

***

## Advantages

* **Robust to Formatting:** Correctly scores answers that are numerically identical but expressed in different formats (e.g., `0.5` vs. `1/2` vs. `50%`).
* **Focuses on Correctness:** Measures the model's ability to derive the correct final answer, rather than its ability to perfectly mimic a single reference format.

***

## Limitations

* **Does Not Evaluate Reasoning:** This metric is designed to check the final answer only. It does not validate the correctness of the intermediate reasoning steps (the "chain-of-thought") that produced the answer. A model could arrive at the correct answer via flawed logic.
* **Domain-Specific:** It is highly specialized for mathematical or numerical outputs and is not a general-purpose metric for evaluating text.

***

## Key References
- Liang, P., Bommasani, R., Lee, T., et al. (2023). *Holistic Evaluation of Language Models*. https://doi.org/10.48550/arXiv.2211.09110
