---
id: cost-metrics
title: Cost Metrics
sidebar_label: Cost Metrics
---

## Introduction

In the evaluation of Large Language Models (LLMs) for software engineering tasks, "cost" is a crucial metric category that goes beyond simple functional correctness. It is not a single metric, but a set of efficiency metrics that quantify the resources consumed during code development, execution, or repair.

These costs are generally divided into **time cost** (how long the process takes) and **resource cost** (financial or computational). Specific metrics like **Monetary Cost**, **Development Cost**, and **Total Cost** are used to measure the financial and efficiency implications of using LLMs in domains like automatic program repair (APR), code evolution, and autonomous agents.

## 1. Monetary Cost
### Definition
"Monetary Cost" is defined as the "monetary expenses associated with token consumption, based on OpenAI's pricing" It is considered one of two "primary cost factors" for assessing pipelines that use LLMs.

### Purpose
The primary purpose is to assess the financial implications of utilizing an LLM pipeline for a specific task.

### Applications
- It is used to measure the cost of **Automatic Program Repair (APR)** pipelines for declarative specifications, such as Alloy.
- It is analyzed by comparing different agent setups (e.g., single-agent vs. dual-agent), where dual-agent setups exhibit "marginally higher costs".
- It is used to compare the cost of different models (e.g., GPT-3.5-Turbo vs. the GPT-4 family), noting that GPT-3.5-Turbo has the lowest costs due to cheaper tokens.
- It is measured for both successful ("fixed") and unsuccessful ("unfixed") repair attempts.

## 2. Development Cost
### Definition
"Development Cost" is identified as an "efficiency metric". The paper that mentions it (a survey on autonomous agents) lists it as a key efficiency indicator but does not provide an explicit calculation formula, citing (ChatDev) as its origin.

### Purpose
The purpose is to "assess the efficiency" of an LLM-based autonomous agent.

### Applications
- It is used in the context of evaluating **LLM-based autonomous agents**.
- It is specifically associated with **software engineering** tasks, where agents simulate a software development lifecycle .

## 3. Total Cost
### Definition
In the context of evolutionary algorithms using LLMs (like LLM_GP), "Total Cost" is a "run-time cost" metric that encompasses multiple facets of LLM API usage:
1.  **Time Cost:** The duration associated with sending *prompts* and waiting for API responses.
2.  **Monetary Cost:** The direct financial expense of API calls.
3.  **Indirect Cost:** The paper also notes a "hidden, but significant cost" of the LLM's pre-training, which is an indirect but fundamental cost of using the technology.

### Purpose
"Total Cost" is used to measure the computational and financial cost of employing an LLM to execute evolutionary operators (like initialization, crossover, and mutation).

### Applications
- It is used to evaluate and compare evolutionary algorithm variants (e.g., `LLM_GP` vs. `LLM_GP_Mu_XO`) in **code evolution** tasks like Symbolic Regression.
- It is also used to compare how cost changes when the API provider updates the model version (e.g., F23 vs. S24).

## 4. Comparative Summary

| Metric | Application Domain (per paper) | Cost Focus | Measured Components |
| :--- | :--- | :--- | :--- |
| **Monetary Cost** | Specification Repair (Alloy) | Financial | API token consumption |
| **Development Cost**| Autonomous Agents (Survey) | Efficiency | Cost associated with development (time/resources) |
| **Total Cost** | Code Evolution (LLM_GP) | Financial & Temporal | API wait time, API cost, and (hidden) pre-training cost |

## References
- Alhanahnah, M., Rashedul Hasan, M., Xu, L. et al. An empirical evaluation of pre-trained large language models for repairing declarative formal specifications. Empir Software Eng 30, 149 (2025). https://doi.org/10.1007/s10664-025-10687-1
- Hemberg, E., Moskal, S. & O’Reilly, UM. Evolving code with a large language model. Genet Program Evolvable Mach 25, 21 (2024). https://doi.org/10.1007/s10710-024-09494-2
- Wang, L., Ma, C., Feng, X. et al. A survey on large language model based autonomous agents. Front. Comput. Sci. 18, 186345 (2024). https://doi-org.ezproxy.uniandes.edu.co/10.1007/s11704-024-40231-1

## Additional References

- 49, 65, 30
