module.exports = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core Accuracy & Overlap Metrics',
      collapsed: false,
      items: [
        'metrics/accuracy-overlap/bleu',
        'metrics/accuracy-overlap/accuracy',
        'metrics/accuracy-overlap/pass-at-k',
        'metrics/accuracy-overlap/f1-score',
        'metrics/accuracy-overlap/exact-match',
        'metrics/accuracy-overlap/rouge',
        'metrics/accuracy-overlap/recall',
        'metrics/accuracy-overlap/precision',
        'metrics/accuracy-overlap/meteor',
        'metrics/accuracy-overlap/edit-distance',
        'metrics/accuracy-overlap/mrr',
        'metrics/accuracy-overlap/swe',
        'metrics/accuracy-overlap/bertscore',
        'metrics/accuracy-overlap/coverage',
        'metrics/accuracy-overlap/chrf',
        'metrics/accuracy-overlap/codescore',
        'metrics/accuracy-overlap/moverscore',

      ],
    },
    {
      type: 'category',
      label: 'Statistical & Correlation Metrics',
      collapsed: false,
      items: [
        'metrics/statistical/ice-score',
        'metrics/statistical/kendall',
        'metrics/statistical/spearman',
        'metrics/statistical/pearson',
        'metrics/statistical/cohen',
        'metrics/statistical/smape',
        'metrics/statistical/rate',
        'metrics/statistical/average',
        
      ],
    },
    {
      type: 'category',
      label: 'Code Quality & Structural Metrics',
      collapsed: false,
      items: [
        'metrics/code-structural/ast-metrics',
        'metrics/code-structural/edition-metrics',
        'metrics/code-structural/bugs',
        'metrics/code-structural/codejudge',
      ],
    },
    {
      type: 'category',
      label: 'Functional & Test-based Evaluation',
      collapsed: false,
      items: [
        'metrics/functional-test/error',
        'metrics/functional-test/percentage',
        'metrics/functional-test/number',
        'metrics/functional-test/test',

      ],
    },
    {
      type: 'category',
      label: 'Human & Subjective Evaluation',
      collapsed: true,
      items: [
        'metrics/human/human',
        'metrics/human/toxicity',
        'metrics/human/fairness',
        'metrics/human/harmlessness',
        'metrics/human/helpfulness',
        'metrics/human/honesty',
        'metrics/human/bias',

      ],
    },
    {
      type: 'category',
      label: 'Generative & Distribution Metrics',
      collapsed: true,
      items: [
        'metrics/generative/amber-score',
        'metrics/generative/density',
        'metrics/generative/fd',
        'metrics/generative/fls',
        'metrics/generative/inception',
        'metrics/generative/kernel-distance',
      ],
    },
    {
      type: 'category',
      label: 'Logical Reasoning & Verification',
      collapsed: true,
      items: [
        'metrics/logical/cog-metric',
        'metrics/logical/difference-automata',
        'metrics/logical/exam',
        'metrics/logical/equivalent',
        'metrics/logical/idealized',

      ],
    },
    {
      type: 'category',
      label: 'Robustness, Security & Reliability',
      collapsed: true,
      items: [
        'metrics/robustness/ct-score',
        'metrics/robustness/fitness',
        'metrics/robustness/performance',
      ],
    },
    {
      type: 'category',
      label: 'Efficiency & Resource Usage',
      collapsed: true,
      items: [
        'metrics/efficiency/time',
        'metrics/efficiency/cost-metrics',
        'metrics/efficiency/memory',
        'metrics/efficiency/perplexity',
      ],
    },
    {
      type: 'category',
      label: 'Architectural & System-level Metrics',
      collapsed: true,
      items: [
        'metrics/architectural/composite',
        'metrics/architectural/design-performance',
        'metrics/architectural/incremental',
        'metrics/architectural/planning-metrics',

      ],
    },
    {
      type: 'category',
      label: 'Creativity, Diversity & Novelty',
      collapsed: true,
      items: [
        'metrics/creativity/dialogue-similarities',
        'metrics/creativity/innovation-score',

      ],
    },
    {
      type: 'category',
      label: 'Ranking, Reward & Optimization',
      collapsed: true,
      items: [
        'metrics/ranking/elo-score',
        'metrics/ranking/hit-n',
        'metrics/ranking/llm-evaluation-metrics',
        'metrics/ranking/language-model-score',
        'metrics/ranking/locobench-score',
      ],
    },
    {
      type: 'category',
      label: 'Semantic, Coherence & Hallucination',
      collapsed: true,
      items: [
        'metrics/semantic/hallucination',
        'metrics/semantic/distinguishability',
        'metrics/semantic/factuality',
        'metrics/semantic/faithfulness',
        'metrics/semantic/gpt-metrics',
        'metrics/semantic/coherence',
        'metrics/semantic/chair',
      ],
    },
    'references',
  ],
};
