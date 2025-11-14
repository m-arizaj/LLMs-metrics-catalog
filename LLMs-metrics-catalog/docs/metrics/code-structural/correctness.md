---
id: correctness
title: Correctness
sidebar_label: Correctness
---

## Introduction
In software engineering evaluation, correctness captures whether an LLM-produced artifact (code, repair, selection, or workflow) satisfies its required specification. Across the analysed papers, correctness consistently appears as:
- LLM-as-judge functional correctness scoring
- Empirical correct / partially correct / incorrect percentages
- Task-driven correctness rates (Correct Outcome Ratio, Correct Selection Rate)
- Multi-sample correctness such as Correct@k
- General correctness evaluation frameworks (e.g., SE-Jury)
Correctness is the foundational dimension for evaluating code-generating LLMs, forming the core target in almost every SE-related study.

## Formula
At the highest level, correctness is binary per instance:

Let  
$$
c_i =
\begin{cases}
1 & \text{if the produced artifact for instance } i \text{ is correct} \\
0 & \text{otherwise}
\end{cases}
$$

Then the basic correctness rate is:

$$
\text{Correctness Rate} = \frac{1}{N}\sum_{i=1}^{N} c_i
$$

Different papers instantiate this core notion in domain-specific ways.

## Variants

### 1. Functional Correctness Score (ICE-Score) — Paper 12
ICE-Score evaluates Local Functional Correctness using an LLM prompted as a judge.

The scoring prompt instructs the LLM to evaluate:

> “Functional correctness: execution-based quality of the code snippet… Your task is to rate the code snippet… Assign a score for functional correctness.”  
> (ICE-Score, prompt excerpt)

The resulting score:

$$
\text{FCS}(x,y,r)\in\{0,1,2,3,4\}
$$

This yields a graded correctness signal rather than a binary one, and the work evaluates its correlation with true execution-based correctness on HumanEval/HumanEval-X.

### 2. SE-Jury Correctness Framework (LLM-as-Judge) — Paper 11
SE-Jury enhances correctness assessment by combining multiple evaluator strategies:

- direct correctness judgment  
- self-reflection  
- criteria-based evaluation  
- reference-equivalence checking  

The ensemble metric $E(x,y,r)$ approximates human correctness judgements.

Although no explicit formula is given, conceptually:

$$
E(x,y,r)=f(\text{multiple LLM-judge signals})
$$

This increases robustness to single-model biases.

### 3. Correct / Partially Correct / Incorrect Percentages — Paper 18
In code synthesis productivity studies, correctness is labeled manually:

- Correct (%)  
- Partially Correct (%)  
- Incorrect (%)

Let:
- $n_{\text{corr}}$ = fully correct outputs  
- $n_{\text{part}}$ = partially correct outputs  
- $n_{\text{inc}}$ = incorrect outputs  

Then:

$$
\text{Correct (\%)}=\frac{n_{\text{corr}}}{N}\times100
$$

$$
\text{Partially Correct (\%)}=\frac{n_{\text{part}}}{N}\times100
$$

$$
\text{Incorrect (\%)}=\frac{n_{\text{inc}}}{N}\times100
$$

This gives a categorical correctness distribution.

### 4. Correct Selection Rate (CSR) — Paper 48
In tool-learning contexts, correctness is applied to decision quality:

$$
\text{CSR}=\frac{\text{\# of instructions where the correct tool is chosen}}{\text{\# of instructions evaluated}}
$$

This is a correctness measure of tool choice, not code.

### 5. Correct Outcome Ratio (COR) — Paper 52
For one-shot correction workflows:

$$
\text{COR}=\frac{\text{\# of tasks whose final outcome is correct}}{\text{\# of tasks evaluated}}
$$

COR measures how often the final (potentially corrected) code is correct, allowing comparisons between:

- baseline LLM output  
- corrected output after applying the one-shot correction method  

### 6. Correct@k — Paper 65
For formal specification repair, correctness is strict: either a repair makes the specification valid, or it does not. Correct@k asks:

> “Is at least one of the top-k candidate repairs correct?”

Formally:

$$
\text{Correct@k}=\frac{1}{N}\sum_{i=1}^{N}\mathbf{1}\left[\exists j\le k:\text{is\_correct}(y_i^{(j)})=1\right]
$$

Correct@k captures benefits from diverse sampling.

## Applications in Software Engineering
Correctness metrics drive evaluation in:

### Code Generation  
ICE-Score and SE-Jury evaluate functional correctness without requiring execution. This is crucial for languages without safe execution or tasks requiring heavy dependencies.

### Formal Methods  
Correct@k evaluates whether spec-repair suggestions satisfy logical soundness when checked by a solver.

### Tool-Using Agents  
CSR evaluates correctness of action selection in agent pipelines.

### Code Correction Workflows  
COR measures improvement after feedback-based correction.

### Code Synthesis Studies  
Correct/Partially Correct/Incorrect (%) quantify productivity impacts and model failure modes.

Across all, correctness remains the most essential indicator of SE task success.

## Interpretation

### High Correctness indicates:
- Solutions satisfy required behavior  
- High agreement with human or oracle judgments  
- Reliable tool selection or repair strategies  
- Effective correction pipelines  

### Low Correctness indicates:
- Functional errors or broken behavior  
- Misunderstanding of problem constraints  
- Invalid repairs in formal specifications  
- Incorrect agent tool-choice behavior  

### Strengths
- High interpretability (“did it work?”)  
- Strong alignment with human goals  
- Executable or solvable in most SE settings  
- Flexible across domains (code, tools, formal specs)

### Limitations
- Some variants require expensive oracles (e.g., solvers, tests)  
- LLM-as-judge variants may inherit biases  
- Partially Correct classification is subjective  
- Correct@k may inflate perceived performance via many samples  

## References (Also in the Dataset)

1. 11. SE-Jury  
An LLM-as-Judge Metric for Bridging the Gap with Human Evaluation in SE Tasks. (2025). arXiv:2505.20854.

2. 12. ICE-Score  
ICE-Score: Instructing Large Language Models to Evaluate Code. (2023). arXiv:2304.14317.

3. 18. Analysis of LLM Code Synthesis in Software Productivity  
Anand, A., Chopra, S., & Arora, M. Applied Intelligence and Computing (2024).

4. 48. LLM-Based Agents for Tool Learning: A Survey  
(2025). Journal of Intelligent Information Systems (s41019-025-00296-9).

5. 52. Rethinking AI Code Generation: A One-Shot Correction Approach Based on User Feedback  
(2024). Automated Software Engineering (s10515-024-00451-y).

6. 65. An Empirical Evaluation of Pre-trained LLMs for Repairing Declarative Formal Specifications  
(2025). Empirical Software Engineering (s10664-025-10687-1).

