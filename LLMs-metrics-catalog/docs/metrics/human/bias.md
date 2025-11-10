---
id: bias
title: Bias
sidebar_label: Bias
---

## Introduction
Bias represents the systematic and unfair deviation in model behavior toward specific groups, attributes, or contexts.  
In the evaluation of large language models (LLMs), bias metrics assess ethical reliability, stereotypical associations, and unequal treatment across demographic or linguistic categories. These metrics can be applied to textual, code, or reasoning tasks to ensure fairness, inclusivity, and transparency in model outputs.

The seminal work by Mehrabi et al. (2019) categorizes bias sources into three main stages of the machine learning lifecycle:
1. *Data Bias* – Arising from sampling imbalance, labeling inconsistency, or historical representation gaps.  
2. *Algorithmic Bias* – Emerging from model design, optimization objectives, or embedding propagation.  
3. *User Interaction Bias* – Introduced during deployment, user feedback, or societal reinforcement cycles.
In software and LLM evaluation, bias metrics are critical to ensure ethical compliance and alignment with responsible AI principles.

## Formula and Structure

Bias can be quantified by measuring the asymmetric association between sensitive attributes and model predictions or word representations.  
A common statistical formulation, used in linguistic or representational bias analysis, is:

$$
Bias(w) = \log \left( \frac{P(w|f)}{P(w|m)} \right)
$$

where:
- $P(w|f)$ and $P(w|m)$ denote the conditional probabilities of word $w$ appearing in female-associated and male-associated contexts, respectively.  
- A positive score indicates a bias toward the female context, while a negative value indicates male-associated bias.  
- A value near zero suggests neutrality.

Other forms of bias detection rely on comparing performance or prediction rates across groups:
$$
Bias_{rate} = |Metric_{group_1} - Metric_{group_2}|
$$
where $Metric$ can represent accuracy, precision, or generation rate for each demographic category.  
This structure underlies most fairness-based evaluations such as Equal Opportunity, Equalized Odds, or Demographic Parity.

## Variants and Contexts of Use

### 1. Bias (Category)
Defined in HELM and Chatbot Arena (2024) as a *meta-category* that groups multiple sub-metrics capturing social, cultural, and ethical biases in LLMs. It includes measures of representational fairness, stereotype association, and output neutrality across demographic groups.

### 2. Bias in Gender Representation Rate
Quantifies gender skew in generated content by comparing the frequency of gendered terms or roles (e.g., “he” vs. “she”) in model outputs. Used to evaluate how balanced model responses are in gender-relevant contexts, particularly in summarization or conversational generation tasks.

### 3. Bias Score
Introduced in BBQ (2023) — Bias Benchmark for Question Answering — this metric measures contextual bias in question answering tasks. It evaluates whether a model prefers biased or neutral responses by comparing accuracy across ambiguous and unambiguous question types.

## Interpretation
Bias metrics collectively assess how balanced and fair a model’s decisions or generations are with respect to sensitive attributes such as gender, race, religion, or profession. A low bias score or small inter-group difference implies fairer and more equitable behavior, while higher values signal stronger systemic bias or stereotyping tendencies.

In the context of software engineering, bias analysis helps ensure:
- Ethical compliance in documentation and code suggestions.  
- Neutral representation in developer-assisting LLMs.  
- Fair performance across tasks, datasets, or languages.

However, bias evaluation remains complex:
- It is sensitive to the dataset’s inherent skew.  
- Metrics may conflict (e.g., improving demographic parity might reduce accuracy).  
- Contextual interpretation is crucial, as not all disparities imply unfairness.

## References
1. *Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2019).* A Survey on Bias and Fairness in Machine Learning.  
   [https://arxiv.org/abs/1908.09635](https://arxiv.org/abs/1908.09635)

2. *Parrish, A., et al. (2023).* BBQ: A Benchmark for Bias in Question Answering.  
   [https://github.com/nyu-mll/BBQ](https://github.com/nyu-mll/BBQ)

3. *HELM (2024).* Holistic Evaluation of Language Models – Bias Category.  
   [https://crfm.stanford.edu/helm/latest/](https://crfm.stanford.edu/helm/latest/)

### Additional References in Database
- 4, 9, 16