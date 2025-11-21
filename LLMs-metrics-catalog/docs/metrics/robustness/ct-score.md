---
id: ct-score
title: CT Score
sidebar_label: CT Score
---

## Introduction
The CT Score was introduced in Exposing Flaws of Generative Model Evaluation Metrics and Their Unfair Treatment of Diffusion Models (Stein et al., 2023) as a three-sample non-parametric statistical test designed to detect memorization in generative models.  
Unlike metrics such as FID or IS, which primarily measure sample fidelity and diversity, the CT Score evaluates whether generated samples are disproportionately close to training samples compared to unseen test samples. If generated data lie closer to the training distribution than test data do, this may indicate that the model has memorized parts of its training set.
The CT Score is not a contrastive-learning metric; it is a distance-comparison hypothesis test based on Mann–Whitney U-style rank statistics applied across many train/test/generated triplets.

## Formula and Computation
Although the paper does not provide a single closed-form equation, the computation is explicitly described:

1. Embed training samples ($T$), test samples ($S$), and generated samples ($G$) into a feature space.
2. Partition the embedded data into clusters (e.g., via k-means).
3. For each cluster, compare the distances:
   - $d(G, T)$ ― distance from generated → training  
   - $d(S, T)$ ― distance from test → training  
4. Using a Mann–Whitney U hypothesis test, compute how often:
   - generated samples are closer to training samples than test samples are.

A conceptual representation of the CT statistic for a cluster is:

$$
CT = \frac{1}{N} \sum_{i=1}^{N}
\mathbb{I}\big[ d(G_i, T_i) < d(S_i, T_i) \big]
$$

where  
- $d(\cdot,\cdot)$ is a distance in embedding space,  
- $T_i$ is a nearby training sample,  
- $S_i$ is a nearby test sample,  
- $\mathbb{I}[\cdot]$ is the indicator function.

The global CT Score is the average over all clusters.

### Interpretation of Values
- *Positive CT* → generated samples are not unusually close to training data (no memorization).  
- *Negative CT* → generated samples are *closer to training data* than test data are (possible memorization).  
- *Highly negative CT* → strong signal of memorization (or other confounding behaviors such as mode shrinkage).

## Key Findings
Based strictly on Stein et al. (2023):

- The CT Score can detect strong memorization in controlled settings.
- However, it is not reliable as a general-purpose memorization metric.
- CT frequently confuses mode shrinkage with memorization, producing false positives.
- CT’s behavior is influenced by image fidelity and representation artifacts, not just memorization.
- CT scores computed against the test set track closely with those computed against the training set, showing it is dominated by non-memorization factors.
- The authors propose a modified CT (CTₘ) that swaps input roles, which mitigates some failures but still does not fully resolve reliability issues.

In short, CT does not provide a robust or noise-free estimate of memorization.

## Interpretation
The CT Score is best understood as a rank-based distance comparison test, not a contrastive or semantic metric.

### What CT can do
- Identify extreme cases of memorization when the model directly reproduces training samples.
- Provide insight into how tightly generated samples cluster around training data.

### What CT cannot do (based on paper findings)
- Reliably distinguish memorization from mode shrinkage, over-regularization, or fidelity differences.
- Provide a semantically meaningful quality score.
- Serve as a fair or reliable substitute for FID/IS.
- Offer a stable evaluation of diffusion models or any generative architecture.

The authors conclude that CT should be used with caution, and not as a standalone or definitive memorization metric.

## Reference
1. Stein, G., Cresswell, J. C., Hosseinzadeh, R., Sui, Y., Ross, B. L., Villecroze, V., Liu, Z., Caterini, A. L., Taylor, J. E. T., & Loaiza-Ganem, G. (2023).  
   Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models.  
   [https://doi.org/10.48550/arXiv.2306.04675](https://doi.org/10.48550/arXiv.2306.04675)

   