---
id: verbosity
title: Verbosity
sidebar_label: Verbosity
---

## Definition

**Verbosity** is a metric used in code generation evaluation to measure the "wordiness" or excessive length of a Large Language Model's (LLM) output.

It is treated as a trade-off against functional performance, where high verbosity is a negative characteristic, even if the model's output is functionally correct.

***

## Purpose

The purpose of measuring verbosity is to assess the practical utility and "communication clarity" of an LLM. Models that are overly verbose may provide correct answers but are less efficient for developers, who must read and parse the unnecessarily long output. It highlights a key trade-off: some models may lead in performance but at the cost of being less concise.

***

## Domains

* Software Engineering
* Code Generation
* LLM Evaluation

***


## Key Findings & Trade-offs

* In a comprehensive evaluation of over 80 LLMs, the **OpenAI ol-preview** and **ol-mini** models, along with **Anthropic's Claude 3.5 Sonnet**, were top performers in functional performance.
* However, these same top-performing models "exhibited significantly higher latency and verbosity," demonstrating a clear trade-off between functional correctness and concise communication.

***

## Key References

Bistarelli, S., Fiore, M., Mercanti, I., & Mongiello, M. (2025). Usage of Large Language Model for code generation tasks: A review. SN Computer Science, 6(6), Article 673. https://doi.org/10.1007/s42979-025-04241-5
