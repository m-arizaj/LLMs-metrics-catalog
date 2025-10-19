---
id: rouge
title: ROUGE
sidebar_label: ROUGE
---

## Definition

[cite_start]ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a set of metrics used primarily for evaluating automatic summarization and machine translation software in natural language processing [cite: 6559-6560]. The metrics compare an automatically produced summary or translation against a reference or a set of references (human-produced).

The main variants include:
* [cite_start]**ROUGE-N:** Measures the overlap of n-grams (sequences of n words) between the system and reference summaries [cite: 6559-6560]. ROUGE-1 uses unigrams (single words), ROUGE-2 uses bigrams, etc.
* **ROUGE-L:** Measures the longest common subsequence (LCS) between the system and reference summaries. It looks for the longest sequence of words that appear in both summaries in the same order, but not necessarily consecutively.

[cite_start]ROUGE typically focuses on recall, measuring how much of the reference summary is captured by the system summary [cite: 6559-6560]. Precision and F1-score versions also exist.

## Example (ROUGE-1 Recall)

Let's compare a system-generated summary to a reference summary:

* **Reference Summary:** "the cat sat on the mat"
* **System Summary:** "the cat was on the mat"

**Unigrams (individual words):**
* Reference Unigrams: {the, cat, sat, on, mat} (Count = 5, unique = 5)
* System Unigrams: {the, cat, was, on, mat} (Count = 5, unique = 5)

**Matching Unigrams:** {the, cat, on, mat} (Count = 4)

**ROUGE-1 Recall Calculation:**
(Number of overlapping unigrams) / (Total number of unigrams in Reference Summary)
$ROUGE-1 = 4 / 5 = 0.8$

So, the ROUGE-1 recall score is 0.8.

## Equation (ROUGE-N Recall)

The formula for ROUGE-N recall is:

$$
\text{ROUGE-N}_{\text{recall}} = \frac{\sum_{S \in \{\text{Reference Summaries}\}} \sum_{\text{gram}_n \in S} \text{Count}_{\text{match}}(\text{gram}_n)}{\sum_{S \in \{\text{Reference Summaries}\}} \sum_{\text{gram}_n \in S} \text{Count}(\text{gram}_n)}
$$

Where:
* $n$ is the length of the n-gram (e.g., 1 for unigrams, 2 for bigrams).
* $\{\text{Reference Summaries}\}$ is the set of reference summaries.
* $\text{gram}_n$ is an n-gram.
* $\text{Count}_{\text{match}}(\text{gram}_n)$ is the maximum number of times an n-gram occurs in both the generated summary and a reference summary.
* $\text{Count}(\text{gram}_n)$ is the number of times the n-gram occurs in the reference summary.

[cite_start]This formula calculates the ratio of the number of overlapping n-grams between the system and reference summaries to the total number of n-grams in the reference summaries [cite: 6559-6560].