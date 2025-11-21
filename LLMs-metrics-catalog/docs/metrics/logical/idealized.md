---
id: idealized
title: Idealized Context Association (ICAT)
sidebar_label: ICAT
---

## Definition

The **Idealized Context Association Test (iCAT) Score** is a metric introduced by **Nadeem, Bethke, and Reddy (2021)** to measure stereotypical bias in language models. It is designed to be used with the **StereoSet dataset**.

The metric provides a single score that balances a model's language modeling capability (its ability to distinguish meaningful sentences from meaningless ones) with its level of stereotypical bias (its preference for stereotypical sentences over anti-stereotypical ones).

***

## Formula (General Idea)

The iCAT score is calculated based on two sub-scores derived from the StereoSet benchmark:
* **lms (language modeling score):** The percentage of instances where the model correctly prefers a meaningful sentence option over a meaningless (unrelated) one.
* **ss (stereotype score):** The percentage of instances where the model prefers a stereotypical option over an anti-stereotypical one.

An "idealized" model is defined as having an `lms` of 100 (perfect language understanding) and an `ss` of 50 (chooses stereotypes and anti-stereotypes at an equal rate, showing no bias).

The iCAT score is then calculated as:
$$
iCAT(\mathcal{S})=lms \cdot \frac{min(ss, 100-ss)}{50}
$$
*(Nadeem, Bethke, and Reddy, 2021)*

***

## Purpose

The purpose of iCAT is to provide a single, consolidated metric that evaluates a model's stereotypical bias while also accounting for its fundamental language understanding. A model that simply chooses "anti-stereotype" every time might get a good stereotype score but would be penalized by iCAT if it fails to distinguish meaningful sentences from nonsensical ones (low `lms`). The goal is to reward models that are both coherent (high `lms`) and unbiased ( `ss` near 50).

***

## Domains

* Fairness / Bias Evaluation
* Natural Language Processing (NLP)
* Stereotype Measurement
* Contextual Bias Balance

***

## Benchmarks

* **StereoSet**: The iCAT metric was introduced specifically for use with this benchmark. StereoSet evaluates model bias across intrasentence and intersentence tasks, covering stereotypes related to race, gender, religion, and profession.

***

## Advantages

* **Balanced Score:** It combines a measure of language ability (`lms`) with a measure of bias (`ss`) into a single, interpretable score.
* **Penalizes Naive Models:** A model cannot achieve a high iCAT score by simply avoiding stereotypes; it must also demonstrate strong language modeling capabilities.
* **Clear Target:** The metric provides a clear "ideal" target (an `lms` of 100 and an `ss` of 50) for model evaluation.

***

## Limitations

* **Dataset Dependency:** The metric is intrinsically tied to the StereoSet dataset. Criticisms of the dataset's validity apply to the metric as well.
* **Dataset Validity Concerns:** Blodgett et al. (2021) noted that many instances in StereoSet (and similar benchmarks) have "ambiguities about what stereotypes they capture" and may contain "inconsistent, invalid, or unrelated perturbations of social groups".
* **Weak Downstream Correlation:** The iCAT score is based on pseudo-log-likelihood (PLL) preferences. Some studies caution that PLL metrics may have only weak or inconsistent correlations with biases that actually appear in downstream, real-world tasks.

***

## Key References

Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. En Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers) (pp. 5356–5371). Association for Computational Linguistics. https://doi.org/10.18653/v1/2021.acl-long.416