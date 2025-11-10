---
id: bleu
title: BLEU
sidebar_label: BLEU
---

## Introduction

BLEU (*Bilingual Evaluation Understudy*) is one of the most influential automatic evaluation metrics in Natural Language Processing (NLP). Introduced by **Papineni et al. (2002)**, it provided a scalable and reproducible way to compare system outputs with human references using *n-gram overlap* rather than subjective human scoring. Since its publication, BLEU has become a cornerstone for evaluating not only machine translation and text generation, but also code generation and other software engineering tasks as Large Language Models began producing structured, programmatic outputs.  
Its core idea, precision over short token sequences, has inspired several specialized variants such as CodeBLEU, CrystalBLEU, Smoothed BLEU, and WeightBLEU, each adapting the metric to better capture syntactic and semantic aspects of specific domains.

## 1. BLEU (Bilingual Evaluation Understudy)  
### Definition  
BLEU measures the correspondence between a candidate text (or code) and one or more reference texts using modified n-gram precision and a brevity penalty.  

$$
BLEU = BP \cdot \exp\!\left(\sum_{n=1}^{N} w_n \log p_n\right)
$$

where:  
- $p_n$ = modified precision for n-grams of size n,  
- $w_n$ = weight assigned to each n-gram order (commonly 1/N),  
- $BP = \min(1, e^{1 - r/c})$ = brevity penalty (r = reference length, c = candidate length).  
*(Papineni et al., 2002)*  

### Purpose  
Originally designed for machine translation, BLEU became a general benchmark for textual similarity in natural language generation and software engineering, providing a fast and language-independent evaluation method.

### Applications  
BLEU appears across multiple contexts:  
- Natural Language Generation and NLP evaluation – fluency and informativeness.
- Software Engineering – code generation, summarization, repair, translation, commit message generation, and documentation evaluation.

### Limitations  
- Focuses on surface overlap rather than semantic or functional accuracy.  
- Sensitive to tokenization and reference selection.  
- Requires multiple references for robust human correlation.  

## 2. CodeBLEU  
### Definition  
**CodeBLEU (Ren et al., 2020)** extends BLEU to software engineering tasks by integrating additional structural and semantic dimensions:  
1. Weighted n-gram match – gives higher weight to language keywords.  
2. AST-based structural match – measures syntactic correctness.  
3. Data-flow match – evaluates semantic and logical consistency.  

$
CodeBLEU = \alpha P_{ng} + \beta P_{wng} + \gamma P_{ast} + \delta P_{df}
$

### Advantages  
- Better correlation with functional correctness in code outputs.  
- Reduces false positives caused by superficial textual overlap.  

### Use Cases  
Used extensively in code generation, translation, and summarization tasks where syntax and semantics both matter.


## 3. CrystalBLEU

### Definition  
**CrystalBLEU** (Eghbali & Pradel, 2022) refines BLEU by excluding high-frequency trivial n-grams that appear broadly across programming corpora, reducing score inflation.  

### Advantages  
- More reliable indicator of semantic similarity in code.  
- Distinguishes genuine logical equivalence from shared boilerplate.  

### Use Cases  
Evaluation of model-generated code similarity or variant synthesis.


## 4. Smoothed BLEU / Smoothed 4-gram BLEU 

### Definition  
Smoothed BLEU variants modify the computation of higher-order n-gram precision values by adding a small smoothing constant.  
This avoids zero scores in short outputs with sparse matches.

### Use Cases  
Particularly useful for code summarization, short documentation generation, or low-resource text generation.


## 5. WeightBLEU  

### Definition  
WeightBLEU reweights n-gram or token contributions based on their importance in the task context, such as giving higher priority to syntax or control-flow keywords in code.  
It preserves the BLEU formulation but adapts the weight vector $w_n$ or per-token weights.  

### Use Cases  
Applied in code migration and generation tasks where token significance varies.

## 6. Comparative Summary

| Metric          | Based on | Extension Goal                              | Added Feature(s)                        | Typical Domain |
|-----------------|-----------|---------------------------------------------|------------------------------------------|----------------|
| **BLEU**        | –         | Baseline precision-based metric             | Modified n-gram precision, brevity penalty | NLP, SE         |
| **CodeBLEU**    | BLEU      | Incorporate syntax and semantics            | Weighted n-gram, AST, data-flow matches   | SE              |
| **CrystalBLEU** | BLEU      | Filter trivial overlaps                     | Removes common/high-frequency n-grams     | SE              |
| **Smoothed BLEU** | BLEU   | Stabilize scores for short outputs          | Adds smoothing for higher-order n-grams   | NLP, SE         |
| **WeightBLEU**  | BLEU      | Token-importance weighting                  | Variable n-gram and token weights         | SE              |


## References 
- Papineni, K., Roukos, S., Ward, T., & Zhu, W.-J. (2002).  
  *BLEU: A Method for Automatic Evaluation of Machine Translation.*  
  *Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics (ACL).*  
  [https://aclanthology.org/P02-1040.pdf](https://aclanthology.org/P02-1040.pdf)  
- Eghbali, A., & Pradel, M. (2022). *CrystalBLEU: Precisely and Efficiently Measuring the Similarity of Code.*
  [https://doi.org/10.1145/3551349.3556903](https://doi.org/10.1145/3551349.3556903) 
### Additional References in Dataset
- 1, 2, 3, 6, 7, 9, 10, 11, 12, 15, 18, 19, 23, 25, 26, 31, 32, 34, 37, 40, 43, 45, 46, 47, 50, 51, 58, 60, 68