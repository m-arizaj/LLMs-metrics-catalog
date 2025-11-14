---
id: comet
title: COMET
sidebar_label: COMET
---

## Definition
**COMET** (which stands for **"COMET: A Neural Framework for MT Evaluation"** ) is an automatic evaluation metric for text generation. It is an **LLM-based metric**, meaning it leverages a pre-trained cross-lingual language model to evaluate the quality of a generated text (hypothesis) by comparing it to a source text and one or more reference texts.

Unlike traditional metrics that rely on n-gram overlap, COMET is trained to **learn human judgments** of quality. It is designed to capture the semantic nuances of language more effectively.

***

## Formula (General Idea)
COMET does not use a simple, static statistical formula like BLEU. Instead, it is a **neural framework** that uses a pre-trained cross-lingual language model (like XLM-R) as its core.

The model is fed the **source text**, the **candidate text** (hypothesis), and the **reference text**. The model's embeddings are used to produce a single quality score. This score is the output of a model that has been trained to predict the quality scores provided by human evaluators.

***

## Purpose
The primary purpose of COMET is to provide an automatic evaluation metric that **correlates more accurately with human judgments** of translation quality than previous metrics. It aims to move beyond simple surface-level text matching and leverage the deep semantic understanding of LLMs to "better capture the nuances" of language  and provide "accurate and comprehensive guidance" on a model's performance.

***

## Domains
* Machine Translation (MT) 
* Natural Language Generation (NLG)
* LLM Evaluation / Natural Language Processing (NLP)
* Code Generation / Software Engineering (used as a baseline for comparison)

***



## Advantages
* **High Correlation with Human Judgment:** It is specifically trained to learn from and replicate human assessments of quality.
* **Deep Semantic Understanding:** As an LLM-based metric, it "exhibits greater semantic understanding ability" and can "better capture the nuances" of language compared to metrics that only look at surface-level text overlap.
* **Cross-lingual Framework:** It uses cross-lingual pre-trained models, making it highly effective for its primary task of evaluating machine translation.

***

## Limitations
* **Requires Reference Texts:** COMET is a reference-based metric. It depends on one or more high-quality human-generated references, which are not always available or are expensive to create.
* **Poor Correlation with Code Correctness:** When applied to highly specialized domains like code generation, COMET (along with other traditional NLP metrics) has been shown to have an "extremely weak correlation" with functional correctness. For example, on the APPS-Eval dataset, its correlation ($r_p$) was only 0.1187.
* **Computational Cost:** As a neural model, it is more computationally expensive to run than simple statistical metrics like BLEU.

***

## Key References
* Rei, R., Stewart, C., Farinha, A. C., & Lavie, A. (2020). *COMET: A Neural Framework for MT Evaluation. https://doi.org/10.18653/v1/2020.emnlp-main.213

* L. Lin, D. Zhu and J. Shang, "Overview of the Comprehensive Evaluation of Large Language Models," 2024 IEEE Smart World Congress (SWC). https://doi.org/10.1109/SWC62898.2024.00231

* Dong, Y., Ding, J., Jiang, X., Li, G., Li, Z., & Jin, Z. (2024). CodeScore: Evaluating code generation by learning code execution. arXiv. https://doi.org/10.48550/arXiv.2301.09043