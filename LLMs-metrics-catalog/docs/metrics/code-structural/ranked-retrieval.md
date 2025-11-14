---
id: ranked-retrieval
title: Ranked Retrieval
sidebar_label: Ranked Retrieval
---

## Introduction
Ranked retrieval metrics evaluate how effectively a model orders a list of candidate items—typically documents, code snippets, or retrieved facts—based on relevance. In LLM evaluation, these metrics quantify ranking quality in tasks where the ordering of outputs matters.

The HELM benchmark defines three key ranking metrics for Information Retrieval (IR) settings:

1. *CG@K (Cumulative Gain)* — sum of graded relevance scores for the top-$K$ items.  
2. *DCG@K (Discounted Cumulative Gain)* — CG@K with rank-position discounting.  
3. *NDCG@K (Normalized Discounted Cumulative Gain)* — DCG@K normalized by the ideal ordering, enabling comparison across systems.

HELM uses *NDCG@10* as the default accuracy metric for MS MARCO (TREC), making it a central measure for LLM-based retrieval and reranking systems.

## Formula

### CG@K
CG@K sums the relevance values of the top-$K$ retrieved items:
$$
\text{CG@K}=\sum_{i=1}^{K} \text{rel}(d_i)
$$
where $\text{rel}(d_i)$ is the graded relevance of document $d_i$.

### DCG@K
DCG@K applies a logarithmic discount to lower-ranked documents:
$$
\text{DCG@K} = \sum_{i=1}^{K} \frac{\text{rel}(d_i)}{\log_2(i+1)}
$$

### NDCG@K
NDCG@K normalizes the DCG score using the ideal ranking:
$$
\text{NDCG@K} = \frac{\text{DCG@K}}{\text{IDCG@K}}
$$
where $\text{IDCG@K}$ is computed by sorting the same set of relevance labels in the best possible order.

HELM explicitly identifies *NDCG@10* as the standard metric for MS MARCO reranking.

## Variants

### CG Variants
- *CG@1, **CG@3, **CG@5*: measure total relevance without discounting.  
- Useful predominantly as baseline measures; lack position sensitivity.

### DCG Variants
- *DCG@10, **DCG@100*: extend the depth of ranking.
- Discounting base can vary, but HELM uses $\log_2(i+1)$.

### NDCG Variants
- *NDCG@10*: core metric for MS MARCO.  
- *NDCG@K (general)*: used when tasks have deeper ranking lists.

NDCG is the most comparable and stable metric across tasks because it is normalized to the ideal ranking.

## Applications in Software Engineering

### Code Retrieval
When LLMs are used to retrieve relevant code snippets or examples, NDCG@K measures how well they rank relevant code above irrelevant code.

### Documentation Search
Ranking technical documentation or API references benefits heavily from DCG/NDCG since:
- early results matter more,
- relevance can be graded (fully relevant, partially relevant, etc.).

### Tool and Knowledge Retrieval in Agents
For multi-step tool-using agents, retrieval quality directly impacts subsequent action accuracy. NDCG@K measures the quality of these ranked internal searches.

### Long-Context Retrieval
In SE-specific tasks involving long codebases (e.g., retrieving relevant files, modules, or functions), NDCG@K reflects how well LLMs determine importance and relevance in large candidate sets.

## Interpretation

### High CG@K
- Many retrieved items are relevant.
- Does not guarantee correct ordering.

### High DCG@K
- Relevant items appear early in the ranking.
- Indicates good position-aware retrieval performance.

### High NDCG@K
- Ranking closely matches the ideal ranking.
- Indicates strong retrieval and reranking capability.
- Most robust measure across tasks.

### Low NDCG@K
- Relevant items are misplaced in ranking.
- Indicates weak understanding of query relevance or ranking logic.

### Strengths
- Support graded relevance rather than binary correctness.  
- Reward early placement of high-value items.  
- NDCG@K enables fair cross-system comparisons.

### Limitations
- Require graded relevance labels.  
- Sensitive to annotation quality.  
- Small changes at high ranks can disproportionately affect scores.

## References

1. HELM: Holistic Evaluation of Language Models. (2023).  
   Appendix C — Ranking metrics CG@K, DCG@K, NDCG@K.  
   MS MARCO experiments using NDCG@10.  
   [https://doi.org/10.48550/arXiv.2211.09110](https://doi.org/10.48550/arXiv.2211.09110) 