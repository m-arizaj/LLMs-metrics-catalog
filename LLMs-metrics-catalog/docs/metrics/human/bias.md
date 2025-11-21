---
id: bias
title: Bias
sidebar_label: Bias
---

## Introduction
Bias metrics quantify systematic differences in how a model represents, associates, or describes different social groups. Unlike fairness metrics that measure disparities in task accuracy, bias metrics focus on asymmetries in language behavior, internal representations, or generated text (Liang et al., 2022). The four papers emphasize that bias arises from social and historical inequalities and may surface in embeddings, probability distributions, or text produced by the model (Gallegos et al., 2024; Mehrabi et al., 2021). Although these works focus on NLP, the same metrics extend naturally to software-engineering contexts such as code-comment generation, documentation synthesis, developer Q&A, and issue summarization.

## Formula

### 1. Demographic Representation Bias
HELM defines demographic representation bias by comparing the observed distribution of group references in model outputs with a reference (usually uniform) distribution (Liang et al., 2022).

Observed distribution:
$$
P_{\text{obs}}(i) = \frac{C(i)}{\sum_j C(j)}
$$

Bias score (Total Variation Distance):
$$
\text{RepresentationBias} = \frac{1}{2} \sum_i \left| P_{\text{obs}}(i) - P_{\text{ref}}(i) \right|
$$

Higher scores indicate uneven representation of demographic groups in generations.


### 2. Stereotypical Association Bias
For each target concept $t$ (e.g., a profession), the model’s distribution of demographic group mentions is compared to a reference distribution (Liang et al., 2022).

Per-target association:
$$
\text{Assoc}t = \frac{1}{2} \sum_i \left| P{\text{obs}}^{t}(i) - P_{\text{ref}}(i) \right|
$$

Overall association:
$$
\text{StereotypicalAssociation} = \frac{1}{|T|} \sum_{t \in T} \text{Assoc}_t
$$


### 3. Embedding-Based Bias (WEAT, CEAT, etc.)
Embedding-level bias measures asymmetric associations between group-word sets and attribute-word sets (Gallegos et al., 2024).

WEAT effect size:
$$
f(A,W) =
\frac{
\operatorname{mean}_{a \in A_1}s(a,W_1,W_2)
-
\operatorname{mean}_{a \in A_2}s(a,W_1,W_2)
}{
\operatorname{std}_{a \in A_1 \cup A_2}s(a,W_1,W_2)
}
$$

Meta-analytic CEAT:
$$
\text{CEAT} =
\frac{
\sum_{i=1}^{N} v_i \cdot \text{WEAT}_i
}{
\sum_{i=1}^{N} v_i
}
$$

Sentence-level embedding bias:
$$
\text{SentenceBias}(S) = 
\sum_{s \in S}
\left| \cos(s, v_{\text{gender}}) \cdot \alpha_s \right|
$$


### 4. Probability-Based Bias
These metrics compare likelihoods assigned to stereotypical vs. counter-stereotypical sentence pairs (Gallegos et al., 2024).

Directional preference:
$$
\text{bias}(S_1,S_2) = \mathbf{I}\left(f(S_1) > f(S_2)\right)
$$

Language Model Bias (LMB) uses a t-statistic over perplexities:
$$
\text{LMB} = t\big(\text{PP}(S_{\text{stereotype}}), \text{PP}(S_{\text{anti}})\big)
$$


### 5. Generated-Text Bias Metrics (Gallegos et al., 2024)

*HONEST (hurtful completions):*
$$
\text{HONEST} = 
\frac{
\displaystyle \sum_{\hat y \in \hat Y} \mathbf{I}_{\text{HurtLex}}(\hat y)
}{
|\hat Y|
}
$$

*Psycholinguistic norms:*
$$
\text{PsychNorms} =
\frac{
\sum_{\hat y} \text{sign}(\text{affect}(\hat y))\,\text{affect}(\hat y)^2
}{
\sum_{\hat y} |\text{affect}(\hat y)|
}
$$

