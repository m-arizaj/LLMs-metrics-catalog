---
id: edit-distance
title: Edit Distance
sidebar_label: Edit Distance
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Edit Distance (also known as Levenshtein Distance) is a string-based similarity metric that measures how many basic operations are required to transform one sequence into another. These operations typically include insertions, deletions, and substitutions of characters or tokens.  
In Software Engineering contexts, this metric has evolved to capture structural and syntactic differences between code fragments, enabling its use in tasks like code similarity evaluation, bug repair, and program synthesis. The foundational concept was later expanded to Abstract Syntax Tree Edit Distance (AST-ED), which better models code transformations at the structural level rather than pure token sequences. This adaptation is described in detail in Song et al. (2024), showing its high correlation with human judgment in code similarity assessments.

## Formula
For two strings (or token sequences) $a$ and $b$ with lengths $|a|$ and $|b|$, the Levenshtein Distance $D(i, j)$ is defined recursively as:

$$
D(i, j) =
\begin{cases}
0 & \text{if } i = 0 \text{ and } j = 0 \\
i & \text{if } j = 0 \\
j & \text{if } i = 0 \\
\min
\begin{cases}
D(i-1, j) + 1 \\
D(i, j-1) + 1 \\
D(i-1, j-1) + [a_i \neq b_j]
\end{cases}
\end{cases}
$$

Where:
- $D(i, j)$ represents the minimal number of operations to convert the first $i$ tokens of $a$ into the first $j$ tokens of $b$.
- $[a_i \neq b_j]$ equals 0 if the tokens are identical and 1 otherwise.

To normalize the score for similarity, it is often converted into a similarity ratio:

$$
Similarity = 1 - \frac{D(a,b)}{\max(|a|, |b|)}
$$

This makes it easier to compare across code samples of different lengths.

## Variants and Adaptations

| Variant | Description | Context of Use |
|----------|--------------|----------------|
| Levenshtein Distance | Measures token-level edit operations (insert, delete, substitute). | CodeXGLUE, Code Optimization / Education |
| AST Edit Distance (AST-ED) | Computes structural transformations between Abstract Syntax Trees to assess syntactic accuracy. | CodeXGLUE, AlignJudge, General SE Evaluation |
| Normalized Edit Distance | Converts raw edit distance into a similarity score between 0 and 1. | Used for comparing outputs of different code generation systems. |
| Diversity (Levenshtein Distance) | Measures the average pairwise edit distance between multiple generated outputs to assess output variety. | FuzzBench |

These adaptations improve the metric’s ability to assess syntactic correctness, structural similarity, and functional proximity in generated code.

## AST-based Extensions

A major structural adaptation of Edit Distance for code evaluation is the Abstract Syntax Tree Edit Distance (AST-ED), which operates not at the token level but on syntactic structures represented as trees.  
Instead of comparing raw text or sequences of tokens, AST-ED analyzes tree transformations required to convert one program’s structure into another, making it better suited for measuring semantic and structural correctness in code.

Formally, if two programs are represented as trees $T_1$ and $T_2$, the AST Edit Distance is defined as:

$$
AST\text{-}ED(T_1, T_2) = \min_{\text{operations}} \sum_{k} cost(op_k)
$$

where each $op_k$ represents an edit operation (insert, delete, rename, or move) applied to nodes in the syntax tree.  
The cost function may assign different weights depending on the operation type, reflecting its syntactic or semantic significance.

This approach captures both syntactic accuracy (structural alignment of code elements) and semantic similarity (functional equivalence at the statement or block level).  
Because of this, AST-ED correlates strongly with human judgment when evaluating the similarity between code snippets that differ only in surface syntax but preserve functional behavior (Song et al., 2024).

### Subtree and Structural Variants

1. *AST Sub-tree Matching*  
   Compares substructures within the AST to assess partial alignment between code fragments, useful in evaluating output quality or localized code transformations.  

