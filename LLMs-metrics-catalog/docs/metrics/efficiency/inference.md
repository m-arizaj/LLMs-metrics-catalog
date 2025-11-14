---
id: inference
title: Inference (Efficiency and Verification)
sidebar_label: Inference
---

## Introduction

In the evaluation of Large Language Models (LLMs) and the systems they generate, "Inference" is a term used to describe metrics in two distinct categories:

1.  **Inference Efficiency:** This is the most common usage. It refers to the performance of a model during the generation (or "inference") phase, focusing on speed, resource consumption, and runtime. Metrics include **Inference Runtime** and **Speed of Inference** (Sources 4, 49).
2.  **Behavioral Model Inference:** This is a specialized verification metric used in Software Engineering. It refers to the success rate of *inferring* (i.e., automatically learning) a correct behavioral model, such as an automaton, from a system's outputs to validate its functional correctness (Source 29).

This document covers both variants based on the provided contexts.

## 1. Inference Efficiency (Runtime / Speed)
### Definition
Inference Efficiency metrics measure the computational cost and speed of a language model when it is performing its primary function: generating text (making predictions). This is distinct from *Training Efficiency*, which measures the resources used to create the model (Source 4). These metrics are crucial for assessing the practical usability and deployment cost of a model.

HELM (Holistic Evaluation of Language Models) proposes several specific metrics for this (Source 4):

* **Raw Runtime:** The actual measured wall-clock time for a request, which includes computational time plus noise from network latency or queuing (contention).
* **Denoised Inference Runtime:** The estimated runtime using the model provider's specific hardware and software, but with the noise from contention (queuing) factored out.
* **Idealized Inference Runtime:** A standardized metric estimating the runtime on a uniform, optimized hardware and software stack (e.g., NVIDIA A100 GPUs) to allow for fair comparisons *between* different models (Source 4).

### Formula (HELM Idealized Runtime)
The total time for an idealized runtime can be modeled as a function of prompt processing time and token generation time (Source 4):

$$
\text{Total time} = F(\text{num\_prompt\_tokens}) + g \cdot \text{num\_output\_tokens}
$$

where:
- $F$ = Function modeling the runtime of processing the prompt.
- $g$ = Runtime (cost) of generating each additional output token.

### Purpose
The purpose is to measure the practical performance of an LLM. High inference efficiency (low runtime, high speed) is critical for user-facing applications (like chatbots), mobile applications, and autonomous agents that require fast responses (Sources 4, 49).

### Applications
* LLM Evaluation (General) (Source 4)
* Autonomous Agents (Source 49)

### Limitations
* Comparing inference efficiency fairly is difficult, as performance depends heavily on non-model factors (Source 4).
* **Hardware and Software:** The type and number of accelerators (GPUs/TPUs) and software optimizations (e.g., Megatron) drastically affect speed (Source 4).
* **Contention:** For models accessed via API, performance can vary based on server load and queuing, which is why *Denoised Runtime* is proposed (Source 4).

## 2. Behavioral Model Inference (Success Rate)
### Definition
This metric, specific to Learning-Based Testing and Language-Driven Engineering (LDE), does *not* measure computational speed. Instead, it measures the **success rate (%)** of automatically *inferring* a correct behavioral model (e.g., a Mealy machine or automaton) from a generated application (Source 29).

In this context (Source 29), an LLM is used for system migration (e.g., JavaScript to TypeScript). The "learnability-by-design" approach then uses a tool (like Malwa) to test the resulting application and *infer* its behavior as a formal model. The success rate reflects whether this inferred model is correct, thereby validating the LLM's migration task (Source 29).

### Purpose
The purpose is to automatically validate the functional correctness and reliability of LLM-generated code or system migrations. It verifies that the generated system behaves as intended, or identifies behavioral differences (using difference automata) between the original and migrated systems (Source 29).

### Applications
* Software Engineering (Verification / Reliability) (Source 29)
* System Migration (Source 29)
* Language-Driven Engineering (LDE) (Source 29)

## 3. Comparative Summary

| Metric | Category | Measures | Typical Domain | Key Sources |
|---|---|---|---|---|
| **Inference Efficiency (Runtime/Speed)** | Efficiency | Computational cost, time (s), or tokens/sec during text generation. | LLM Evaluation, Autonomous Agents | 4, 49 |
| **Behavioral Model Inference Rate** | Verification / Reliability | Success rate (%) of automatically *deriving* a correct behavioral automaton from a system. | Software Engineering, LDE | 29 |

## References
* Busch, D., Bainczyk, A., Smyth, S. et al. LLM-based code generation and system migration in language-driven engineering. Int J Softw Tools Technol Transfer 27, 137–147 (2025). https://doi.org/10.1007/s10009-025-00798-x
* Liang, P., Bommasani, R., Lee, T., Tsipras, D., Soylu, D., et al. (2024). *Holistic Evaluation of Language Models (HELM)*. https://doi.org/10.48550/arXiv.2211.09110
* Wang, L., Ma, C., Feng, X., Zhang, Z., Yang, H., et al. (2024). *A survey on large language model based autonomous agents*. 
https://doi.org/10.48550/arXiv.2308.11432

* (Excel Data: Papers 4, 29, 49)