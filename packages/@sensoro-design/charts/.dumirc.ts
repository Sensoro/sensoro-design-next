import { defineConfig } from 'dumi';

const base = '/charts/';

export default defineConfig({
  outputPath: 'docs-dist',
  base,
  publicPath: base,
  hash: true,
  themeConfig: {
    title: '图表',
    nav: [],
    name: 'Charts',
  },
});
