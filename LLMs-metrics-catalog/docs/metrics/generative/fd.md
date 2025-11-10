---
id: fd
title: FD
sidebar_label: FD (Fréchet Distance)
---

## Introduction

The **Fréchet Distance (FD)** is one of the most widely used metrics for evaluating the quality of generative models, particularly in image generation. It is designed to measure the similarity between the distribution of generated samples and the distribution of real samples.

The metric follows a two-step process:
1.  **Feature Extraction:** Samples from both the real and generated datasets are passed through a feature extractor (an "encoder") to get lower-dimensional representations.
2.  **Distance Calculation:** The Fréchet distance (also known as the Wasserstein-2 distance) is calculated between two multivariate Gaussian distributions that are fitted to the mean and covariance of these extracted features.

This metric is most commonly known as **FID (Fréchet Inception Distance)**, which specifically refers to using the **Inception-V3** network as the feature extractor. While FID is a standard, it is known to have flaws, such as a poor correlation with human perception of realism and biases from its encoder. This has led to the development of variants like **FD∞** (to correct for sample bias) and the use of **FD** with alternative encoders (like DINOv2).

## 1. Fréchet Distance (FD / FID)
### Definition
The standard Fréchet Distance. When the **Inception-V3** encoder is used, this metric is specifically referred to as **FID**. The metric computes the Wasserstein-2 distance between two Gaussians fitted to the sample mean ($\mu$) and covariance ($\Sigma$) of the real ($r$) and generated ($g$) feature representations.

$$
FD = ||\mu_{r}-\mu_{g}||_{2}^{2}+Tr(\Sigma_{r}+\Sigma_{g}-2(\Sigma_{r}\Sigma_{g})^{\frac{1}{2}})
$$

### Purpose
FD (and FID) is used as a primary metric for **ranking the overall quality of generative models**. It groups both the **fidelity** (realism) and **diversity** of the generated samples into a single score. A lower score indicates that the two distributions are more similar, implying a better-performing model.

### Applications
* Generative Models / Image Generation [User provided data]
* Ranking generative models 
* Diagnosing fidelity and diversity (though it conflates them) 

### Benchmarks
* CIFAR10 [User provided data]
* ImageNet1k [User provided data]
* FFHQ [User provided data]
* LSUN-Bedroom [User provided data]

### Limitations
* **Encoder Bias (FID):** The standard Inception-V3 encoder is biased towards textures over shapes and features relevant to its 1k ImageNet classes, making it a poor perceptual space for other domains.
* **Poor Human Correlation (FID):** FID scores do not strongly correlate with human evaluations of perceptual realism, especially for diffusion models, which are often unfairly downranked despite high human-judged quality.
* **Sample Bias:** The FD calculation is biased by the finite number of samples used (e.g., 50k), and the true value would be lower with infinite samples.
* **Conflates Metrics:** It combines fidelity and diversity into a single score, making it difficult to debug *why* a model is performing poorly.

## 2. FD∞ (Fréchet Distance Infinite)
### Definition
A variant of FD designed to correct for the inherent bias introduced by using a finite number of samples.

**FD∞** is calculated by evaluating the standard FD at multiple sample sizes (e.g., 15 intervals from 5k to 50k samples), fitting a linear trend to these data points, and extrapolating the FD value to an infinite number of samples ($N=\infty$).

### Advantages

* Provides a less biased estimate of the Fréchet Distance compared to the standard FD calculation.
* More stable with respect to the number of samples used.

### Limitations

* While it has *less* bias than standard FD, it does not *completely* solve the problem, and the value still tends to decrease as more samples are used in the calculation.
* It still relies on the same (potentially flawed) encoder as the underlying FD metric (e.g., Inception-V3).

## 3. sFID (Spatial FID)

### Definition
A variant of FID that computes the Fréchet Distance using representations from an **intermediate layer** of the Inception-V3 network (specifically, the `mixed_6/conv` layer) instead of the final `pool3` layer.

### Purpose

This metric was developed to capture more spatial or textural features rather than the high-level semantic features from the final layer.

### Limitations
* It still relies on the Inception-V3 network and its associated biases.
* It is not widely reported in modern papers compared to the standard FID.

## 4. Comparative Summary

| Metric | Based on | Extension Goal | Key Feature(s) |
| :--- | :--- | :--- | :--- |
| **FD / FID** | FD | Baseline metric for overall quality (fidelity + diversity). | $W_2$ distance between Gaussian moments. FID uses Inception-V3. |
| **FD∞** | FD | Remove finite-sample bias from the FD calculation. | Extrapolates FD value to $N=\infty$ using a linear fit. |
| **sFID** | FD / FID | Evaluate on spatial features, not just semantic features. | Uses an intermediate layer of Inception-V3. |

## References
* Stein, G., Cresswell, J. C., Hosseinzadeh, R., et al. (2023). *Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models*. [https://doi.org/10.48550/arXiv.2306.04675](https://doi.org/10.48550/arXiv.2306.04675)
* Heusel, M., Ramsauer, H., Unterthiner, T., Nessler, B., & Hochreiter, S. (2017). *GANs trained by a two time-scale update rule converge to a local Nash equilibrium*. (Cited as [48])
* Chong, M. J., & Forsyth, D. (2020). *Effectively unbiased FID and inception score and where to find them*. (Cited as [22])
* Nash, C., Menick, J., Dieleman, S., & Battaglia, P. W. (2021). *Generating images with sparse representations*. (Cited as [76])
* (Excel Data: Paper 67)