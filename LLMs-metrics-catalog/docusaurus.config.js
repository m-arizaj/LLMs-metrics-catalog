const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const config = {
  title: 'LLM Metrics Catalog',
  url: 'https://m-arizaj.github.io',        
  baseUrl: '/LLMs-metrics-catalog/',           
  organizationName: 'm-arizaj',             
  projectName: 'LLMs-metrics-catalog',         
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-n8MVd4ZCw8h+6YxQhQF5R7Lk9tLhL0FBkGZbX3k7Fz2e0Yxq8d6r2WcikZbKTKk6',
      crossorigin: 'anonymous',
    },
  ],
};


module.exports = config;
