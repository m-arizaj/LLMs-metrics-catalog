---
id: fitness
title: Fitness Function Value
sidebar_label: Fitness Function
---

## Definition

A **Fitness Function Value** is the score assigned to a candidate solution in an Evolutionary Algorithm (EA), such as Genetic Programming (GP) or LLM_GP. It is a "problem-dependent fitness measure"  that quantifies the quality or "Functional Performance" of a solution (e.g., a piece of generated code) [User provided data].

This value is calculated by an **evaluation operator**, which "iteratively test[s] each solution and calculate[s] its fitness". This fitness score is then used by the **selection operator** to choose which solutions will "parent" the next generation.

***

## Formula (General Idea)

The calculation is a two-step process defined within the algorithm's operators:

1.  **Evaluation ($e$):** A solution ($p$) is executed in an environment ($E$) to get an output ($y$).
    * $y = e(p, E)$ 
2.  **Fitness Measure ($\phi$):** The fitness function measures the quality of that output ($y$) to produce the final fitness value ($f$).
    * $f = \phi(y, E)$ 

In traditional GP, this value is numeric. In LLM_GP, the fitness could be "Numeric or expressed with natural language".

***

## Purpose

The purpose of the fitness function is to "assess the quality of the response/output"  from a candidate solution. This score provides the basis for **selection** in the evolutionary process, allowing the algorithm to differentiate between high- and low-performing solutions.

***

## Domains

* Software Engineering / Code Evolution
* Genetic Programming (GP)
* Program Synthesis 
* Automatic Programming

***

## Benchmarks

* **LLM_GP (Symbolic Regression)** 
* General GP benchmarks for Automatic Programming

***

## Advantages

* **Core to Evolution:** It is the fundamental mechanism that drives selection and guides the algorithm toward a better solution.
* **Central Comparison Point:** In traditional GP, fitness evaluations are the "cost-dominating operator," making them a clear basis for comparing algorithm efficiency.
* **Flexible in LLM_GP:** The concept of fitness in an LLM-based system can be expanded beyond a single numeric score to include quality assessments expressed in natural language.

***

## Limitations

* **LLM In-Capability:** Using an LLM to *calculate* the fitness value (i.e., an `phi_LLM` operator) is often not practical for problems requiring computation, as "LLM are notorious for not being able to compute mathematically".
* **Standard Implementation:** In many practical `LLM_GP` variants, the fitness measure is one of the few operators that does *not* use an LLM; instead, the code is executed externally and a traditional fitness score is calculated.

***

## Key References

* Hemberg, E., Moskal, S. & O’Reilly, UM. Evolving code with a large language model. Genet Program Evolvable Mach 25, 21 (2024) [https://doi.org/10.1007/s10710-024-09494-2](https://doi.org/10.1007/s10710-024-09494-2)
* (Excel Data: Paper 30)