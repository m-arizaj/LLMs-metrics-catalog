---
id: language-model-score
title: Language Model Score (lms)
sidebar_label: Language Model Score
---

## Definition

The **Language Model Score (lms)** is a metric used within the evaluation framework of the **StereoSet** benchmark. It is not a direct measure of social bias itself, but rather a measure of a model's basic language understanding and coherence.

It specifically calculates the **percentage of instances where a model prefers a meaningful sentence option over a meaningless (unrelated) one**. This score is then used as a component to calculate the **Idealized CAT (iCAT) Score**, which balances the model's language capability (`lms`) against its stereotyping tendencies (`ss`, or stereotype score).

***

## Formula (General Idea)

The StereoSet dataset provides examples with three options: a stereotype, an anti-stereotype, and a meaningless option. To calculate the `lms`, only the meaningful (stereotype or anti-stereotype) and meaningless options are compared.

The `lms` is the percentage of times the model assigns a higher probability (e.g., via pseudo-log-likelihood) to a meaningful sentence than to the meaningless one.

$$
\text{lms} = \frac{1}{|\mathcal{S}|} \sum_{i \in \mathcal{S}} \mathbb{I}(\text{model\_score}(S_{\text{meaningful}, i}) > \text{model\_score}(S_{\text{meaningless}, i})) \times 100
$$

Where:
* $\mathcal{S}$ is the set of examples in the dataset.
* $\mathbb{I}$ is the indicator function.
* $S_{\text{meaningful}}$ is either the stereotype or anti-stereotype option.
* $S_{\text{meaningless}}$ is the unrelated, nonsensical option.

***

## Purpose

The primary purpose of the `lms` is to **evaluate a model's fundamental language modeling capability** (i.e., its ability to distinguish coherent text from nonsense) before evaluating its social bias.

An "idealized language model" is defined as having an `lms` of 100 (it always prefers the meaningful option) and a stereotype score of 50 (it chooses equally between stereotype and anti-stereotype options). The `lms` essentially acts as a "sanity check"; if a model's `lms` is low (e.g., 50%), it is choosing randomly, and its stereotype score is therefore not a meaningful indicator of bias.

***

## Domains

* **Fairness / Bias Evaluation**
* Stereotypical Bias Evaluation
* Natural Language Understanding (NLU)

***

## Benchmarks

* **StereoSet**: The `lms` is a key component of the evaluation metric proposed with this benchmark.

***

## Advantages

* **Isolates Language Capability:** It separates the model's basic language understanding from its stereotyping tendency, allowing for a more nuanced interpretation of the bias score.
* **Contextualizes Bias Scores:** It is a crucial component of the **iCAT Score** ($iCAT = lms \cdot \frac{min(ss, 100-ss)}{50}$), which provides a single, combined score reflecting both model capability and fairness.
* **Provides a Sanity Check:** A low `lms` score immediately indicates that the model is failing at the basic task, rendering its bias-specific scores unreliable.

***

## Limitations

* **Benchmark Validity:** The `lms` is intrinsically tied to the StereoSet benchmark. This benchmark, along with others, has faced criticism for "severe shortcomings".
* **Ambiguity:** The dataset instances may contain "ambiguities about what stereotypes they capture". This ambiguity could potentially affect the clear distinction between "meaningful" and "meaningless" options in some cases, thus impacting the `lms` score.
* **Oversimplification:** The task of choosing between pre-defined sentence options may not fully capture a model's real-world behavior or its propensity to *generate* biased text on its own.

***

## Key References

* Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. *Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics (ACL)*.
* Gallegos, I. O., Rossi, R. A., Barrow, J., Tanjim, M. M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., & Ahmed, N. K. (2024). Bias and fairness in large language models: A survey. Computational Linguistics, 50(3), 1097–1179. https://doi.org/10.1162/coli_a_00524
* (Excel Data: Paper 16)