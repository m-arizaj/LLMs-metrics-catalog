---
id: usefulness-score
title: Usefulness Score
sidebar_label: Usefulness Score
---
import { ReferencesIndex } from '@site/src/components/References';

## Definition

The **Usefulness Score** is a human-centric, subjective evaluation metric designed to assess the quality of generated code snippets based on their helpfulness to a human developer.

It is not an automated metric but rather a rubric for human annotation, where experienced developers grade a generated code snippet on a 0-4 discrete scale. This score is a key metric for measuring human preference alignment.

***

## Formula (GrC:\Users\Daniel\Downloads\VSC\Metricas\12.pdfading Scale)

The metric is defined by the following 5-point scale, as detailed in the `ICE-Score` paper's appendix:

* **Score 0 (Totally Useless):** "Snippet is not at all helpful, it is irrelevant to the problem." 
* **Score 1 (Slightly Helpful):** "Snippet is slightly helpful, it contains information relevant to the problem, but it is easier to write the solution from scratch." 
* **Score 2 (Somewhat Helpful):** "Snippet is somewhat helpful, it requires significant changes (compared to the size of the snippet), but is still useful." 
* **Score 3 (Helpful / Almost Useful):** "Snippet is helpful, but needs to be slightly changed to solve the problem." 
* **Score 4 (Very Helpful):** "Snippet is very helpful, it solves the problem." 

***

## Purpose
The purpose of the Usefulness Score is to capture a human developer's judgment of a code snippet's quality, which is often missed by traditional token-matching metrics like BLEU. It directly measures how well a generated snippet satisfies a user's requirements and how much effort would be saved (or wasted) by using it. It serves as a human-preference ground truth for training and evaluating other automated metrics (like ICE-Score).

***

## Domains

* Software Engineering 
* Code Generation 
* Human Preference Alignment 

***

## Advantages

* **Human-Aligned:** By definition, this metric has a high correlation with human judgment and preference, which token-matching metrics like BLEU lack.
* **Captures Semantics:** It assesses the *semantic logic* and *practical value* of the code, not just its textual similarity to a single reference answer.

***

## Limitations

* **Cost and Scalability:** Relies on manual grading from "experienced software developers", which is expensive, time-consuming, and difficult to scale compared to automated metrics.
* **Subjectivity:** As a human-based score, it can have variability. The paper notes that even the human-written reference code in CoNaLa only achieved an average "Usefulness" score of 3.4 out of 4.

***

## Key References

* Evtikhiev, M., Bogomolov, E., Sokolov, Y., & Bryksin, T. (2023). Out of the BLEU: How should we assess quality of the code generation models? arXiv. https://doi.org/10.48550/arXiv.2208.03133

* Yin, P., Deng, B., Chen, E., Vasilescu, B., & Neubig, G. (2018). Learning to mine aligned code and natural language pairs from stack overflow. En Proceedings of the 15th International Conference on Mining Software Repositories (pp. 476–486). Association for Computing Machinery. https://doi.org/10.1145/3196398.3196408

### Additional References in Dataset 
- <ReferencesIndex ids={['12']} />