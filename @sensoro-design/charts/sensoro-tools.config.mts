import { defineConfig } from '@sensoro-design/tools';

export default defineConfig({
  mode: 'design',
  umd: {
    name: 'sensoro.charts',
    fileName: 'charts',
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  esm: {},
  cjs: {},
});
