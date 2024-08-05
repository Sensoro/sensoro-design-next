import { join } from 'node:path';
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import { PATHS } from '../../scripts/.internal/constants';

const designDir = join(PATHS.DESIGN, 'react/src');
const chartsDir = join(PATHS.DESIGN, 'charts/src');
const plotsDir = join(PATHS.DESIGN, 'plots/src');

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@sensoro-design/react',
        replacement: designDir,
      },
      {
        find: '@sensoro-design/charts',
        replacement: chartsDir,
      },
      {
        find: '@sensoro-design/plots',
        replacement: plotsDir,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@sensoro-design/react',
          resolveStyle: (name) => {
            return join(designDir, name, 'style');
          },
        },
      ],
    }),
  ],
});
