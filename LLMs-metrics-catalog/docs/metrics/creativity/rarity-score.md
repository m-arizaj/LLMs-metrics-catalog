---
id: rarity-score
title: Rarity Score
sidebar_label: Rarity Score
---

## Definition

The **Rarity Score (RS)** is a metric used to evaluate the "uncommonness" or "unlikeliness" of an individual synthesized image. It is formally defined by Han et al. (2022) and, similar to metrics like precision and density, it is based on k-nearest neighbours (k-NN) computed in a representation space. 

It quantifies rarity by measuring the density of the *real* data manifold in the vicinity of a *generated* sample.

***

## Formula (General Idea)

The Rarity Score for a single generated image $x$ relative to the set of real samples $\{x_{j}^{r}\}_{j=1}^{m}$ is defined as the minimum k-NN distance among the real samples whose neighborhood contains $x$. 

$$
\text{Rarity}(x,\{x_{j}^{r}\}_{j=1}^{m}) = \min_{j\in J(x,\{x_{j}^{r}\}_{j=1}^{m})} NND_{k}(x_{j}^{r})
$$

where:
* $NND_{k}(x_{j}^{r})$ is the distance from a real sample $x_{j}^{r}$ to its $k^{th}$ nearest neighbour within the real dataset $\{x_{j}^{r}\}$. 
* $B(x_{j}^{r}, NND_{k}(x_{j}^{r}))$ is the Euclidean ball centered at $x_{j}^{r}$ with a radius equal to its $k$-NN distance. 
* $J(x,\{x_{j}^{r}\}_{j=1}^{m})$ is the set of real samples $x_j^r$ whose neighborhood "covers" the generated sample $x$. Formally: $J(...) = \{j=1,...,m \mid x \in B(x_{j}^{r}, NND_{k}(x_{j}^{r}))\}$. 

***

## Purpose

The primary purpose of the Rarity Score is to provide a quantitative measure of "rarity" or "unlikeliness" for generated samples. 

In the context of generative model evaluation, it is used to investigate whether human evaluators might be biased against "unlikely" (rare) images, confusing "unrealism" (fakeness) with "unlikeliness." By correlating human error rates with Rarity Scores, researchers can validate whether their human evaluation setup is flawed by this bias. 

***

## Domains

* Generative Models
* Image Generation

***

## Advantages

* Provides a specific, quantitative metric to measure the "unlikeliness" of a generated sample relative to the training data. 
* Useful as a diagnostic tool to analyze potential biases in human evaluation, helping to ensure that evaluators are not penalizing models for producing diverse but rare samples. 
* The analysis in Stein et al. (2023) successfully used this metric to confirm that human evaluators were not significantly confusing "unrealism" with "unlikeliness," thereby validating their human error rate data. 

***

## Limitations

* **On-Manifold Requirement:** The Rarity Score can only be determined for generated images that "fall 'on manifold'," meaning images that are contained within at least one real sample's $k$-NN neighborhood. 
* **Encoder Dependant:** The score is calculated using k-nearest neighbours in a representation space, meaning the results are dependant on the chosen feature extractor (encoder), such as Inception-v3 or DINOv2. 
* **Sensitive to Dataset Issues:** The metric's correlation with human evaluation can be skewed by dataset quality problems, such as 3D-generated scenes or low-quality images being present in a "real" training set (as noted in CIFAR10 and LSUN-Bedroom). 

***

## Key References

* **Primary Source:**
    * Han, J., Choi, H., Choi, Y., Kim, J., Ha, J.-W., & Choi, J. (2022). *Rarity score: A new metric to evaluate the uncommonness of synthesized images*. The Eleventh International Conference on Learning Representations.https://doi.org/10.48550/arXiv.2206.08549
    
* **Application & Analysis (Source 67):**
    * Stein, G., Cresswell, J. C., Hosseinzadeh, R., Sui, Y., Ross, B. L., Villecroze, V., Liu, Z., Caterini, A. L., Taylor, J. E. T., & Loaiza-Ganem, G. (2023). *Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models*. 37th Conference on Neural Information Processing Systems (NeurIPS 2023). https://doi.org/10.48550/arXiv.2306.04675