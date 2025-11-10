---
id: fls
title: FLS (Feature Likelihood Score)
sidebar_label: FLS (Feature Likelihood Score)
---

## Introduction

**FLS (Feature Likelihood Score)** is a density estimation metric designed to evaluate the generalization performance of generative models. Introduced by Jiralerspong et al. (2023), its primary goal is to approximate a likelihood evaluation, even for models where a likelihood value is not readily available.

The method works by fitting a Kernel Density Estimate (KDE) to the feature representations (e.g., from an Inception-V3 encoder) of the **generated** samples. The bandwidth for this KDE is optimized to maximize the log-likelihood of the **training** data. The final FLS score is then derived from the log-likelihood of the **test** data under this fitted KDE.

FLS is used as a metric for ranking the overall quality of models [User provided data], but it also produces a diagnostic sub-metric, **FLS-POG**, which is specifically designed to measure memorization.

## 1. FLS (Feature Likelihood Score)

### Definition

FLS is a density estimation method that requires access to training, test, and generated samples. It fits a Kernel Density Estimate (KDE) to the encoded features of the generated samples. The KDE's bandwidths are chosen by maximizing the log-likelihood of the *training data*. The final FLS score is an affine transformation of the log-likelihood of the *test data* under this KDE.

### Purpose

To provide a "Ranking / Overall Quality" score for generative models by approximating the likelihood of real test data under the model's generated distribution.

### Applications

* Generative Models / Image Generation [User provided data]
* Ranking generative models

### Benchmarks

* CIFAR10
* ImageNet1k
* FFHQ
* LSUN-Bedroom

### Limitations

* FLS is not strongly correlated with human evaluations of image realism, particularly on complex datasets.
* The metric can be sensitive to the choice of encoder used for feature extraction.

## 2. FLS-POG (Percentage of Overfit Gaussians)

### Definition

FLS-POG is a metric derived from the FLS calculation, designed specifically to measure **memorization**. It is defined as the "percentage of generated samples that had a higher log-likelihood under the training set than the test set". A high FLS-POG score suggests that the generated samples are more "typical" of the training set than the test set, indicating overfitting or memorization.

### Purpose

To automatically detect memorization in generative models, claiming to isolate it from other phenomena like mode collapse.

### Limitations

FLS-POG has been shown to be an unreliable metric for memorization.
* It **correlates poorly** with the actual, measured percentage of memorized samples.
* In controlled experiments, it was found to be the **weakest detector of memorization** compared to other metrics like AuthPct and $C_{T}$.
* It also **fails to flag mode shrinkage** correctly.

## 3. Comparative Summary

| Metric | Based on | Extension Goal | Key Feature(s) | Typical Domain |
| :--- | :--- | :--- | :--- | :--- |
| **FLS** | KDE | Rank models based on density estimation. | Fits a KDE to generated data; evaluates log-likelihood on test data. | Image Generation (Overall Quality) |
| **FLS-POG** | FLS | Detect memorization / overfitting. | Compares train vs. test log-likelihood for each generated sample. | Image Generation (Memorization) |

## 4. References

* Stein, G., Cresswell, J. C., Hosseinzadeh, R., et al. (2023). *Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models*. [https://doi.org/10.48550/arXiv.2306.04675](https://doi.org/10.48550/arXiv.2306.04675)

* Jiralerspong, M., Bose, A. J., & Gidel, G. (2023). *Feature likelihood score: Evaluating generalization of generative models using samples*. 

* (Excel Data: Paper 67)
