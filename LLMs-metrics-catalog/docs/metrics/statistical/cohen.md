---
id: cohen
title: Cohen's Score
sidebar_label: Cohen's Score
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Cohen metrics provide two complementary statistical tools used to evaluate effect sizes and inter-rater reliability.  
- *Cohen’s d* quantifies the standardized difference between two groups and appears in bias-assessment methods such as the Word Embedding Association Test (WEAT) and the Sentence Encoder Association Test (SEAT), where an adapted effect-size formulation based on Cohen’s d is employed to measure conceptual associations.  
- *Cohen’s κ (kappa)* measures the agreement between two raters beyond chance, widely used in human-evaluation settings and annotation reliability analyses in Software Engineering (SE) and LLM assessment.
Together, these metrics support reproducible evaluation, statistical interpretability, and reliability analysis in both bias measurement and human-judgment-based assessments.


## Cohen’s d – Effect Size

### Description
Cohen’s d measures the standardized mean difference between two groups.  
In NLP and SE bias evaluation frameworks such as WEAT and SEAT, an *adapted effect-size formulation derived from Cohen’s d* is used to quantify how strongly association patterns differ between concept categories within embedding spaces.

### Formula
The classical formulation of Cohen’s d is:

$$
d = \frac{\bar{X}_1 - \bar{X}_2}{s_p}
$$

with pooled standard deviation:

$$
s_p = \sqrt{\frac{s_1^2 + s_2^2}{2}}
$$

where  
- $\bar{X}_1$, $\bar{X}_2$ are the group means,  
- $s_1$, $s_2$ are their standard deviations,  
- $s_p$ is the pooled standard deviation.

### Interpretation
Typical effect-size magnitudes (Sullivan & Feinn, 2012):  
- Small: $d \approx 0.2$  
- Medium: $d \approx 0.5$  
- Large: $d \approx 0.8$  

In embedding-bias contexts, larger effect sizes indicate stronger differential associations between concept categories, offering a normalized measure of bias strength beyond raw similarity differences.


## Cohen’s κ – Inter-Rater Agreement

### Description
Cohen’s κ (kappa) quantifies the agreement between two raters after accounting for chance.  
This metric is widely used in SE evaluation tasks involving human annotation—including code summarization, code explanation assessment, debugging-explanation evaluation, and other annotation-driven judgments—to measure annotation consistency or to compare human and model-produced labels.

### Formula
The κ coefficient is defined as:

$$
\kappa = \frac{p_o - p_e}{1 - p_e}
$$

where  
- $p_o$ = observed agreement proportion,  
- $p_e$ = expected agreement by chance.

### Interpretation
The κ statistic ranges from –1 to 1:

- 1 = perfect agreement  
- 0 = agreement equal to chance  
- < 0 = worse than chance  

Interpretation thresholds (McHugh, 2012):  
- 0.01–0.20: Slight agreement  
- 0.21–0.40: Fair agreement  
- 0.41–0.60: Moderate agreement  
- 0.61–0.80: Substantial agreement  
- 0.81–1.00: Almost perfect agreement  

Cohen’s κ enables objective assessment of annotation reliability and helps validate consistency in evaluation pipelines involving human or expert reviewers.


## Interpretation in Software Engineering Context
- *Cohen’s d:* Used as an effect-size measure in embedding-based bias evaluation (e.g., WEAT/SEAT) to capture the magnitude of conceptual associations relevant to fairness or representational bias in SE-related language models.  
- *Cohen’s κ:* Used to quantify agreement among annotators in tasks such as code review assessment, documentation quality rating, automated debugging explanation evaluation, or correctness judgments of generated code.

Both metrics support higher reliability, transparency, and interpretability in SE-focused LLM evaluation.


## References
1. *McHugh, M. L. (2012).* Inter-rater reliability: The kappa statistic. Biochemia Medica, 22(3), 276–282.  
   [https://pmc.ncbi.nlm.nih.gov/articles/PMC3900052/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3900052/)
2. *Sullivan, G. M., & Feinn, R. (2012).* Using Effect Size—or Why the P Value Is Not Enough. Journal of Graduate Medical Education, 4(3), 279–282.  
   DOI: [10.4300/JGME-D-12-00156.1](https://doi.org/10.4300/JGME-D-12-00156.1)

### Additional References in Dataset
- <ReferencesIndex ids={['11','16']} />