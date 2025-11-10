---
id: moverscore
title: MoverScore
sidebar_label: MoverScore
---

## Introduction
MoverScore is a semantic similarity metric that evaluates the quality of generated text by comparing it with reference outputs using contextualized embeddings (e.g., BERT, ELMo) and Earth Mover’s Distance (EMD).Unlike purely lexical measures such as BLEU or ROUGE, MoverScore captures semantic meaning and contextual alignment between sentences by computing the minimal cost required to "move" semantic information from the candidate text to the reference.  
This metric has proven highly correlated with human judgments across various natural language generation tasks including machine translation, summarization, and dialogue generation, and has been recently adopted in software engineering contexts to evaluate embedding-based similarity between generated and reference code snippets.

## Formula and Structure

MoverScore is derived from the concept of Word Mover’s Distance (WMD), applied to contextualized embeddings. For a generated text $x$ and a reference text $y$, the metric minimizes the cost to align the two distributions of word embeddings:

$$
\text{MoverScore}(x, y) = 1 - \min_{T \ge 0} \sum_{i,j} T_{ij} \, c(w_i, w_j)
$$

subject to:

$$
\sum_j T_{ij} = p_i, \quad \sum_i T_{ij} = q_j
$$

where:
- $T_{ij}$ represents the flow of semantic "mass" from token $i$ in $x$ to token $j$ in $y$,  
- $c(w_i, w_j)$ is the semantic cost, typically computed as $1 - \cos(w_i, w_j)$,  
- $p_i$ and $q_j$ are normalized weights for each token, often proportional to their inverse document frequency (IDF).  

The metric outputs a value between 0 and 1, where higher values indicate stronger semantic similarity.



## Variants and Implementations

### 1. Standard MoverScore
The original formulation proposed by Zhao et al. (2019) computes a semantic transport distance using contextual embeddings.  
It measures how well generated outputs semantically align with references, even when lexical overlap is low.

### 3. IDF-Weighted MoverScore
Weights embeddings using inverse document frequency to emphasize rare and meaningful tokens.  
This variant helps reduce the influence of common or trivial words in both text and code.


## Interpretation
MoverScore provides a fine-grained and semantically aware similarity assessment. A higher MoverScore indicates stronger contextual alignment between generated and reference outputs. In software engineering, it serves as a semantic analog to BLEU or CodeBLEU, allowing evaluators to measure whether two code snippets perform similar functions, even with differing syntax or variable names.

Because it incorporates contextual embeddings and distance-based matching, MoverScore is robust to paraphrasing, lexical variation, and syntactic transformations, making it a powerful tool for evaluating both natural language and code generation models.

## References
1. *Zhao, W., Peyrard, M., Liu, F., Gao, Y., Meyer, C. M., & Eger, S. (2019).*  
   MoverScore: Text Generation Evaluating with Contextualized Embeddings and Earth Mover Distance.  
   [https://arxiv.org/abs/1909.02622](https://arxiv.org/abs/1909.02622)

### Additional References in Dataset
- 1, 11