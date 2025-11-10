---
id: f1-score
title: F1-Score
sidebar_label: F1-Score
---

## Introduction

The F1-score is a harmonic mean between Precision and Recall, designed to balance the trade-off between false positives and false negatives in classification tasks.  
It is particularly valuable in imbalanced datasets, where accuracy alone can be misleading.  
In Software Engineering, the F1-score is used for evaluating model performance across multiple domains such as bug detection, code repair, classification, semantic similarity, and functional correctness.

This metric measures the balance between a model’s ability to retrieve relevant instances (recall) and avoid misclassifications (precision), thus serving as a robust indicator of predictive reliability. It is commonly used in *defect prediction*, *bug localization*, *natural language reasoning*, and *code generation* studies.

## Mathematical Definition

The classical formulation of the F1-score, as defined in Hand et al. (2021) and Yao & Shepperd (2020), is:

$$
F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}
$$

where:  
- $Precision = \frac{TP}{TP + FP}$  
- $Recall = \frac{TP}{TP + FN}$  
and $TP$, $FP$, and $FN$ denote the true positive, false positive, and false negative counts respectively.

The F1-score ranges from 0 to 1, with 1 representing perfect precision and recall.

## Variants

Although naming conventions differ across studies, the F1 metric family can be reduced to three main variants:

### 1. Standard F1-Score
Used for binary or balanced classification tasks.  
Common in general NLP and SE evaluations for correctness and reasoning performance.

### 2. Macro-F1
Computes the unweighted mean of F1-scores across all classes, giving equal importance to each class regardless of frequency. 

### 3. Micro-F1
Aggregates all instances before calculating precision and recall, thus weighting classes by their number of samples.  
It is widely applied in Named Entity Recognition (NER), token-level classification, and non-code SE tasks like *SELU* (Software Engineering Language Understanding).

## Applications in Software Engineering

| Context | Example Benchmarks/Datasets | Purpose |
|----------|-----------------|----------|
| **Bug Detection / Repair** | Defects4J, QuixBugs | Evaluates detection and repair accuracy in software faults |
| **Code Generation** | CodeXGLUE, General LLM Evaluation | Measures correctness in generated code classification |
| **Clone Detection** | BigCloneBench | Assesses semantic similarity between code fragments |
| **Reasoning / QA** | Commonsense datasets, NaturalQuestions | Quantifies reasoning accuracy in LLMs |
| **NER / Token Classification** | SELU | Evaluates entity-level prediction balance (micro-averaged F1) |

## Interpretation and Limitations

While powerful, the F1-score can be misleading in imbalanced datasets, as it overlooks true negatives and can inflate perceived performance.  
Yao & Shepperd (2021) found that over 21.95% of performance comparisons in software defect prediction studies change direction when using F1 instead of the Matthews Correlation Coefficient (MCC), demonstrating its sensitivity to class imbalance.

Hand et al. (2021) further highlight that the harmonic mean formulation of F1 complicates interpretability and propose F\* — an interpretable transformation of the F-measure — to address this issue.  
Therefore, while F1 remains a standard metric, it should be complemented by Precision, Recall, or MCC for a complete evaluation.

## References

1. Hand, D. J., Christen, P., & Kirielle, N. (2021). *F: An Interpretable Transformation of the F-measure.*  
   arXiv preprint.  
   [https://doi.org/10.1007/s10994-021-05964-1](https://doi.org/10.1007/s10994-021-05964-1)

2. Yao, J., & Shepperd, M. (2020). *Assessing Software Defect Prediction Performance: Why using the Matthews correlation        coefficient matters.*  
   arXiv preprint.  
   [https://doi.org/10.48550/arXiv.2003.01182](https://doi.org/10.48550/arXiv.2003.01182)

3. Yao, J., & Shepperd, M. (2021). *The impact of using biased performance metrics on software defect prediction research.*   
   [https://doi.org/10.48550/arXiv.2103.10201](https://doi.org/10.48550/arXiv.2103.10201)

## Additional References in Dataset
- 2, 3, 4, 5, 6, 7, 9, 10, 26, 32, 43, 50, 55, 61