---
id: coherence
title: Coherence
sidebar_label: Coherence
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction
Coherence measures the internal consistency and logical organization of model outputs. In natural language processing, it evaluates how smoothly sentences or ideas connect to form a unified text. In software engineering, coherence captures the consistency of architectural principles and dependencies across complex systems.  
The Architectural Coherence Score (ACS), introduced in LoCoBench (Qiu et al., 2025), extends this concept to large-scale code reasoning and design evaluation, assessing how well a model preserves architectural integrity throughout long-context scenarios.

## Formula and Estimation
Coherence does not have a single analytical formula, but several frameworks approximate it through statistical or embedding-based similarity between adjacent or related units.

### Linguistic Coherence
Embedding-based methods compute pairwise similarity between sentence or paragraph representations:
$$
Coherence = \frac{1}{N-1} \sum_{i=1}^{N-1} \cos(E_i, E_{i+1})
$$
where $E_i$ represents the embedding vector of the $i$-th sentence.  
Higher cosine similarity indicates smoother semantic transitions.

Discourse-aware models (e.g., DiscoScore) enhance this by incorporating discourse relations and entity tracking, improving alignment with human perception of coherence.

### Architectural Coherence Score (ACS)
In software engineering evaluation, the *Architectural Coherence Score (ACS)* quantifies how consistently a codebase adheres to established architectural principles and patterns over large contexts.

Formally, given a code system $C$ and a set of architectural patterns $P$, the ACS is defined as:

$$
ACS(C) = \frac{1}{|P|} \sum_{p \in P} \frac{w(p) \cdot \alpha(p, C)}{\kappa(p) + \epsilon}
$$

where:
- $C$ is the evaluated code or system,
- $P = \{p_1, p_2, \dots, p_m\}$ denotes the set of recognized architectural patterns,
- $w(p) \in [0,1]$ is the *criticality weight* of pattern $p$, reflecting its relative impact on system stability,
- $\alpha(p, C) \in [0,1]$ measures the *adherence* of $C$ to the architectural pattern $p$, considering design principles such as SOLID or dependency constraints,
- $\kappa(p) \geq 1$ represents the *structural complexity* of the pattern,
- $\epsilon > 0$ is a regularization constant to prevent division by zero.

A higher ACS value implies a system that preserves structural cohesion, dependency correctness, and alignment with the intended architecture — even under long-context reasoning or large-scale code generation.

This metric complements others in LoCoBench:
- *Cross-File Reasoning Depth (CFRD):* focuses on multi-file dependency resolution.
- *Dependency Traversal Accuracy (DTA):* measures correctness in navigating dependency graphs.  
ACS, instead, captures *global architectural consistency, serving as a top-level indicator of *Software Engineering Excellence and contributing 40% of the overall LoCoBench Score (LCBS).

## Variants and Contexts of Use
- *Textual Coherence:* Evaluates the fluency and logical progression of text (General LLM Evaluation).  
- *Architectural Coherence Score (ACS):* Measures structural and design consistency in code systems (LoCoBench, 2025).  
- *Entity-based Coherence:* Tracks consistent references and naming across outputs (linguistic or code-based).

## Interpretation
High coherence indicates that a model maintains consistent logic and structure across its outputs:
- In linguistic settings, it means that the text flows logically with minimal abrupt shifts or contradictions.  
- In software engineering, it implies that the generated or reasoned code maintains consistent architecture, modularity, and dependency relations.

Low coherence reflects fragmented reasoning or violations of design integrity — for example, missing dependencies, cyclic module references, or inconsistent abstractions.

## References
1. *Qiu, Z., Zhang, Y., Lin, X., Liu, Z., & Sun, M. (2025).* LoCoBench: Evaluating Long-Context Capabilities of Large Language Models in Software Engineering. (<ReferencesIndex ids={['54']} />)
   [https://arxiv.org/abs/2509.09614](https://arxiv.org/abs/2509.09614)

2. *Zhao, W., et al. (2022).* DiscoScore: Evaluating Text Generation with BERT and Discourse Coherence.  
   [https://arxiv.org/abs/2201.11176](https://arxiv.org/abs/2201.11176)

3. *Sheng, W., et al. (2023).* BBScore: A Brownian Bridge Based Metric for Assessing Text Coherence.  
   [https://arxiv.org/abs/2312.16893](https://arxiv.org/abs/2312.16893)

### Additional References in Database
- <ReferencesIndex ids={['9','54']} />