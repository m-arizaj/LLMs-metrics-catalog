---
id: sentiment-polarity-shift
title: Sentiment Polarity Shift
sidebar_label: Sentiment Polarity
---

## Definition
**Sentiment Polarity Shift** no es una métrica única, sino una categoría de evaluación diseñada para medir el sesgo social (Social Bias). Cuantifica cómo la polaridad del sentimiento (positiva, negativa o neutra) de la respuesta de un LLM cambia cuando se condiciona a diferentes grupos sociales (por ejemplo, por género, raza o religión).

Este enfoque evalúa si el modelo asocia a ciertos grupos con connotaciones sociales más negativas o positivas. Las métricas específicas que implementan esta idea incluyen:

* **Regard Score**: Mide la "polaridad hacia... grupos sociales" o la connotación social positiva/negativa.
* **Counterfactual Sentiment Bias**: Compara las distribuciones de sentimiento de dos frases generadas a partir de prompts contrafácticos (por ejemplo, donde solo se cambia el grupo social).
* **Score Parity**: Mide la consistencia con la que un modelo genera lenguaje (evaluado por un clasificador de sentimiento) con respecto a un atributo protegido.

***

## Calculation (General Idea)
Estas métricas generalmente dependen de un modelo clasificador auxiliar para puntuar el texto generado en busca de sentimiento o toxicidad.

1.  **Prompting**: Se proporcionan al LLM prompts que contienen descriptores de grupos sociales. A menudo, estos se presentan en pares contrafácticos (p.ej., "El hombre [Grupo A] era..." vs. "El hombre [Grupo B] era...").
2.  **Generation**: El LLM genera texto o continuaciones para cada prompt.
3.  **Classification**: Un clasificador externo (p.ej., un clasificador de sentimiento o toxicidad) puntúa la polaridad de cada texto generado.
4.  **Comparison**: El "cambio" (shift) se calcula comparando las puntuaciones de sentimiento o las distribuciones entre los diferentes grupos sociales. Por ejemplo, *Counterfactual Sentiment Bias* utiliza la distancia de Wasserstein-1 para medir la diferencia entre las distribuciones de sentimiento resultantes.

***

## Purpose
El objetivo principal es cuantificar los sesgos sociales y culturales mediante la identificación de un sentimiento o polaridad dispar en los resultados del modelo asociados con diferentes grupos.

Esto ayuda a detectar daños representacionales como la **estereotipación** (donde un modelo asocia a un grupo con atributos negativos) o la **misma representación** (donde un modelo clasifica incorrectamente declaraciones sobre grupos estigmatizados como negativas).

***

## Domains
* Fairness / Bias Evaluation
* Social / Cultural Bias
* Text Generation (Open-Ended)
* Sentiment Analysis 

***


## Advantages
* Mide directamente un daño representacional específico y bien conocido (sentimiento dispar) en el texto generado.
* Se puede aplicar a modelos de caja negra, ya que solo requiere el texto de salida para ser puntuado por un clasificador externo.
* Captura sesgos más sutiles que la simple toxicidad, como los estereotipos negativos o las microagresiones.

***

## Limitations
* La métrica es **altamente dependiente del clasificador auxiliar** (p.ej., de sentimiento o toxicidad) utilizado, el cual puede tener sus propios sesgos.
* Los clasificadores de sentimiento pueden clasificar incorrectamente las declaraciones sobre grupos estigmatizados (p.ej., personas con discapacidades o enfermedades mentales) como negativas, sesgando así la métrica.
* Los prompts de texto abierto pueden ser ambiguos; el sesgo puede referirse al grupo en el prompt o a un grupo mencionado en la continuación, lo que dificulta la atribución del sesgo.
* Las elecciones de los parámetros de decodificación (p.ej., temperatura, top-k) pueden cambiar drásticamente el nivel de sesgo medido, lo que lleva a resultados contradictorios.

***

## Key References
* Gallegos, I. O., Rossi, R. A., Barrow, J., Tanjim, M. M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., & Ahmed, N. K. (2024). Bias and fairness in large language models: A survey. Computational Linguistics, 50(3), 1043–1108. https://doi.org/10.1162/coli_a_00524

* Dhamala, J., Sun, T., Kumar, V., Krishna, S., Pruksachatkun, Y., Chang, K.-W., & Gupta, R. (2021). BOLD: Dataset and metrics for measuring biases in open-ended language generation. arXiv. https://doi.org/10.48550/arXiv.2101.11718

* Sheng, E., Chang, K.-W., Natarajan, P., & Peng, N. (2019). The woman worked as a babysitter: On biases in language generation. arXiv. https://doi.org/10.48550/arXiv.1909.01326

* Huang, P.-S., Zhang, H., Jiang, R., Stanforth, R., Welbl, J., Rae, J., Maini, V., Yogatama, D., & Kohli, P. (2020). Reducing sentiment bias in language models via counterfactual evaluation. En Findings of the Association for Computational Linguistics: EMNLP 2020 (pp. 65–83). Association for Computational Linguistics. https://doi.org/10.18653/v1/2020.findings-emnlp.7