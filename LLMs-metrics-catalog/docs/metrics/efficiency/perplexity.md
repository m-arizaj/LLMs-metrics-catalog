---
id: perplexity
title: Perplexity
sidebar_label: Perplexity
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Perplexity and Bits-Per-Byte (BPB) are intrinsic language-model evaluation metrics derived from the average negative log-likelihood of text. Both quantify how well a model predicts sequences, differing only in the unit of normalization: perplexity measures prediction quality per token, while BPB measures it per byte.  
Perplexity has historically been the dominant evaluation metric in language modeling and sequence prediction, whereas modern benchmarking frameworks increasingly use BPB due to its tokenization-invariant nature. Both metrics appear in evaluation pipelines for LLMs and can be applied in software-engineering contexts where generative or predictive models operate on structured or natural-language content.


## Formula

### Perplexity
Perplexity is defined as the exponential of the average negative log-probability of the reference sequence:

$$
\text{Perplexity}
= 2^{-\frac{1}{M}\sum_{j=1}^{M} \log_2 \hat P(y_j)}
$$

where  
- $y_j$ is the $j$-th reference token,  
- $\hat P(y_j)$ is the model-assigned probability,  
- $M$ is the number of tokens.

An equivalent sequence-probability form is:

$$
\text{Perplexity}
= \left( \prod_{t=1}^{T} P(w_t \mid w_{1:t-1}) \right)^{-\frac{1}{T}}.
$$

Lower values indicate that the model assigns higher likelihood to the observed sequence.

### Bits-Per-Byte (BPB)
BPB expresses the average negative log-likelihood of text per byte, measured in bits:

$$
\text{BPB} = -\frac{1}{B}\sum_{i=1}^{B} \log_2 P(x_i)
$$

where  
- $x_i$ is the $i$-th byte in the sequence,  
- $B$ is the number of bytes.

Lower BPB corresponds to better language-modeling performance.

### Relationship Between the Metrics
Both are transformations of average log-loss:

- Perplexity is $\;2^{\text{cross-entropy per token}}$.  
- BPB is cross-entropy expressed directly in bits per byte.

HELM identifies log BPB as equivalent in role to classical perplexity for LM loss.


## Variants

### Token-based Variants of Perplexity
- *Unigram-Normalized Perplexity ($PPLu$):*  
  A vocabulary-size–invariant measure normalizing by a unigram model:  
  $$
  PPLu = \left( \prod_{t=1}^{T} \frac{P(w_t \mid w_{1:t-1})}{P(w_t)} \right)^{-\frac{1}{T}}.
  $$
  This formulation adjusts for differences in vocabulary size and subword segmentation.

- *Base-$e$ or Base-10 Perplexity:*  
  Identical structure, changing the exponential base.

### BPB Variants
The papers describe BPB as a single metric, but its computation depends on:
- byte-level decomposition (UTF-8 or equivalent),
- average log-loss in base 2,
- optional reporting of *log BPB* as a training-loss equivalent.

### Conceptual Properties
- Perplexity and BPB both measure intrinsic LM quality, but perplexity is tokenization-dependent, whereas BPB is tokenization-invariant.  
- Mutual-information interpretations exist for normalized perplexity variants, connecting perplexity to predictive dependence between tokens.


## Application in Software Engineering

Perplexity and BPB are applied in SE-related LLM evaluation in tasks involving:

- natural-language comment generation,  
- documentation synthesis,  
- issue-report summarization,  
- requirements text modeling,  
- code-related natural language corpora.

BPB is used extensively in holistic evaluation frameworks such as HELM for assessing general language-modeling quality across datasets like The Pile, TwitterAAE, and ICE. Perplexity and log BPB values help characterize how well an LLM models domain-specific text, including developer-written content.  
Both metrics support regression-style assessment of predictive performance in SE benchmarks, allowing comparison of model fit across diverse corpus sizes and tokenization strategies.


## Interpretation

### Perplexity
- Lower perplexity indicates higher likelihood assigned to the observed data.  
- Reflects fluency and predictive consistency but does not capture higher-level linguistic properties.  
- Sensitive to vocabulary size and tokenization choices.  
- Provides a coarse but widely adopted measure of generative quality.

### Bits-Per-Byte
- Lower BPB means the model compresses text more efficiently in terms of information theory.  
- Comparable across tokenization schemes, making it suitable for heterogeneous LLMs.  
- Useful for analyzing demographic and dialectal disparities in LM performance.

### Joint Interpretation
Both metrics are intrinsic evaluations of sequence prediction.  
Perplexity is interpretable in terms of “average branching factor,” while BPB measures the expected number of bits required to encode each byte of text. Neither metric alone predicts downstream task performance reliably, and both should be contextualized within broader evaluations involving accuracy, robustness, and fairness.


## References

1. *Roh, J., Oh, S.-H., & Lee, S.-Y. (2020).* Unigram-Normalized Perplexity as a Language Model Performance Measure with Different Vocabulary Sizes.  
   [https://arxiv.org/abs/2011.13220](https://arxiv.org/abs/2011.13220)

2. *Meister, C., & Cotterell, R. (2021).* Language Model Evaluation Beyond Perplexity.  
   [https://arxiv.org/abs/2106.00085](https://arxiv.org/abs/2106.00085)

## Additional References in Database
- <ReferencesIndex ids={['2']} />: Hu, T., & Zhou, X.-H. (2024). Unveiling LLM Evaluation Focused on Metrics: Challenges and Solutions
- <ReferencesIndex ids={['4']} />: Liang, P. et al. (2022). Holistic Evaluation of Language Models.
- <ReferencesIndex ids={['28']} />: Bistarelli, S., Fiore, M., Mercanti, I., & Mongiello, M. (2025). Usage of Large Language Model for Code Generation Tasks: A Review.