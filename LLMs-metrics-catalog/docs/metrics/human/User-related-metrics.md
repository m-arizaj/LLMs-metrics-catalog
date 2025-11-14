---
id: user-related-metrics
title: User-Related Metrics (Rating & Satisfaction)
sidebar_label: User-Related Metrics
---

## Introduction

In the evaluation of code generation models, **User-Related Metrics** are a class of **feedback-based evaluation** methods. These metrics are essential for assessing the practical quality of generated code by incorporating human judgment and expertise.

Unlike automated metrics that check for correctness or similarity, user-related metrics focus on the practical **usability**, **helpfulness**, and **overall experience** of a developer using an LLM as a tool. This approach helps evaluate aspects like readability, maintainability, and real-world effectiveness, which are crucial for a model's practical application.

## 1. User Rating

### Definition

**User Rating** is a subjective metric used in the **RealHumanEval** benchmark to measure the perceived "usability and helpfulness" of model-generated code.

Experienced programmers (213 participants in the study) were asked to complete real programming tasks using LLM assistance (either auto-completion or chat support). Afterward, they rated the model's contribution on a **scale from 1 to 5**.

### Purpose

The goal of the User Rating metric is to capture a subjective measure of a model's practical usability. It helps identify discrepancies between a user's preference and the model's actual performance, providing insights for user-centric optimizations.


## 2. User Satisfaction

### Definition

**User Satisfaction** is a subjective metric used in the **Copilot Evaluation Harness** benchmark to measure a developer's "overall experience" when using GitHub Copilot.

Developers used Copilot within Visual Studio Code to complete a variety of tasks (e.g., code generation, bug fixing, documentation). They then provided subjective feedback on the tool's helpfulness, accuracy, and quality, including a satisfaction rating on a **scale from 1 to 5**.

### Purpose

This metric aims to comprehensively evaluate a model's performance in a real-world development environment. It helps assess its practical applicability and efficiency gains by directly polling developers about their experience.


## 3. Comparative Summary

| Metric | Definition | Scale | Benchmark | Focus |
| --- | --- | --- | --- | --- |
| **User Rating** | Measures the "usability and helpfulness" of generated code.  | 1 to 5  | RealHumanEval  | Helpfulness in completing a task  |
| **User Satisfaction** | Measures the "overall experience" of using the LLM tool.  | 1 to 5  | Copilot Evaluation Harness  | Overall tool experience and quality  |

## References

* Chen, L., Guo, Q., Jia, H., Zeng, Z., Wang, X., Xu, Y., Wu, J., Wang, Y., Gao, Q., Wang, J., Ye, W., & Zhang, S. (2025). *A Survey on Evaluating Large Language Models in Code Generation Tasks*. https://doi.org/10.48550/arXiv.2408.16498
* (Excel Data: Paper 10)