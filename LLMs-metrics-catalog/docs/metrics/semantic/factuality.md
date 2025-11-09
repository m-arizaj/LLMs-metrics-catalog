---
id: factuality
title: Factuality
sidebar_label: Factuality
---

## Definition
**Factuality** in the context of Large Language Models (LLMs) refers to the extent to which the information or answers provided by the model align with **real-world truths and verifiable facts**.

Evaluating factuality is a critical component of LLM assessment. It measures the model's ability to:
* Maintain consistency with known facts.
* Avoid generating misleading or false information, a phenomenon known as **"factual hallucination"**.
* Effectively learn and recall factual knowledge.

***

## Purpose
The primary purpose of evaluating factuality is to **ensure trust and enable the efficient use of LLMs**.

Factuality significantly impacts the reliability of downstream applications. Inconsistent or incorrect information can lead to substantial misunderstandings, making this metric crucial for tasks like:
* Question Answering (QA) systems
* Information extraction
* Text summarization
* Dialogue systems
* Automated fact-checking

***

## Domains
* General LLM Evaluation
* Knowledge Accuracy 
* Question Answering 
* Text Summarization (Factual Consistency) 
* Fact-Checking 

***

## Benchmarks

* **HELM** (Holistic Evaluation of Language Models) [User provided data]
* **TruthfulQA:** A dataset specifically designed to cause models to make mistakes and test truthfulness.
* **Natural Questions:** Used to assess internal knowledge capabilities.
* **TriviaQA:** Used to assess internal knowledge capabilities.
* **FActScore:** A metric/benchmark that breaks down generated text into individual "atomic" facts which are then evaluated for correctness.

***

## Advantages
* **Builds Trust:** Directly measures the reliability and truthfulness of a model, which is essential for user trust.
* **Critical for Applications:** Serves as a gate for deploying LLMs in information-sensitive fields like medicine, finance, and education.
* **Targets Hallucination:** Provides a direct way to quantify and track a model's tendency to "hallucinate" or fabricate information.

***

## Limitations
* **No Unified Framework:** There is an absence of a unified comparison framework for factual consistency, and some scores have limited value compared to simple binary labels.
* **Scaling Isn't a Silver Bullet:** Simply scaling up model sizes does not necessarily improve their truthfulness.
* **Estimator Performance:** Current estimators designed to measure factuality (like FActScore) still "have some way to go" in effectively addressing the task.
* **Hallucination Risk:** Models are capable of generating coherent-sounding text that includes factual inaccuracies or statements ungrounded in reality.

***

## Key References
* Chang, Y., Wang, X., Wang, J., et al. (2023). *A Survey on Evaluation of Large Language Models*. [https://doi.org/10.48550/arXiv.2307.03109](https://doi.org/10.48550/arXiv.2307.03109)
* Lin, S., Hilton, J., & Evans, O. (2021). *Truthfulqa: Measuring how models mimic human falsehoods*. 
* Wang, C., Cheng, S., Xu, Z., et al. (2023). *Evaluating open question answering evaluation*. 
* Min, S., Krishna, K., Lyu, X., et al. (2023). *FActScore: Fine-grained Atomic Evaluation of Factual Precision in Long Form Text Generation*.
* Honovich, O., Aharoni, R., Herzig, J., et al. (2022). *TRUE: Re-evaluating factual consistency evaluation*. 
* Gekhman, Z., Herzig, J., Aharoni, R., et al. (2023). *Trueteacher: Learning factual consistency evaluation with large language models*.
* Manakul, P., Liusie, A., & Gales, M. (2023). *Selfcheckgpt: Zero-resource black-box hallucination detection for generative large language models*. 
* (Excel Data: Paper 9)