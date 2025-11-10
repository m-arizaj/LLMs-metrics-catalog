---
id: swe
title: SWE-Judge Score
sidebar_label: SWE-Judge Score
---

## Introduction

SWE-Judge Score** is an LLM-as-a-Judge evaluation metric introduced by Zhou et al. (2025) to bridge the gap between human evaluation and automatic metrics in software engineering tasks such as code generation, automatic program repair, and code summarization.  
Unlike surface-level metrics (e.g., *BLEU*, *ROUGE*) or execution-based ones (e.g., *Pass@k*), SWE-Judge employs an ensemble of reasoning-based LLM evaluators to assess generated artifacts in terms of semantic correctness, functionality, and alignment with human expectations.

## Formula
The SWE-Judge score is defined as:

$$
SWE\text{-}Judge(x, y, r) = \frac{1}{|T|} \sum_{p_i \in T} LLM_{p_i}(x, y, r)
$$

Where:  
- $x$ is the task prompt or problem statement.  
- $y$ is the generated output (e.g., code, summary).  
- $r$ is the human reference implementation.  
- $T$ is the set of selected evaluation strategies.  
- $LLM_{p_i}$ is the score returned by the $i$-th LLM-based judge.  

Each judge outputs a normalized score (typically between 0–100 or rescaled to dataset-specific ranges such as 0–4 or 1–5).

## Variants
SWE-Judge integrates five complementary evaluation strategies:

1. **Direct Assess (P1):** The LLM directly rates the functional correctness of the generated code.  
2. **Direct Assess + Rethink (P2):** Adds a self-reflective re-evaluation pass before scoring.  
3. **Equivalence Assess (P3):** Judges semantic equivalence between generated and reference implementations.  
4. **Generate Tests and Assess (P4):** Produces test cases and verifies whether the generated code passes them.  
5. **Analyze Reference and Assess (P5):** Extracts core behavioral properties from the reference solution and checks their presence in the generated output.  

A Dynamic Team Formation stage selects the subset of strategies most correlated with human ratings (based on Kendall τ, Spearman ρ, and Pearson r). The final SWE-Judge score is computed as the average of the selected strategies.

## Interpretation
In software engineering, SWE-Judge provides a semantically grounded evaluation of code correctness and quality, aligning more closely with human assessment practices.  
- It captures both functional and semantic equivalence, unlike metrics based on lexical similarity.  
- It integrates diverse reasoning processes to approximate human judgment.  
- It achieves strong correlation with human evaluators across code generation, repair, and summarization tasks.  
- It remains applicable even when execution-based metrics cannot be used (e.g., for documentation, static code, or non-runnable snippets).  

However, it has certain limitations:
- **Model dependence:** Results vary with the LLM used as judge (GPT-4o-mini in the original experiments).  
- **Computational overhead:** Multiple reasoning passes per evaluation increase cost.  
- **Potential bias inheritance:** The LLM’s intrinsic biases may affect subjective scoring.  
- **Limited non-functional assessment:** The metric focuses on correctness, not efficiency, readability, or maintainability.

## References
1. **Zhou, X., Kim, K., Zhang, T., Weyssow, M., Gomes, L. F., Yang, G., & Lo, D. (2025).** *SWE-Judge: An LLM-as-Judge Metric for Bridging the Gap with Human Evaluation in Software Engineering Tasks.* (Also listed in the references database)
[https://arxiv.org/abs/2505.20854](https://arxiv.org/abs/2505.20854)
