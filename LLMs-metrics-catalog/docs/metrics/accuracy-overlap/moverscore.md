---
id: moverscore
title: MoverScore
sidebar_label: MoverScore
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
MoverScore is a semantic similarity metric designed to evaluate the quality of generated text by comparing it with reference outputs using contextualized embeddings and Earth Mover’s Distance (EMD). Unlike lexical metrics such as BLEU or ROUGE, MoverScore captures deeper semantic and contextual relationships by modeling the minimal “transport cost” required to align semantic content between texts.  
It has demonstrated strong correlation with human judgments across natural language generation tasks including summarization, machine translation, and captioning. MoverScore and its sentence-level extensions have also been adopted in software engineering contexts to assess semantic similarity between generated and reference code snippets or documentation, where surface-form differences are common.

## Formula and Structure

MoverScore is rooted in Word Mover’s Distance (WMD), extended to contextualized embeddings (e.g., BERT, ELMo).  
For a candidate text $x$ and reference text $y$, let $\{w_i\}$ and $\{v_j\}$ denote their contextual token embeddings, and let $p_i$ and $q_j$ denote their normalized IDF-based weights.

The semantic transport cost is computed via:

$$
\min_{T \ge 0} \sum_{i,j} T_{ij}\,c(w_i, v_j)
$$

subject to:

$$
\sum_j T_{ij} = p_i, \qquad \sum_i T_{ij} = q_j
$$

where  
- $T_{ij}$ is the amount of “semantic mass” to transport from token $i$ to token $j$,  
- $c(w_i, v_j)$ is the semantic distance, typically $c = 1 - \cos(w_i, v_j)$,  
- $p_i$ and $q_j$ are token weights based on inverse document frequency.

MoverScore converts this distance into a similarity measure, commonly implemented as:

$$
\text{MoverScore}(x,y) = 1 - \text{EMD}(x,y)
$$

with scores in $[0,1]$, where larger values indicate stronger semantic alignment.

## Variants and Implementations

### 1. Word MoverScore (WMD-1)
The original form computes semantic distance between individual contextualized token embeddings. It is robust to paraphrasing and low lexical overlap.

### 2. Bigram MoverScore (WMD-2)
An extension incorporating bigram embeddings to capture local compositional structure beyond unigram-level semantics.

### 3. Sentence MoverScore (SMD)
A higher-level variant aligning sentence embeddings rather than tokens, improving robustness for long or complex texts.

### 4. IDF-Weighted MoverScore
The widely used weighting scheme where token importance is normalized via inverse document frequency to down-weight common words and emphasize informative tokens in both natural language and code.

## Application in Software Engineering
MoverScore has practical utility in SE-related LLM evaluation, where semantic similarity often matters more than syntactic matching. Applications include:

- evaluating similarity of generated and reference code summaries,  
- comparing documentation or comment generation outputs,  
- assessing functional equivalence between code snippets expressed with different naming conventions or structures,  
- measuring semantic adequacy in requirement rewriting or issue summarization tasks.

By operating on contextualized embeddings rather than token surface forms, MoverScore provides a semantically grounded signal useful for analyzing the quality of generative models applied to software artifacts.

## Interpretation
A higher MoverScore indicates stronger semantic and contextual correspondence between generated and reference outputs. Its use of contextual embeddings and optimal transport enables the metric to capture deep semantic relationships, making it robust to rephrasing, stylistic variation, token ordering differences, and syntactic divergence.

MoverScore is therefore particularly valuable in settings where semantic fidelity is more important than literal string overlap—both in natural language generation and in code-oriented or documentation-oriented software engineering evaluations.


## References
1. *Zhao, W., Peyrard, M., Liu, F., Gao, Y., Meyer, C. M., & Eger, S. (2019).*  
   MoverScore: Text Generation Evaluating with Contextualized Embeddings and Earth Mover Distance.  
   [https://arxiv.org/abs/1909.02622](https://arxiv.org/abs/1909.02622)

### Additional References in Dataset
- <ReferencesIndex ids={['1','11']} />