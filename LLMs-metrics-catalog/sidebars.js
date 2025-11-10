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

      ],
    },
    {
      type: 'category',
      label: 'Generative & Distribution Metrics',
      collapsed: true,
      items: [
        'metrics/generative/amber-score',
      ],
    },
    {
      type: 'category',
      label: 'Logical Reasoning & Verification',
      collapsed: true,
      items: [
        'metrics/logical/cog-metric',
      ],
    },
    {
      type: 'category',
      label: 'Robustness, Security & Reliability',
      collapsed: true,
      items: [
        'metrics/robustness/ct-score',
      ],
    },
    {
      type: 'category',
      label: 'Efficiency & Resource Usage',
      collapsed: true,
      items: [
        'metrics/efficiency/time',
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
      ],
    },
    {
      type: 'category',
      label: 'Creativity, Diversity & Novelty',
      collapsed: true,
      items: [
        'metrics/creativity/dialogue',
      ],
    },
    {
      type: 'category',
      label: 'Ranking, Reward & Optimization',
      collapsed: true,
      items: [
        'metrics/ranking/elo-score',
      ],
    },
    {
      type: 'category',
      label: 'Semantic, Coherence & Hallucination',
      collapsed: true,
      items: [
        'metrics/semantic/hallucination',
        'metrics/semantic/coherence',
      ],
    },
    'references',
  ],
};
