---
id: faithfulness
title: Faithfulness (Design Fidelity)
sidebar_label: Faithfulness
---

## Definition

**Faithfulness** is an evaluation metric used within the **DevEval** benchmark to measure "Design Fidelity" [User provided data]. It is not a single score but a principle of evaluation, specifically assessing the extent to which a Large Language Model (LLM) adheres to specified instructions when generating software design artifacts.

The core idea is to measure how accurately and strictly the model's output (e.g., UML diagrams, architecture design) aligns with the given **Product Requirement Document (PRD)**, ensuring all functionalities are met "without making any hallucinations and additions".

This metric is typically assessed using an "LLM-as-a-judge" approach.

***

## How It Is Evaluated

Faithfulness is evaluated differently across the sub-tasks of software design:

* **For UML Class Diagrams:** The metric evaluates if the generated conceptual classes, their relationships (inheritance, aggregation, composition), cardinalities, and class names "accurately represent the essentials outlined in the PRD".
* **For UML Sequence Diagrams:** The evaluation checks how "accurately and comprehensively" the diagram reflects the system's intended behavior as specified in the PRD. This includes capturing system events (with and without parameters) and ensuring the design is coherent with the class diagrams.
* **For Architecture Design:** The metric verifies that the file tree structure is in "strict accordance with the given PRD and UML class diagrams," ensuring a consistent development process.

***

## Purpose

The purpose of the Faithfulness metric is to quantify a model's ability to **strictly follow detailed, document-level requirements** and translate them into accurate, corresponding design artifacts. This measures a critical component of design fidelity beyond just generating plausible-sounding designs.

***

## Domains

* Software Engineering
* Software Design
* General LLM Evaluation

***

## Benchmarks

* **DevEval** (specifically the "Software Design" task)

***

## Advantages

* Measures a crucial real-world software engineering skill: adherence to specifications.
* Directly targets and penalizes model "hallucinations" or unrequested feature additions.
* Moves evaluation beyond simple code generation to the critical upstream phase of design planning.

***

## Limitations

* The metric relies on an **"LLM-as-a-judge"** for evaluation, which may introduce its own biases or inconsistencies.
* It is a subjective assessment of alignment rather than a quantitative, replicable numerical score.

***

## Key References

* Li, B., Wu, W., Tang, Z., et al. (2024). *Prompting Large Language Models to Tackle the Full Software Development Lifecycle: A Case Study*. [https://doi.org/10.48550/arXiv.2403.08604](https://doi.org/10.48550/arXiv.2403.08604)

* (Excel Data: Paper 13)
