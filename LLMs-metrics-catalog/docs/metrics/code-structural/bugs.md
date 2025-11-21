---
id: bugs
title: Bug Metrics
sidebar_label: Bug Metrics
---

## Introduction
Bug Metrics, in the context of this study, refer to software attributes used to predict whether a class will contain defects. Rather than capturing detection or localization accuracy, the paper used as reference evaluates a set of static source-code metrics that statistically correlate with defect occurrence in large software systems.  
These metrics quantify class characteristics such as size (LOC), complexity (WMC, NLE), inheritance structure (DIT, NOC), data and method exposure (NPA, NPM), coupling (CBO, CBOI), cohesion (LCOM5), and documentation quality (CD).  
The authors analyze 12 such metrics over 275 versions of 39 Java projects, linking them to class-level defect labels extracted from GitHub commits. Together, these metrics serve as bug metrics in the sense that they help identify which classes are most defect-prone.

## Formula and Structure
The paper does not define a general mathematical formula. Instead, each metric is computed directly from its structural definition. For example:

- **LOC:**  
  Number of code lines excluding nested, anonymous, and local classes.

- **DIT (Depth of Inheritance Tree):**  
  Distance to the farthest ancestor.

- **NOC (Number of Children):**  
  Count of all direct subclasses, interfaces, enums, and annotations.

- **LCOM5 (Lack of Cohesion in Methods):**  
  Number of distinct functionalities represented by the class’s methods.

- **CBO / CBOI (Coupling):**  
  Outgoing vs. incoming coupling based on referenced or referencing classes.

- **CD (Comment Density):**  
  Ratio of comment lines to total logical lines.

The metrics are then used as features in a binary classification model predicting whether each class is defective or not defective. Prediction performance is evaluated using standard classification metrics (F-measure, AUC-ROC) at the class level.

## Variants and Applications

### Metric Suites
The paper evaluates three structured groups of bug-related metrics:

1. **Baseline Metric**
   - **LOC:** Serves as a simple defect indicator due to correlation between class size and fault-proneness.

2. **CK Metric Suite (Chidamber & Kemerer)**
   - **DIT, NOC, LCOM5, CBO**  
     Widely used in defect prediction literature; designed to capture structural aspects of OO classes such as complexity, inheritance, cohesion, and coupling.

3. **OTHER Metrics Suite**
   - **NPA, NPM, NLE, CBOI, CD**  
     Additional metrics selected because they introduce information not strongly correlated with the CK suite.

### Use in Defect Prediction
- Metrics are computed at the class level using static analysis.  
- Defects are linked to classes using commit messages and code diff analysis.  
- Models evaluated: Naive Bayes, Decision Tree, Random Forest.  
- Prediction is performed using 10-fold cross-validation.  
- Metrics with high multicollinearity (RFC, WMC) are removed from feature-importance analysis via the Variation Inflation Factor (VIF) threshold of 2.5.

These applications allow assessing which aspects of the codebase are most informative for predicting defects, and which provide little added value.

## Interpretation
The analysis reveals strong, consistent trends in how different structural metrics contribute to predicting defects:

### Strong Predictors of Defect-Proneness
- **NOC (Number of Children):**  
  *Most consistently top-ranked.* High inheritance branching correlates with higher defect likelihood.
- **NPA (Number of Public Attributes):**  
  Suggests that high data exposure increases the chance of faulty behavior.
- **DIT (Depth of Inheritance Tree):**  
  Deep hierarchies can increase complexity and error propagation.
- **LCOM5 (Lack of Cohesion):**  
  Poor cohesion typically reflects scattered responsibilities and higher fault risk.

These metrics tend to capture structural complexity and encapsulation quality, which strongly influence defect incidence.

### Weak Predictors
- **CBO (Coupling):**  
  Surprisingly performs the worst in most projects.
- **CD (Comment Density):**  
  Documentation level does not reliably correlate with defects in this dataset.
- **NPM (Number of Public Methods):**  
  Larger APIs appear less predictive of faults than expected.

### Model Behavior
- Decision Tree (DT) and Random Forest (RF) consistently outperform Naive Bayes in both F-measure and AUC-ROC.  
- The combination of CK + OTHER metrics produces the most stable prediction performance.  
- LOC alone is a weak predictor, confirming that structural complexity beyond size is essential for accurate defect prediction.

Overall, the study demonstrates that inheritance-related metrics (NOC, DIT), encapsulation metrics (NPA), and cohesion (LCOM5) carry the highest diagnostic value for identifying defect-prone classes in Java projects.

## References
1. Rebro, D. A., Rossi, B., & Chren, S. (2023). *Source Code Metrics for Software Defects Prediction.*  
   [https://doi.org/10.48550/arXiv.2301.08022](https://doi.org/10.48550/arXiv.2301.08022)

