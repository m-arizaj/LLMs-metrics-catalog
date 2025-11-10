---
id: codejudge
title: CodeJudge
sidebar_label: CodeJudge
---

## Introduction  
CodeJudge is an LLM-based evaluation framework designed to assess the semantic correctness of machine-generated code without relying on test cases. Proposed by Tong & Zhang (2024), CodeJudge introduces a “slow thinking” process that enables large language models to reason through code step by step, improving alignment with human judgment in code evaluation tasks.
Traditional test-based metrics like Pass@k depend on unit tests, while token-based metrics (e.g., BLEU, ROUGE-L, CodeBLEU) fail to capture semantic equivalence when code differs syntactically but behaves correctly. CodeJudge addresses these limitations by using structured reasoning prompts and error taxonomies to judge correctness and quality, even in the absence of reference implementations.

## Formula and Scoring Mechanism  

CodeJudge introduces two main evaluation procedures:

1. *Analyze-Then-Summarize (A.S.)* – for binary correctness  
2. *Taxonomy-Guided Fault Localization (F.L.)* – for graded correctness

### 1. Analyze-Then-Summarize  
This method decomposes code evaluation into two subtasks:  
- *Analysis*: The LLM identifies the required functionalities from the task description, inspects the code logic, and lists any missing elements.  
- *Summarization*: Based on this analysis, the model decides whether the code is correct (1) or incorrect (0).

The binary decision $f(c, t) \in \{0, 1\}$ depends on whether all task requirements are satisfied by the code snippet $c$ given the description $t$.

Formally:

$$
f(c, t) =
\begin{cases}
1, & \text{if all required functionalities are correctly implemented,} \\
0, & \text{otherwise.}
\end{cases}
$$

### 2. Taxonomy-Guided Fault Localization  
For tasks requiring graded correctness (partial or incomplete code), CodeJudge provides a taxonomy of inconsistencies with corresponding severities:

| Severity | Type of Inconsistency | Description |
|-----------|-----------------------|--------------|
| Negligible | Missing imports, no error handling | Minor, does not affect core functionality |
| Small | Input handling or edge case omission | Slight deviation from ideal behavior |
| Major | Logical errors | Directly affect semantic correctness |
| Fatal | Undefined variables, incomplete code | Cause crashes or total failure |

Each detected inconsistency contributes a penalty based on severity weights:

$$
S = Num_{small} \times 5 \\
M = Num_{major} \times 50 \\
F = Num_{fatal} \times 100
$$

Then, the penalty and final CodeJudge Score are computed as:

$$
Penalty = \max(-100, -(S + M + F))
$$

$$
Score = 1 - \frac{Penalty}{100}
$$

The score ranges from 0 to 1, where 1 indicates a fully correct solution and values below 1 reflect increasing degrees of error severity.

## Variants  

| Variant | Description | Application |
|----------|--------------|-------------|
| *CodeJudge A.S.* | Binary correctness evaluation using Analyze-Then-Summarize | HumanEval-X, APPS, BigCodeBench |
| *CodeJudge F.L.* | Graded correctness using Taxonomy-Guided Fault Localization | CoNaLa (Human-annotated code usefulness) |
| *CodeJudge w/o REF* | Reference-free version for scenarios without ground-truth code | Online evaluation, developer assistance tools |
| *Few-Shot & CoT Variants* | Incorporate examples or chain-of-thought reasoning, but found less effective than A.S. | Research extensions |


## Evaluation and Results  

Across multiple benchmarks (HumanEval-X, CoNaLa, APPS, BigCodeBench), CodeJudge consistently outperformed existing methods such as ICE-Score, CodeBLEU, and CodeBERTScore, achieving higher correlation with human judgment.

### Example Results (GPT-3.5-Turbo-1106)
| Dataset | Kendall’s τ | Spearman’s ρ | Accuracy (%) |
|----------|--------------|---------------|---------------|
| HumanEval-X | 0.612 | 0.612 | 80.56 |
| CoNaLa | 0.478 | 0.562 | — |
| APPS | 0.354 | 0.354 | 68.33 |
| BigCodeBench | 0.392 | 0.392 | 74.56 |

Even without reference code, CodeJudge maintained strong correlation (τ = 0.502) and 73% accuracy, demonstrating its ability to evaluate code semantically rather than syntactically.


## Interpretation  

CodeJudge redefines automated code evaluation by simulating human-like review reasoning.  
Instead of pass/fail based solely on execution, it evaluates how code meets or deviates from intended logic.

Key interpretative strengths:
- *No test cases required:* Effective in open-ended tasks.  
- *Supports partial correctness:* Differentiates between minor and severe issues.  
- *Cross-language generalization:* Valid across Python, Java, C++, JavaScript, Go.  
- *LLM adaptability:* Works with GPT-3.5, Llama-3 (8B, 70B), CodeLlama, etc.  

Limitations include occasional overemphasis on error handling and misinterpretation of complex logic in advanced benchmarks like APPS.


## Comparison with ICE-Score  

| Feature | ICE-Score | CodeJudge |
|----------|------------|------------|
| Test-case independence | ✓ | ✓ |
| Partial correctness scoring | ✗ | ✓ |
| Reasoning process | Single-step | Slow thinking (multi-step) |
| Reference-free evaluation | Limited | Supported |
| Correlation with ground truth | Moderate | High (>0.6) |


## Applications in Software Engineering  

- *Code generation evaluation:* Measures semantic correctness across diverse programming tasks.  
- *Developer feedback systems:* Enables automated quality feedback without tests.  
- *Benchmarking frameworks:* Used in HumanEval-X, CoNaLa, APPS, BigCodeBench.  
- *Code repair and debugging:* Identifies logic-level inconsistencies for refinement loops.


## Limitations  

While CodeJudge shows strong correlation with human evaluation, challenges remain:
- Misjudgments in complex control flows or large functions.  
- Overestimation of “error-handling” needs.  
- Sensitivity to incomplete prompts in zero-shot settings.

Future work involves integrating dynamic execution tracing and improving the weighting of minor vs. major inconsistencies.


## References  

1. *Tong, W., & Zhang, T. (2024).* CodeJudge: Evaluating Code Generation with Large Language Models.  
   arXiv:2410.02184 [cs.LG].  
   [https://arxiv.org/abs/2410.02184](https://arxiv.org/abs/2410.02184)

2. *Zhuo, T. Y. (2024).* ICE-Score: Instructing Large Language Models to Evaluate Code.  
   Findings of the Association for Computational Linguistics: EACL 2024.  
   [https://aclanthology.org/2024.findings-eacl.148](https://aclanthology.org/2024.findings-eacl.148)

3. *Evtikhiev, M., Bogomolov, E., Sokolov, Y., & Bryksin, T. (2023).* Out of the BLEU: How Should We Assess Quality of the Code Generation Models?  
   Journal of Systems and Software, 203:111741.  
   [https://doi.org/10.1016/j.jss.2023.111741](https://doi.org/10.1016/j.jss.2023.111741)
