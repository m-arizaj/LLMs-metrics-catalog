---
id: spatial-fid
title: Spatial FID (sFID)
sidebar_label: Spatial FID (sFID)
---

## Definition
**Spatial FID (sFID)** is an alternative metric for ranking generative models, introduced as a variation of the standard Fréchet Inception Distance (FID).

The key difference is the source of the feature representations. While the standard FID uses activations from the final `pool3` layer (2048-dimensional) of the Inception-V3 network, **sFID computes the FID using activations from an earlier, intermediate layer**.

Specifically, it uses the **`mixed_6/conv` layer** of the Inception-V3 network.
***

## Formula (General Idea)
The underlying mathematical calculation for sFID is the same Fréchet Distance (FD) formula used by the standard FID:

$$
FD(\mu_r, \Sigma_r, \mu_g, \Sigma_g) = ||\mu_r - \mu_g||_2^2 + \text{Tr}(\Sigma_r + \Sigma_g - 2(\Sigma_r \Sigma_g)^{1/2})
$$

where:
* $\mu_r, \mu_g$ = The sample means of the real and generated representations.
* $\Sigma_r, \Sigma_g$ = The sample covariances of the real and generated representations.

The distinction is that these $\mu$ and $\Sigma$ values are derived from the feature maps of the **`mixed_6/conv` layer**.

***

## Purpose
The purpose of sFID is to serve as an alternative to the standard FID for ranking generative models. By using an intermediate layer, it presumably captures different (more spatial and less class-abstracted) features than the final pooling layer used by FID.

***

## Domains
* Generative Models / Image Generation 

***

## Benchmarks
* sFID evaluation is dependent on the **Inception-V3** model.
* The Inception-V3 model used is the one trained on **ImageNet1k**.

***

## Advantages
* (Source 67 identifies sFID as an alternative ranking metric  but does not explicitly state its advantages over the standard FID.)

***

## Limitations
* **Inception-V3 Dependency:** The sFID metric, by definition, relies on the Inception-V3 network.
* **Non-Transferable:** Because it is tied to a specific layer in Inception-V3, the metric is not reported for other (non-Inception) network architectures.

***

## Key References
* Stein, G., Cresswell, J. C., Hosseinzadeh, R., Sui, Y., Ross, B. L., Villecroze, V., ... & Loaiza-Ganem, G. (2023). *Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models*. https://doi.org/10.48550/arXiv.2306.04675
* (Excel Data: Paper 67)
* Nash, C., Menick, J., Dieleman, S., & Battaglia, P. W. (2021). *Generating images with sparse representations*. https://doi.org/10.48550/arXiv.2103.03841
