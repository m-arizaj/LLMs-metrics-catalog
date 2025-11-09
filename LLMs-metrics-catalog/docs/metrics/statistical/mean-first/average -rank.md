---
id: fault-localization-rank-metrics
title: Fault Localization Rank Metrics (MFR, MAR)
sidebar_label: MFR / MAR
---

## Introduction

In Software Engineering, **Fault Localization (FL)** is the process of identifying the specific code elements (e.g., statements or functions) where a defect occurs. Many automated FL techniques work by analyzing program execution, tests, and other information to produce a *ranked list* of code elements, ordered from most to least "suspicious".

To evaluate the performance of these techniques, researchers use metrics that measure how high up in the list the actual faulty code appears. **Mean First Rank (MFR)** and **Mean Average Rank (MAR)** are two of the most common metrics used for this purpose.

## 1. Mean First Rank (MFR)
### Definition
**MFR (Mean First Rank)** is defined as "the mean of the first faulty statement's rank of all faults using a localization approach".

### Purpose
The purpose of MFR is to measure the average effort required for a developer to find the *first* piece of buggy code. A lower MFR score is better, as it indicates that the fault localization technique successfully placed the first faulty element closer to the top of the ranked list.

### Applications
* **Fault Localization Evaluation:** Used to assess the performance of fault localization (FL) techniques.
* **Benchmark Comparison:** It is frequently used in studies to compare different FL models.

### Usage
* In the survey (Paper 50), MFR was one of the most popular evaluation metrics, used in 8 of the surveyed studies.

## 2. Mean Average Rank (MAR)
### Definition
**MAR (Mean Average Rank)** is defined as "the mean of the average rank".

### Purpose
While MFR focuses only on the *first* faulty statement, MAR is typically used in scenarios where a single bug may involve multiple faulty statements. It first calculates the *average rank* of all faulty statements for a single bug, and then takes the mean of those averages across all bugs in the dataset. This provides a more holistic measure of how well the technique ranks *all* relevant faulty elements, not just the first one.

### Applications
* **Fault Localization Evaluation:** Used to assess FL techniques, particularly when bugs may span multiple statements or locations.
* **Benchmark Comparison:** It is also a popular metric for comparing FL models.

### Usage
* In the survey (Paper 50), MAR was also one of the most popular metrics, used in 8 of the surveyed studies.

---

## Comparative Summary

| Metric | Full Name | Definition | Focus |
| :--- | :--- | :--- | :--- |
| **MFR** | Mean First Rank | The mean of the **first** faulty statement's rank. | Measures the average rank to find the *first* sign of a bug. |
| **MAR** | Mean Average Rank | The mean of the **average** rank. | Measures the average rank of *all* faulty statements for a bug. |

## Key References
* Chen, X., Hu, X., Huang, Y., Jiang, H., Ji, W., Jiang, Y., Jiang, Y., Liu, B., Liu, H., Li, X., Lian, X., Meng, G., Peng, X., Sun, H., Shi, L., Wang, B., Wang, C., Wang, J., Wang, T., ... Zhang, L. (2025). Deep learning-based software engineering: progress, challenges, and opportunities. SCIENCE CHINA Information Sciences, 68(1), 111102. https://doi.org/10.1007/s11432-023-4127-5
* (Excel Data: Paper 50)