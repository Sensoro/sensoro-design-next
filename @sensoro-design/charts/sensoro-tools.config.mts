import { defineConfig } from '@sensoro-design/tools';

export default defineConfig({
  mode: 'design',
  umd: {
    name: 'sensoro.charts',
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
});
