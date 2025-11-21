---
id: gpt-metrics
title: GPT-based Metrics (LLM-as-a-Judge)
sidebar_label: GPT-based Metrics
---

## Introduction

A recent paradigm in evaluating Large Language Models (LLMs) involves using an LLM itself as the evaluator. This approach, often called **"LLM-as-a-judge,"** leverages the advanced reasoning and language understanding capabilities of models like GPT to assess the quality of generated text or code.

These metrics work by crafting a specific prompt that instructs a powerful model (e.g., GPT-4) to compare a candidate output against a reference or a set of criteria and provide a score. This method has gained prominence because its results often show a **higher correlation with human judgments** than traditional metrics.

Two prominent examples of this approach are **GPTScore**, for general text evaluation, and **GPT-4V Overall Rating**, for multimodal code evaluation.

## 1. GPTScore

### Definition

**GPTScore** is an automatic evaluation method that uses an LLM (like GPT-3 or GPT-4) to score the quality of generated text. It operates by providing the "judge" LLM with the context, a reference text, and the candidate (model-generated) text. It then prompts the LLM to provide both a **"final score"** (e.g., on a 1-5 scale) and a **"detailed evaluation"** (a textual explanation) for its assessment.

### Purpose

To provide a new automatic evaluation metric for text generation that achieves a higher correlation with human judgments than previous metrics like BLEU or ROUGE.

### Applications

* LLM Evaluation / NLP 
* General Text Generation 

### Advantages

* **High Human Correlation:** Has been shown to correlate more strongly with human evaluation.
* **Explainable:** Unlike traditional metrics that output only a number, GPTScore also generates a detailed textual explanation for its score.

## 2. GPT-4V Overall Rating

### Definition

The **GPT-4V Overall Rating** is a metric used within the **Plot2Code** benchmark to evaluate multimodal code generation (i.e., generating code from an image of a plot). It specifically uses the GPT-4V (Vision) model to analyze the generated code alongside the source plot image and assign an **"overall quality rating... on a scale of 1-5"**.

### Purpose

To serve as a "key metric for assessing the overall quality" of generated code in a complex, multimodal, image-to-code task. It is used as a scalable, automated alternative to expensive human evaluation for this specific domain.

### Applications

* Software Engineering / Code Generation
* Human Evaluation / Multimodal Quality

## 3. Comparative Summary

| Metric | Base Model | Input Modality | Task Domain |
| :--- | :--- | :--- | :--- |
| **GPTScore** | LLM (e.g., GPT-3, GPT-4) | Text-only (Context, Reference, Candidate) | General Text Generation (NLP)  |
| **GPT-4V Overall Rating**| Multimodal LLM (GPT-4V) | Multimodal (Image + Code) | Code Generation from Plots  |

## References
* Lin, L., Zhu, D., & Shang, J. (2024, December 2-7). Overview of the comprehensive evaluation of large language models [Presentación de artículo]. 2024 IEEE Smart World Congress (SWC), Nadi, Fiji. https://doi.org/10.1109/SWC62898.2024.00231
* Chen, L., Guo, Q., Jia, H., Zeng, Z., Wang, X., Xu, Y., Wu, J., Wang, Y., Gao, Q., Wang, J., Ye, W., & Zhang, S. (2025). A survey on evaluating large language models in code generation tasks (arXiv:2408.16498v2). arXiv. https://doi.org/10.48550/arXiv.2408.16498
