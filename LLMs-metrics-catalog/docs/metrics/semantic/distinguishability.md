---
id: distinguishability
title: Distinguishability (d)
sidebar_label: Distinguishability (d)
---

## Introduction

**Distinguishability (d)** is a meta-metric (a metric for evaluating other metrics) introduced by **Eghbali and Pradel (2022)** to evaluate how well a code similarity metric, such as `BLEU` or `CodeBERTScore`, can differentiate between code snippets that are semantically similar and those that are semantically different.

The goal is to quantify whether a metric assigns higher scores to code pairs that come from the same "semantic cluster" (i.e., they solve the same problem) compared to code pairs from different clusters.

## 1. Distinguishability (d)
### Definition
Distinguishability is calculated as the ratio of the average similarity of code pairs *within the same cluster* ($Pairs_{intra}$) to the average similarity of code pairs *from different clusters* ($Pairs_{inter}$) .

$$
d = \frac{\sum_{y_i, y_j \in Pairs_{intra}} f(y_i, y_j)}{\sum_{y_i, y_j \in Pairs_{inter}} f(y_i, y_j)}
$$

where:
- $f(y_i, y_j)$ is the similarity function being evaluated (e.g., CodeBERTScore).
- $Pairs_{intra}$ is the set of code pairs $(y_i, y_j)$ where $y_i$ and $y_j$ are in the same semantic cluster $C_k$ .
- $Pairs_{inter}$ is the set of code pairs $(y_i, y_j)$ where $y_i$ and $y_j$ belong to different semantic clusters.

### Purpose
The purpose of this metric is **Semantic Cluster Separation**. Intuitively, a value of $d > 1$ is desired, which means the similarity metric $f$ assigns higher scores to code snippets that are functionally similar (intra-cluster) than to those that are functionally different (inter-cluster).

### Applications
- The paper uses this metric to evaluate `CodeBERTScore` and `CrystalBLEU` on a dataset mined from **ShareCode**, an online coding competition platform.
- In this context, "semantically equivalent code snippets" are defined as those from the *same coding problem* that *all pass the unit tests* provided by the platform.

### Limitations
The paper (Zhou et al., 2023) presents a significant critique of the distinguishability metric, arguing that it is **"not a reliable meta-metric"**.
- **It is manipulable:** The metric relies on *absolute* similarity scores, not how the metric ranks solutions.
- The authors demonstrate they can "hack" the metric by creating a variant called `CodeBERTScorek` (defined as $CodeBERTScore^k$).
- By increasing the exponent $k$, the distinguishability value "increases almost exponentially" (reaching 120,000), even though the base metric's ranking ability is unchanged.
- The authors conclude that the reliable way to compare metrics is by their *ranking* of different examples, "rather than the exact scores".

## References
- Zhou, S., Alon, U., Agarwal, S., & Neubig, G. (2023). *CodeBERTScore: Evaluating Code Generation with Pretrained Models of Code*. [https://doi.org/10.48550/arXiv.2302.05527](https://doi.org/10.48550/arXiv.2302.05527).
- Eghbali, A., & Pradel, M. (2022). *Crystalbleu: precisely and efficiently measuring the similarity of code*. In 37th IEEE/ACM International Conference on Automated Software Engineering. [https://doi.org/10.1145/3551349.3556903](https://doi.org/10.1145/3551349.3556903)