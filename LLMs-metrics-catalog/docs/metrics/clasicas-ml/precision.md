---
id: precision
title: Precision
sidebar_label: Precision
---

## Definition
**Precision**, also known as **positive predictive value**, is a metric used in classification, information retrieval, and increasingly in evaluating generative models. It measures the proportion of instances predicted as positive (or generated items) that are actually correct (or relevant/high-fidelity). In essence, it answers the question: "Of all the items the model identified as positive, how many were actually positive?"

In generative models, Precision is often adapted to measure **fidelity**—how realistic or close the generated samples are to the real data distribution . It assesses whether the generated samples fall within the distribution of real samples in a feature space.

***

## Formula (General Idea)
The standard formula for precision in classification/detection is:
$$
\text{Precision} = \frac{\text{True Positives (TP)}}{\text{True Positives (TP)} + \text{False Positives (FP)}}
$$
* **TP:** Items correctly identified as positive (e.g., actual bugs found, relevant documents retrieved, high-fidelity generated samples identified as "real").
* **FP:** Items incorrectly identified as positive (e.g., non-bugs flagged as bugs, irrelevant documents retrieved, low-fidelity generated samples identified as "real").

In the context of generative model evaluation (e.g., using the Precision and Recall metric framework):
* It measures the fraction of the *generated* distribution that falls within the manifold of the *real* data distribution, often estimated using nearest-neighbor methods in a feature space .

***

## Purpose
* **Classification/Detection:** To measure the model's exactness or ability to avoid making incorrect positive predictions (false positives). Crucial when the cost of a false positive is high (e.g., spam detection, medical diagnosis).
* **Generative Models:** To evaluate the **fidelity** or **quality** of the generated samples. High precision suggests that most generated samples are realistic or similar to real data .

***

## Domains
* Classification (General ML)
* Information Retrieval
* Generative Models (Image/Text/Code Generation - Fidelity Evaluation)
* Bug Fixing / Bug Detection / Code Repair
* Biomedical NLP (Multiple-Classification)
* Security Evaluation (Code Generation)
* Multimodal LLMs (Hallucination Evaluation - Discriminative Task)

***

## Benchmarks
* Defects4J, QuixBugs
* BC5CDR, NCBI Disease, MedNLI, CHEMPROT
* CIFAR10, ImageNet1k, FFHQ, LSUN-Bedroom (for generative model evaluation)
* AMBER
* CYBERSECEVAL
* (Various classification/IR benchmarks)

***

## Advantages
* Directly measures the correctness of positive predictions/generations.
* Useful when minimizing false positives is critical.
* When used alongside Recall for generative models, helps disentangle fidelity (Precision) from diversity (Recall).

***

## Limitations
* **Does not account for False Negatives:** A model can achieve high precision by being very conservative and only making positive predictions when extremely confident, potentially missing many actual positive instances (low recall).
* **Can be misleading in isolation:** High precision alone doesn't guarantee the model finds most positive instances.
* **Sensitive to Implementation:** Like Recall for generative models, its estimation using feature space overlaps depends on the encoder and hyperparameters (e.g., k in k-NN) .

***

## Key References
* Sajjadi et al., 2018 (Precision and Recall for Generative Models paper)
* Kynkäänniemi et al., 2019 (Improved Precision and Recall metric)
* File: exposing flaws.pdf
* (Excel Data: Papers 2, 3, 6, 7, 8, 18, 67)
