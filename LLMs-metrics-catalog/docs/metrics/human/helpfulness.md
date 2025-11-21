---
id: helpfulness
title: Helpfulness
sidebar_label: Helpfulness
---
import { ReferencesIndex } from '@site/src/components/References';

## Definition

**Helpfulness** is a key category of **human-centered evaluation** for Large Language Models (LLMs) . It is a qualitative assessment that measures how well an LLM's response **satisfies a user's request, answers their question, or accomplishes the instructed task**.

It is the primary metric for evaluating a model's utility and capability, often balanced against "Harmlessness" to ensure that responses are not only safe but also functional and useful.

***

## How It Is Measured

Helpfulness is measured through **Human Evaluation**, often in a "battle" or pairwise comparison format. The most common benchmarks for this are:

* **Chatbot Arena:** Human users interact with two different anonymous models, ask them the same question, and then vote for which model provided the "better" (i.e., more helpful and thorough) response.
* **HELM (Holistic Evaluation of Language Models):** Uses human evaluations to score model outputs on various criteria, including accuracy and helpfulness for specific tasks.

In these evaluations, human raters typically score responses based on criteria like relevance, accuracy, completeness, and overall quality in addressing the prompt.

***

## Purpose

The purpose of measuring helpfulness is to **quantify the utility and performance of an LLM from a user's perspective**. It is the main metric for determining if a model is good at following instructions and providing high-quality, relevant answers, which is the primary goal of assistant-style models.

***

## Domains

* Human-centered Evaluation
* LLM Evaluation / NLP
* Chatbot Performance

***

## Benchmarks

* **HELM (Holistic Evaluation of Language Models)**
* **Chatbot Arena**
* **MT-Bench** (often used in conjunction with Chatbot Arena)

***

## Advantages

* **Aligns with User Goals:** Directly measures what most users care about—getting a good answer.
* **Captures Nuance:** Human evaluators can reward responses that are not just factually correct but also well-written, comprehensive, and appropriately toned.
* **"Gold Standard" for Utility:** It serves as the most reliable "ground truth" for a model's practical capability, often revealing gaps that automated metrics miss.

***

## Limitations

* **Subjectivity:** What one user finds "helpful" another might find overly verbose or simplistic. The metric is inherently subjective.
* **Scalability:** It is very **expensive and slow** to collect human judgments compared to running automated, computational metrics.
* **Evaluator Bias:** The ratings can be influenced by the knowledge, preferences, and potential biases of the human evaluators.

***

## Key References

* Liang, P., Bommasani, R., Lee, T., et al. (2022). *Holistic evaluation of language models*. 
https://doi.org/10.48550/arXiv.2211.09110

* Zheng, L., Chiang, W. L., Sheng, Y., et al. (2023). *Judging LLM-as-a-judge with MT-Bench and Chatbot Arena*. 
https://doi.org/10.48550/arXiv.2306.05685


### Additional References in Dataset 
- <ReferencesIndex ids={['9']} />