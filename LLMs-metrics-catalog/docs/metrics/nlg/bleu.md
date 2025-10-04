---
id: bleu
title: BLEU
sidebar_label: BLEU
tags: [nlg, text, código, correlación-humana-baja]
---

## Definición
Similitud basada en n-gramas entre referencia(s) y predicción.

**Fórmula (idea general):**
\[
\text{BLEU} = BP \cdot \exp\left(\sum_{n=1}^{N} w_n \log p_n\right)
\]

## Propósito
Evaluar calidad superficial de generación (texto/código) por coincidencia n-gram.

## Dominios
- Code generation, summarization.

## Benchmarks
- CodeXGLUE, HumanEval (como referencia histórica para code gen).

## Ventajas
- Fácil, estándar, comparabilidad histórica.

## Limitaciones
- Baja sensibilidad semántica, no refleja corrección funcional de código.

## Referencias clave
- Papineni et al., 2002.
- (Papers de tu Excel)
