---
id: robustness
title: Robustness
sidebar_label: Robustness
---

## Introduction

**Robustness** is a critical, non-functional dimension for evaluating Large Language Models (LLMs) and complex software systems. It refers to the model's or system's ability to **maintain stability and functional correctness** when faced with unexpected, anomalous, or challenging inputs. These inputs can include data perturbations, noise, adversarial attacks, or disinformation.

Robustness is not measured by a single formula but is rather a comprehensive **evaluation category** or dimension. To quantify it, researchers employ several specific metrics and testing methodologies. These include assessing performance against **adversarial attacks** , measuring stability against **Out-of-Distribution (OOD)** data , and evaluating code-level reliability.

Key metrics used to measure robustness include **Attack Success Rate (ASR)**, **Performance Drop Rate (PDR)** , and specialized metrics like the **LoCoBench Robustness Score (RS)**, which is based on formal software quality standards.

## 1. Robustness (General Category)

### Definition

Robustness is an evaluation dimension that measures the stability and reliability of an LLM when encountering challenging or malformed inputs. It is a key component of comprehensive model evaluation, sitting alongside other dimensions like Intelligence, Reliability, and Security.

### Purpose

The primary purpose is to ensure that a model's performance does not degrade significantly when inputs deviate from the standard "clean" data it was trained on. This includes handling everything from simple typos to sophisticated, intentionally malicious attacks.

### Applications

Robustness evaluation is applied across all domains involving LLMs, including:
* **General LLM Evaluation / NLP:** Assessing stability against prompt variations, noise, and adversarial text.
* **Software Engineering:** Evaluating the reliability of generated code, its error handling, and defensive programming practices.

### Limitations

As a general category, "Robustness" itself is not directly computable. It must be assessed via specific sub-categories and quantitative metrics.

## 2. Adversarial & Out-of-Distribution (OOD) Robustness
### Definition
This is a major sub-category of robustness testing that focuses on two types of "challenging" data:
1.  **Adversarial:** Inputs that are intentionally designed by an adversary to cause the model to fail (e.g., "jailbreaking" prompts, subtle character insertions, synonym replacements).
2.  **Out-of-Distribution (OOD):** Inputs that come from a different data distribution than the model's training set.

This can also include testing against **disinformation jamming**, where the model must remain stable when faced with intentionally deceptive information.

### Use Cases

This is critical for evaluating the safety and reliability of models. Benchmarks like **HELM** include robustness as a key category.

## 3. Attack Success Rate (ASR)

### Definition

ASR is a common metric used to quantify **adversarial robustness**. It measures the percentage of time an adversarial attack successfully tricks the model into producing an incorrect output, given that the model was correct on the original, non-adversarial input.

### Formula

$$
ASR=\Sigma_{(x,y\in D)}\frac{I[f(\mathcal{H}(x))\ne y]}{I[f(x)=y]}
$$

where:
* $D$ = dataset of (input, label) pairs.
* $f$ = the model.
* $\mathcal{H}(x)$ = the adversarial example generated from input $x$.
* $I$ = the indicator function (1 if true, 0 if false).

### Purpose

To provide a concrete "success rate" for a specific adversarial attack method, quantifying the model's vulnerability.

## 4. Performance Drop Rate (PDR)

### Definition

PDR is a unified metric designed to evaluate the robustness of LLMs specifically against **adversarial prompts** (e.g., in benchmarks like PromptBench).

### Formula

$$
PDR=1-\frac{\sum_{(x,y)\in D}^{T}\mathcal{M}[f([A(P),x]),y]}{\Sigma_{c,0-n}M[f([P,x]),y]}
$$

where:
* $A$ = the adversarial attack applied to a prompt $P$.
* $\mathcal{M}$ = the task-specific evaluation function.
* The formula quantifies the **relative performance degradation** between the attacked prompt $A(P)$ and the clean prompt $P$.

### Purpose

To measure how much model performance *drops* when an adversarial prompt is used, rather than just measuring a binary success/fail rate.

## 5. Robustness Score (RS) - LoCoBench

### Definition

This is a specific metric used within the **LoCoBench** benchmark for long-context software engineering. It is one of eight metrics comprising the "Software Engineering Excellence" dimension.

Unlike ASR or PDR, this score is not based on adversarial attacks but on established software quality standards.

### Definition (Conceptual)

The LoCoBench RS is **"Based on IEEE/ISO 25010 software quality standards (iso, 2011)"**.

### Purpose

Its specific purpose within LoCoBench is to evaluate the quality of generated code in terms of its **"reliability, error handling, and defensive programming practices"**.

### Use Cases

Used to evaluate the quality of code generated by LLMs in complex, long-context software engineering tasks.

## 6. Comparative Summary

| Metric / Category | Based on | Evaluation Goal | Measurement | Typical Domain |
| :--- | :--- | :--- | :--- | :--- |
| **Robustness (Category)** | General Concept | Assess overall stability | (Category, not a metric) | LLM, NLP, SE |
| **Attack Success Rate (ASR)** | Adversarial Attacks | Measure vulnerability  | Rate of successful attacks  | LLM (Adversarial Eval) |
| **Performance Drop Rate (PDR)** | Adversarial Prompts  | Measure performance drop  | Relative degradation %  | LLM (Adversarial Eval) |
| **LoCoBench RS** | ISO 25010 Standard  | Evaluate SE code quality  | Code reliability, error handling  | SE (Long-Context) |

## References

Chang, Y., Wang, X., Wang, J., Wu, Y., Yang, L., Zhu, K., Chen, H., Yi, X., Wang, C., Wang, Y., Ye, W., Zhang, Y., Chang, Y., Yu, P. S., Yang, Q., & Xie, X. (2023). A survey on evaluation of large language models. arXiv. https://doi.org/10.48550/arXiv.2307.03109

Lin, L., Zhu, D., & Shang, J. (2024). Overview of the comprehensive evaluation of large language models. En 2024 IEEE Smart World Congress (SWC) (pp. 1504-1512). IEEE. https://doi.org/10.1109/SWC62898.2024.00231

Qiu, J., Liu, Z., Liu, Z., Murthy, R., Zhang, J., Chen, H., Wang, S., Zhu, M., Yang, L., Tan, J., Cen, Z., Qian, C., Heinecke, S., Yao, W., Savarese, S., Xiong, C., & Wang, H. (2025). LoCoBench: A benchmark for long-context large language models in complex software engineering. arXiv. https://doi.org/10.48550/arXiv.2509.09614
