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
          remarkPlugins: [remarkMath.default],
          rehypePlugins: [[rehypeKatex.default, { output: 'mathml', throwOnError: false, strict: false }]],
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
  stylesheets: [],
};


module.exports = config;
