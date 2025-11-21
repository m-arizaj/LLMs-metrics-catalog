---
id: exact-match
title: Exact Match
sidebar_label: Exact Match
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction

Exact Match (EM) is a discrete evaluation metric that measures the percentage of model outputs that exactly match a reference target. It is widely used in Software Engineering and code generation benchmarks as a strict indicator of functional or syntactic correctness. A prediction is considered correct only if it is identical to the ground truth, character by character or token by token.
In code generation, this metric is employed to quantify whether generated code reproduces the same solution as the reference implementation. Although EM provides high interpretability and objectivity, it is highly sensitive to formatting, tokenization, and naming variations that do not affect semantic meaning.

## Mathematical Definition

The metric is defined as:

$$
\text{Exact Match} = \frac{\text{Number of exactly matching predictions}}{\text{Total number of predictions}}
$$

That is, the ratio of predictions that are identical to the reference output among all evaluated samples.  
It yields a binary outcome per instance (1 = exact match, 0 = otherwise), averaged over the dataset.

## Variants

Several extensions of Exact Match have emerged to handle structural or semantic differences in Software Engineering tasks:

### **1. Exact Match (Standard)**
Used to evaluate functional correctness, syntactic accuracy, and translation accuracy in benchmarks such as *CodeXGLUE*, and *HumanEval*. It measures strict equality between predicted and reference code outputs.

### **2. Fuzzy Match**
Allows small deviations (e.g. whitespace or minor tokenization changes). Applied in *OpenAI Evals* for automatic evaluation of near-identical text outputs.

### **3. Quasi-Exact Match**
Balances between strict Exact Match and fuzzy similarity. Used in several datasets to account for semantically equivalent answers.

### **4. Single-line Exact Match**
Used in *MultiPL-E* for fill-in-the-middle or code completion tasks where correctness is evaluated at the line level.

### **5. Syntax Match**
Compares structural equivalence of code syntax trees rather than surface tokens. Applied in Code Generation & Migration for syntactic/semantic matching.

## Applications in Software Engineering

| Context | Example Benchmarks/Datasets | Purpose |
|----------|------------------|----------|
| **Code Generation / Repair** | CodeXGLUE, MBPP, Bugs2Fix | Measures exact correctness of generated or repaired code |
| **Functional Correctness** | HumanEval, CONCODE | Evaluates logical equivalence under strict matching |
| **Reasoning / QA** | GSM8K, Dyck | Evaluates precision in reasoning and problem-solving LLMs |
| **Automatic Evaluation** | OpenAI Evals | Directly computes exact or fuzzy correctness without human intervention |
| **Cross-Modal Similarity** | Plot2Code | Links text-to-code matching quality |

## Interpretation and Limitations

While Exact Match is a clear and reproducible metric, it often underestimates functional performance in code generation since even a semantically equivalent solution with different variable names or formatting yields 0 score.  
Therefore, EM is best used in combination with structural, semantic, or execution-based metrics such as *CodeBLEU* and *Pass@k*.
Its strict nature, however, makes it ideal for benchmark comparisons and regression testing in code generation pipelines.

## References in Dataset

- <ReferencesIndex ids={['3','4','5','6','9','10','15','25','26','32','43','45','52']} />