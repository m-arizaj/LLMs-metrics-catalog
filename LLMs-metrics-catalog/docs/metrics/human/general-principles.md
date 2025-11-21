---
id: general-principles
title: General Principles
sidebar_label: General Principles
---

## Introduction
The General Principles metric in DevEval evaluates the overall quality of software design artifacts produced by LLMs. Rather than assessing correctness with respect to a specification (handled separately by the Faithfulness metric), General Principles focuses on the internal design quality of UML diagrams and architecture designs. The metric aims to capture desirable software engineering characteristics such as cohesion, decoupling, uniformity, integration, practicability, interaction complexity, and alignment with widely accepted design conventions.

General Principles is applied across all design subtasks—UML Class Diagrams, UML Sequence Diagrams, and Architecture Design— with core criteria shared across them and additional subtask-specific expectations. According to the paper, “The general principles metric plays a crucial role, with each task sharing common elements while maintaining specific criteria.” (DevEval, p. 3).

## Formula
DevEval does not define a mathematical formula for the General Principles metric.  
It is a qualitative, LLM-as-a-judge evaluation that relies on rubric-style criteria.

Each principle is assessed by a judge LLM based on the rubric text provided in Appendix B of the paper.

## Variants
While there are no named “variants", the metric adapts its criteria depending on the design subtask:

### 1. UML Class Diagrams
Criteria include:
- *Cohesion and Decoupling*  
  “The design should aim for high cohesion within individual classes and low coupling between different classes.”  
  (Appendix B, UML Class Guidance)

- *Complexity*  
  “Utilize metrics such as the total number of classes, the average number of methods per class, and the depth of the inheritance tree to evaluate complexity.”

- *Practicability*  
  “A practical design should be readable and understandable… Modularity should be evident.”

### 2. UML Sequence Diagrams
Criteria include:
- *Uniformity and Integration*  
  “The design should demonstrate a consistent style and integrated approach.”

- *Cohesion and Decoupling* (applied to sequences)

- *Interaction Complexity*  
  “Focusing on the number of messages, depth of nested calls, and the number of participating objects.”

- *Practicability* (readability, understandability, clarity in interactions)

### 3. Architecture Design
Criteria include:
- *Uniformity and Integration*  
  “Ensuring all components work seamlessly together, ensuring high cohesion and decoupling.”

- *Distinction Between Design and Coding*  
  “Recognize that the design process is distinct from coding.”

- *Practicability*  
  “Assessing its organization, readability and modularity, and efficiency.”

- *Conformance*  
  “Evaluate the architecture for its conformance to community and industry standards.”

These subtasks function like contextualized variants of the General Principles metric.

## Applications in Software Engineering
General Principles maps directly onto classical software engineering design quality attributes, making it an effective metric for evaluating whether LLMs can produce design artifacts that would be acceptable in real software projects.

Examples include:

- *Cohesion*: a well-established design principle indicating that elements of a module belong together.
- *Decoupling*: reducing unnecessary dependencies, improving maintainability, modularity, and testing.
- *Practicability*: mirrors human judgments of usability and clarity.
- *Uniformity* and *integration*: ensure that the design is systematic rather than piecemeal.
- *Interaction complexity*: important in distributed and concurrent system design.
- *Conformance to standards*: ensures designs respect established coding conventions and structures.

Because LLM outputs often suffer from structural inconsistencies and misunderstandings of software architecture, this metric is essential for assessing whether models can generate designs that real developers could meaningfully implement.

## Interpretation
A high General Principles score indicates:

- High cohesion and low coupling across classes or interactions
- Readable, modular, and maintainable design structures
- Consistent and uniform diagram style
- Appropriate complexity for the system being designed
- Clear and logically organized architecture
- Adherence to community standards (especially in file trees and naming)

A low score suggests:

- Disorganized structure
- Overly complex or overly simplistic diagrams
- Excessive coupling
- Poor readability or unclear organization
- Inconsistent or non-standard architecture layouts
- Misalignment between different parts of the design

Empirically, the DevEval results show strong variability between models. For example, GPT-4-Turbo achieves a *97.9% win rate* in General Principles against GPT-3.5-Turbo, whereas smaller models such as CodeLlama-7B score as low as *4.2%* (DevEval Table 7). This underscores that design quality is a high-difficulty domain requiring strong reasoning and structural understanding.

## References
Chen, K., et al. (2024). Prompting large language models to tackle the full software development lifecycle: A case study. 
[https://doi.org/10.48550/arXiv.2403.08604](https://doi.org/10.48550/arXiv.2403.08604) 