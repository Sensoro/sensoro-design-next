import { defineConfig } from '@sensoro-design/tools';

export default defineConfig({
  mode: 'design',
  umd: {
    name: 'sensoro',
    fileName: 'sensoro',
  },
  design: {
    designStyleFileName: 'sensoro',
  },
});
