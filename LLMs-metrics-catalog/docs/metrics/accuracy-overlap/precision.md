---
id: precision
title: Precision
sidebar_label: Precision
---

## Introduction

Precision is a fundamental metric for evaluating classification and generation tasks, measuring the proportion of correctly predicted positive instances out of all instances predicted as positive. It focuses on minimizing false positives, thus quantifying the model’s ability to produce accurate positive outputs.  
In Software Engineering, precision is widely used in defect prediction, bug detection, classification, and security evaluation tasks to assess the reliability of model predictions. When applied to code intelligence and generative models, precision reflects how well the model avoids generating incorrect outputs or irrelevant tokens.

The mathematical definition of precision is:

$$
\text{Precision} = \frac{TP}{TP + FP}
$$

where:
- **TP (True Positives):** Correctly identified positive cases  
- **FP (False Positives):** Incorrectly predicted positive cases  

Precision is closely related to Recall and F1-score. While recall measures coverage of the actual positives, precision measures correctness of the predicted positives. Together, they help evaluate trade-offs between strict accuracy and sensitivity to errors.



## Variants

| Variant | Description | Typical Use Cases |
|----------|--------------|------------------|
| Precision | Standard precision metric used in binary/multiclass classification. | Bug detection, defect prediction, and security evaluation. |
| Mean Average Precision (mAP) | Computes the mean of precision values across multiple recall levels, providing a single measure of retrieval performance. | Retrieval and ranking tasks, code clone detection, fault localization. |
| Classification Precision (Discriminative Task) | Used in discriminative classification scenarios, such as hallucination detection in multimodal LLMs. | Evaluates fine-grained correctness under classification settings. |

---

## Applications in Software Engineering

Precision is extensively reported across SE benchmarks and studies:  

- **Bug Detection / Repair:** *Defects4J* and *QuixBugs* employ Precision to evaluate how effectively models detect or fix bugs without overpredicting faulty code.  
- **Classification and Security Evaluation:** Datasets like *CYBERSECEVAL* and *PII Benchmark* use Precision to measure system robustness against vulnerabilities and privacy breaches.  
- **Generative Model Evaluation:** Precision is used as a fidelity indicator, assessing the similarity between generated and real data distributions.  
- **Code Clone Detection:** mAP  is applied to assess retrieval accuracy, ranking predicted code clones based on their relevance.  
- **Fault Localization:** mAP is employed to evaluate the ranking quality of faulty lines or components identified by LLMs.  


## Mathematical Insight

Precision can also be expressed as an integral part of information retrieval metrics. The Mean Average Precision variant is formally defined as:

$$
\text{mAP} = \frac{1}{N} \sum_{i=1}^{N} \text{AP}_i
$$

where $ \text{AP}_i $ is the area under the Precision-Recall curve for the *i-th* query.  

This generalization enables evaluating models that output ranked lists—common in retrieval-based or fault localization tasks in SE.


## Related Metrics

- **Recall:** Measures coverage of relevant elements among all true positives.
- **F1-Score:** Harmonic mean of precision and recall.
- **AUC-ROC:** Measures the trade-off between true positive and false positive rates.


## References

1. Hossin, M., & Sulaiman, M. N. (2015). *A Review on Evaluation Metrics for Data Classification Evaluations.* *International Journal of Data Mining & Knowledge Management Process*, 5(2), 1–11. [https://doi.org/10.5121/ijdkp.2015.5201](https://doi.org/10.5121/ijdkp.2015.5201)  
2. Beam, C. S. (2023). *Resolving Power: A General Approach to Compare the Distinguishing Ability of Threshold-Free Evaluation Metrics.* *arXiv:2304.00059.* [https://arxiv.org/abs/2304.00059](https://arxiv.org/abs/2304.00059)  
3. Kang, H., & Do, S. (2024). *ML-Based Software Defect Prediction in Embedded Software for Telecommunication Systems (Focusing on the Case of SAMSUNG ELECTRONICS).* *Electronics,* 13(9), 1690. [https://doi.org/10.3390/electronics13091690](https://doi.org/10.3390/electronics13091690)  

## Additional References in Dataset

- 2, 3, 6, 7, 8, 18, 26, 32, 45, 50, 67
