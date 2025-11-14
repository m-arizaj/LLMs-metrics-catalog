---
id: incremental
title: Incremental Development Capability (IDC)
sidebar_label: IDC
---

## Definition

The **Incremental Development Capability (IDC)** is a novel metric introduced by Qiu et al. (2025) as part of the LoCoBench benchmark. It is designed to evaluate a Large Language Model's (LLM) ability to **build effectively on previous development work across multiple sessions**.

This metric addresses a critical gap in traditional evaluations by measuring how well a model handles incremental tasks, a crucial capability for realistic, long-context software development that is often overlooked by other benchmarks. It falls under the "Functional Correctness" dimension of the LoCoBench framework.

***

## Formula (General Idea)
The IDC score is calculated based on a sequence of incremental development tasks $\mathcal{T}$ applied to a codebase across multiple states $\mathcal{S}$.

For a sequence of tasks $\mathcal{T}=\{t_{1},t_{2},...,t_{k}\}$ that cause codebase state transitions $\mathcal{S}_{0}\rightarrow\mathcal{S}_{1}\rightarrow\cdot\cdot\cdot\rightarrow\mathcal{S}_{k}$, the IDC is defined as:

$$
IDC(\mathcal{T})=\frac{1}{|\mathcal{T}|}\sum_{i=1}^{|\mathcal{T}|}\frac{\xi(t_{i},\mathcal{S}_{i-1})\cdot\sigma(t_{i},\mathcal{S}_{i})}{\beta(t_{i},\mathcal{S}_{i-1},\mathcal{S}_{i})+1}
$$

Where:
* $\xi(t_{i},\mathcal{S}_{i-1})$: A score from [0, 1] that measures the **extension quality** of the new task $t_i$ relative to the previous codebase state $\mathcal{S}_{i-1}$.
* $\sigma(t_{i},\mathcal{S}_{i})$: A score from [0, 1] that quantifies the **integration smoothness** of the changes within the new codebase state $\mathcal{S}_{i}$.
* $\beta(t_{i},\mathcal{S}_{i-1},\mathcal{S}_{i})$: A count ($\ge0$) of the **breaking changes** introduced during the transition from $\mathcal{S}_{i-1}$ to $\mathcal{S}_{i}$.

*(Qiu et al., 2025)*

***

## Purpose
The primary purpose of the IDC metric is to assess an LLM's performance in realistic, multi-session development workflows. It specifically measures how well a model can understand a pre-existing state and incrementally add or modify functionality without introducing breaking changes, simulating a continuous development process.

***

## Domains
* Long-Context Software Engineering
* Functional Correctness Evaluation
* Multi-Session Development 

***



## Advantages
* **Realistic Evaluation:** It measures a capability that is crucial for practical, long-term software development but is not captured by metrics focused on single, isolated tasks.
* **Focus on Continuity:** It specifically evaluates context retention and the ability to build upon existing work, which is essential for multi-session tasks.
* **Accounts for Regressions:** The formula directly penalizes "breaking changes," rewarding models that can extend functionality while maintaining system integrity.

***

## Limitations
* As a metric newly proposed in the LoCoBench paper, it is highly specific to the benchmark's structure and tasks.
* Its calculation relies on other complex measures like "extension quality" ($\xi$), "integration smoothness" ($\sigma$), and "breaking changes" ($\beta$), which must be precisely defined and measured.

***

## Key References
* Qiu, J., Liu, Z., Liu, Z., Murthy, R., Zhang, J., Chen, H., Wang, S., Zhu, M., Yang, L., Tan, J., Cen, Z., Qian, C., Heinecke, S., Yao, W., Savarese, S., Xiong, C., & Wang, H. (2025). LoCoBench: A benchmark for long-context large language models in complex software engineering (arXiv:2509.09614). arXiv. https://doi.org/10.48550/arXiv.2509.09614
* (Excel Data: Paper 54)