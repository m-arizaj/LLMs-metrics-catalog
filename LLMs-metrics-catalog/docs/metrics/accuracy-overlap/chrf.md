---
id: chrf
title: chrF
sidebar_label: chrF
---

## Introduction
chrF is a character-level evaluation metric proposed to assess text similarity between system outputs and human references.  
It is based on the F-score computed over the overlap of character n-grams, combining precision and recall.  
Unlike word-based metrics such as BLEU, chrF is less sensitive to tokenization and more robust across morphologically rich languages.  
In software engineering, chrF is used to measure similarity between generated and reference code snippets, summaries, or documentation, capturing how closely a model’s output aligns at the subword or character level.

## Formula
chrF is calculated as the Fβ-score between character-level n-gram precision and recall:

$$
chrF_{\beta} = \frac{(1 + \beta^2) \cdot (Precision \times Recall)}
{(\beta^2 \cdot Precision) + Recall}
$$

Where:  
- Precision = fraction of overlapping character n-grams in the generated text.  
- Recall = fraction of overlapping n-grams in the reference text.  
- β = weighting factor (commonly 2), emphasizing recall over precision.  

The metric is averaged over n-grams (typically n = 2–6).

## Variants
- *chrF*: Original version, purely character-based.  
- *ChrF++*: Extended version that also includes word-level n-grams to balance surface and semantic matching.  

Both variants can be applied to tasks such as text generation, summarization, and code translation.

## Application in Software Engineering
In SE-related LLM evaluations, chrF quantifies character-level overlap between generated code or comments and their references.  
It is particularly useful when exact token matches are too strict, allowing partial similarity to contribute to the score.
Studies using chrF in code generation datasets such as HumanEval and CoNaLa show that while it captures low-level textual resemblance, it does not always correlate with functional correctness. Therefore, it is often combined with execution-based metrics (e.g., Pass@k) to provide a more complete evaluation of code quality.
Recent extrinsic evaluation work by Moghe et al. (2022) highlights that although chrF is interpretable and efficient, it exhibits limited correlation with downstream task success, suggesting it should be used mainly for surface-level comparison rather than deep semantic evaluation.

## Interpretation
- High chrF values indicate strong surface similarity at the character level.  
- Moderate values often reflect stylistic or structural differences despite semantic similarity.  
- Low values correspond to significant lexical or structural variation between model and reference output.  
In software engineering contexts, chrF is valuable for quick model comparisons and regression testing in generative code tasks.

## References
1. Popović, M. (2017). chrF++: Words Helping Character n-grams Improve Machine Translation Evaluation.  
   Proceedings of the Second Conference on Machine Translation. ACL Anthology. 
   [https://aclanthology.org/W17-4770](https://aclanthology.org/W17-4770)  
2. Moghe, N., Sherborne, T., Steedman, M., & Birch, A. (2022). Extrinsic Evaluation of Machine Translation Metrics.  
   arXiv preprint. 
   [https://arxiv.org/abs/2212.10297](https://arxiv.org/abs/2212.10297)  

### Additional References in Dataset
- 11, 12, 19, 25, 26