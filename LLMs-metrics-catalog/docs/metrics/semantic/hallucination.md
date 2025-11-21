---
id: hallucination
title: Hallucination
sidebar_label: Hallucination
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
The Hallucination metric quantifies the extent to which a model produces content that is factually incorrect, ungrounded, irrelevant, or logically inconsistent with respect to the input or known information.  
In large language models and software engineering settings, hallucination typically refers to generated statements, code, or explanations that appear coherent but contain inaccuracies, fabricated details, or non-existent elements (e.g., invalid APIs, incorrect parameters, or invented functions).  
This metric is essential for evaluating reliability and truthfulness in tasks such as code documentation, automated debugging assistance, requirement generation, and other contexts where factual correctness is critical.


## Formula and Structure

Hallucination is commonly measured using discrete proportions rather than continuous scores.  
A general formulation used across benchmarks is the *hallucination rate*:

$$
H_{rate} = \frac{N_{hallucinated}}{N_{total}}
$$

where  
- $N_{hallucinated}$ is the number of outputs judged to contain hallucinations,  
- $N_{total}$ is the number of evaluated outputs.

This instance-level formulation is consistent across classification-based, content-verification, and multimodal hallucination benchmarks.  
Frameworks may apply automatic judgments, human annotation, or external model-based verification.

### FEWL-Based Factualness (Wei et al., 2024)
Some evaluation settings use a model-weighted factualness score to assess hallucination without access to gold-standard answers.  
The FEWL framework aggregates judgments from multiple trusted LLMs to estimate the likelihood that an output is factual, producing a continuous hallucination-related score that complements rate-based metrics.


## Variants and Implementations

### 1. Hallucination Rate
Used in surveys and evaluation frameworks such as HELM and general NLP/LLM assessments, hallucination rate measures the proportion of outputs containing incorrect or ungrounded content.  
It is widely applied to factual QA, summarization, reasoning, and text generation.

### 2. AMBER Hallucination Categories
AMBER (2024) introduces a structured taxonomy for multimodal hallucination evaluation consisting of:
- *Existence Hallucination:* Claiming entities that do not exist or are not present.  
- *Attribute Hallucination:* Incorrect or fabricated attributes about existing entities.  
- *Relation Hallucination:* Incorrect relations or interactions between entities.  

AMBER evaluates hallucination by classifying each generated response into correct or hallucinated categories across these dimensions.

### 3. FEWL Model-Based Factualness
FEWL provides a hallucination-oriented scoring mechanism without requiring reference answers.  
It leverages multiple LLM judges and learned weighting to compute a factualness score, penalizing logically inconsistent or fabricated content.

### 4. Domain-Specific Hallucination Detection
Hallucination evaluation appears in specialized software engineering tasks such as:
- API correctness verification  
- checking validity of code references  
- assessing generated documentation against real codebases  
These settings adapt the hallucination rate to code-related units such as statements or API calls.


## Application in Software Engineering
Hallucination metrics are increasingly used to evaluate LLM-generated code, documentation, and technical explanations.  
Common manifestations include:
- use of non-existent APIs or functions,  
- incorrect library imports,  
- fabricated parameter names or values,  
- logically invalid reasoning in debugging explanations.

Measuring hallucination is essential for assessing robustness of LLM-based software assistants, improving code-generation correctness, and ensuring trustworthiness in automated development pipelines.


## Interpretation
- *Low hallucination rate* indicates high factual consistency and reliability.  
- *High hallucination rate* reveals model tendencies to invent or distort information.  

In both natural-language and software-engineering settings, hallucination metrics help quantify truthfulness and prevent deployment risks associated with incorrect or misleading content.  
Model behavior is interpreted not only by the presence of factual errors but also by the structural type of hallucination (existence, attribute, relation), providing a more detailed understanding of failure modes.


## References
1. *Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2023).*  
   A Survey on Hallucination in Large Language Models.  
   [https://arxiv.org/abs/2311.05232](https://arxiv.org/abs/2311.05232)

2. *Wei, J., Chen, D., Xie, Y., Huang, S., & Xiong, C. (2024).*  
   Measuring and Reducing LLM Hallucination without Gold-Standard Answers.  
   [https://arxiv.org/abs/2402.10412](https://arxiv.org/abs/2402.10412)

### Additional References in Dataset
- <ReferencesIndex ids={['8']} />: Wang, J. et al. (2023). AMBER: An LLM-free Multi-dimensional Benchmark for MLLMs Hallucination Evaluation
- <ReferencesIndex ids={['9']} />: Chang, Y. et al. (2023). A Survey on Evaluation of Large Language Models
- <ReferencesIndex ids={['48']} />: Xu, W. et al. (2025). LLM-Based Agents for Tool Learning: A Survey
- <ReferencesIndex ids={['62']} />: Li, Y. et al. (2025). Evaluating large language models for software testing.
