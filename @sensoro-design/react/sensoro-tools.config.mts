import { defineConfig } from '@sensoro-design/tools';

export default defineConfig({
  mode: 'design',
  umd: {
    name: 'sensoro',
    fileName: 'sensoro',
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  design: {
    designStyleFileName: 'sensoro',
  },
});
