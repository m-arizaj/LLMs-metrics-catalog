---
id: dice-coefficient
title: Dice Coefficient
sidebar_label: Dice Coefficient
---

## Definition
The **Dice Coefficient** (also known as the Sørensen–Dice coefficient or $DSC$) is a common metric used to evaluate the similarity between two samples, most frequently in image segmentation tasks. It measures the spatial overlap between a predicted segmentation mask and a ground-truth mask.

It is **mathematically identical** to the **F1-Score**. While the F1-Score is often discussed in the context of classification using Precision and Recall, the Dice Coefficient is typically formulated directly in terms of True Positives (TP), False Positives (FP), and False Negatives (FN), which represent pixel counts.

***

## Formula (General Idea)
The Dice Coefficient is calculated as twice the area of overlap (intersection) divided by the total number of pixels in both images.
$$
\text{Dice Coefficient (DSC)} = \frac{2 \times \text{TP}}{ (2 \times \text{TP}) + \text{FP} + \text{FN}}
$$
Using set notation, where $A$ is the predicted set of pixels and $B$ is the ground-truth set:
$$
\text{DSC} = \frac{2 \times |A \cap B|}{|A| + |B|}
$$
where:
* $|A \cap B|$ is the intersection of the sets (True Positives).
* $|A|$ is the number of pixels in the predicted set (TP + FP).
* $|B|$ is the number of pixels in the ground-truth set (TP + FN).

***

## Purpose
The primary purpose is to provide a single score (from 0 to 1) that quantifies the spatial overlap between a prediction and a reference. It is the standard metric for many segmentation tasks because it is effective at handling significant class imbalance (e.g., when the object to be segmented is very small compared to the background). A score of 1 indicates perfect overlap, while 0 indicates no overlap.

***

## Domains
* Image Segmentation (Medical Imaging, Satellite Imagery, etc.)
* ML Model Performance (Segmentation)
* Code Proficiency / Machine Learning

***

## Benchmarks
* Steel Defect Problem
* (Used in many computer vision benchmarks like BraTS, KiTS, LiTS, etc.)

***

## Advantages
* **Identical to F1-Score:** Inherits all the advantages of the F1-Score, providing a balanced measure of precision and recall.
* **Effective for Imbalance:** It is particularly well-suited for segmentation tasks where the foreground (e.g., a defect or tumor) is much smaller than the background, as it largely ignores True Negatives (correctly identified background pixels).
* **Intuitive:** The $\frac{2 \times (\text{Overlap})}{(\text{Total Pixels})}$ formulation is highly intuitive for measuring spatial agreement.

***

## Limitations
* **Gradient/Loss Function:** The standard Dice Coefficient is not smoothly differentiable, which can make it unstable when used directly as a loss function for training deep learning models (though "Dice Loss" is a common and effective adaptation).
* **Small Regions:** The metric can be volatile (i.e., show high variance) when the ground truth and predicted regions are very small.

***

## Key References
* (Excel Data: Paper 60)
* Dice, L. R. (1945). *Measures of the amount of ecologic association between species.* Ecology.
* Sørensen, T. (1948). *A method of establishing groups of equal amplitude in plant sociology based on similarity of species content.*