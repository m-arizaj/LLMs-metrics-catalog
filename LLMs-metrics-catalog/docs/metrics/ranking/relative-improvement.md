---
id: relative-improvement
title: Relative Improvement (RImp)
sidebar_label: RImp
---

## Definition

**Relative Improvement (RImp)** is an evaluation metric used in Fault Localization (FL) to assess the effectiveness of a specific FL technique.

It is calculated by comparing the total number of statements a developer would need to examine to find all faults **using** a specific FL approach versus the total number of statements they would need to examine **without** using that approach.

***

## Formula (General Idea)

The metric is a prose-based comparison rather than a strict formula in the provided text. It is defined as a comparison of the developer effort (measured in statements examined) with and without the fault localization technique.

A common calculation for relative improvement (though not explicitly written as a formula in the source) would be:

$$
\text{RImp} = \frac{\text{Statements}_{\text{baseline}} - \text{Statements}_{\text{FL_technique}}}{\text{Statements}_{\text{baseline}}}
$$

Where:
* $\text{Statements}_{\text{baseline}}$ = Total statements examined to find all faults without the FL approach.
* $\text{Statements}_{\text{FL_technique}}$ = Total statements examined to find all faults using the FL approach.

***

## Purpose

The purpose of RImp is to quantify the practical benefit or efficiency gain provided by a fault localization technique. It directly measures the reduction in developer effort (in terms of code statements to review) required to locate all faults, providing a clear indicator of a technique's value.

***

## Domains

* Software Engineering
* Fault Localization (FL) 
* Deep-Learning-based Fault Localization (DLFL) 

***


## Advantages

* **Measures Practical Effort:** Directly quantifies the reduction in developer effort, making it a practical metric for assessing a tool's usefulness.
* **Clear Interpretation:** A higher RImp score clearly indicates a more effective localization technique.

***

## Limitations
* The provided source does not specify limitations for this particular metric.

***

## Key References
* Chen, X., Hu, X., Huang, Y. et al. Deep learning-based software engineering: progress, challenges, and opportunities. Sci. China Inf. Sci. 68, 111102 (2025). https://doi.org/10.1007/s11432-023-4127-5

* RImp was used in 6 of the surveyed fault localization papers.
* Zhang, Z., Lei, Y., Tan, Q., et al. (2017). *Deep learning-based fault localization with contextual information*. https://doi.org/10.1587/transinf.2017EDL8143
* Zhang, Z., Lei, Y., Mao, X. G., et al. (2019). *CNN-FL: an effective approach for localizing faults using convolutional neural networks*.https://doi.org/10.1109/SANER.2019.8668002
* Zhang, Z., Lei, Y., Mao, X., et al. (2023). *Context-aware neural fault localization*. https://doi.org/10.1109/TSE.2023.3279125
* Yu, J., Lei, Y., Xie, H., et al. (2022). *Context-based cluster fault localization*. https://doi.org/10.1145/3524610.3527891
* Lei, Y., Wen, T., Xie, H., et al. (2023). *Mitigating the effect of class imbalance in fault localization using context-aware generative adversarial network*. 
https://doi.org/10.48550/arXiv.2303.06644
* Zhang, Z., Lei, Y., Su, T., et al. (2023). *Influential global and local contexts guided trace representation for fault localization*.https://doi.org/10.1145/3576043