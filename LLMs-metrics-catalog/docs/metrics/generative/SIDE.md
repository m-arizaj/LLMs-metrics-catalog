---
id: side
title: SIDE
sidebar_label: SIDE
---

## Definition

**SIDE** is an **embedding-based metric** specifically designed to evaluate the quality of code summaries. It stands out from other embedding-based metrics like BERTScore by applying **contrastive learning**.

Instead of just measuring direct similarity, SIDE enhances the evaluation by learning to pull similar (positive) code-summary pairs closer together in the embedding space while pushing dissimilar (negative) pairs apart. This approach allows it to better capture the semantic adequacy of a generated summary.

***

## Formula (General Idea)

SIDE is grouped with other embedding-based metrics that work by encoding both the generated artifact (the code summary) and a reference summary into high-dimensional vectors (embeddings) and then measuring the similarity between them.

Its specific formulation uses **contrastive learning** to refine a **cosine similarity**-based evaluation, making it more robust for the code summarization task.

***

## Purpose

The primary purpose of SIDE is to assess the quality of machine-generated code summaries. It is used as an automatic metric to compare a candidate summary against a human-written reference summary.

***

## Domains

* Software Engineering
* Code Summarization

***

## Advantages

* **State-of-the-Art:** It is considered a state-of-the-art metric specifically designed for the code summarization task.
* **Task-Specific:** Unlike general text-based metrics, SIDE's use of contrastive learning is tailored for evaluating code summaries.

***

## Limitations

* **Similarity vs. Correctness:** Like other embedding-based metrics, SIDE "approximate[s] correctness through similarity". This can be a limitation, as "similarity does not always align with correctness". A summary could be syntactically different but semantically correct, which might result in a lower-than-expected score.

***

## Key References

*Mastropaolo, A., Ciniselli, M., Di Penta, M., & Bavota, G. (2024). Evaluating code summarization techniques: A new metric and an empirical characterization. En Proceedings of the 46th IEEE/ACM International Conference on Software Engineering (pp. 1–13). ACM. https://doi.org/10.1145/3597503.3639174

* Zhou, X., Kim, K., Zhang, T., Lo, D., & Han, D. G. (2025). SE-Jury: An LLM-as-ensemble-judge metric for narrowing the gap with human evaluation in SE. arXiv. https://doi.org/10.48550/arXiv.2505.20854