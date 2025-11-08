---
id: pass-at-k
title: Pass@k
sidebar_label: Pass@k
---

## Introduction

Pass@k is a functional correctness metric widely used to evaluate code generation models.  
It measures the probability that at least one out of *k* generated code samples for a given problem passes all predefined unit tests.  
This metric is now standard in many benchmarks, providing a robust estimate of how effectively models can produce correct programs.
Pass@k captures a model’s ability to generate a functionally correct solution rather than a textually similar one,  
making it a fundamental metric for assessing code intelligence, reasoning, and software reliability.

## Mathematical Definition

Formally, for a dataset with $N$ tasks, where each task $i$ has $n_i$ generated samples,  
and $c_i$ of them pass all test cases, the unbiased estimator of Pass@k is given by:

$$
\text{Pass@k} = \frac{1}{N} \sum_{i=1}^{N} \left[ 1 - \frac{\binom{n_i - c_i}{k}}{\binom{n_i}{k}} \right]
$$

where:
- $n_i$ = number of generated samples for task $i$,  
- $c_i$ = number of correct (passing) samples,  
- $k$ = number of samples considered,  
- $\binom{a}{b}$ = binomial coefficient.

This estimator, introduced by OpenAI (2021), corrects bias from finite sampling when estimating pass rates from multiple generations.

## Variants and Derivative Metrics

### 1. **Pass@1**
The most common variant, representing the probability that the first (or top-ranked) generated sample passes all tests.  
Used as a straightforward indicator of baseline correctness and ranking performance.  
Benchmarks: *HumanEval, MBPP, DS-1000, MathQA-Python, MultiPL-E.*

### 2. **Pass@3 / Pass@5 / Pass@10 / Pass@100**
These variants measure correctness within a larger set of model generations,  
providing insight into the diversity and robustness of generated solutions:  
- Pass@3 / Pass@5: Capture correctness in small sampling scopes.  
- Pass@10: Balances computational cost and diversity.  
- Pass@100: Often used in large-scale evaluations to assess upper-bound performance across multiple programming languages or perturbations.

### 3. **Nominal Pass@k (NP@k)**
Introduced in *ReCode (2024)*, this variant measures nominal functional correctness, the proportion of generated solutions that conceptually satisfy the specification, even if minor implementation details differ.

### 4. **Robust Pass@k (RP@k)**
Assesses functional correctness under perturbations or robustness stress tests, accounting for 
small variations such as renamed variables, reordered statements, or formatting changes.  
Variants include:
- RP@k: General robustness measure.  
- RP10@1: Evaluates single-sample robustness at high perturbation depth.

### 5. **Robust Drops@k (RDs@k)**
Quantifies performance degradation of pass@k after introducing noise or input perturbations.  
Lower RDs@k indicates greater model robustness.

### 6. **Robust Relatives@k (RRs@k)**
Measures relative retention of correctness across perturbations,  
indicating how well the model maintains functional performance compared to its baseline.

### 7. **Filtered Pass@k**
A version that filters out trivial or invalid code generations before computing pass@k.  
This variant focuses on the quality of valid solutions rather than raw pass counts.  
Used in *APPS (2021)* and *HumanEval (2023)*.

### 8. **Class-level Pass@k / Method-level Pass@k**
Introduced in *ClassEval (2024)* to evaluate hierarchical code correctness.  
- Class-level Pass@k: Checks whether entire class implementations pass all unit tests.  
- Method-level Pass@k: Evaluates individual function or method correctness within a class.

### 9. **Granular Functional Accuracy (pass-ratio@n)**
Used in *LeetCode (2024)*, this variant measures the proportion of partially correct or subtask-passing solutions 
at varying granularities ($n$). It bridges the gap between binary correctness and incremental success.

## Extended Variants and Applications

Although Pass@k and Pass Rate share the same conceptual foundation, the proportion of generated outputs that successfully pass all test cases, numerous variants have emerged to evaluate different granularities and contexts within software engineering and LLM-based code generation.

### Granularity of Evaluation
- Pass Rate per Test Case and Average Test Pass Rate measure partial correctness, indicating how many individual tests succeed rather than requiring full program success.  
  This is especially valuable for evaluating models in unit test generation and partial code repair tasks.  
- Unit Test Pass Rate applies this principle at the test suite level, averaging pass ratios across multiple unit tests for each sample.  
- Code Pass Rate and Simulation Pass Rate extend the metric to specific execution contexts such as hardware simulation or domain-specific compilers.

### Application Contexts
- **Functional Correctness:** Used in benchmarks like *HumanEval*, *MBPP*, *DevQualityEval*, and *APPS*, measuring whether generated code passes the functional requirements.  
- **Test Case Generation:** Applied in *DevEval* and similar setups to validate automatically generated tests against expected outputs.  
- **Environment Setup:** In *DevEval*, Pass Rate measures whether the generated setup scripts lead to a successful configuration.  
- **Task Completion:** Within *ToolBench*, Pass Rate evaluates the correctness of multi-step task execution by LLM agents.  
- **Execution-based CEM:** Average Pass Ratio in *APPS-Eval* and *MBPP-Eval* adapts Pass Rate for cumulative execution metrics (Code Execution Metrics).


## Applications in Software Engineering and LLM Evaluation

- **Code Generation Benchmarks:**  
  Used in *HumanEval*, *MBPP*, *APPS*, *CodeContests*, *EvalPlus*, *MathQA-Python*, and *RealHumanEval*  
  to evaluate functional correctness across different code tasks.

- **Industrial Software Evaluation:**  
  Applied in *ASML Custom Benchmark (2025)* for large-scale testing and unit-test-based correctness evaluation.

- **Multilingual Code Intelligence:**  
  Benchmarks like *MultiPL-E*, *HumanEval-X*, and *HumanEval+* use Pass@k variants to measure cross-language consistency and code accuracy.

- **Robustness and Perturbation Testing:**  
  Frameworks such as *ReCode* and *HumanEval+Mini* leverage RP@k and RDs@k  
  to analyze resilience against code mutation and syntax changes.

- **LLM Evaluation and Ranking:**  
  Pass@k serves as a key target metric for optimizing model sampling strategies  
  and for ranking-based training approaches.


## Limitations

- **Computationally expensive:** Requires multiple code generations per prompt and complete unit test execution.  
- **Sensitive to test design:** Quality and completeness of test cases directly impact reliability.  
- **Sampling bias:** Smaller $k$ values may underestimate capability; large $k$ values may inflate performance.  
- **Non-transferable across datasets:** A model tuned for one benchmark’s test design may not generalize to others.


## References

- *Top Pass: Improve Code Generation by Pass@k-Maximized Code Ranking.*  
  (2024). [arXiv:2408.05715](https://arxiv.org/html/2408.05715v1)

### Additional References in Dataset 
- 3, 6, 7, 10, 13, 17, 18, 19, 20, 21, 22, 23, 25, 27, 28, 31, 33, 35, 36, 37, 38, 40, 41, 44, 45, 46, 48, 51, 58, 63, 68

