---
id: sentiment-polarity-shift
title: Sentiment Polarity Shift
sidebar_label: Sentiment Polarity
---

## Definition
**Sentiment Polarity Shift** is not a single metric, but an evaluation category designed to measure Social Bias. It quantifies how the sentiment polarity (positive, negative, or neutral) of an LLM's response changes when conditioned on different social groups (e.g., by gender, race, or religion).

This approach evaluates whether the model associates certain groups with more negative or positive social connotations. Specific metrics that implement this concept include:

* **Regard Score:** Measures "polarity towards... social groups" or the positive/negative social connotation.
* **Counterfactual Sentiment Bias:** Compares the sentiment distributions of two sentences generated from counterfactual prompts (e.g., where only the social group is changed).
* **Score Parity:** Measures the consistency with which a model generates language (evaluated by a sentiment classifier) with respect to a protected attribute.

***

## Calculation (General Idea)
These metrics generally rely on an auxiliary classifier model to score the generated text for sentiment or toxicity.

1.  **Prompting:** The LLM is provided with prompts containing descriptors of social groups. These are often presented in counterfactual pairs (e.g., "The [Group A] man was..." vs. "The [Group B] man was...").
2.  **Generation:** The LLM generates text or continuations for each prompt.
3.  **Classification:** An external classifier (e.g., a sentiment or toxicity classifier) scores the polarity of each generated text.
4.  **Comparison:** The "shift" is calculated by comparing the sentiment scores or distributions between the different social groups. For example, *Counterfactual Sentiment Bias* uses the Wasserstein-1 distance to measure the difference between the resulting sentiment distributions.

***

## Purpose
The main objective is to quantify social and cultural biases by identifying disparate sentiment or polarity in model outputs associated with different groups.

This helps detect representational harms such as **stereotyping** (where a model associates a group with negative attributes) or **misrepresentation** (where a model incorrectly classifies statements about stigmatized groups as negative).

***

## Domains
* Fairness / Bias Evaluation
* Social / Cultural Bias
* Text Generation (Open-Ended)
* Sentiment Analysis

***

## Advantages
* **Measures Specific Harm:** Directly quantifies a specific and well-known representational harm (disparate sentiment) in generated text.
* **Black-Box Applicable:** Can be applied to black-box models, as it only requires the output text to be scored by an external classifier.
* **Subtle Bias Detection:** Captures more subtle biases than simple toxicity, such as negative stereotypes or microaggressions.

***

## Limitations
* The metric is **highly dependent on the auxiliary classifier** (e.g., sentiment or toxicity) used, which may have its own biases.
* Sentiment classifiers may incorrectly classify statements about stigmatized groups (e.g., people with disabilities or mental illnesses) as negative, thus skewing the metric.
* Open-ended text prompts can be ambiguous; bias may refer to the group in the prompt or a group mentioned in the continuation, making bias attribution difficult.
* Decoding parameter choices (e.g., temperature, top-k) can drastically change the level of measured bias, leading to contradictory results.

***

## Key References
* Gallegos, I. O., Rossi, R. A., Barrow, J., Tanjim, M. M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., & Ahmed, N. K. (2024). Bias and fairness in large language models: A survey. Computational Linguistics, 50(3), 1043–1108. https://doi.org/10.1162/coli_a_00524

* Dhamala, J., Sun, T., Kumar, V., Krishna, S., Pruksachatkun, Y., Chang, K.-W., & Gupta, R. (2021). BOLD: Dataset and metrics for measuring biases in open-ended language generation. arXiv. https://doi.org/10.48550/arXiv.2101.11718

* Sheng, E., Chang, K.-W., Natarajan, P., & Peng, N. (2019). The woman worked as a babysitter: On biases in language generation. arXiv. https://doi.org/10.48550/arXiv.1909.01326

* Huang, P.-S., Zhang, H., Jiang, R., Stanforth, R., Welbl, J., Rae, J., Maini, V., Yogatama, D., & Kohli, P. (2020). Reducing sentiment bias in language models via counterfactual evaluation. En Findings of the Association for Computational Linguistics: EMNLP 2020 (pp. 65–83). Association for Computational Linguistics. https://doi.org/10.18653/v1/2020.findings-emnlp.7