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
\text{RImp} = \frac{\text{Statements}_{\text{baseline}} - \text{Statements}_{\text{FL\_technique}}}{\text{Statements}_{\text{baseline}}}
$$

Where:
* $\text{Statements}_{\text{baseline}}$ = Total statements examined to find all faults without the FL approach.
* $\text{Statements}_{\text{FL\_technique}}$ = Total statements examined to find all faults using the FL approach.
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

***

## Key References
- Chen, X., Hu, X., Huang, Y., Ma, L., Wang, H., Wang, J., Xia, X., Yang, Y., Yu, Z., Zhang, Y., & Xie, T. (2025). Deep learning-based software engineering: Progress, challenges, and opportunities. Science China Information Sciences, 68, 111102. https://doi.org/10.1007/s11432-023-4127-5

- Zhang, Z., Lei, Y., Tan, Q., Mao, X., & Zeng, P. (2017). Deep learning-based fault localization with contextual information. IEICE Transactions on Information and Systems, E100.D(12), 3027–3030. https://doi.org/10.1587/transinf.2017EDL8143


- Zhang, Z., Lei, Y., Mao, X., & Zeng, P. (2019). CNN-FL: An effective approach for localizing faults using convolutional neural networks. 2019 IEEE 26th International Conference on Software Analysis, Evolution and Reengineering (SANER), 445–455. IEEE. https://doi.org/10.1109/SANER.2019.8668002


- Zhang, Z., Lei, Y., Mao, X., & Zeng, P. (2023). Context-aware neural fault localization. IEEE Transactions on Software Engineering, 49(7), 3862–3883. https://doi.org/10.1109/TSE.2023.3279125


- Yu, J., Lei, Y., Xie, H., & Mao, X. (2022). Context-based cluster fault localization. Proceedings of the 30th IEEE/ACM International Conference on Program Comprehension, 184–195. Association for Computing Machinery. https://doi.org/10.1145/3524610.3527891

- Lei, Y., Wen, T., Xie, H., & Mao, X. (2023). Mitigating the effect of class imbalance in fault localization using context-aware generative adversarial network. arXiv. https://doi.org/10.48550/arXiv.2303.06644

- Zhang, Z., Lei, Y., Su, T., Tan, Q., & Mao, X. (2024). Influential global and local contexts guided trace representation for fault localization. ACM Transactions on Software Engineering and Methodology, 33(2), 1–33. https://doi.org/10.1145/3576043