2. *AST-based Metrics (General)*  
   Combine node-level and sub-tree comparisons to compute a weighted similarity score between program structures.  
   Used to evaluate structural and semantic accuracy in code generation and translation benchmarks.

### Relevance in Software Engineering

AST-based adaptations of Edit Distance have proven effective for:
- Code Similarity Evaluation – identifying functionally similar code with different syntax or style.  
- Program Repair Assessment – quantifying the minimal syntactic change needed to fix a bug.  
- Refactoring and Migration Tasks – evaluating how structurally close transformed code is to the intended target.  
- Model Evaluation – measuring structure-preserving accuracy in LLM-generated code beyond textual overlap.

These methods provide finer granularity in understanding how LLMs and program synthesis models modify code, ensuring that structural transformations align with intended semantics.

## Diversity (Levenshtein Distance)
A specialized variant that quantifies how diverse model outputs are in generation tasks.  
It is defined as the mean pairwise Levenshtein Distance among all generated samples:

$$
Diversity = \frac{1}{N(N-1)} \sum_{i \neq j} \text{EditDistance}(output_i, output_j)
$$

This formulation reflects the Seed Quality or Output Variety, as applied in FuzzBench (2024) for fuzzing and LLM evaluation contexts.  
A higher diversity score indicates a broader exploration of the solution space.

## Interpretation
In software engineering, Edit Distance quantifies how much modification is required for a generated code snippet to match a reference implementation. A lower distance (or higher similarity) indicates that the generated code closely aligns with the reference in both syntax and structure.

However, Edit Distance has known limitations:
- It does not account for semantic equivalence, meaning two functionally identical programs might still differ syntactically.
- It is sensitive to code formatting or variable naming differences unless structural variants like AST-ED are used.

Despite this, Edit Distance remains a foundational metric for tasks such as code repair evaluation, plagiarism detection, and LLM-generated code assessment.

### Diversity (Levenshtein Distance) as a Complementary Perspective
A modern extension of this idea is Diversity (Levenshtein Distance), which shifts focus from code-to-reference similarity to code-to-code variety.  
Instead of comparing a single model output against a ground truth, this variant measures the average pairwise edit distance among multiple generated outputs:
- High diversity implies the model explores a wide range of syntactic and structural possibilities, producing varied code solutions from different seeds or prompts.  
- Low diversity indicates repetitiveness or mode collapse, where outputs converge on nearly identical solutions.

This metric is particularly relevant in fuzzing, security, and generative evaluation scenarios, where ensuring seed quality and coverage of unique execution paths is critical.

In practice, Edit Distance and Diversity are often used together:
- Edit Distance → measures closeness to a reference (accuracy, precision).  
- Diversity → measures spread among generated outputs (creativity, exploration).

Together, they provide a more holistic view of code generation quality—balancing correctness and variety within LLM-based or automated programming systems.

## References

- Song, L., Wang, X., Liu, Y., & Li, G. (2024). Revisiting Code Similarity Evaluation with Abstract Syntax Tree Edit Distance.  
 [https://doi.org/10.48550/arXiv.2404.08817](https://doi.org/10.48550/arXiv.2404.08817)

- Montahaei, E., Alihosseini, D., & Soleymani Baghshah, M. (2019). Jointly Measuring Diversity and Quality in Text Generation Models.  
 [https://doi.org/10.48550/arXiv.1904.03971](https://doi.org/10.48550/arXiv.1904.03971)  

- Tevet, G., & Berant, J. (2020). Evaluating the Evaluation of Diversity in Natural Language Generation.  
 [https://doi.org/10.48550/arXiv.2004.02990](https://doi.org/10.48550/arXiv.2004.02990)  

- Pinzger, M., et al. (2006). Matching Source Code Using Abstract Syntax Trees in Version History.  
 [https://pinzger.github.io/papers/Sager2006-treesimilarity.pdf](https://pinzger.github.io/papers/Sager2006-treesimilarity.pdf)

### Additional References in Dataset
- <ReferencesIndex ids={['3','6','7','10','19','26','48','51','58','59']} />