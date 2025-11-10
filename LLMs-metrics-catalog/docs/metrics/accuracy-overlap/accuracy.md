---
id: accuracy
title: Accuracy
sidebar_label: Accuracy
---

## Introduction

Accuracy is one of the most fundamental evaluation metrics in machine learning and software engineering.  
It measures the proportion of correct predictions or outputs relative to the total number of evaluated instances.  
In its most basic form, accuracy is used to quantify how often a model produces the expected or correct result,  
providing an intuitive sense of overall performance.

While simplicity is its main strength, accuracy can also be misleading when dealing with imbalanced datasets,  
where one class dominates the others. Therefore, modern research, especially in Software Engineering, often 
complements accuracy with additional metrics such as precision, recall, and F1-score to obtain a more complete view.

## Mathematical Definition

The standard definition of accuracy is given by:

$$
Accuracy = \frac{TP + TN}{TP + TN + FP + FN}
$$

where:  
- $TP$ = True Positives  
- $TN$ = True Negatives  
- $FP$ = False Positives  
- $FN$ = False Negatives  

This can be interpreted as the ratio of correctly predicted outcomes (both positive and negative)  
over the total number of cases.  

In discriminative classification problems or multiple-choice tasks, accuracy can also be expressed as:

$$
Accuracy = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}}
$$


## Variants and Derivative Metrics

Several domain-specific metrics build upon or adapt the core concept of accuracy to better suit  
different Software Engineering and LLM evaluation tasks.

### 1. Execution Accuracy
Measures the proportion of code generations that execute successfully and produce the correct output.  
Commonly used in program synthesis benchmarks such as HumanEval, MBPP, APPS, and CodeContests.  
It focuses on *functional correctness* rather than textual matching.

### 2. Strict Accuracy
A stricter variant requiring exact equality between the predicted output and the reference. Used in code correctness evaluation and biomedical QA datasets. Even small deviations or formatting differences count as incorrect.

### 3. Lenient Accuracy
A relaxed version that allows partial matches, synonyms, or semantically equivalent answers  
to be considered correct. Useful in *Question Answering (QA)* or open-ended generation tasks.

### 4. Exact Match Accuracy
Focuses on identical matches at the token or string level, typically for code completion  
or structured text prediction.  
Formula:

$$
ExactMatchAccuracy = \frac{\text{Exact Matches}}{\text{Total Predictions}}
$$

### 5. Coreference Resolution Accuracy
Evaluates whether pronouns or entities are resolved correctly in text.  
Applied in fairness and bias evaluation datasets such as WinoBias and WinoGender,  
this metric measures linguistic precision related to *gender bias* and referential correctness.

### 6. Selective Accuracy
Used in *selective prediction* scenarios, where a model can abstain from answering.  
It measures accuracy conditional on the predictions that the model chooses to make,  
providing insights into selective confidence and calibration.

### 7. Token-level Accuracy
Assesses accuracy at the individual token level (e.g., per character, word, or code token).  
Used in code completion or predictive modeling where small local errors may still yield functional code.  
Commonly used in various datasets focused on code completion.

### 8. Top-N Accuracy
Evaluates whether the correct answer appears within the top *N* predicted outputs.  
Frequently used in fault localization or multi-class classification problems.  
For example, *Top-5 Accuracy* counts a prediction as correct if the true label  
is among the top 5 model outputs.

### 9. Model Accuracy
Refers to the overall percentage of correctly classified instances by a machine learning model.  
Often used in benchmark tasks such as MNIST to indicate baseline model performance.

### 10. Dependency Traversal Accuracy
Introduced for long-context evaluation and software engineering quality assessment (LoCoBench, 2025).  
It measures how accurately a model preserves *structural or dependency relationships* across extended code contexts.  
Unlike standard accuracy, which focuses on isolated outputs, *Dependency Traversal Accuracy*  
captures the correctness of relationships between dependent code entities, making it more suitable for evaluating code understanding and maintenance tasks.


## Applications in Software Engineering and LLM Evaluation

The following areas have used *Accuracy* and its variants as their primary evaluation metrics:

- **Code Generation and Program Synthesis:**  
  Execution Accuracy, Strict Accuracy, and Functional Correctness in datasets like HumanEval, MBPP, APPS, EvalPlus, and CodeContests.  

- **Defect Detection and Vulnerability Analysis:**  
  Accuracy for classifying defective vs. clean code (e.g., Devign, CodeXGLUE).  

- **Fairness and Bias Evaluation:**  
  Coreference Resolution Accuracy in WinoBias and WinoGender for detecting gender bias.   

- **Reasoning and Classification Benchmarks:**  
  Accuracy and Multiple-Choice Accuracy in MMLU, HellaSwag, ARC, and WinoGrande.  

- **Long-context and SE Lifecycle Evaluation:**  
  Dependency Traversal Accuracy in LoCoBench, assessing code dependency reasoning.  


## Limitations

- **Insensitive to class imbalance:** Accuracy may appear high even if a model only predicts the majority class correctly.  
- **No differentiation of error types:** It treats false positives and false negatives equally, which can be misleading in defect prediction.  
- **Overly simplistic for complex tasks:** In SE tasks like program synthesis or bug localization, other metrics (e.g., Pass@k, F1, or BLEU)  provide richer performance information.  


## References

- Moussa, A., & Sarro, F. (2022). *On the Use of Evaluation Measures for Defect Prediction Studies.*  
  [PDF link](https://solar.cs.ucl.ac.uk/pdf/MoussaISSTA22.pdf)
- Opitz, J. et al. (2024). *A Closer Look at Classification Evaluation Metrics and a Critical Reflection of Common Evaluation Practice.*  
  *Transactions of the Association for Computational Linguistics.*  
  [Link](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00675/122720/A-Closer-Look-at-Classification-Evaluation-Metrics)
- Google Developers. *Accuracy, Precision, Recall (Crash Course).*  
  [https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)

### Additional References in Dataset
- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 18, 19, 26, 28, 31, 32, 34, 37, 40, 43, 48, 49, 50, 51, 54, 55, 57, 60, 61