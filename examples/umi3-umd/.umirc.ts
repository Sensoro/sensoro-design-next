import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@sensoro-design/react': 'sensoro',
    '@sensoro-design/charts': ['sensoro', 'charts'],
  },
  fastRefresh: {},
});
