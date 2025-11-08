---
id: error
title: Error Metrics
sidebar_label: Error Metrics
---
## Introduction
Error metrics quantify the deviation between predicted or generated outputs and their expected or reference values.  
In software engineering and LLM evaluation, these metrics are used to assess reliability, calibration, robustness, and the degree of correctness in model predictions or code outputs. They encompass measures such as Expected Calibration Error (ECE), Mean Absolute Error (MAE), Error Rate, and Human Error Rate, each focusing on a different aspect of model performance and reliability.

## Formula and Structure

### 1. Expected Calibration Error (ECE)
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

### 2. Mean Absolute Error (MAE)
MAE measures the average magnitude of errors between predicted and actual values, without considering direction:

$$
MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y_i}|
$$

It is widely used in *Fit-to-Pass* evaluations and *consistency checks* for LLM-based code generation.

### 3. Error Rate
Error Rate quantifies the proportion of incorrect predictions or generated outputs relative to the total:

$$
ErrorRate = \frac{N_{errors}}{N_{total}}
$$

This metric may be applied at the operator, token, or program level, depending on the evaluation task.

### 4. Human Error Rate
Used in generative or multimodal evaluations, this measures disagreement or deviation between human annotators’ judgments and reference answers.

### 5. Error Tracing
Refers to the process of identifying, locating, and quantifying specific errors in code or system outputs.  
While not a numeric metric by itself, it supports debugging and fault localization by linking model-generated defects to specific patterns or code regions.

## Variants
1. *Expected Calibration Error (ECE):* Evaluates calibration reliability (e.g., HELM, BIG-bench, and LLM Calibration).  
2. *Mean Absolute Error (MAE):* Measures numerical prediction accuracy and evaluation consistency in code-related tasks.  
3. *Calibration Error:* Used in LLM reliability and uncertainty evaluation contexts.  
4. *Error Rate (Operator-Level):* Captures robustness and reliability in symbolic or arithmetic code generation.  
5. *Error Tracing:* Focuses on debugging and fault localization in software testing tasks.  
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
- 1, 4, 9, 15, 26, 30, 37, 62, 67  
