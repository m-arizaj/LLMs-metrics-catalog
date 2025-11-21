---
id: swe
title: SE-Jury Score
sidebar_label: SE-Jury Score
---

## Introduction
SE-Jury Score is an LLM-as-an-Ensemble-Judge evaluation metric introduced by Zhou et al. (2025) to bridge the gap between human evaluation and automatic metrics in software engineering tasks such as code generation, automatic program repair, and code summarization. Unlike surface-level metrics (e.g., BLEU, ROUGE) or execution-based ones (e.g., Pass@k), SE-Jury employs an ensemble of reasoning-based LLM evaluators to assess generated artifacts in terms of semantic correctness, functionality, and alignment with human expectations.

## Formula
The SE-Jury score is defined as:

$$
SE\text{-}Jury(x, y, r) = \frac{1}{|T|} \sum_{p_i \in T} LLM_{p_i}(x, y, r)
$$

Where:  
- $x$ is the task prompt or problem statement.  
- $y$ is the generated output (e.g., code, summary).  
- $r$ is the human reference implementation.  
- $T$ is the subset of evaluation strategies selected through dynamic team formation.  
- $LLM_{p_i}$ is the score returned by the $i$-th LLM-based judge.  

Each judge outputs a normalized score (0–100), which is linearly rescaled to match dataset-specific ranges (e.g., 1–5 or 0–4) when required.

## Variants
SE-Jury integrates five complementary evaluation strategies:

1. *Direct Assess (S1):* The LLM directly rates the functional correctness of the generated code.  
2. *Direct Assess + Rethink (S2):* Adds a self-reflective reasoning pass before scoring.  
3. *Equivalence Assess (S3):* Judges semantic equivalence between generated and reference implementations.  
4. *Generate Tests and Assess (S4):* Produces test cases and verifies whether the generated code passes them.  
5. *Analyze Reference and Assess (S5):* Extracts core behavioral properties from the reference solution and checks their presence in the generated output.  

A *Dynamic Team Formation* stage selects the subset of strategies that maximizes correlation with human ratings (using Kendall τ, Spearman ρ, and Pearson r).  
The final SE-Jury score is computed as the average of the selected judges.

## Interpretation
In software engineering, SE-Jury provides a semantically grounded evaluation of code correctness and quality, aligning more closely with human assessment practices.  
- It captures functional and semantic equivalence beyond lexical similarity.  
- It integrates diverse reasoning processes to approximate human judgment.  
- It achieves strong correlation with human evaluators across code generation, repair, and summarization tasks.  
- It remains applicable even when execution-based metrics cannot be used (e.g., documentation, static code, or non-runnable snippets).  

However, it has certain limitations:
- *Model dependence:* Results vary with the LLM used as judge (GPT-4o-mini in the original experiments).  
- *Computational overhead:* Multiple reasoning passes increase cost.  
- *Bias inheritance:* The LLM’s intrinsic biases may propagate into scores.  
- *Limited non-functional assessment:* The metric focuses on correctness, not efficiency, readability, or maintainability.


## References
1. **Zhou, X., Kim, K., Zhang, T., Weyssow, M., Gomes, L. F., Yang, G., & Lo, D. (2025).** *SWE-Judge: An LLM-as-Judge Metric for Bridging the Gap with Human Evaluation in Software Engineering Tasks.* 
[https://doi.org/10.48550/arXiv.2505.20854](https://doi.org/10.48550/arXiv.2505.20854)
