module.exports = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Clásicas ML',
      collapsed: false,
      items: [
        'metrics/clasicas-ml/accuracy',
        'metrics/clasicas-ml/f1-score',
        'metrics/clasicas-ml/precision',
        'metrics/clasicas-ml/recall',
      ],
    },
    {
      type: 'category',
      label: 'NLG',
      collapsed: false,
      items: [
        'metrics/nlg/bleu',
        'metrics/nlg/rouge',
      ],
    },
    {
      type: 'category',
      label: 'Code-specific',
      collapsed: false,
      items: [
        'metrics/code-specific/codebleu',
        'metrics/code-specific/pass-at-k',
      ],
    },
    {
      type: 'category',
      label: 'Robustness',
      collapsed: true,
      items: [
        'metrics/robustness/adversarial-robustness',
      ],
    },
    {
      type: 'category',
      label: 'Fairness / Toxicidad',
      collapsed: true,
      items: [
        'metrics/fairness/toxicity',
      ],
    },
  ],
};
