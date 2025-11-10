---
id: chair
title: CHAIR
sidebar_label: CHAIR
---

## Introduction 
CHAIR is a visual-textual consistency metric designed to quantify object hallucination, cases where a model mentions objects that are not present in an image. Introduced by Rohrbach et al. (2018) in Object Hallucination in Image Captioning (EMNLP 2018), it evaluates the alignment between generated captions and ground-truth visual object annotations, thus measuring how faithful the description is to the image content.
Unlike traditional captioning metrics such as CIDEr or SPICE, which only assess textual similarity to reference captions, CHAIR measures the semantic accuracy of image grounding.  
In 2024, the AMBER benchmark (Wang et al., 2024) extended CHAIR as part of a multi-dimensional hallucination evaluation suite for Multimodal Large Language Models (MLLMs), integrating it into the AMBER Score for combined generative and discriminative assessment.

## Formula  

CHAIR has two primary variants:  

$$
CHAIR_i = \frac{|H|}{|M|}
$$

$$
CHAIR_s = \frac{|S_H|}{|S|}
$$

Where:  
- $|H|$ = number of hallucinated objects (mentioned but not present).  
- $|M|$ = total number of objects mentioned in the caption.  
- $|S_H|$ = number of sentences containing at least one hallucinated object.  
- $|S|$ = total number of generated sentences.  

A lower CHAIR value indicates better grounding — fewer hallucinated mentions.  
In practice, object presence is validated against ground-truth labels from datasets such as MSCOCO or AMBER’s annotated images.


## AMBER Integration (2024 Update)  

Within AMBER, CHAIR is computed on generated MLLM responses as follows (Wang et al., 2024):

$$
CHAIR(R) = 1 - \frac{len(R'{obj} \cap A{obj})}{len(R'_{obj})}
$$

Where:  
- $R'_{obj}$ = set of object nouns extracted from model responses.  
- $A_{obj}$ = annotated ground-truth object set for the image.  

CHAIR forms part of the AMBER Score, a composite evaluation integrating CHAIR for generative hallucination and $F_1$ for discriminative performance:

$$
AMBER\,Score = \frac{1}{2}\,(1 - CHAIR + F_1)
$$

This unified formulation rewards models that both minimize hallucinations and maintain high discriminative accuracy.

---

## Variants and Dimensions  

| Variant | Description | Context of Use |
|----------|--------------|----------------|
| *CHAIR\_i* | Instance-level hallucination rate — ratio of false object mentions to all mentioned objects. | Image Captioning (MSCOCO, Flickr30k) |
| *CHAIR\_s* | Sentence-level hallucination rate — fraction of captions with any hallucinated object. | Captioning Quality Evaluation |
| *AMBER–CHAIR* | Modernized variant incorporated in AMBER; measures visual hallucination across both generative and discriminative tasks. | MLLMs (GPT-4V, LLaVA, InstructBLIP, etc.) |
| *OpenCHAIR (2024+)* | Open-vocabulary version extending CHAIR to free-form object categories. | Vision-Language Evaluation Benchmarks |


## Interpretation  

- *Low CHAIR* → Captions accurately describe visible content (faithful grounding).  
- *High CHAIR* → Model hallucinates non-existent objects or attributes.  

CHAIR provides insights into hallucination origin:  
- Visual misclassification — misinterpreting visual input.  
- Language prior bias — predicting words based on co-occurrence rather than visual cues.

Rohrbach et al. (2018) also introduced image consistency and language consistency analyses, showing that models with higher hallucination rates produce predictions more aligned with their language model than with visual evidence.  
The metric was later generalized in AMBER to quantify hallucinations of:
- *Existence* (missing/spurious objects)  
- *Attribute* (incorrect states, numbers, or actions)  
- *Relation* (incorrect spatial or interaction relations)


## Example (from AMBER Benchmark)

| Model | CHAIR ↓ | Cover ↑ | Hal ↓ | Cog ↓ | AMBER Score ↑ |
|--------|----------|---------|-------|-------|----------------|
| GPT-4V | 4.6 | 67.1 | 30.7 | 2.6 | 91.4 |
| Qwen-VL | 5.5 | 49.4 | 23.6 | 1.9 | 89.7 |
| InstructBLIP | 8.8 | 52.2 | 38.2 | 4.4 | 86.5 |
| LLaVA-1.5 | 7.8 | 51.0 | 36.4 | 4.2 | 83.5 |


## Interpretation Summary  

CHAIR quantifies *faithfulness*, not fluency.  
It serves as a critical complement to text-based metrics (CIDEr, SPICE, METEOR), allowing researchers to evaluate *visual hallucinations* and *semantic grounding* simultaneously.  
Its integration into AMBER (2024) demonstrates how hallucination metrics evolve from *image captioning* to *multi-modal reasoning* for LLMs.


## References  

1. *Rohrbach, A., Hendricks, L. A., Burns, K., Darrell, T., & Saenko, K. (2018).*  
   Object Hallucination in Image Captioning.  
   Proceedings of EMNLP 2018.  
   [https://aclanthology.org/D18-1437](https://aclanthology.org/D18-1437)

2. *Wang, J., Wang, Y., Xu, G., Zhang, J., Gu, Y., Jia, H., et al. (2024).*  
   AMBER: An LLM-Free Multi-Dimensional Benchmark for MLLM Hallucination Evaluation.  
   arXiv:2311.07397 [cs.CL].  
   [https://arxiv.org/abs/2311.07397](https://arxiv.org/abs/2311.07397)
