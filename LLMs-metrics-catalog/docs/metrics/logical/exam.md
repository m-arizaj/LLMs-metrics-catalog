---
id: exam
title: EXAM
sidebar_label: EXAM
---

## Introduction

**EXAM (Explainable Automated Debugging)** is an evaluation benchmark used in software engineering to measure a model's capability in **Fault Localization** . Introduced by **Tran et al. (2022)** , it provides a standardized framework for assessing how well a model can debug code, specifically its ability to "identify the buggy code lines" .

Unlike metrics that evaluate code generation (like BLEU), EXAM focuses on code *verification* and *augmentation*, specifically debugging . To quantify performance on this task, the EXAM benchmark uses specific metrics such as Top-N Accuracy and Mean Average Rank (MAR) .

## 1. EXAM (Explainable Automated Debugging)

### Definition

EXAM is a benchmark consisting of a set of "288 Python programs with 12 error types" . The primary task for a model evaluated on this benchmark is **fault localization**: the model must "identify the buggy code lines" within these programs .

### Purpose and Applications

The purpose of EXAM is to evaluate models' capabilities in **code debugging** . It is used to quantitatively measure performance in localizing errors in Python programs .

### Metrics Used within EXAM

The EXAM benchmark uses the following metrics to score a model's performance :
* **Top-N Accuracy:** Measures if the correct buggy line is found among the model's Top-N most likely predictions.

* **Mean Average Rank (MAR):** Measures the average rank (position) of the correct buggy line in the model's prediction list . A lower MAR indicates better performance.

## References

- Chen, X., Hu, X., Huang, Y. et al. Deep learning-based software engineering: progress, challenges, and opportunities. Sci. China Inf. Sci. 68, 111102 (2025). https://doi-org.ezproxy.uniandes.edu.co/10.1007/s11432-023-4127-5

- Tran, L. H., Le, T., & Nguyen, A. T. (2022). *EXAM: a benchmark for explainable automated debugging*. In: Proc IEEE/ACM 44th International Conference on Software Engineering.

- Zhang, Z., Chen, J., Wu, D., et al. (2025). *A survey of large language models for code: generation, augmentation, and verification*. Sci Sin Inform.