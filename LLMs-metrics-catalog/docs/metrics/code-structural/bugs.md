---
id: bugs
title: Bug Metrics
sidebar_label: Bug Metrics
---

## Introduction
Bug Metrics are a group of software quality evaluation indicators used to measure the capability of a system or model to detect, localize, or predict software defects. They are essential in assessing software reliability, testing effectiveness, and code quality in both traditional and AI-assisted development pipelines.
In the context of Large Language Models (LLMs) and automated software engineering, these metrics quantify how effectively models identify or fix defects in generated or existing code bases. They have been applied to open-source benchmarks to evaluate code robustness and debugging capabilities.

## Formula and Structure

While different variants exist, the general form of bug detection or localization accuracy is expressed as:

$$
Bug\ Metric = \frac{TP}{TP + FN}
$$

Where:  
- $TP$ = True Positives (correctly identified bugs).  
- $FN$ = False Negatives (missed bugs).  

This formulation evaluates how many true defects were successfully found relative to all existing ones. When models perform ranking-based localization (e.g., predicting buggy lines or files), performance is often measured using mean average precision (MAP) or recall@k.

An additional formulation for Bug Localization Effectiveness considers positional weighting:

$$
BLE = \frac{1}{N} \sum_{i=1}^{N} \frac{1}{rank_i}
$$

Where $rank_i$ represents the position of the first correctly localized bug in the ranked candidate list for each instance.

## Variants and Applications

- *Bug Detection Abilities*  
  Quantifies the accuracy of models in identifying buggy code segments or functions within a software project.  
  Often combined with static analysis or neural-based prediction methods.  
  Referenced in: Twelve Open-Source Projects (2025).

- *Bug Localization*  
  Measures the ability of models to pinpoint the exact line, method, or class containing the bug.  
  Used for evaluating debugging-oriented LLMs or code repair systems.  
  Referenced in: Twelve Open-Source Projects (2025).

### Related Contexts
- *Bug Prediction:* Estimates the likelihood of future defects based on historical commits or code metrics.  
- *Bug Repair Evaluation:* Assesses correctness and precision of automated patch generation.  
- *Fault-proneness Metrics:* Derived from software attributes (complexity, size, coupling, cohesion).

## Interpretation
Bug Metrics are central to understanding the diagnostic and corrective capabilities of automated systems.  
A high detection rate or effective localization score indicates that the model accurately identifies potential defects, reducing maintenance time and improving software reliability. Conversely, poor performance on these metrics may reflect limited understanding of code semantics or inadequate reasoning over execution context.
These measures are especially relevant in:
- LLM-based code review and repair.
- Software testing and debugging automation.
- Empirical studies on defect prediction in large repositories.

## References

1. *Rebro, R., Rossi, B., & Chren, S. (2023).* Source Code Metrics for Software Defects Prediction.  
   [https://arxiv.org/abs/2301.08022](https://arxiv.org/abs/2301.08022)

### Additional References in Database
- 62