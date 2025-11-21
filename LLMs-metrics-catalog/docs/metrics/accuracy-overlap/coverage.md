---
id: coverage
title: Coverage
sidebar_label: Coverage
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Coverage is a metric used to evaluate how thoroughly a system, model, or set of test cases explores a given space—most commonly code, input conditions, or tasks. In software engineering, code coverage quantifies the proportion of code elements (statements, branches, or functions) executed by test cases. High coverage indicates better validation and testing completeness, while low coverage reveals untested or unreachable code.
Recent work (Tufano et al., 2023) extends this concept to predict coverage without executing code, proposing machine learning approaches that estimate coverage based on static or semantic representations.  
This evolution makes coverage relevant not only for software testing, but also for LLM-based code generation and evaluation of AI systems that produce executable artifacts.

## Formula
Coverage is typically computed as a ratio:

$$
Coverage = \frac{\text{Number of elements covered}}{\text{Total number of elements}} \times 100
$$

Where “elements” can refer to lines, statements, branches, methods, or any unit of analysis depending on the coverage type.  
Coverage values range from 0 % (no coverage) to 100 % (full coverage).

## Variants
Coverage has several important variants depending on what is measured:

- *Code Coverage:* Fraction of source code executed during testing or generation. [20]  
- *Branch Coverage:* Proportion of decision branches (e.g., if conditions) executed. [64]  
- *Statement Coverage:* Portion of executable statements covered by tests. [64]  
- *Coverage@n:* Percentage of top-n generated solutions or test cases that achieve successful coverage. [10] 
- *Information Coverage Utilization:* Measures how efficiently contextual or memory resources (e.g., long-context models) are used to cover input information. [54]

## Applications in Software Engineering
Coverage is widely used across SE evaluation benchmarks to measure how effectively systems exercise or validate code and functionality.The metric appears in multiple research contexts, such as:

- *Test Quality and Effectiveness* — DevEval and TESTPILOT frameworks use coverage and branch coverage to estimate test adequacy and generation quality.  [64]
- *LLM-based Code Generation* — Datasets like HumanEval and CoderUJB use coverage, coverage@n, and code coverage to measure the structural correctness of generated solutions. [10,20]
- *Autonomous Agent Evaluation* — Benchmarks such as AgentBench apply coverage as a measure of task completion success in multi-step reasoning environments. [49]
- *Generative and Multimodal Systems* — AMBER assesses object coverage for hallucination detection and generative completeness.[8]  
- *Long-Context Utilization* — LoCoBench introduces information coverage utilization, quantifying how effectively long context windows are used to access relevant content. [54]

These examples show that coverage has evolved from a testing metric into a cross-domain evaluation criterion applicable to both traditional SE pipelines and modern LLM-driven generation tasks.

## Interpretation
Coverage serves as a proxy for thoroughness and reliability:
- High coverage implies that the system, code generator, or test suite has explored a large portion of the search or execution space.  
- However, high coverage does not necessarily guarantee correctness, as uncovered paths may still contain critical bugs or unverified functionality.  
- In LLM-based SE evaluation, coverage helps estimate functional completeness, how much of the expected or reference behavior is actually represented in the generated output.  
- Coverage diversity and information utilization provide additional insight into robustness and generalization by revealing whether models rely on narrow or broad exploration.
In short, coverage reflects how well a system “sees” its problem space, bridging quality assurance in traditional testing with behavioral analysis of generative AI models.

## References
1. *Tufano, M., Chandel, S., Agarwal, A., Sundaresan, N., & Clement, C. (2023).* Predicting Code Coverage without Execution.  
  [https://doi.org/10.48550/arXiv.2307.13383](https://doi.org/10.48550/arXiv.2307.13383)

### Additional References in Dataset 
- <ReferencesIndex ids={['8','10','13','20','49','54','59','64','67']} />

