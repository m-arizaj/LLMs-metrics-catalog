---
id: test
title: Test Metrics
sidebar_label: Test Metrics
---

## Introduction
Test Metrics are used to evaluate the validity, reliability, and effectiveness of testing procedures applied to both software systems and AI-generated code. They quantify how accurately test cases assess functional correctness, regression prevention, and overall evaluation efficiency. In LLM-based software engineering benchmarks such as DevEval, SWE-bench, HumanEval+, and TESTPILOT, these metrics provide structured measures of testing rigor and consistency.


## Main Variants and Definitions

### 1. Oracle Test
Measures how well the model-generated or benchmark-defined oracle (expected output) validates code correctness during execution.  
Used in DevEval and SWE-bench to assess test validity and execution accuracy by verifying that outputs match the ground-truth behavior.

### 2. Average Test Cases
Represents the mean number of test cases generated or executed per evaluation instance. Used to quantify evaluation rigor and ensure coverage across varied problem types.

### 3. Differential Testing Result
Compares the behavior of multiple code versions or model outputs under the same input conditions to detect discrepancies.  
Applied in HumanEval+ to validate functional correctness through comparative testing.

### 4. Fail-to-Pass / Pass-to-Pass Tests
Derived from SWE-bench, these indicators track whether a previously failing test now passes (fail-to-pass) or remains stable after fixes (pass-to-pass). They measure functional progress and regression prevention.

### 5. Pass-all-tests (%)
Reports the percentage of generated programs that pass all unit tests. A standard measure of functional correctness and code reliability.

### 6. Pass@Acceptance / Pass@Unit Test
Variants used in DevEval, indicating the proportion of models or systems that meet acceptance or unit-level test criteria.  
Evaluates completeness and requirement satisfaction.

### 7. Percentage of Passing Tests
Used in TESTPILOT to assess reliability by computing the ratio of passed to total tests. Focuses on robustness across generated test cases.

### 8. Quality of Generated Test Cases
Quantifies how effectively the generated tests detect faults or validate functionality. Adopted in open-source test generation benchmarks for test case quality evaluation.

### 9. Test Score (based on assertions)
Computes the correctness rate of test assertions satisfied during execution. Used in MBPP to evaluate correctness without requiring full program success.

### 10. Test-Suite Reduction Ratio
Measures how efficiently a reduced subset of tests maintains coverage and evaluation accuracy. Applied in HumanEval+ to balance evaluation efficiency and testing completeness.

## Interpretation
In software engineering and LLM-based code evaluation, Test Metrics bridge the gap between code generation performance and verification quality. They ensure that models are not only generating syntactically valid code but also functionally correct and testable solutions. These metrics are integral to modern evaluation frameworks, emphasizing execution-based validation, test coverage, and regression stability.

## References in Database
13, 14, 18, 19, 20, 39, 62, 64
