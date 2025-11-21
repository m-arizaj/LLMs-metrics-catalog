---
id: mrr
title: Mean Reciprocal Rank
sidebar_label: Mean Reciprocal Rank
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Mean Reciprocal Rank (MRR) is a ranking-based evaluation metric used to assess how well a model retrieves or ranks relevant results. It measures the position of the first relevant item in a ranked list, emphasizing early retrieval of correct answers.  
In software engineering, MRR is particularly valuable for tasks such as code search, API recommendation, and fault localization, where ranking accuracy directly impacts developer productivity.

## Formula
The MRR is defined as:

$$
MRR = \frac{1}{|Q|} \sum_{i=1}^{|Q|} \frac{1}{rank_i}
$$

Where:  
- $Q$ is the set of queries or test cases.  
- $rank_i$ is the position of the first correct (relevant) result for query $i$.  

This metric rewards systems that place correct results higher in the ranking, with scores ranging from 0 (no correct result) to 1 (perfect ranking).

## Variants
- RR@k (Reciprocal Rank @ k): Measures reciprocal rank but only within the top *k* retrieved results. [4] 
- Mean Reciprocal Rank (standard): Averages reciprocal ranks across all queries. These variations are used depending on dataset scale or retrieval context.

## Interpretation
In the context of software engineering, MRR provides an interpretable measure of retrieval efficiency: 
- A higher MRR indicates that the model consistently ranks the correct result closer to the top.  
- It is particularly effective for code search, bug localization, and question answering, where users typically examine only the first few retrieved results.  
- However, MRR does not account for multiple relevant results, only the first, so it is often complemented with metrics like *nDCG* or *MAP* in more complex retrieval evaluations.

Recent research (Diaz, 2023) has improved MRR’s sensitivity by integrating lexicographic precision, addressing its limitations in distinguishing among models with similar reciprocal ranks but different ranking quality distributions.

## References
1. **Diaz, F. (2023).** *Best-Case Retrieval Evaluation: Improving the Sensitivity of Reciprocal Rank with Lexicographic Precision.*  
[https://doi.org/10.48550/arXiv.2306.07908](https://doi.org/10.48550/arXiv.2306.07908)

### Additional References in Dataset
- <ReferencesIndex ids={['2','3','4','6','7','32','47','50']} />