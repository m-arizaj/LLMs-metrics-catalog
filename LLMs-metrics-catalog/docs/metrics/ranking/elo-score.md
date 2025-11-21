---
id: elo-score
title: ELO Score
sidebar_label: ELO Score
---
import { ReferencesIndex } from '@site/src/components/References';

## Introduction

The **ELO Score** (or Elo rating) is a human evaluation metric used to assess the performance of Large Language Models (LLMs), particularly in comparative chatbot benchmarks. This method was adopted by the **Chatbot Arena** platform as a way to "reduce the cost of human evaluation" while still capturing human preferences.

Instead of absolute scoring, this method relies on crowdsourced, pairwise comparisons where users vote for the "better" response from two anonymous models. The ELO score is then used to rank the models on a leaderboard.

## 1. ELO Score

### Definition

The ELO Score is a method for calculating the relative skill levels of players (in this case, LLMs) in competitor-versus-competitor matchups. In the context of **Chatbot Arena**, users pose questions to two anonymous models simultaneously and vote for the better response.

The models are then "ranked on the leaderboard based on their ELO scores". In this system:
- All models initially start with the same ELO score.
- With each "matchup," the ELO score of the favored (winning) LLM increases, while the score of the other model decreases.
- Over time, as more comparisons are accumulated, the "relative abilities of LLMs can be discerned through their respective Elo scores".

### Purpose

The primary purpose of the ELO score is to serve as the core metric for **Human Evaluation** in a crowdsourced, competitive environment. It provides a scalable and reliable way to rank models based on aggregated human preferences.

### Applications

- It is the main evaluation metric for **Chatbot Arena**.
- Used to evaluate an LLM's **Intelligence** and **Human Preference**.

### Advantages

- **Scalable and Incremental:** The "Elo scoring mechanism facilitates the establishment of rank orderings without necessitating a comprehensive comparison of all LLMs across all queries, streamlining the evaluation process".
- **Cost-Efficient:** It was proposed as a way "to reduce the cost of human evaluation" compared to traditional, expert-led manual assessments.
- **Reliable:** Although human evaluation can be inconsistent, it is "generally considered more credible" than automated metrics. The Chatbot Arena aggregates these human preferences to create a stable ranking.

## References

- Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. arXiv. https://doi.org/10.48550/arXiv.2306.05685

### Additional References in Dataset 
- <ReferencesIndex ids={['1','5']} />