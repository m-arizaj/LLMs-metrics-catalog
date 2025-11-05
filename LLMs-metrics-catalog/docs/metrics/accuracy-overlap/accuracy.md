---
id: accuracy
title: Accuracy
sidebar_label: Accuracy
---

## Definition
**Accuracy** is a fundamental metric that measures the proportion of correct predictions or outcomes among the total number of cases evaluated. In the context of LLMs and software engineering, it can refer to various specific measurements depending on the task:
* **Classification:** The ratio of correctly classified instances (e.g., in biomedical NLP tasks, bug detection).
* **Code Generation:** Often measured by **functional correctness** (e.g., whether the generated code passes tests like in Pass@k or Execution Accuracy ), **exact match** (EM) with a reference solution , or specific task success rates (e.g., Compilation Success Rate ).
* **Question Answering:** Proportion of questions answered correctly (e.g., Strict Accuracy - SaCC, Lenient Accuracy - LaCC ).
* **General LLM Evaluation:** Correctness on benchmarks testing knowledge, reasoning, or language understanding (e.g., Exact Match on MMLU ).

## Formula (General Idea)
For classification tasks, the standard formula is:
$$
\text{Accuracy} = \frac{\text{True Positives (TP)} + \text{True Negatives (TN)}}{\text{Total Population (TP + TN + FP + FN)}}
$$
* **TP:** Correctly identified positive instances.
* **TN:** Correctly identified negative instances.
* **FP:** Incorrectly identified positive instances (False Positives).
* **FN:** Incorrectly identified negative instances (False Negatives).

For generation or QA tasks, it's often simplified to:
$$
\text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}}
$$
Where "Correct Prediction" is defined by the specific task (e.g., passing tests, matching reference exactly, answering question correctly).

***

## Purpose
To measure the overall correctness or success rate of a model on a given task. It provides a straightforward indication of how often the model gets the right answer or produces the desired output according to specific criteria.

***

## Domains
* General Machine Learning / Classification
* LLM Evaluation (General, NLP, Reasoning, Knowledge)
* Software Engineering / Code Generation (Functional Correctness, Structural Accuracy)
* Biomedical NLP
* Multimodal LLMs (Hallucination Evaluation - Discriminative Task)
* Code Repair / Bug Fixing (implicitly, via correctness)
* Software Design
* Data Science Code Generation
* Code Refactoring

***

## Benchmarks
* GLUE, SuperGLUE, CLUE
* BC5CDR, NCBI Disease, MedNLI, CHEMPROT
* HumanEval, MBPP, CodeContests, APPS, SWE-bench
* PubMedQA, BioASQ, MedMCQA, EMRQA
* HellaSwag, OpenBookQA, TruthfulQA, MMLU, BLiMP, BoolQ, etc.
* AMBER
* CodeXGLUE (e.g., Defect Detection, Clone Detection)
* DS-1000
* SELU (for Non-Code SE Tasks)
* (Many others depending on specific task)

***

## Advantages
* **Simple and Intuitive:** Easy to understand and interpret – represents the overall percentage of correctness.
* **Widely Used:** A standard metric across many fields, facilitating comparisons.

***

## Limitations
* **Misleading on Imbalanced Datasets:** Can give a deceptively high score if one class heavily outweighs others (e.g., predicting the majority class always). Metrics like F1-score, Precision, and Recall are often better in such cases.
* **Doesn't Capture Nuance:** Especially in generation tasks, simple accuracy (like Exact Match) might be too strict and fail to reward semantically correct but syntactically different outputs. Functional correctness metrics (like Pass@k) address this for code but might still not capture all aspects of quality (e.g., maintainability, efficiency).
* **Definition Varies:** The specific definition of "correct" depends heavily on the task and benchmark (e.g., Exact Match vs. Passing Tests vs. Human Judgment).

***

## Key References
* (Standard ML metric, widely cited across provided papers implicitly or explicitly)
* File: exposing flaws.pdf
* File: human centric.pdf
* File: class level -c.pdf
* (Excel Data: Papers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 18, 19, 37, 40, 43, 49, 55, 61)