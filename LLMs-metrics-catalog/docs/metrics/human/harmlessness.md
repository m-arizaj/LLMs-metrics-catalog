---
id: harmlessness
title: Harmlessness
sidebar_label: Harmlessness
---
import { ReferencesIndex } from '@site/src/components/References';

## Definition

**Harmlessness** is a key aspect of **human-centered evaluation** for Large Language Models (LLMs). It is not a single computational metric but rather a category of assessment that **measures a model’s propensity to generate outputs that are unsafe, toxic, offensive, discriminatory, or could incite harm**.

This evaluation is considered a cornerstone of ensuring that LLMs are safe and "not... harmful" for real-world deployment.

***

## How It Is Measured

Harmlessness is primarily measured using **Human Evaluation**. This process typically involves:

1.  **Red-Teaming:** Human evaluators or other models create "red-teaming" prompts, which are adversarial inputs specifically designed to try and elicit undesirable or harmful behavior from the model.
2.  **Rating:** Human evaluators are then presented with the model's responses to these prompts.
3.  **Scoring:** The evaluators rate the responses based on their safety, toxicity, offensiveness, and overall harmlessness.

***

## Purpose

The primary purpose of measuring harmlessness is to **ensure LLM safety and alignment with human values**. It is a critical component for building trust and preventing models from causing real-world harm to users or perpetuating societal biases.

***

## Domains

* Human-centered Evaluation
* Ethical Evaluation
* LLM Safety & Alignment

***

## Advantages

* **Directly Measures Safety:** Unlike proxy metrics, human evaluation directly assesses the model's safety and potential for harm from a human perspective.
* **Captures Nuance:** Humans can identify subtle forms of toxicity, discrimination, or manipulation that automated metrics might miss.
* **Gold Standard:** It is considered a "cornerstone" of safety evaluation and is often the ground truth against which automated metrics are validated.

***

## Limitations

* **Subjectivity:** The assessment of what is "harmful" can be subjective and vary between different human evaluators.
* **Scalability:** Relying on human evaluators is expensive, time-consuming, and difficult to scale compared to automated metrics.
* **Prompt Dependant:** The effectiveness of the evaluation heavily depends on the quality and adversarial nature of the "red-teaming" prompts used.

***

## Key References

* Liang, P., Bommasani, R., Lee, T., et al. (2022). *Holistic evaluation of language models*. 
https://doi.org/10.48550/arXiv.2211.09110

* Zheng, L., Chiang, W. L., Sheng, Y., et al. (2023). *Judging LLM-as-a-judge with MT-Bench and Chatbot Arena*. 
https://doi.org/10.48550/arXiv.2306.05685


### Additional References in Dataset 
- <ReferencesIndex ids={['9']} />