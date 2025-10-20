---
id: recall
title: Recall
sidebar_label: Recall
---

## Definition
Recall, also known as **sensitivity** or **true positive rate**, is a fundamental metric used in various machine learning tasks, including classification, information retrieval, and the evaluation of generative models. In the context of generative models for images or text/code, it is often adapted to measure **diversity** or **coverage**—how well the generated samples capture the breadth and variety present in the real data distribution or reference set [cite: 2998-2999, 3333]. For tasks like bug detection/repair, it measures the proportion of actual bugs that were correctly identified or fixed.

***

## Formula (General Idea)
The standard formula for recall in classification/detection is:
$$
\text{Recall} = \frac{\text{True Positives (TP)}}{\text{True Positives (TP)} + \text{False Negatives (FN)}}
$$
* **TP:** Items correctly identified as positive (e.g., actual bugs found, relevant documents retrieved).
* **FN:** Items incorrectly identified as negative (e.g., actual bugs missed, relevant documents not retrieved).

In the context of generative model evaluation (e.g., using the Precision and Recall metric framework for distributions):
* It measures the fraction of the *real* data distribution that is covered by the *generated* distribution, often estimated using nearest-neighbor methods in a feature space.

***

## Purpose
* **Classification/Detection:** To measure the model's ability to find all relevant positive instances (e.g., find all bugs, identify all patients with a disease).
* **Generative Models:** To evaluate the **diversity** or **coverage** of the generated samples compared to the real data distribution. [cite_start]A high recall suggests the model can generate varied outputs covering most modes of the true distribution [cite: 2998-2999, 3333].

***

## Domains
* Classification (General ML)
* Information Retrieval
* [cite_start]Generative Models (Image/Text/Code Generation - Diversity Evaluation) [cite: 2998-2999, 3333]
* Bug Fixing / Bug Detection
* Biomedical NLP
* Security Evaluation (Code Generation)

***

## Benchmarks
* Defects4J, QuixBugs
* CodeSearchNet
* BC5CDR, NCBI Disease, MedNLI, CHEMPROT
* CIFAR10, ImageNet1k, FFHQ, LSUN-Bedroom (for generative model evaluation)
* AMBER (for Multimodal LLMs)
* CYBERSECEVAL
* (Various classification/IR benchmarks)

***

## Advantages
* Directly measures how well a model captures all positive/relevant instances or the diversity of a target distribution.
* Crucial in applications where missing positives is costly (e.g., medical diagnosis, bug detection).
* When used alongside Precision for generative models, helps disentangle fidelity (Precision) from diversity (Recall).

***

## Limitations
* Does not account for False Positives (measured by Precision). A model can achieve high recall by simply classifying/generating everything as positive, leading to low precision.
* The implementation for generative models (based on feature space overlaps) can be sensitive to the choice of feature extractor (encoder) and hyperparameters (like k in k-NN).
* High recall in generation doesn't guarantee high fidelity (realism/correctness) of individual samples.

***

## Key References
* [cite_start]Sajjadi et al., 2018 (Precision and Recall for Generative Models paper) [cite: 3122-3123]
* [cite_start]Kynkäänniemi et al., 2019 (Improved Precision and Recall metric) [cite: 3063-3064]
* [cite_start]File: exposing flaws.pdf [cite: 2998-2999, 3333, 3340]
* (Excel Data: Papers 2, 3, 6, 7, 8, 18, 48, 67)