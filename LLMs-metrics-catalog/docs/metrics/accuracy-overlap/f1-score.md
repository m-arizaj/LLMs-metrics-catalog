---
id: f1-score
title: F1-Score
sidebar_label: F1-Score
---

## Definition
The **F1-Score** (also known as F-score or F-measure) is a metric commonly used in classification, information retrieval, and other tasks where both **Precision** and **Recall** are important. It calculates the **harmonic mean** of Precision and Recall, providing a single score that balances both concerns.

It's particularly useful when dealing with **imbalanced datasets**, where accuracy alone might be misleading because a model could achieve high accuracy by simply predicting the majority class.

***

## Formula (General Idea)
The F1-Score is calculated as:
$$
\text{F1} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}
$$
Alternatively, using True Positives (TP), False Positives (FP), and False Negatives (FN):
$$
\text{F1} = \frac{\text{TP}}{\text{TP} + \frac{1}{2}(\text{FP} + \text{FN})}
$$

***

## Purpose
To provide a single, balanced measure of a model's performance by considering both its ability to avoid false positives (Precision) and its ability to find all true positives (Recall). It is often preferred over accuracy when class distribution is uneven or when the cost of false positives and false negatives differs significantly.

***

## Domains
* Classification (General ML)
* Information Retrieval
* Biomedical NLP (Multiple-Classification)
* Bug Fixing / Bug Detection / Code Repair
* LLM Evaluation / Question Answering
* Code Generation (as a correctness measure in specific benchmarks like CodeXGLUE)
* Multimodal LLMs (Hallucination Evaluation - Discriminative Task)

***

## Benchmarks
* BC5CDR, NCBI Disease, MedNLI, CHEMPROT
* Defects4J, QuixBugs
* NaturalQuestions, NarrativeQA, QuAC
* AMBER
* CodeXGLUE (e.g., Clone Detection)
* KoLA (Knowledge Completion)
* Synthetic reasoning datasets
* SELU (Non-Code SE Tasks)
* (Various classification benchmarks)

***

## Advantages
* **Balances Precision and Recall:** Provides a single score that reflects both aspects, unlike accuracy which can be skewed by class imbalance.
* **Effective for Imbalanced Classes:** Gives a better indication of model performance when one class significantly outnumbers others.
* **Widely Used:** A standard metric for many classification and evaluation tasks.

***

## Limitations
* **Less Intuitive than Accuracy:** The harmonic mean is not as straightforward to interpret as a simple percentage of correct predictions.
* **Treats Precision and Recall Equally:** The standard F1-score gives equal weight to Precision and Recall. Variants like F-beta scores exist to weigh one more heavily if needed, but the basic F1 doesn't capture this nuance.
* **Doesn't Consider True Negatives:** The score is calculated based on TP, FP, and FN, ignoring True Negatives (correctly identified negative instances). This might be a limitation depending on the specific application.

***

## Key References
* (Standard ML metric, widely cited across provided papers implicitly or explicitly)
* File: class level -c.pdf
* File: exposing flaws.pdf
* File: human centric.pdf
* (Excel Data: Papers 2, 3, 4, 5, 6, 7, 8, 10, 11, 43, 50, 55, 61)