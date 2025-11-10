---
id: cohen
title: Cohen's Score
sidebar_label: Cohen's Score
---

## Introduction
Cohen metrics provide two complementary approaches to evaluating statistical relationships and inter-rater reliability.  
- *Cohen’s d* quantifies the effect size between two groups, commonly applied in bias and association studies such as WEAT and SEAT.  
- *Cohen’s κ (kappa)* measures agreement or consistency between raters, frequently used for human evaluation consistency and correlation in annotation tasks.
Together, these metrics form the foundation for quantitative and reliability analysis across both bias evaluation and human judgment correlation in Software Engineering and LLM assessment.


## Cohen’s d – Effect Size

### Description
Cohen’s d is used to measure the standardized difference between two means.  
In Software Engineering and NLP, it appears in association bias evaluations such as *WEAT (Word Embedding Association Test)* and *SEAT (Sentence Encoder Association Test)*, indicating how strongly two concept categories are associated within embeddings or model representations.

### Formula
The formula for Cohen’s d is:

$$
d = \frac{\bar{X}_1 - \bar{X}_2}{s_p}
$$

where:

$$
s_p = \sqrt{\frac{(s_1^2 + s_2^2)}{2}}
$$

and  
- $\bar{X}_1$, $\bar{X}_2$ are the sample means,  
- $s_1$, $s_2$ are the standard deviations of each group,  
- $s_p$ is the pooled standard deviation.

### Interpretation
Effect size values are interpreted as:  
- Small: $d ≈ 0.2$  
- Medium: $d ≈ 0.5$  
- Large: $d ≈ 0.8$  

In bias evaluation contexts, higher $d$ values suggest stronger bias or association between embedding groups.  
This provides an interpretable and normalized measure of bias strength beyond raw difference scores.


## Cohen’s κ – Inter-Rater Agreement

### Description
Cohen’s κ (kappa) measures the degree of agreement between two raters, beyond what would be expected by chance.  
It is used in Software Engineering evaluations (e.g., *CoNaLa, Card2Code, APR-Assess, Summary-Assess*) to quantify the consistency of human or model-based judgments.

### Formula
The formula for Cohen’s κ is:

$$
\kappa = \frac{p_o - p_e}{1 - p_e}
$$

where:  
- $p_o$ = observed proportion of agreement,  
- $p_e$ = expected proportion of agreement by chance.

### Interpretation
The κ coefficient ranges from –1 to 1, where:  
- 1 = perfect agreement,  
- 0 = agreement equal to chance,  
- < 0 = agreement worse than chance.  

Typical thresholds (McHugh 2012):  
- 0.01–0.20: Slight agreement  
- 0.21–0.40: Fair agreement  
- 0.41–0.60: Moderate agreement  
- 0.61–0.80: Substantial agreement  
- 0.81–1.00: Almost perfect agreement  

Cohen’s κ is particularly valuable in LLM evaluation alignment tasks and human consistency analyses.


## Interpretation in Software Engineering Context
- *Cohen’s d:* Measures the magnitude of bias or difference between embedding associations, enabling fairness evaluation in word or sentence representations.  
- *Cohen’s κ:* Measures consistency between evaluators, improving reliability in human judgment tasks such as code review, summarization assessment, or explanation validation.  

Both metrics promote reproducibility and interpretability in human-aligned evaluations for code and NLP models.


## References
1. *McHugh, M. L. (2012).* Inter-rater reliability: The kappa statistic. Biochemia Medica, 22(3), 276–282.  
   [https://pmc.ncbi.nlm.nih.gov/articles/PMC3900052/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3900052/)
2. *Sullivan, G. M., & Feinn, R. (2012).* Using Effect Size—or Why the P Value Is Not Enough. Journal of Graduate Medical Education, 4(3), 279–282.  
   DOI: [10.4300/JGME-D-12-00156.1](https://doi.org/10.4300/JGME-D-12-00156.1)

### Additional References in Dataset
- 11, 16