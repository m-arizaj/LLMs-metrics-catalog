---
id: smape
title: Smape
sidebar_label: Smape
---

## Introduction
Symmetric Mean Absolute Percentage Error (SMAPE) is a normalized regression metric used to measure the relative prediction accuracy between model outputs and true values. Unlike Mean Absolute Percentage Error (MAPE), SMAPE introduces a symmetric denominator to reduce bias when actual values are close to zero.  It is especially useful in evaluating model performance for forecasting, regression, and software engineering tasks where balanced error scaling is important.

## Formula

The standard definition of SMAPE is given by:

$$
SMAPE = \frac{100}{n} \sum_{i=1}^{n} \frac{|F_i - A_i|}{(|A_i| + |F_i|)/2}
$$

where:  
- $F_i$ = predicted value for instance $i$,  
- $A_i$ = actual (true) value for instance $i$,  
- $n$ = total number of instances.  

This formulation bounds the metric between 0% and 200%, but some variants normalize it by 2, restricting it to the range [0%, 100%].

## Variants
- *Normalized SMAPE:* Divides by $(|A_i| + |F_i|)$ instead of $(|A_i| + |F_i|)/2$, resulting in a metric scaled up to 200%.  
- *Bounded SMAPE:* Applies an additional scaling factor of 0.5 to ensure values remain within 0–100%.  
- *Weighted SMAPE:* Introduces instance weights to handle imbalanced datasets where large magnitudes could dominate the error measure.

## Application in Software Engineering
In software engineering and LLM evaluation, SMAPE is primarily used for regression evaluation in non-code prediction tasks, such as estimating software metrics, predicting defect ratios, or analyzing resource usage.  
By normalizing both prediction and target values, it allows fair comparison across heterogeneous data distributions and avoids inflation of percentage errors when values are small.

The benchmark SELU (2025) employs SMAPE as part of its regression evaluation framework to assess predictive model calibration and accuracy in non-code SE contexts.

## Interpretation
- *Low SMAPE (close to 0%)* indicates high predictive accuracy.  
- *High SMAPE (close to 100%)* signifies large relative deviation between predictions and true values.  
- Unlike MAPE, SMAPE does not overly penalize overestimations or underestimations, maintaining symmetry in error scaling.

However, SMAPE can still become unstable when both $A_i$ and $F_i$ are near zero, and alternative formulations (e.g., Mean Absolute Scaled Error, MASE) may be preferable in such cases.

## References
1. *Makridakis, S., Spiliotis, E. (2017).* A new accuracy measure based on bounded relative error for time series forecasting. PLoS ONE, 12(3): e0174202.  
   [https://doi.org/10.1371/journal.pone.0174202](https://doi.org/10.1371/journal.pone.0174202)
2. *Kreinovich, V., et al. (2014).* How to Estimate Forecasting Quality: A System-Motivated Derivation of Symmetric Mean Absolute Percentage Error (SMAPE).  
   Technical Report, University of Texas at El Paso.  
   [https://scholarworks.utep.edu/cgi/viewcontent.cgi?article=1865&context=cs_techrep](https://scholarworks.utep.edu/cgi/viewcontent.cgi?article=1865&context=cs_techrep)

### Additional Reference in Database
- 55
