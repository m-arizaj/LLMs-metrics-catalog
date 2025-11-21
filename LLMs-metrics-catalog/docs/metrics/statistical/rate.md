---
id: rate
title: Rate Metrics
sidebar_label: Rate Metrics
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Rate-based metrics capture how frequently a model achieves success, correctness, or completion relative to the total number of attempts or evaluations. They provide a clear, interpretable measure of task-level performance across diverse evaluation contexts in software engineering, including functional correctness, vulnerability detection, compilation, and efficiency.

In LLM and software engineering evaluation, these metrics serve as general-purpose indicators of both accuracy and reliability in generated artifacts or agentic workflows. Because rates are normalized (ranging from 0 to 1, or 0–100%), they allow direct comparisons across tasks, datasets, and experimental setups.


## Formula and General Definition

The general formulation for a rate metric is:

$$
\text{Rate} = \frac{N_{\text{successful outcomes}}}{N_{\text{total outcomes}}}
$$

where:
- $N_{\text{successful outcomes}}$ is the count of outputs meeting a given criterion (e.g., passing all tests, producing valid code, completing a task).
- $N_{\text{total outcomes}}$ is the total number of evaluated outputs or attempts.

This formulation underlies a family of specialized metrics, each adapting the definition of “success” to its specific evaluation dimension.


## Main Variants and Interpretations

### 1. Success Rate 
Measures the proportion of model outputs that meet functional or syntactic correctness criteria.  
It is one of the most universal metrics in both LLM and software-engineering contexts.

$$
\text{Success Rate} = \frac{N_{\text{passed tasks}}}{N_{\text{total tasks}}}
$$

- *Interpretation:* Reflects general correctness and execution reliability.  
- *Usage:* Common in code generation, autonomous agents, and benchmark evaluations to assess whether outputs compile or execute successfully.  
- *Example:* Measuring how many generated Python solutions pass all unit tests.
- *Used in:* <ReferencesIndex ids={['42','49']} />


### 2. Acceptance Rate
Quantifies the proportion of generated outputs that are *accepted* by a downstream validator, reviewer, or automated test pipeline.

$$
\text{Acceptance Rate} = \frac{N_{\text{accepted outputs}}}{N_{\text{submitted outputs}}}
$$

- *Interpretation:* Serves as a proxy for productivity and quality of code suggestions or patches.  
- *Application:* Often used in software generation systems or IDE-based evaluations where human or system approval defines success.
- *Used in:* <ReferencesIndex ids={['19']} />

### 3. Insecure Code Detection Rate
Evaluates how effectively a system identifies insecure or vulnerable code snippets.

$$
\text{Detection Rate} = \frac{N_{\text{correctly detected insecure samples}}}{N_{\text{total insecure samples}}}
$$

- *Interpretation:* Analogous to recall for the “insecure” class; high values indicate strong detection coverage.  
- *Relevance:* Fundamental for LLMs designed for *security evaluation, static analysis, and **vulnerability repair* tasks.
- *Used in:* <ReferencesIndex ids={['18']} />


### 4. Parsing Success Rate
Determines the proportion of generated code files that compile or parse successfully.

$$
\text{Parsing Success Rate} = \frac{N_{\text{syntactically valid files}}}{N_{\text{generated files}}}
$$

- *Interpretation:* A structural correctness measure capturing syntactic validity independently of semantic correctness.  
- *Used For:* Assessing model robustness to syntax generation errors, especially in large code completion or generation tasks (<ReferencesIndex ids={['33']} />).


### 5. Speedup Rate
Measures performance improvement in execution time or resource usage relative to a baseline model or method.

$$
\text{Speedup Rate} = \frac{T_{\text{baseline}}}{T_{\text{method}}}
$$

Alternatively expressed as percentage improvement:

$$
\text{Improvement Rate} = \frac{T_{\text{baseline}} - T_{\text{method}}}{T_{\text{baseline}}}
$$

- *Interpretation:* Quantifies runtime efficiency gains; higher values indicate faster or more efficient computation.  
- *Context:* Useful in evaluating optimization algorithms, code compilation efficiency, or hardware-specific performance.
- *Used in:* <ReferencesIndex ids={['38']} />

### 6. Synthesis Success Rate
Applies primarily to hardware or compiled code generation tasks, measuring how often generated artifacts successfully synthesize or compile.

$$
\text{Synthesis Success Rate} = \frac{N_{\text{synthesized and valid outputs}}}{N_{\text{attempted outputs}}}
$$

- *Interpretation:* Combines both functional and hardware correctness; crucial for evaluating domain-specific synthesis tasks 
(e.g., VerilogEval).  
- *Significance:* Ensures generated solutions are not only syntactically correct but executable and operational.
- *Used in:* <ReferencesIndex ids={['10']} />


### 7. Win Rate
Quantifies how often an agent or model outperforms a baseline or achieves a successful outcome in interactive or competitive tasks.

$$
\text{Win Rate} = \frac{N_{\text{wins}}}{N_{\text{total interactions}}}
$$

- *Interpretation:* Used in multi-agent and tool-use settings to measure task completion, decision accuracy, or reward-based performance.  
- *Context:* Commonly applied in tool-learning and autonomous LLM agent evaluations where success is goal-oriented (e.g., task solved vs. failed).
- *Used in:* <ReferencesIndex ids={['48']} />


## Broader Interpretation

Rate metrics are among the most interpretable and transferable across domains because they quantify event frequency, not magnitude or ranking.  
They form the foundation of *task-level functional evaluation*, allowing researchers to express performance as simple ratios of success versus failure.

However:
- They do not capture the degree of partial correctness (only binary outcomes).  
- High rates may obscure subtle quality differences among correct outputs.  
- Complementary metrics like F1, Precision, or Execution Time can add nuance in such cases.


## References in Database
- <ReferencesIndex ids={['10','18','19','33','38','42','48','49']} />