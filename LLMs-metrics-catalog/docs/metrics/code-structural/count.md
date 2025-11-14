---
id: count
title: Count Metrics
sidebar_label: Count Metrics
---

## Introduction
Count-based metrics evaluate Large Language Models (LLMs) in software engineering by measuring *quantities* of outputs rather than their semantic quality. These metrics focus on *how many* of a model’s generated artifacts meet specific criteria or *how large* the generated artifacts are.

Two commonly used count-oriented metrics appear in recent LLM evaluation literature:

1. *Count@n* (Paper 10): How many of the $n$ generated samples satisfy a correctness or execution-based condition.  
2. *Token Count* (Paper 30): The total number of tokens an LLM generates for a code artifact, often used in evolutionary or iterative generation systems.

Together, these metrics help capture performance in stochastic generation settings and provide insight into verbosity, efficiency, and structural characteristics of generated code.


## Formula

### Count@n
Count@n measures how many out of $n$ samples produced by the model pass a correctness criterion, such as execution tests.

Let the model generate $n$ samples for task instance $i$. Define:

$$
c_i^{(j)} =
\begin{cases}
1 & \text{if sample } j \text{ is correct} \\
0 & \text{otherwise}
\end{cases}
$$

Then the Count@n value for instance $i$ is:

$$
\text{Count@n}(i) = \sum_{j=1}^{n} c_i^{(j)}
$$

Aggregated across $N$ instances:

$$
\text{Count@n} = \frac{1}{N} \sum_{i=1}^{N} \sum_{j=1}^{n} c_i^{(j)}
$$

This expresses how often the model produces at least some correct attempts within multiple samples — crucial for evaluating nondeterministic LLMs.


### Token Count
Token Count measures the *length* of the generated output.  
For a generated artifact $y$:

$$
\text{TokenCount}(y) = \text{number of tokens in } y
$$

In iterative or evolutionary systems (as in Paper 30), Token Count can help:

- constrain the search space  
- penalize overly verbose solutions  
- select minimal or efficient variants  

A dataset-level average is:

$$
\text{Average Token Count} = \frac{1}{N} \sum_{i=1}^{N} \text{TokenCount}(y_i)
$$


## Variants

### Count@n Variants
Count@n belongs to the family of *execution-based count metrics*, which includes:

- *Pass@k* — probability that at least one of $k$ samples passes tests  
- *n@k* — number of correct solutions among $k$  
- *Multiple-sample execution metrics*

In Paper 10, Count@n is listed alongside these standard metrics, showing it belongs to a well-established toolkit.

Count@n is often used with:
- sampling strategies (temperature, top-$k$, nucleus sampling)
- multi-attempt generation
- stochastic performance analysis  
- correctness distribution assessments  


### Token Count Variants
Common variations include:

- *Input Token Count*  
- *Output Token Count*  
- *Total Token Usage*  
- *Token Count per generation step* (evolutionary workflows)

Paper 30 uses Token Count specifically in *code evolution*, where shorter solutions may improve:

- readability  
- execution simplicity  
- evolutionary fitness  

Token Count is also relevant to real-world cost, as token-based pricing directly ties resource usage to token length.


## Applications in Software Engineering

### Count@n
Used in:
- code generation tasks with multiple samples  
- multimodal or multi-solution benchmarks (e.g., HumanEval)  
- debugging assistants with iterative sampling  
- regression calls or multi-candidate synthesis  

Count@n highlights how often an LLM can produce some correct solution given multiple attempts, supporting scenarios like:

- test-driven development  
- interactive code refinement  
- synthesis workflows with sampling loops  


### Token Count
Used in:
- evolutionary code generation (Paper 30)  
- verbosity and efficiency analysis  
- detecting model drift (abnormally long generations)  
- token-cost estimation in practical deployments  

In SE contexts, Token Count often correlates with:

- maintainability  
- structural complexity  
- readability  
- suitability for evolutionary selection schemes  


## Interpretation

### High Count@n
Indicates:
- reliable production of correct samples  
- effective use of multiple attempts  
- robustness across random seeds and sampling strategies  

Limitations:
- does not describe quality of correct outputs  
- high Count@n may require excessive sampling  


### Low Count@n
Indicates:
- low probability of correctness even with multiple attempts  
- high variance or systematic misinterpretation of the task  


### High Token Count
Indicates:
- verbose or bloated code  
- potentially unnecessary complexity  
- higher inference cost  
- maintainability burden  

But may sometimes reflect:
- detailed comments  
- boilerplate required by the task  

### Low Token Count
Indicates:
- concise, readable code  
- efficient or minimal implementations  
- lower inference cost  

But may also imply:
- missing logic or incomplete implementations  

## References

1. *Paper 10:*  
   Li, et al. (2024). A Survey on Evaluating Large Language Models in Code Generation Tasks.  
   Count@n discussed as an execution-based evaluation metric (p. 4).  
   https://doi.org/10.48550/arXiv.2408.16498

2. *Paper 30:*  
   Evolving Code with a Large Language Model.  
   Token Count used in analyzing code evolution characteristics (p. 9).  
   https://doi.org/10.1007/s10710-024-09494-2