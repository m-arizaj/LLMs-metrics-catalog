---
id: perplexity
title: Perplexity
sidebar_label: Perplexity
---

## Introduction
Perplexity ($PPL$) and Bits-per-Byte ($BPB$) are fundamental metrics for evaluating language modeling quality in both natural language processing and code generation tasks. They quantify how well a model predicts sequences of tokens or bytes. That is, how “surprised” the model is by the observed data. A lower perplexity or BPB indicates better predictive performance and higher language modeling efficiency.  
While Perplexity is standard for token-based models (e.g., words or subwords), BPB is more suitable for byte- or character-level modeling, often used in compression-based evaluations and cross-domain LLM comparisons.

## Mathematical Definition

For a corpus of $N$ tokens with probabilities $P(w_i|w_{1:i-1})$, Perplexity is defined as:

$$
PPL = \exp\left(-\frac{1}{N}\sum_{i=1}^{N}\ln P(w_i|w_{1:i-1})\right)
$$

or equivalently in base 2:

$$
PPL = 2^{H(p)}
$$

where $H(p)$ is the cross-entropy of the model over the sequence.  
Intuitively, it measures the average branching factor, the number of equally likely choices the model considers at each step.


## Relationship with Bits-per-Byte

Bits-per-Byte measures the average information content required to encode each byte (or character) under the model’s probability distribution:

$$
BPB = \frac{1}{N} \sum_{i=1}^{N} -\log_2 P(w_i|w_{1:i-1})
$$

It represents the entropy in bits, directly comparable across datasets and languages.  
The relationship between the two metrics is given by:

$$
PPL = 2^{BPB} \quad \text{and} \quad BPB = \log_2(PPL)
$$

This equivalence makes BPB a linear, interpretable form of Perplexity — expressing model uncertainty in bits instead of exponential space.


## Variants

1. Unigram-Normalized Perplexity ($PPL_u$)  
   Proposed by Roh et al. (2020) to correct bias from vocabulary size:
   $$
   PPL_u = \exp\left(-\frac{1}{N}\sum_{i=1}^{N}\ln \frac{P(w_i|w_{1:i-1})}{P(w_i)}\right)
   $$
   This normalization measures the *information gain* of the model over a unigram baseline, improving cross-dataset comparability.

2. Token-Level vs Byte-Level Evaluation 
   - Token-level PPL is computed over word or subword sequences.  
   - Byte-level BPB evaluates the model’s performance independently of tokenization, making it ideal for multilingual or mixed-data benchmarks.

## Interpretation

- *Low Perplexity or BPB:* Model confidently predicts upcoming tokens (better generalization).  
- *High Perplexity or BPB:* Model exhibits uncertainty or overfitting.  
- *PPL Sensitivity:* Strongly influenced by vocabulary size and tokenization scheme.  
- *BPB Advantage:* Vocabulary-agnostic and ideal for cross-domain comparison.

Meister & Cotterell (2021) emphasizes that while Perplexity remains central, it does not capture higher-level linguistic structure (e.g., syntactic diversity or semantic consistency). Thus, it should be complemented by distributional or semantic measures when evaluating LLMs.

## Limitations

- Sensitive to tokenization and corpus preprocessing.  
- Not a direct indicator of semantic correctness or task-specific usefulness.  
- Difficult to compare across languages without normalization.  
- May favor large models with higher capacity but poor calibration.


## References

1. *Roh, J., Oh, S.-H., & Lee, S.-Y. (2020).* Unigram-Normalized Perplexity as a Language Model Performance Measure with Different Vocabulary Sizes.  
   [https://arxiv.org/abs/2011.13220](https://arxiv.org/abs/2011.13220)

2. *Meister, C., & Cotterell, R. (2021).* Language Model Evaluation Beyond Perplexity.  
   [https://arxiv.org/abs/2106.00085](https://arxiv.org/abs/2106.00085)

## Additional References in Database
- 2, 4, 28