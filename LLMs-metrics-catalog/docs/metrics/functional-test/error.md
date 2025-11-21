---
id: error
title: Error Metrics
sidebar_label: Error Metrics
---

## Introduction
Error metrics quantify the deviation between predicted or generated outputs and their expected or reference values.  
In software engineering and LLM evaluation, these metrics are used to assess reliability, calibration, robustness, and the degree of correctness in model predictions or code outputs. They encompass measures such as Expected Calibration Error (ECE), Mean Absolute Error (MAE), Error Rate, and Human Error Rate, each focusing on a different aspect of model performance and reliability.

## Formula and Structure

### 1. Expected Calibration Error (ECE) [1,4,9,15]
ECE measures how well a model’s predicted confidence aligns with actual correctness.  
For a model partitioned into $M$ bins based on confidence scores:

$$
ECE = \sum_{m=1}^{M} \frac{|B_m|}{n} \, |acc(B_m) - conf(B_m)|
$$

Where:  
- $B_m$ is the set of samples in bin $m$.  
- $acc(B_m)$ is the accuracy in bin $m$.  
- $conf(B_m)$ is the average confidence of samples in $B_m$.  
- $n$ is the total number of samples.

A lower ECE indicates better calibration between model confidence and accuracy.

### 2. Mean Absolute Error (MAE) [26,37]
MAE measures the average magnitude of errors between predicted and actual values, without considering direction:

$$
MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y_i}|
$$

It is widely used in *Fit-to-Pass* evaluations and *consistency checks* for LLM-based code generation.

### 3. Error Rate [30]
Error Rate quantifies the proportion of incorrect predictions or generated outputs relative to the total:

$$
ErrorRate = \frac{N_{errors}}{N_{total}}
$$

This metric may be applied at the operator, token, or program level, depending on the evaluation task.

### 4. Human Error Rate [67]
Used in generative or multimodal evaluations, this measures disagreement or deviation between human annotators’ judgments and reference answers.

### 5. Error Tracing [62]
Refers to the process of identifying, locating, and quantifying specific errors in code or system outputs.  
While not a numeric metric by itself, it supports debugging and fault localization by linking model-generated defects to specific patterns or code regions.

## Variants
1. *Expected Calibration Error (ECE):* Evaluates calibration reliability (e.g., HELM, BIG-bench, and LLM Calibration).  
2. *Mean Absolute Error (MAE):* Measures numerical prediction accuracy and evaluation consistency in code-related tasks.  
3. *Calibration Error:* Used in LLM reliability and uncertainty evaluation contexts. [1]  
4. *Error Rate (Operator-Level):* Captures robustness and reliability in symbolic or arithmetic code generation.  
5. *Error Tracing Capability:* measures the model's effectiveness in identifying the causes of software errors.  
6. *Human Error Rate:* Used to measure alignment or fidelity in human evaluation of generated outputs.

## Interpretation
Error metrics are fundamental to assessing both the reliability and interpretability of LLMs in software engineering.  
They help identify overconfident models, evaluate calibration quality, and quantify practical prediction deviations.  

- Low *ECE* implies that a model’s predicted confidence aligns with its true performance.  
- Low *MAE* reflects consistent and accurate numeric predictions.  
- Low *Error Rate* suggests robust and reliable code generation or symbolic reasoning.  
- *Error Tracing* complements these by providing qualitative insights into fault localization.  

Together, these metrics serve as key indicators of *model robustness, calibration, and dependability* in LLM-based code generation, refactoring, and testing environments.

## References
- [**1**](https://doi.org/10.1109/SWC62898.2024.00231) — Lin et al. "Overview of the Comprehensive Evaluation of Large Language Models," 2024. 
- [**4**](https://doi.org/10.48550/arXiv.2211.09110) — Liang et al. (2022). Holistic Evaluation of Language Models. arXiv.
- [**9**](https://doi.org/10.48550/arXiv.2307.03109) — Chang et al. (2023). A Survey on Evaluation of Large Language Models.
- [**15**](https://doi.org/10.48550/arXiv.2206.04615) — Srivastava et al. (2022). Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models.
- [**26**](https://doi.org/10.48550/arXiv.2406.06902) — Yang et al. (2024). CodeScore-R: An Automated Robustness Metric for Assessing the FunctionalCorrectness of Code Synthesis.
- [**30**](https://doi.org/10.1007/s10710-024-09494-2) — Hemberg et al. (2024). Evolving code with a large language model.
- [**37**](https://doi.org/10.48550/arXiv.2301.09043) — Dong et al. (2023). CodeScore: Evaluating Code Generation by Learning Code Execution.
- [**62**](https://doi.org/10.1016/j.csi.2024.103942) — Li et al. (2025). Evaluating large language models for software testing.
- [**67**](https://doi.org/10.48550/arXiv.2306.04675) — Stein et al. (2023). Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models

