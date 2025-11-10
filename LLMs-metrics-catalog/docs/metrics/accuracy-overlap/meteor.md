---
id: meteor
title: Meteor
sidebar_label: Meteor
---
## Introduction

METEOR (Metric for Evaluation of Translation with Explicit ORdering) is a machine translation evaluation metric proposed by Banerjee and Lavie (2005).  
Unlike BLEU, which focuses primarily on n-gram precision, METEOR incorporates both precision and recall, aligning better with human judgment of translation quality.  
The metric was later adopted for evaluating text generation and code generation tasks, especially in Software Engineering benchmarks such as CodeXGLUE, CodeSearchNet, and TL-CodeSum, where it assesses structural and semantic similarity between model outputs and references.

## Formula
METEOR computes an F-score–like measure based on unigram matches between a candidate and reference:

$$
F_{mean} = \frac{10 \cdot P \cdot R}{R + 9P}
$$

where:
- $P$ = unigram precision (fraction of matched unigrams in the candidate),
- $R$ = unigram recall (fraction of matched unigrams in the reference).

To penalize word order differences, a fragmentation penalty ($Pen$) is applied:

$$
Pen = 0.5 \left(\frac{ch}{m}\right)^3
$$

where:
- $ch$ = number of contiguous matched chunks,  
- $m$ = total number of matches.

The final METEOR score is:

$$
METEOR = F_{mean} \cdot (1 - Pen)
$$

This formulation makes METEOR more linguistically aware than BLEU, since it supports stemming, synonymy, and paraphrase matching.

## Variants and Adaptations
While the core formulation of METEOR remains consistent, adaptations have been made for Software Engineering contexts:

| Variant | Description | Example Context |
|----------|--------------|----------------|
| **Structural METEOR** | Evaluates the syntactic overlap of generated code structures rather than plain text tokens. | *CodeXGLUE*, *HumanEval* |
| **Semantic METEOR** | Considers meaning-preserving variations such as variable renaming or equivalent logic in generated code. | *HumanEval*|
| **Summarization METEOR** | Applied to code summarization tasks, where it captures lexical and semantic similarity between generated and reference summaries. | *CodeSearchNet*, *TL-CodeSum* |

These adaptations make METEOR particularly useful in code generation, documentation synthesis, and summarization benchmarks, complementing metrics such as BLEU, ROUGE-L, and CodeBLEU.

## Interpretation
In Software Engineering evaluations, METEOR provides a balance between precision and recall, capturing cases where generated code or summaries partially align semantically with references.  
Compared to BLEU, METEOR is less sensitive to exact token overlap and better reflects meaning equivalence, which is crucial for tasks like code summarization or docstring generation.
However, METEOR may still overestimate similarity in cases where syntactically valid but logically incorrect code shares high lexical overlap.

## References

- Banerjee, S., & Lavie, A. (2005). *METEOR: An Automatic Metric for MT Evaluation with Improved Correlation with Human Judgments*  
  In *Proceedings of the ACL Workshop on Intrinsic and Extrinsic Evaluation Measures for Machine Translation and/or Summarization* (pp. 65–72). Association for Computational Linguistics.  
  [https://aclanthology.org/W05-0909.pdf](https://aclanthology.org/W05-0909.pdf)

### Additional References in Dataset
 - 1, 2, 3, 6, 7, 11, 12, 18, 19, 25