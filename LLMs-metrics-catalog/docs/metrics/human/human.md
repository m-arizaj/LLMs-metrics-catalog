---
id: human
title: Human Metrics
sidebar_label: Human Metrics
---

## Overview
Human metrics refer to evaluation methods that rely on human judgment to assess the quality, correctness, and usefulness of model-generated outputs.  They are considered the gold standard for evaluating complex aspects that automatic metrics cannot fully capture, such as semantic adequacy, clarity, usefulness, and naturalness.  

In software engineering, these metrics are used to evaluate LLM-generated code, explanations, summaries, and documentation, ensuring that automated systems align with human standards of reasoning and readability.

## Formula and Structure
Unlike quantitative metrics, human metrics are qualitative or semi-quantitative. They generally rely on rating scales, comparative judgments, or ranking procedures.  

A typical evaluation setup involves $n$ human raters providing scores for one or more criteria:

$$
H = \frac{1}{n} \sum_{i=1}^{n} s_i
$$

Where:  
- $H$ is the aggregated human score.  
- $s_i$ is the score given by rater $i$ (usually on a 1–5 or 1–10 scale).  

Human ratings may also be normalized or aggregated using statistical measures such as mean, median, or inter-rater reliability coefficients like Cohen’s κ or Krippendorff’s α to assess consistency among raters.

## Variants
1. *Human Evaluation:* The general framework of human-centered evaluation applied to generated code, documentation, or text.  
2. *Human-Centered Assessment:* Focuses on usability and the degree to which the model supports human tasks effectively.  
3. *Human Judgment Score:* Aggregated score from human annotators based on correctness, style, or usefulness.  
4. *Human Rater Score (mean / max):* Considers either the average or best (maximum) judgment among annotators.  
5. *Human Review:* Applied in software testing and debugging contexts to evaluate the reliability and relevance of model-generated code.  
6. *Naturalness (Human Evaluation):* Assesses whether generated code or text appears natural and human-like, often in readability and code synthesis studies.

## Interpretation
Human metrics are essential for validating the performance of LLMs in real-world software engineering contexts.  
They serve as a bridge between quantitative model outputs and qualitative human perception, offering an interpretable benchmark for tasks where correctness alone is insufficient.

Key considerations:
- High human evaluation scores indicate that the model’s outputs align closely with human expectations in clarity, coherence, and utility.  
- Inter-rater reliability ensures the consistency of judgments, validating the robustness of human evaluations.  
- Human-centered evaluation frameworks combine these scores with automatic metrics to achieve a balanced understanding of model quality.
While human evaluation is expensive and time-consuming, it remains the most reliable reference point for validating automatic evaluation frameworks.

## References
1. Liu, Y., Fabbri, A., & Durrett, G. (2022). Revisiting the Gold Standard: Grounding Summarization Evaluation with Robust Human Evaluation.  
   arXiv preprint. [https://arxiv.org/abs/2212.07981](https://arxiv.org/abs/2212.07981)

### Additional References in Dataset
- 3, 6, 7, 15, 23, 25, 62