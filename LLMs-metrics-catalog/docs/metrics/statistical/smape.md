---
id: smape
title: Smape
sidebar_label: Smape
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Symmetric Mean Absolute Percentage Error (SMAPE) is a scale-independent regression metric used to evaluate the relative difference between predicted and actual values. It was introduced as a modification of Mean Absolute Percentage Error (MAPE) to address two major issues: (i) MAPE becomes infinite or undefined when actual values approach zero, and (ii) MAPE is asymmetric, penalizing overestimation differently from underestimation (Armstrong, 1985; Hyndman & Koehler, 2006).  
SMAPE replaces the absolute actual value in the denominator with the average of the absolute actual and predicted values, which prevents infinite values and reduces extreme distortions.  
It is widely used in forecasting competitions and appears in regression-based evaluation pipelines, including modern SE/LLM benchmarking tasks where normalized, scale-robust errors are essential.


## Formula

Two equivalent standard definitions appear in the literature:

### *Similarity-Measure Form (Kreinovich et al., 2014):*
$$
SMAPE = \frac{|x - y|}{(|x| + |y|)/2}
$$

### *Mean Forecasting-Error Form (Makridakis et al., 2017):*
$$
SMAPE = \frac{1}{n} \sum_{t=1}^{n} \frac{2\,|Y_t - F_t|}{|Y_t| + |F_t|}
$$

where  
- $Y_t$ = actual value at time $t$,  
- $F_t$ = forecast value at time $t$,  
- $n$ = number of instances.

Both definitions are mathematically equivalent for non-negative values and bound the metric between $0$ and $2$ (or $0\%$ and $200\%$ when expressed as a percentage).


## Variants

### *1. Denominator Convention Differences*
Some formulations use:
$$
|Y_t| + |F_t|
$$
while others use:
$$
(|Y_t| + |F_t|)/2
$$
The summed-denominator version is exactly twice the averaged-denominator version; both remain equivalent.

### *2. Modified SMAPE (msMAPE)*
A variant that adds a small constant to the denominator to reduce instability when $Y_t$ or $F_t$ approach zero, while preserving the same conceptual structure.

### *3. Critically Discussed Properties*
- Asymmetry in penalizing overestimation versus underestimation.  
- Outlier resistance due to bounded error.  
- Scale independence when comparing series of different magnitudes.


## Application in Software Engineering
SMAPE applies to software engineering tasks involving regression outputs, including estimation of continuous software metrics, resource consumption prediction, and latency or performance modeling.  
It is also used in LLM-based SE evaluation where heterogeneous magnitude scales require normalized error metrics.  
The SELU benchmark for non-code SE tasks uses SMAPE and inverts its values using:
$$
1 - SMAPE
$$
to align regression performance with higher-is-better scoring conventions.


## Interpretation

- Low SMAPE values indicate strong predictive agreement.  
- High values reflect large relative deviations between predictions and observations.  

Strengths include robustness to zero values, bounded error behavior, and scale independence.  
Limitations include asymmetry in error penalization and instability when both actual and predicted values are near zero, motivating consideration of alternatives such as MASE or UMBRAE in specific contexts.


## References
1. *Makridakis, S., Spiliotis, E. (2017).* A new accuracy measure based on bounded relative error for time series forecasting. PLoS ONE, 12(3): e0174202.  
   [https://doi.org/10.1371/journal.pone.0174202](https://doi.org/10.1371/journal.pone.0174202)
2. *Kreinovich, V., et al. (2014).* How to Estimate Forecasting Quality: A System-Motivated Derivation of Symmetric Mean Absolute Percentage Error (SMAPE).  
   Technical Report, University of Texas at El Paso.  
   [https://scholarworks.utep.edu/cgi/viewcontent.cgi?article=1865&context=cs_techrep](https://scholarworks.utep.edu/cgi/viewcontent.cgi?article=1865&context=cs_techrep)

### Additional Reference in Database
- <ReferencesIndex ids={['55']} />
