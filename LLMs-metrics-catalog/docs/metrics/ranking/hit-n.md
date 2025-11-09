---
id: hit-n
title: Hit-N
sidebar_label: Hit-N
---

## Definition
**Hit-N** (also referred to as Hit-N (multi-defects)) is an evaluation metric used in fault localization. It is specifically "designed for multi-defects".

The metric measures the number of bugs (out of a set of known bugs) for which a fault localization tool's predicted set of suspicious code elements (e.g., the top-ranked statements) successfully "contains at least N faulty statements".

***

## Formula (General Idea)
The source document describes the metric qualitatively rather than with a formal mathematical formula. The calculation is based on counting:

**Hit-N** = The count of bugs (in a multi-bug benchmark) where at least N of the *actual* faulty statements are included in the *predicted* set of suspicious statements.

***

## Purpose
The primary purpose of Hit-N is to evaluate the effectiveness of fault localization techniques in scenarios involving multiple defects. Unlike metrics that might only measure the rank of the *first* fault found (like Mean First Rank - MFR), Hit-N assesses a tool's ability to identify faulty statements across multiple, potentially interacting, bugs within the same project.

***

## Domains
* Fault Localization Evaluation
* LLM Evaluation (as applied to code/debugging tasks)

***

## Benchmarks
This metric is applied to fault localization benchmarks, particularly those that include projects with multiple defects. The survey document  discusses several benchmarks used in this domain, including:
* Defects4J
* BEARS
* SIR
* ManyBugs

***

## Advantages
* **Designed for Multi-Defect Scenarios:** Its main advantage is its specific design for evaluating performance against multiple bugs, which is often a more realistic scenario than the single-bug assumption.
* **Measures Set-Based Success:** It evaluates the *set* of predicted locations rather than just the single highest-ranked location.

***

## Limitations
* **Infrequent Use:** The provided survey paper indicates that this metric is not commonly used (listing only one use case in its reviewed literature).
* **Niche Application:** Its utility is limited to multi-defect fault localization; it is not a general-purpose metric for all software engineering tasks. Most existing fault localization research still assumes only one bug is present.

***

## Key References
* Chen, X., Hu, X., Huang, Y. et al. Deep learning-based software engineering: progress, challenges, and opportunities. Sci. China Inf. Sci. 68, 111102 (2025). https://doi-org.ezproxy.uniandes.edu.co/10.1007/s11432-023-4127-5
* The paper (50.pdf) cites the following work in relation to the Hit-N metric:
    * Li Y, Wang S, Nguyen T N. (2022). Fault localization to detect co-change fixing locations. *In: Proceedings of the 30th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering, New York. 659-671*.
* (Excel Data: Paper 50)