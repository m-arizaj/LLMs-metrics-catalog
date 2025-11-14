---
id: ct-score
title: CT Score
sidebar_label: CT Score
---

## Introduction
The CT Score (Contrastive Test Score) was proposed in Exposing Flaws of Generative Model Evaluation Metrics and Their Unfair Treatment of Diffusion Models (Stein et al., 2023) as a contrastive evaluation metric designed to overcome the limitations of traditional measures like FID (Fréchet Inception Distance) and IS (Inception Score).  
These conventional metrics tend to unfairly penalize diffusion models despite their superior perceptual quality. CT Score aims to provide a more robust and semantically aligned evaluation of generative models by directly comparing relationships between real and generated samples in a contrastive learning framework.
Rather than relying on Gaussian assumptions or feature-space means, CT Score leverages contrastive representations to evaluate whether generated data preserve the structural and semantic consistency of real distributions.

## Formula and Computation
While the paper does not provide a single closed-form expression, the computation of CT Score is conceptually defined as follows:

1. Embed both real ($R$) and *generated* ($G$) samples into a feature space using a pretrained encoder.
2. Compute contrastive similarity scores between $(G, R)$ pairs and between $(R, R)$ pairs.
3. Use a contrastive loss–like ratio to determine how often generated samples are closer to real data than random negatives.

The CT Score can be interpreted as a measure of relative closeness between real and generated data distributions:

$$
CT = \frac{1}{N} \sum_{i=1}^{N} \mathbb{I}\big[ s(G_i, R_i) > s(G_i, R_j) \big]
$$

where:
- $s(a,b)$ denotes a similarity score in embedding space,
- $R_i$ and $R_j$ are distinct real samples,
- $\mathbb{I}$ is an indicator function that equals 1 when the condition holds.

A higher CT Score indicates that the generated samples are more semantically consistent with real ones, reflecting both quality and diversity.

## Key Findings
According to Stein et al. (2023):
- CT Score correlates better with human judgment than FID or IS.
- It is robust to distributional and statistical assumptions, as it does not require Gaussian approximations.
- It provides a fairer comparison between diffusion models and autoregressive generators.
- It captures semantic alignment and perceptual coherence instead of mere feature similarity.
These results highlight CT Score as a promising alternative for evaluating image and generative model quality, reducing unfair bias against diffusion-based architectures.

## Interpretation
CT Score represents a shift from statistical distance metrics to contrastive relational metrics.  
It evaluates the model’s ability to generate outputs that are perceptually and semantically indistinguishable from real data, rather than merely minimizing a feature-space mean difference.
In practice, CT Score can:
- Identify overfitting and mode collapse,
- Better align with human perceptual evaluations,
- Serve as a cross-domain evaluation measure for both text and image generation, given its general contrastive foundation.

## Reference
1. Stein, G., Cresswell, J. C., Hosseinzadeh, R., Sui, Y., Ross, B. L., Villecroze, V., Liu, Z., Caterini, A. L., Taylor, J. E.   T., & Loaiza-Ganem, G. (2023).  
   Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models.  
   [arXiv:2306.04675](https://arxiv.org/abs/2306.04675)

   