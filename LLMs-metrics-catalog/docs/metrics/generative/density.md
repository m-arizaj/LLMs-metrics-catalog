---
id: density
title: Density
sidebar_label: Density
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction

Density is an automatic evaluation metric used to diagnose the performance of generative models, particularly in image synthesis. It was introduced by **Naeem et al. (2020)** as part of a metric pair, **Density and Coverage**, designed to reliably and separately measure a model's fidelity and diversity, respectively.

These metrics work by analyzing the *k-nearest neighbors* (k-NN) relationships between the distributions of real and generated samples in a feature space (produced by an *encoder*). Density is specifically used as a proxy for the **fidelity** of the generated samples—that is, how "realistic" they are.

## 1. Density
### Definition
Density quantifies how well-populated the generated samples are relative to the real samples in the feature space. Specifically, it "counts how many real-sample neighborhood spheres contain the [generated] sample." A higher Density value suggests better fidelity, indicating that the generated samples fall into regions that are densely populated by real training samples.

$$
Density(\{x_{i}^{g}\}_{i=1}^{n},\{x_{j}^{r}\}_{j=1}^{m})=\frac{1}{kn}\sum_{i=1}^{n}\sum_{j=1}^{m}1(x_{i}^{g}\in B(x_{j}^{r},NND_{k}(x_{j}^{r})))
$$

where:
- $\{x^{g}\}$ = the set of $n$ generated samples. 
- $\{x^{r}\}$ = the set of $m$ real (training) samples.
- $NND_{k}(x_{j}^{r})$ = the distance from a real sample $x_j^r$ to its $k$-th nearest neighbor *within the real set*. 
- $B(x, r)$ = a Euclidean ball centered at $x$ with radius $r$. 
- $k$ = the number of neighbors (the paper uses $k=5$). ]

*(Definition from Naeem et al., 2020, as described in 

### Purpose
Density is used as a proxy to measure sample **fidelity** (quality or realism).

### Applications
- Diagnosing the performance of generative models.
- The provided paper uses it to evaluate image generation models on datasets like CIFAR10, ImageNet, FFHQ, and LSUN-Bedroom. 

### Limitations
- Its calculation is based on k-nearest neighbors and can be sensitive to the choice of $k$ and the number of samples used (the paper uses $k=5$ and 10,000 samples). 
- The paper finds that other metrics, like Fréchet Distance (FD) with a robust encoder (e.g., DINOv2), correlate better with human judgments of fidelity than k-NN metrics like Precision (and by extension, Density). 

## References
- Naeem, M. F., Jeon, S., Uh, Y., Choi, Y., & Yoo, J. (2020). Reliable fidelity and diversity metrics for generative models. arXiv. https://arxiv.org/abs/2002.09797


## Additional References
- <ReferencesIndex ids={['67']} />