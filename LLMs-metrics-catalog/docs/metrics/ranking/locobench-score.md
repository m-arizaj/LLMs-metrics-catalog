---
id: locobench-score
title: LoCoBench Score (LCBS)
sidebar_label: LoCoBench Score
---

## Definition

The **LoCoBench Score (LCBS)** is a unified, aggregated metric introduced in the **LoCoBench** benchmark. It is specifically designed to evaluate the performance of long-context Large Language Models (LLMs) in complex, realistic software engineering scenarios.

The LCBS functions as a "weighted aggregate function that maps the 17-dimensional metric space to a scalar evaluation score". This provides a single, comprehensive measure of a model's capabilities across four key dimensions of software development.

***

## Formula (General Idea)

The LoCoBench Score is calculated as a weighted linear combination of four dimension scores, which is then scaled to a final value on a 0-5 scale.

The four evaluation dimensions and their respective weights are:
1.  **Software Engineering Excellence (SE):** 40% weight
2.  **Functional Correctness (FC):** 30% weight
3.  **Code Quality Assessment (CQ):** 20% weight
4.  **Long-Context Utilization (LCU):** 10% weight

The calculation follows a multi-step process:

1.  **Metric Normalization:** First, each of the 17 individual metrics (e.g., `ACS`, `DTA`, `UTP`, `ICU`, etc.) is normalized to a value $\mathcal{N}(m_i)$ in the unit interval [0, 1] using min-max scaling.
    $$\mathcal{N}(m_{i})=\frac{m_{i}-min(m_{i})}{max(m_{i})-min(m_{i})}$$

2.  **Dimension Aggregation:** The score for each of the four dimensions (SE, FC, CQ, LCU) is computed as the arithmetic mean of its constituent normalized metrics. For example, the SE score, which is derived from 8 metrics, is calculated as:
    $$SE = \frac{1}{|\mathcal{M}_{SE}|}\sum_{m \in \mathcal{M}_{SE}} \mathcal{N}(m) = \frac{1}{8}\sum_{i=1}^{8} \mathcal{N}(m_{i}^{SE})$$

3.  **Final Score:** The final LCBS is the weighted sum of the four dimension scores, scaled by 5 to produce the final 0-5 point score.
    $$LCBS = 5 \cdot (w_{SE} \cdot SE + w_{FC} \cdot FC + w_{CQ} \cdot CQ + w_{LCU} \cdot LCU)$$
    Substituting the defined weights gives the final formula:
    $$LCBS = 5 \cdot (0.4 \cdot SE + 0.3 \cdot FC + 0.2 \cdot CQ + 0.1 \cdot LCU)$$

***

## Purpose

The primary purpose of the LCBS is to provide a single, unified scalar score that summarizes a model's performance across 17 different metrics. This allows for a holistic and comprehensive comparison of models on complex, long-context software engineering tasks.

***

## Domains

* Long-Context Evaluation
* Software Engineering

***


## Advantages

* **Comprehensive:** It aggregates 17 distinct metrics across 4 fundamental dimensions of software development: Software Engineering Excellence, Functional Correctness, Code Quality, and Long-Context Utilization.
* **Unified Score:** It condenses a complex, 17-dimensional evaluation into a single, easy-to-compare scalar score.
* **Weighted:** The weights (40%/30%/20%/10%) are "empirically determined to reflect the relative importance of each dimension", with Software Engineering Excellence receiving the highest priority.

***

## Limitations

* **Aggregation Obscurity:** As an aggregated score, it can hide significant performance variations in specific capabilities. The paper's analysis notes that "Models that appear similar in overall performance may exhibit substantial differences in specific capabilities".
* **Weight Subjectivity:** The dimension weights are "empirically determined", meaning they are tied to the benchmark authors' assessment of importance and could be debated.
* **Hides Trade-offs:** A high overall LCBS does not guarantee top performance in all areas. The paper's results show that the model with the best overall LCBS was not the top performer in the specialized "Long-Context Utilization" dimension.

***

## Key References

* Qiu, J., Liu, Z., Liu, Z., Murthy, R., Zhang, J., Chen, H., Wang, S., Zhu, M., Yang, L., Tan, J., Cen, Z., Qian, C., Heinecke, S., Yao, W., Savarese, S., Xiong, C., & Wang, H. (2025). LoCoBench: A benchmark for long-context large language models in complex software engineering. arXiv. https://doi.org/10.48550/arXiv.2509.09614