---
id: intro
title: Introduction
---

# LLMs Metrics Catalog for Software Engineering 
A comprehensive and structured repository for the systematic analysis of evaluation metrics applied to Large Language Models (LLMs) in Software Engineering.


## Overview

The LLMs Metrics Catalog is a research-oriented repository designed to provide a rigorous, organized, and transparent overview of the evaluation metrics used to assess Large Language Models (LLMs) within the domain of software engineering.  
This catalog consolidates definitions, conceptual explanations, and classification criteria extracted from academic literature, empirical studies, and domain-specific benchmarks.

Its primary objective is to offer a unified reference that enables researchers, practitioners, and students to:

- Understand how LLMs are evaluated in software engineering contexts.  
- Compare evaluation dimensions across studies.  
- Identify gaps, biases, and methodological limitations in current assessment practices.  
- Support reproducible research by clarifying the conceptual foundations of each metric category.


## Purpose of the Project

The purpose of this project is to establish a centralized, structured, and academically grounded catalog that documents how evaluation metrics are conceptualized, grouped, and applied to LLM-based tasks related to software engineering.  
Instead of presenting metrics in isolation, the catalog organizes them into coherent conceptual categories that reflect the nature of the evaluation, such as performance, structural quality, semantic fidelity, reasoning, robustness, human judgment, or system-level properties.

Ultimately, this work seeks to:

- Facilitate metric selection for academic and industrial studies.  
- Promote methodological clarity for future research.  
- Provide a reproducible and extensible framework for analyzing metric usage trends.  
- Enable comparisons between evaluation paradigms used across different SE tasks (code generation, debugging, testing, summarization, etc.).


## Classification Framework

The catalog is structured into distinct folders, each representing a high-level evaluation dimension rather than individual metrics.  
These categories reflect what aspect of model behavior is being evaluated, ensuring conceptual clarity and usability.

A brief overview of each folder’s nature and conceptual scope is as follows:

1. **Core Accuracy & Overlap Metrics**  
   Focuses on direct comparisons between model outputs and reference solutions, emphasizing correctness and matching behavior.

2. **Statistical & Correlation Metrics**  
   Includes metrics that analyze statistical relationships, score consistency, or agreement between model outputs and human or model-based benchmarks.

3. **Code Quality & Structural Metrics**  
   Captures structural, stylistic, or syntactic properties of generated code, emphasizing maintainability, complexity, and structural coherence.

4. **Functional & Test-based Evaluation**  
   Measures behavioral correctness through execution, test-case validation, or functional performance.

5. **Human & Subjective Evaluation**  
   Covers assessments relying on human judgment, including perceived quality, helpfulness, fairness, readability, or relevance.

6. **Generative & Distribution Metrics**  
   Examines alignment between generated outputs and target data distributions, including coverage, diversity, and realism of generative behavior.

7. **Logical Reasoning & Verification**  
   Focuses on model reasoning ability, formal verification, logical consistency, and equivalence under transformations.

8. **Robustness, Security & Reliability**  
   Evaluates stability under perturbations, vulnerability to attacks, security properties, and failure modes.

9. **Efficiency & Resource Usage**  
   Addresses runtime performance, memory consumption, latency, and overall computational efficiency.

10. **Architectural & System-level Metrics**  
   Investigates system-wide characteristics, architectural behavior, and high-level performance across integrated SE workflows.

11. **Creativity, Diversity & Novelty**  
   Encompasses originality, diversity, innovation, and the degree to which outputs differ meaningfully from existing data.

12. **Ranking, Reward & Optimization**  
   Includes preference modeling, evaluation-by-ranking, reinforcement-derived scoring, and optimization-based assessments.

13. **Semantic, Coherence & Hallucination Metrics**  
   Focuses on semantic fidelity, truthfulness, factual grounding, consistency, and the presence or absence of hallucinations.

Each folder contains conceptual explanations, definitions, contextual usage notes, and references to the original sources where the metrics in that category were proposed or applied.


## License

This project and its written content are licensed under the  
**Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International License (CC BY-NC-ND 4.0)**.  
This license allows sharing the material as long as proper credit is given,  
but **does not permit commercial use** nor the creation of **derivative works**.

<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="license">
  <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
</a>

You can view the full license details at:  
[https://creativecommons.org/licenses/by-nc-nd/4.0/](https://creativecommons.org/licenses/by-nc-nd/4.0/)


## How to Cite This Project

Please cite this project if you use it in academic work, research, or documentation.  
A suggested citation structure is provided below; you may adapt it to your preferred citation style (APA, IEEE, MLA, ACM, etc.):

- **Ariza-Jimenez, M. A., Obando-Novoa, J. D., Linares-Vásquez, M** (2025). *Analysis and Classification of Evaluation Metrics for LLMs Applied to Software Engineering*. Universidad de Los Andes. GitHub Repository. Available at: https://github.com/m-arizaj/LLMs-metrics-catalog


## How to Contribute

Contributions to this catalog are welcome.  
For detailed contribution guidelines, please refer to the repository’s README:
- [https://github.com/m-arizaj/LLMs-metrics-catalog/blob/main/README.md](https://github.com/m-arizaj/LLMs-metrics-catalog/blob/main/README.md)


