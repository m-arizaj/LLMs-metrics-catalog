---
id: amber-score
title: AMBER Score
sidebar_label: AMBER Score
---

## Introduction

The AMBER Score is a composite metric designed to evaluate hallucination behavior in Multi-modal Large Language Models (MLLMs).  
It was introduced by Wang et al. (2023) in the benchmark AMBER: An LLM-Free Multi-dimensional Benchmark for MLLMs Hallucination Evaluation, providing a unified and low-cost method for assessing hallucinations in both generative and discriminative multimodal tasks.
Unlike previous evaluation methods that rely on large models or human raters, AMBER provides an LLM-free, automatic, and multidimensional approach.  
It measures hallucinations across three key dimensions:
1. *Existence* — objects falsely introduced or omitted in model output,  
2. *Attribute* — hallucinations related to color, number, or action,  
3. *Relation* — false relational claims between objects.
AMBER integrates generative hallucination detection metrics (e.g., CHAIR) and classification metrics (Precision, Recall, F1) into a single interpretable score that reflects the overall reliability of a multimodal model.

## Formula and Structure

The AMBER Score combines generative and discriminative evaluations into a single metric:

$$
\text{AMBER Score} = \frac{1}{2} \times (1 - \text{CHAIR} + \text{F1})
$$

where:

- $\text{CHAIR}$ = frequency of hallucinated objects in generative outputs (lower is better),  
- $\text{F1}$ = harmonic mean of Precision and Recall in discriminative hallucination detection (higher is better).  

This formulation ensures that models are rewarded for both minimizing hallucinations and maintaining discriminative reliability.  
The final score ranges from 0 to 1, where higher values indicate fewer hallucinations and stronger consistency across both evaluation dimensions.


## Supporting Metrics in AMBER

The benchmark defines additional metrics to decompose hallucination performance before aggregation into the AMBER Score:

1. *CHAIR* (Object Hallucination Rate):  
   $$
   \text{CHAIR}(R) = 1 - \frac{\text{len}(R'{\text{obj}} \cap A{\text{obj}})}{\text{len}(R'_{\text{obj}})}
   $$  
   Measures the proportion of objects in a model’s description that do not exist in the reference annotation.

2. *Cover* (Object Coverage):  
   $$
   \text{Cover}(R) = \frac{\text{len}(R'{\text{obj}} \cap A{\text{obj}})}{\text{len}(A_{\text{obj}})}
   $$  
   Indicates how well the response covers true objects present in the image.

3. *Hal* (Hallucination Ratio):  
   $$
   \text{Hal}(R) =
   \begin{cases}
   1, & \text{if } \text{CHAIR}(R) \neq 0 \\
   0, & \text{otherwise}
   \end{cases}
   $$  
   Reports whether a response contains any hallucination at all.

4. *Cog* (Cognitive Hallucination Likelihood):  
   $$
   \text{Cog}(R) = \frac{\text{len}(R'{\text{obj}} \cap H{\text{obj}})}{\text{len}(R'_{\text{obj}})}
   $$  
   Quantifies the extent to which generated hallucinations align with common human perceptual errors.


## Variants and Dimensions

- *Generative Hallucination Evaluation:*  
  Evaluates free-form text outputs generated from images. Focuses on hallucinated objects or attributes appearing in descriptive captions.  

- *Discriminative Hallucination Evaluation:*  
  Evaluates binary (yes/no) responses in tasks such as object verification, attribute confirmation, and relation assessment.  
  Performance is measured using Accuracy, Precision, Recall, and F1 scores.  

- *Dimensional Analysis:*  
  AMBER supports analysis of hallucination across:  
  - Existence hallucination — incorrect claims of object presence,  
  - Attribute hallucination — incorrect color, number, or action,  
  - Relation hallucination — incorrect claims of object interaction.  

## Interpretation

The AMBER Score provides a balanced assessment of both expressive and factual reliability in multimodal outputs:
- Low $\text{CHAIR}$ values denote fewer hallucinated elements in generated descriptions.  
- High $\text{F1}$ scores reflect reliable discriminative reasoning.  
- The combined score encourages models that both see accurately and describe faithfully.

A high AMBER Score implies:
- Low hallucination frequency,
- Accurate alignment between vision and language,
- Stable performance across task types and modalities.


## Applications

- *Evaluation of Vision-Language Models:*  
  Used to compare MLLMs such as GPT-4V, Qwen-VL, LLaVA-1.5, and mPLUG-Owl2 under consistent hallucination evaluation protocols.

- *Benchmark Development:*  
  Serves as the foundation of the AMBER Benchmark, integrating 1,004 annotated images with attribute and relation metadata.  

- *Model Diagnostics:*  
  Enables fine-grained detection of specific hallucination types and model weaknesses (e.g., attribute or relation errors).

- *Training and Robustness Analysis:*  
  Guides dataset curation and fine-tuning by identifying failure patterns and sensitivity to prompt types.


## Limitations

- The benchmark focuses mainly on *visual hallucination* and may not generalize to pure text-based settings.  
- Object extraction errors from NLP toolkits (e.g., NLTK) can occasionally misclassify terms as hallucinated.  
- Evaluations of attribute and relation hallucinations remain limited to discriminative tasks.  
- The annotation of rare or uncommon objects may still be incomplete.


## References

- *Wang, J., Wang, Y., Xu, G., Zhang, J., Gu, Y., Jia, H., Wang, J., Xu, H., Yan, M., Zhang, J., & Sang, J. (2023).*  
  AMBER: An LLM-Free Multi-Dimensional Benchmark for MLLMs Hallucination Evaluation. (Also listed in the references database)
 [https://arxiv.org/abs/2311.07397](https://arxiv.org/abs/2311.07397)


