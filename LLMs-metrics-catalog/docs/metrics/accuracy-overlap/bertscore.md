---
id: bertscore
title: BERTScore
sidebar_label: BERTScore
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
BERTScore is an embedding-based evaluation metric that measures the similarity between a generated text and a reference by leveraging contextual embeddings from pretrained models like BERT.  
Instead of relying on surface-level token overlap (as BLEU or ROUGE do), BERTScore computes semantic similarity between words or code tokens in their contextual vector space.

In Software Engineering, BERTScore and its specialized variant CodeBERTScore are widely used for evaluating code generation, summarization, and translation tasks. These metrics capture semantic correctness, contextual similarity, and embedding-based alignment between generated and reference code.

## Formula
BERTScore is computed using cosine similarity between contextual embeddings of candidate and reference tokens:

$$
\text{BERTScore}_{P,R,F_1} = 
\begin{cases}
P = \frac{1}{|X|} \sum_{x \in X} \max_{y \in Y} \cos(e(x), e(y)) \\
R = \frac{1}{|Y|} \sum_{y \in Y} \max_{x \in X} \cos(e(x), e(y)) \\
F_1 = \frac{2PR}{P + R}
\end{cases}
$$

Where:  
- \( X \) and \( Y \) represent the sets of tokens in the candidate and reference texts, respectively.  
- \( e(x) \) and \( e(y) \) are contextual embeddings (e.g., from BERT or CodeBERT).  
- Cosine similarity measures semantic closeness between embeddings.  

The metric produces Precision (P), Recall (R), and F1 variants, depending on whether the focus is on generated-token coverage, reference coverage, or their harmonic mean.

## Variants
### BERTScore (Standard)
The base version measures token-level embedding similarity using pretrained BERT models. It is often applied in natural language processing (NLP) and natural language generation (NLG) tasks, where meaning preservation is more important than exact lexical matching.

### CodeBERTScore
An adaptation for programming languages proposed by *Zhou et al. (2023)*.  
It employs CodeBERT embeddings trained jointly on natural and programming languages, making it better suited for evaluating code generation, translation, and documentation synthesis tasks. Unlike BLEU or ROUGE, CodeBERTScore captures the semantic consistency and syntactic integrity of the generated code.

### CodeBERTScore (F1, F3)
These weighted variants balance or prioritize recall:
- *F1* provides a harmonic balance between precision and recall.
- *F3* emphasizes recall, rewarding outputs that capture more of the reference semantics even if syntactic precision is lower.  
Such adjustments are particularly relevant in tasks where *functional correctness* is the main concern (e.g., HumanEval or CoNaLa benchmarks).

### Recall-weighted and LLM-based Extensions
Recent studies in LLM evaluation have extended the metric to recall-weighted embedding similarity and LLM-based embedding matching, where embeddings are obtained from large models (e.g., GPT or CodeLlama encoders).  
These approaches aim to align metric behavior more closely with human judgments of functionality and logical soundness.

## Applications in Software Engineering
BERTScore and its extensions have been widely applied across SE-related evaluations:

- In LLM evaluation tasks such as GEM, GLGE, and CLUE, BERTScore is used as an automatic semantic evaluation metric for text-based reasoning or natural language understanding.
- Within software engineering benchmarks such as CoNaLa, Card2Code, APR-Assess, and Summary-Assess, it quantifies embedding-based similarity between generated and reference code.
- In LLM-based functional correctness studies, BERTScore complements metrics like Exact Match by providing LLM-based embedding match (EM) scores that reflect semantic equivalence.
- CodeBERTScore, specifically, is used to assess the semantic and structural similarity of generated code in tasks like code translation, generation, and summarization.
- Variants such as F1 and F3 have been evaluated on HumanEval and CoNaLa, demonstrating improved sensitivity to code semantics and recall-weighted meaning preservation.

Overall, BERTScore offers a flexible framework for evaluating embedding-based similarity, while CodeBERTScore extends this capability to cross-lingual code understanding and LLM evaluation scenarios.


## Interpretation
In software engineering, BERTScore has become an essential bridge between surface-level metrics and semantic understanding.  
Its primary advantages include:

- *Contextual comprehension:* Goes beyond literal matching by analyzing token meaning in context, crucial for tasks like code summarization or translation.  
- *Tolerance to variation:* Robust to stylistic or lexical changes that don’t affect functionality (e.g., variable renaming or reordering).  
- *High correlation with human evaluation:* Especially for code generation tasks when paired with CodeBERT or LLM-based embeddings.  

However, BERTScore also has limitations:
- It can inflate scores for semantically incorrect but lexically similar code.
- It depends on the pretraining corpus of the chosen embedding model (e.g., BERT, CodeBERT, or GPT-based encoders).
- It is computationally heavier than token-based alternatives.

In practice, BERTScore and CodeBERTScore are most effective when combined with execution-based metrics (like Pass@k or Test Pass Rate), providing a more holistic view of both semantic and functional model performance.

---

## References
1. *Zhang, T., Kishore, V., Wu, F., Weinberger, K. Q., & Artzi, Y. (2019).* BERTScore: Evaluating Text Generation with BERT.  
   [https://doi.org/10.48550/arXiv.1904.09675](https://doi.org/10.48550/arXiv.1904.09675)  

2. *Hanna, M., & Bojar, O. (2021).* A Fine-Grained Analysis of BERTScore.  
   In Proceedings of the Sixth Conference on Machine Translation (WMT 2021).  
   [https://aclanthology.org/2021.wmt-1.59.pdf](https://aclanthology.org/2021.wmt-1.59.pdf)  

3. *Zhou, S., Alon, U., Agarwal, S., & Neubig, G. (2023).* CodeBERTScore: Evaluating Code Generation with Pretrained Models of Code. (Also listed in the references database)
   [https://aclanthology.org/2023.emnlp-main.859.pdf](https://aclanthology.org/2023.emnlp-main.859.pdf)

### Additional References in Dataset 
- <ReferencesIndex ids={['1','2','11','12','24','25','26','37','40']} />
