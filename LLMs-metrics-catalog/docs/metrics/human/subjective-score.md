---
id: subjective-score
title: Subjective Score
sidebar_label: Subjective Score
---

## Definition

A **Subjective Score** is a metric used in Human-Centric Evaluation (HCE) to assess foundation models based on human perception, experience, and practical application, rather than on automated, objective quiz performance.

It is determined by human evaluators who assign a rating to a model's performance during a collaborative, open-ended task. In the HCE framework, this is specifically implemented as a five-point discrete scale:
* 1: Very Weak
* 2: Weak
* 3: Moderate
* 4: Strong
* 5: Very Strong

***

## Formula (General Idea)

The final score is calculated as the arithmetic mean of all ratings provided by the human evaluators across the different dimensions.

$$
\text{Subjective Score} = \frac{\sum \text{Evaluator Ratings}}{\text{Number of Ratings}}
$$

***

## Purpose

The primary purpose of a Subjective Score is to bridge the gap left by traditional, model-centric benchmarks (like MMLU). It aims to:
* Capture essential subjective dimensions of human experience, such as user satisfaction, response naturalness, and contextual adaptability.
* Evaluate a model's performance in realistic, open-ended, and complex tasks that mimic real-world applications, rather than simple Q&A formats.
* Assess how well a model aligns with user expectations and practical utility.
* Guide model optimization toward solving real-world human-centric problems.
***

## Domains

* Human-AI Cooperation
* Research Assistance
* Subjective Assessment

***

## Evaluation Dimensions

The HCE framework uses the Subjective Score to rate models across three core dimensions, which are further broken down into sub-metrics:

1.  **Problem-Solving Ability:**
    * **Analytical Accuracy (A.A.):** How precisely the model resolves the problem.
    * **Comprehensiveness (Compre.):** The extent to which the model considers all relevant aspects.
    * **Assistance Efficiency (A.E.):** How effectively the model saves the user time.

2.  **Information Quality:**
    * **Information Reliability (I.R.):** Whether the information is accurate, up-to-date, and free from errors.
    * **Exploration Depth (E.D.):** The level of detail, relevance, and thoroughness of the information provided.
3.  **Interaction Experience:**
    * **Content Relevance (C.R.):** How closely the responses align with the user's query.
    * **Feedback Adaptability (F.A.):** The model's ability to adjust its responses based on user feedback.
    * **Expression Naturalness (E.N.):** Whether the responses are natural, coherent, and highly readable.
    * **Response Timeliness (R.T.):** How promptly the model delivers answers.

***

## Advantages

* **Reflects Human Experience:** It is a human-centric metric that captures nuanced qualities like satisfaction, naturalness, and adaptability, which objective metrics miss.
* **Real-World Relevance:** Evaluates models in complex, open-ended scenarios (like research) that are more representative of practical applications than static datasets.
* **Avoids Contamination:** Less susceptible to data contamination, where models are trained on benchmark datasets and achieve inflated scores.
* **Multi-Dimensional:** Provides a systematic, multi-dimensional scoring design, unlike ad-hoc or single-metric subjective evaluations.

***

## Limitations

* **Cost and Scalability:** Relies on human participants, making it costly and time-consuming to scale (the study involved over 540 experiments). The paper suggests future work on automation to reduce this cost.
* **Subjectivity and Bias:** The scores are based on human perception and can be influenced by individual evaluator differences. For example, some evaluators prefer detailed responses, while others prefer concise ones.
* **Influenced by Style:** A model's expression style (e.g., Grok 3's use of rhetorical questions) can significantly influence an evaluator's assessment of the experience, independent of the content quality.

***

## Key References

* Guo, Y., Wang, J., Ji, K., Wen, F., Zhang, Z., Zhu, X., Li, C., & Zhai, G. (2025). *Human-Centric Evaluation for Foundation Models*. https://doi.org/10.48550/arXiv.2506.01793
* (Excel Data: Paper 66)