*Gender polarity:*
$$
\text{GenderPolarity} =
\frac{
\sum_{\hat y} \text{sign}(\text{bias}(\hat y))\,\text{bias}(\hat y)^2
}{
\sum_{\hat y} |\text{bias}(\hat y)|
}
$$


### 6. Word-Level Language Model Bias
Mehrabi et al. (2021) measure directional bias using log-odds under different demographic conditions:

$$
\text{bias}(w) = \log \frac{P(w \mid \text{female})}{P(w \mid \text{male})}
$$

Aggregate statistics (mean, variance) provide corpus-level bias.


## Variants

Across the four papers, bias metrics cluster into distinct families:

1. *Representation bias* — Compares mention/usage rates of groups against a reference distribution (Liang et al., 2022).  
2. *Association bias* — Measures how strongly groups are linked to target concepts using TVD or embedding distances (Liang et al., 2022; Gallegos et al., 2024).  
3. *Embedding-based bias* — WEAT, SEAT, CEAT, and sentence-level projections assess representational asymmetries (Gallegos et al., 2024).  
4. *Probability-based bias* — Compares log-likelihoods or perplexities of paired sentences (Gallegos et al., 2024).  
5. *Generated-text bias* — Detects harmful, affective, or gendered content in model outputs (Gallegos et al., 2024).  
6. *Word-level LM bias* — Log-odds differences in word probabilities under demographic prompts (Mehrabi et al., 2021).  
7. *Holistic evaluation taxonomies* — LLM surveys classify bias as one dimension of broader evaluation frameworks (Chang et al., 2023).


## Applications in Software Engineering

Although originally designed for general NLP, these metrics transfer directly to SE contexts:

- *Documentation and comment generation*  
  Use representation and association metrics to identify skewed portrayals in generated comments or docstrings.

- *Developer Q&A assistants*  
  Generated-text metrics detect harmful phrasing or gendered explanations in LLM support responses.

- *Code-review explanations*  
  Embedding-based bias can reveal stereotypical associations encoded in the representations used to generate explanations.

- *Issue summarization and commit messages*  
  Probability-based invariance metrics evaluate whether demographic substitutions produce different summaries or interpretations.

- *End-to-end LLM evaluation pipelines*  
  As in HELM, bias should be assessed alongside accuracy, robustness, and calibration (Liang et al., 2022).


## Interpretation
High representation or association bias values indicate systematic asymmetry in how the model describes different groups (Liang et al., 2022). Embedding-based metrics quantify representational biases that may or may not surface in downstream text (Gallegos et al., 2024). Probability-based metrics evaluate whether the model’s likelihood function treats demographic substitutions differently, but may correlate weakly with real harms (Gallegos et al., 2024). Generated-text metrics directly capture observable harmful or gendered language. Mehrabi et al. (2021) stress that bias metrics inherently reflect normative goals, and interpretation should be grounded in specific contexts of harm.


## References

1. Chang, Y., et al. (2023). A survey on evaluation of large language models. 
   [https://doi.org/10.48550/arXiv.2307.03109](https://doi.org/10.48550/arXiv.2307.03109)

2. Gallegos, I., et al. (2024). Bias and fairness in large language models: A survey. Computational Linguistics, 50(3).
   [https://aclanthology.org/2024.cl-3.8/](https://aclanthology.org/2024.cl-3.8/)

3. Liang, P., et al. (2022). Holistic evaluation of language models (HELM).
   [https://doi.org/10.48550/arXiv.2211.09110][https://doi.org/10.48550/arXiv.2211.09110]

4. Mehrabi, N., et al. (2021). A survey on bias and fairness in machine learning. arXiv:1908.09635.
   [https://doi.org/10.48550/arXiv.1908.09635](https://doi.org/10.48550/arXiv.1908.09635)