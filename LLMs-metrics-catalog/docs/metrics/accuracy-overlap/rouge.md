---
id: rouge
title: ROUGE
sidebar_label: ROUGE
---

## Definition
ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a set of metrics used for evaluating automatic summarization and machine translation, also applied to code generation . It works by comparing an automatically produced summary or output (candidate) against one or more reference summaries (typically human-written). Key variants include:
* **ROUGE-N:** Measures the overlap of n-grams (sequences of n words/tokens) .
* **ROUGE-L:** Measures the Longest Common Subsequence (LCS) between the candidate and reference(s).

As the name suggests, ROUGE primarily focuses on **recall**—how much of the information in the reference(s) is captured by the candidate . Precision and F1 versions also exist.

## Formula (General Idea - ROUGE-N Recall)
$$
\text{ROUGE-N}_{\text{recall}} = \frac{\sum_{S \in \{\text{Reference Summaries}\}} \sum_{\text{gram}_n \in S} \text{Count}_{\text{match}}(\text{gram}_n)}{\sum_{S \in \{\text{Reference Summaries}\}} \sum_{\text{gram}_n \in S} \text{Count}(\text{gram}_n)}
$$
Where:
* $n$ is the length of the n-gram (e.g., 1 for ROUGE-1, 2 for ROUGE-2).
* $\text{Count}_{\text{match}}(\text{gram}_n)$ is the number of times an n-gram from the reference appears in the candidate.
* $\text{Count}(\text{gram}_n)$ is the total number of n-grams in the reference summary.

## Purpose
To evaluate the quality of generated text/code by measuring the recall of n-grams or LCS compared to reference(s). Often used to assess content overlap, especially in summarization tasks.

## Domains
* Automatic Summarization  (Primary use)
* Machine Translation
* Code Generation
* Code Summarization
* Commit Message Generation
* Documentation Generation
* Text Generation

## Benchmarks
* CodeXGLUE
* CNN/DailyMail, XSUM
* TL-CodeSum
* CodeSearchNet
* BIG-bench
* GEM, GLGE
* PubMed, PMC, BioMedSumm
* (Various NLP benchmarks)

## Advantages
* Standard metric, especially for summarization tasks.
* Correlates reasonably well with human judgments of content overlap (recall).
* Relatively simple to compute.

## Limitations
* Like BLEU, has **low semantic sensitivity**; focuses on exact word/token matches, not meaning.
* Does not directly assess fluency, coherence, or factual correctness.
* For code, **does not reflect functional correctness** or buildability. High ROUGE doesn't mean the code works.
* ROUGE-L (LCS) can reward sequences in the correct order but doesn't require contiguity, which might be less relevant for code structure than n-grams.

## Key References
* Lin, C.-Y., 2004  (Original ROUGE paper)
* File: Evaluating Large Language Models for Functional.pdf
* (Excel Data: Papers 1, 2, 3, 4, 6, 7, 9, 11, 12, 18, 19, 25, 40, 48)