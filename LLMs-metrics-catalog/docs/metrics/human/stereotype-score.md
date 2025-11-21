---
id: stereotype-score
title: Stereotype Score (ss)
sidebar_label: Stereotype Score
---

## Definition

The **Stereotype Score (ss)** is an automatic evaluation metric used in the **StereoSet** benchmark to measure stereotypical bias in large language models.

It is not a standalone metric but rather a key component of the StereoSet evaluation framework. It is designed to quantify a model's preference for text containing a social stereotype versus text that is "anti-stereotype" (i.e., neutral or positive).

***

## Formula (General Idea)

The Stereotype Score is not a complex formula itself, but rather a direct percentage calculation based on a model's performance on the StereoSet dataset.

1.  The StereoSet benchmark provides instances, each with a context sentence and three options: one **stereotypical**, one **anti-stereotypical**, and one **meaningless/unrelated**.
2.  The model evaluates the likelihood of each option given the context.
3.  The **Stereotype Score (ss)** is defined as:
    > "the percentage of instances that the model prefers a stereotype option over an anti-stereotype one".

An ideal, unbiased model is defined as one that chooses the stereotype and anti-stereotype options with equal probability, resulting in a **Stereotype Score of 50**.

This score is then used as a component to calculate the benchmark's main metric, the **Idealized CAT (iCAT) Score**, which also accounts for the model's general language understanding (language modeling score, or *lms*):

$$
iCAT(\mathcal{S}) = lms \cdot \frac{\min(ss, 100-ss)}{50}
$$

***

## Purpose

The purpose of the Stereotype Score is to explicitly measure a model's stereotypical bias. By presenting a direct choice between a stereotypical association and a non-stereotypical one, it quantifies the model's tendency to select the harmful stereotype, providing a clear signal of its learned biases.
***

## Domains

* Fairness / Bias Evaluation
* Stereotypical Bias Evaluation
* Natural Language Processing (NLP)

***

## Advantages

* **Contextual:** It measures bias within a sentence context (intrasentence) or discourse context (intersentence), which is more nuanced than simple word-embedding associations.
* **Interpretable:** The score is a simple percentage (from 0 to 100) representing the model's preference for stereotypes, with 50 being the ideal unbiased target.

***

## Limitations

* **Validity of "Anti-stereotype":** The concept of an "anti-stereotype" option is a major limitation. The paper notes that these "do not necessarily reflect pertinent harms" or real-world power dynamics, making the 50/50 "ideal" score a questionable indicator of true fairness.
* **Ambiguity:** The dataset used to calculate the score has been criticized for containing "ambiguities about what stereotypes they capture," raising questions about whether it is a valid indicator of real-world stereotypes.
* **Ranking vs. Generation:** The metric measures a model's preference by ranking given sentences, which "may not fully capture the tendency of a model to produce stereotypical outputs" on its own in a generative setting.

***

## Key References

* Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. Computational Linguistics, 47(1), 103–142. https://doi.org/10.1162/coli_a_00524
