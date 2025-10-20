---
id: bleu
title: BLEU
sidebar_label: BLEU
---

## Definition
BLEU (Bilingual Evaluation Understudy) is a metric based on **n-gram overlap** between candidate (prediction) and reference(s) text/code [cite: 4749-4751]. It primarily measures **precision**—how much of the generated output appears in the reference—and includes a **brevity penalty** (BP) to penalize outputs that are shorter than the references.

## Formula (General Idea)
$$
\text{BLEU} = \text{BP} \times \exp\left(\sum_{n=1}^{N} w_n \log p_n\right)
$$
Where:
* $BP$ is the Brevity Penalty.
* $p_n$ is the modified n-gram precision for n-grams of length $n$.
* $N$ is the maximum n-gram length considered (typically 4).
* $w_n$ are the weights for each n-gram precision (usually uniform, $1/N$).

## Purpose
To evaluate the surface-level quality of generated text or code based on n-gram matches against reference(s)[cite: 4555].

## Domains
* Machine Translation (original purpose)
* Code Generation
* Code Summarization
* Code Translation
* Text Summarization

## Benchmarks
* CodeXGLUE 
* HumanEval (often used historically or for comparison in code generation)
* (Various NLP benchmarks like GLUE, etc., where applicable for text generation)

## Advantages
* Easy and fast to compute.
* Widely adopted standard, allowing for historical comparability across studies.
* Correlates reasonably well with human judgment for some tasks like machine translation.

## Limitations
* **Low semantic sensitivity:** Does not capture meaning, only surface-level n-gram overlap. Two semantically identical pieces of code/text with different wording might get a low score.
* **Does not reflect functional correctness:** Especially for code, high BLEU doesn't guarantee the code compiles, runs, or does what it's supposed to do. It focuses on similarity, not functionality.
* Can be insensitive to the impact of minor changes (e.g., a single incorrect variable name can break code but barely affect BLEU).

## Key References
* Papineni et al., 2002 (Original BLEU paper)
* Ren et al., 2020 (CodeBLEU paper)
* File: Evaluating Large Language Models for Functional.pdf
* (Excel Data: Papers 1, 2, 3, 6, 7, 9, 10, 11, 12, 15, 18, 19, 25, 37, 40, 43, 45, 46, 47, 51, 58, 60, 68)