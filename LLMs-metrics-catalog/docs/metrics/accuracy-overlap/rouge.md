---
id: rouge
title: ROUGE
sidebar_label: ROUGE
---

## Introduction

ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a family of metrics used to evaluate the quality of generated text by comparing it to reference outputs. Originally designed for summarization tasks, ROUGE has been adapted for code summarization, documentation generation, and textual similarity evaluation in Software Engineering contexts.  
While BLEU focuses on precision, how much of the generated text appears in the reference, ROUGE emphasizes recall, measuring how much of the reference is captured by the generated text. This makes ROUGE a complementary metric for assessing the coverage and completeness of generated outputs, including summaries, commit messages, and code documentation.

## Mathematical Definition

For a generated sequence $C$ (candidate) and reference sequence $R$, the basic form of ROUGE-N is:

$$
\text{ROUGE-N} = \frac{\sum_{gram_n \in R} \text{Count}_{match}(gram_n)}{\sum_{gram_n \in R} \text{Count}(gram_n)}
$$

where:  
- $n$ is the n-gram size (1 for ROUGE-1, 2 for ROUGE-2, etc.),  
- $\text{Count}_{match}(gram_n)$ is the number of n-grams in $R$ that also appear in $C$,  
- $\text{Count}(gram_n)$ is the total number of n-grams in the reference.

ROUGE can also be computed using *precision* or *F1* variants, depending on whether completeness or overlap balance is desired.  
The most common implementations use recall-based ROUGE-N or Longest Common Subsequence (ROUGE-L).

## Variants

### **1. ROUGE (Base)**
The general recall-oriented formulation applied to evaluate text generation quality and textual similarity.  
Used in *GEM*, *GLGE*, *BIG-bench*, and general *LLM comparison* benchmarks. Also adapted in SE tasks like code documentation and review generation.

### **2. ROUGE-1**
Measures unigram overlap, focusing on token-level similarity. Used for code summarization (*TL-CodeSum*) to assess lexical accuracy.

### **3. ROUGE-2**
Measures bigram overlap, capturing short phrase fluency and contextual accuracy. Employed in code and general summarization.

### **4. ROUGE-L**
Based on the Longest Common Subsequence (LCS) between candidate and reference, providing a measure of sequence-level similarity.  
This variant is the most common in Software Engineering, where sequence order and structure matter.  
Used in *CodeXGLUE*, *TL-CodeSum*, *CodeSearchNet*, *HumanEval*, *CoNaLa*, and *Summary-Assess* for evaluating code summarization, structural similarity, and functional correctness.

## Applications in Software Engineering

| Context | Example Datasets | Purpose |
|----------|------------------|----------|
| **Code Summarization** | TL-CodeSum, CodeSearchNet | Evaluate similarity between generated and reference summaries |
| **Commit Message Generation** | CoNaLa, Card2Code, APR-Assess | Assess sequence-based summarization quality |
| **Documentation Generation** | General, HumanEval | Measure recall and coverage of documentation or comments |
| **Code Generation & Translation** | CodeXGLUE | Evaluate structural and syntactic similarity between code outputs |
| **General LLM Evaluation** | GEM, GLGE, BIG-bench | Evaluate NLG quality, recall, and textual coverage |

## Interpretation and Limitations

ROUGE offers a robust way to evaluate recall-oriented quality and is less sensitive to token order than BLEU.  
However, it can still miss semantic equivalence when outputs are paraphrased or use different variable names in code-related tasks. Recent studies (e.g., Glushkova et al., 2023; Agrawal et al., 2024) suggest combining ROUGE with semantic metrics like COMET or neural embeddings to capture meaning beyond surface overlap.
In SE contexts, ROUGE-L remains the most appropriate variant, as it better accounts for sequence alignment and structure, which are crucial for summarizing and translating code.

## References

1. Papineni, K., Roukos, S., Ward, T., & Zhu, W.-J. (2002). *BLEU: a Method for Automatic Evaluation of Machine Translation.*  
   [https://aclanthology.org/P02-1040.pdf](https://aclanthology.org/P02-1040.pdf)  
2. Glushkova, T., et al. (2023). *BLEU Meets COMET: Combining Lexical and Neural Metrics Towards Robust Machine Translation Evaluation.*  
   [https://doi.org/10.48550/arXiv.2305.19144](https://doi.org/10.48550/arXiv.2305.19144)  
3. Agrawal, S., et al. (2024). *Can Automatic Metrics Assess High-Quality Translations?*  
   [https://doi.org/10.48550/arXiv.2405.18348](https://doi.org/10.48550/arXiv.2405.18348)

### Additional References in Dataset

-1, 2, 3, 4, 6, 7, 9, 11, 12, 15, 18, 19, 25, 26, 40, 48, 68