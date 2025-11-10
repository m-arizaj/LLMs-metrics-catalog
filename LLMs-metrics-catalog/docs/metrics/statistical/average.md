---
id: average
title: Average Metrics
sidebar_label: Average Metrics
---

## Introduction
Average metrics represent aggregate measures that summarize the behavior or structural characteristics of model outputs.  
Unlike accuracy or precision, these metrics do not evaluate correctness directly; instead, they quantify aspects such as average code size, contextual length, or the frequency of issues found.  
They are commonly used for *descriptive assessment*, helping interpret how efficiently or consistently a model produces results across tasks.

## Common Average-Based Measures

### 1. Average Issues Found
Used in LoCoBench (2025) to quantify *code quality degradation* by counting the mean number of architectural or logical issues identified across evaluation runs.  
A lower value indicates higher consistency and better code integrity.  
This metric serves as a proxy for the robustness and maintainability of LLM-generated code.

### 2. Average Number of Lines of Code (LOC)
Measures the *mean code length* produced by the model, typically across a benchmark such as MBPP (2024).  
It helps evaluate verbosity, compactness, and adherence to minimal coding standards.  
While shorter code may imply efficiency, overly compressed solutions may sacrifice readability or modularity.

### 3. Average Percentage Beats
Introduced in LeetCodeEval (2024), this metric reports the *mean relative efficiency* of model-generated solutions compared to existing user submissions.  
It indicates how often model code performs above average in runtime or memory usage, expressed as a percentile.

### 4. Average Lines of Code in Context
Used in DS-1000 (2025) to capture the *contextual size* of input or supporting code provided to the model.  
It reflects task complexity, influencing reasoning performance in multi-file or multi-function scenarios.

### 5. Average Problem Words
Also from DS-1000 (2025), this metric measures the *average linguistic complexity* of problem descriptions.  
It helps estimate the cognitive load and natural language difficulty faced by the model during problem comprehension.

## Interpretation
Average metrics provide a high-level statistical perspective on LLM performance:
- They reveal trends in efficiency, verbosity, or quality across datasets.  
- They are complementary to accuracy-based metrics, helping diagnose trade-offs between correctness and style.  
- When used longitudinally, they indicate model stability and predictability over multiple runs or problem sets.

In software engineering evaluation, averages are crucial for *understanding context scale* (e.g., average LOC or dependency length) and *quantifying improvement or degradation trends* across model versions.

## References in Database
- 54, 39, 38, 18