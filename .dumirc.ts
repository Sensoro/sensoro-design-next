import path from 'node:path';
import { defineConfig } from 'dumi';

export default defineConfig({
  hash: true,
  alias: {
    '@sensoro-design/charts': path.join(__dirname, 'packages/@sensoro-design/charts/src'),
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'packages/@sensoro-design/charts/src',
      },
    ],
  },
  themeConfig: {
    title: '图表',
    nav: [],
    name: 'Sensoro Design',
  },
});
