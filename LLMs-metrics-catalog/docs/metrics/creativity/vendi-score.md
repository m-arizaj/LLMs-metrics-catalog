---
id: vendi-score
title: Vendi Score
sidebar_label: Vendi Score
---

## Introduction

The **Vendi Score (VS)** is a metric used to evaluate the **diversity** of samples produced by a generative model. It was introduced by **Friedman and Dieng (2022)** and is heavily utilized in the analysis by **Stein et al. (2023)** to assess inter- vs. intra-class diversity.

The Vendi Score is a "reference-free" metric, meaning it does not require a set of real images for comparison. Instead, it quantifies diversity by calculating the "effective number of unique samples" within a given set of generated images. A higher Vendi Score indicates greater diversity.

The metric is particularly useful for analyzing class-conditional models, where a key challenge is balancing *inter-class* diversity (generating all classes) with *intra-class* diversity (generating variety *within* a single class). Source 67 (Stein et al., 2023) distinguishes between two ways of applying the metric to capture this nuance: an "Overall" score and a "Per-Class" score.

## 1. Vendi Score (Overall)
### Definition
The Overall Vendi Score is calculated across an entire set of generated samples (e.g., 50,000 images) from all classes.

The score is computed using the eigenvalues of a similarity matrix (kernel) $K$ derived from the generated samples $x_i^g$.

$$
VS(\{x_{i}^{g}\}_{i=1}^{n})=e^{-\sum_{i=1}^{n}\lambda_{i}\log~\lambda_{i}}
$$

where:
- $\lambda_{i}$ is the $i^{th}$ eigenvalue of the $n \times n$ matrix $K/n$.
- $K_{ii^{\prime}}=k(x_{i}^{g},x_{i^{\prime}}^{g})$ is the similarity (kernel) between two samples. (Source 67 uses a linear kernel).

### Purpose
This metric reports the **overall sample diversity**. In the context of class-conditional models, it primarily measures **inter-class diversity**—that is, the model's ability to generate samples from *different* classes.

### Limitations
- According to Stein et al. (2023), the Overall Vendi Score is "not particularly meaningful for class-conditional models".
- It can be misleading, as a model might achieve a high score by generating one distinct sample for each class but failing to create variety *within* those classes.

## 2. Vendi Score (Per-Class)
### Definition
The Per-Class Vendi Score is not a single calculation. Instead, the Vendi Score (using the same formula as above) is computed independently for *each class* in the dataset (e.g., for all 100 "volcano" images, then for all 100 "comic book" images, etc.). The final metric is the average of these individual per-class scores.

### Purpose
This metric is used to quantify **intra-class diversity** , also referred to as "semantic diversity". It measures how much variety a model produces *within* a single category.

### Advantages
- Stein et al. (2023) strongly advocate for this metric, finding it to be a "more meaningful quantification of semantic diversity".
- It aligns well with visual inspection. For example, in their study, the DiT-XL-2-guided model *looked* less diverse within classes, and the Per-Class Vendi Score correctly gave it a lower score, whereas the Overall Vendi Score failed to capture this.

## 3. Comparative Summary

| Metric | Calculation Basis | What It Measures | Finding in Source 67 |
| --- | --- | --- | --- |
| **Vendi Score (Overall)** | Entire dataset (e.g., 50k images across all classes) | **Inter-class diversity** (variety between classes) | Not very meaningful; can be misleading. |
| **Vendi Score (Per-Class)** | Averaged scores from *within* each class (e.g., 100 images per class) | **Intra-class diversity** (semantic variety within one class) | Recommended as a robust and meaningful measure of diversity. |

## References
- Stein, G., Cresswell, J. C., Hosseinzadeh, R., Sui, Y., Ross, B. L., Villecroze, V., ... & Loaiza-Ganem, G. (2023). *Exposing flaws of generative model evaluation metrics and their unfair treatment of diffusion models*. https://doi.org/10.48550/arXiv.2306.04675
- Friedman, D., & Dieng, A. B. (2022). *The Vendi Score: A diversity evaluation metric for machine learning*. https://doi.org/10.48550/arXiv.2210.02410

- (Excel Data: Paper 67)