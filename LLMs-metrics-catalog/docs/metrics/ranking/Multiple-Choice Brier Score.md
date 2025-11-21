---
id: multiple-choice-brier-score
title: Multiple-Choice Brier Score
sidebar_label: MC Brier Score
---

## Definition

The **Multiple-Choice Brier Score** is a metric used to measure the **calibration** of a model's predictions in a multiple-choice setting. It quantifies how well the model's assigned probabilities (its "confidence") match the actual outcomes (the correctness of its answers).

It is defined as "the squared error between model assigned probabilities and 0, 1 targets across classes". A lower Brier score indicates better calibration (i.e., the model's confidence levels are more reliable).

***

## Formula (General Idea)

The general Brier Score (BS) for a set of probabilistic predictions is the mean squared error between the predicted probabilities and the actual outcomes. For a single prediction:

$$
BS = \sum_{i=1}^{C} (p_i - o_i)^2
$$

Where:
* $C$ is the number of classes (choices).
* $p_i$ is the predicted probability for class $i$.
* $o_i$ is the actual outcome (1 if class $i$ is the correct target, 0 otherwise).

The total score is then averaged over all $N$ examples in the dataset.

***

## Purpose

The Brier Score is a **proper scoring rule** used to measure the accuracy and calibration of a model's predictive probabilities. Its primary purpose is to quantify how well-calibrated a model's uncertainty estimates are; in other words, to check if a model that is "80% confident" is actually correct 80% of the time.

***

## Domains

* General LLM Evaluation
* Model Calibration
* Probabilistic Error Measurement
* Evaluation of Multiple-Choice Tasks

***

## Advantages

* **Proper Scoring Rule:** It is a "proper scoring rule for measuring the accuracy of predicted probabilities", which means the metric's best possible score is achieved only when the model reports its true, underlying probabilities.
* **Measures Calibration:** It directly measures the quality of the model's probabilistic predictions, not just the final accuracy.

***

## Limitations

* **Less Intuitive:** The paper notes that Expected Calibration Error (ECE) is "widely used to measure calibration due to its intuitive nature", suggesting the Brier score may be less straightforward to interpret by comparison.

***

## Key References

* Srivastava, A., Rastogi, A., Rao, A., Shoeb, A. A. M., Abid, A., Fisch, A., Brown, A. R., Santoro, A., Gupta, A., Garriga-Alonso, A., Kluska, A., Lewkowycz, A., Agarwal, A., Power, A., Ray, A., Warstadt, A., Kocurek, A. W., Safaya, A., Tazarv, A., … Wu, Z. (2023). Beyond the imitation game: Quantifying and extrapolating the capabilities of language models. arXiv. https://doi.org/10.48550/arXiv.2206.04615
