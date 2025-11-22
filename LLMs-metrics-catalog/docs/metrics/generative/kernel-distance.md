---
id: kernel-distance
title: Kernel Distance (KD / KID)
sidebar_label: KID
---

## Definition

The **Kernel Distance (KD)**, often referred to as the **Kernel Inception Distance (KID)** when used with the Inception-V3 network, is a metric for evaluating generative models. Introduced by Bińkowski et al. (2018), it was designed as an alternative to the Fréchet Inception Distance (FID).

Unlike FID, which only compares the first two moments (mean and covariance) of the real and generated distributions, KD aims to be a proper distance between the entire distributions. It does this by using an unbiased estimate of the **Maximum Mean Discrepancy (MMD)**.

***

## Formula (General Idea)

The Kernel Distance is calculated as an unbiased estimate of the MMD between the sets of real and generated samples (after being passed through an encoder):

$$
KD(\{x_{i}^{g}\}_{i=1}^{n},\{x_{j}^{r}\}_{j=1}^{m})=\frac{1}{n(n-1)}\sum_{i\ne i^{\prime}}^{n}k(x_{i}^{g},x_{i^{\prime}}^{g})+\frac{1}{m(m-1)}\sum_{j\ne j^{\prime}}^{m}k(x_{j}^{r},x_{j^{\prime}}^{r})-\frac{2}{nm}\sum_{i=1}^{n}\sum_{j=1}^{m}k(x_{i}^{g},x_{j}^{r})
$$

Where:
* $k$ is a positive definite kernel, which is a hyperparameter.
* $\{x_{i}^{g}\}$ are the generated samples and $\{x_{j}^{r}\}$ are the real samples.
* A standard 3rd degree polynomial kernel is commonly used.

***

## Purpose

The primary purpose of KD/KID is to serve as a **ranking metric** for the overall quality of generative models. It was proposed to overcome a key limitation of FID by providing a metric that is a proper distance between distributions, not just their first two moments.

***

## Domains

* Generative Models / Image Generation
* Ranking / Overall Quality

***

***

## Advantages

* **Proper Distributional Metric:** Unlike FD, KD is a proper distance between distributions and is not limited to comparing their first two moments.
* **No Gaussian Assumption:** It does not assume that the feature distributions are Gaussian

***

## Limitations

* **High Correlation with FD:** Despite its different theoretical basis, KD is found to be **very highly correlated** with Fréchet Distance (FD) and $FD_{\infty}$ across various encoders. This means it results in "essentially the same model rankings" as FD.
* **Encoder-Dependent:** Like FD, its correlation with human perception of quality is highly dependent on the feature extractor (encoder) used.
* **Poor Inception-V3 Correlation:** When used with the standard Inception-V3 network (as KID), the metric does **not** correlate well with human evaluations of image realism, particularly on complex datasets.

***

## Key References

* Bińkowski, M., Sutherland, D. J., Arbel, M., & Gretton, A. (2018). *Demystifying MMD GANs*. In *International Conference on Learning Representations*. https://doi.org/10.48550/arXiv.1801.01401

* Stein, G., Cresswell, J. C., Hosseinzadeh, R., Sui, Y., Ross, B. L., Villecroze, V., Liu, Z., Caterini, A. L., Taylor, J. E. T., & Loaiza-Ganem, G. (2023). Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models. arXiv. https://doi.org/10.48550/arXiv.2306.04675