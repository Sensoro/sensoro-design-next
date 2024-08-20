import { join } from 'node:path';
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import { PATHS } from '../../scripts/.internal/constants';

const designDir = join(PATHS.DESIGN, 'react/src');
const chartsDir = join(PATHS.DESIGN, 'charts/src');
const plotsDir = join(PATHS.DESIGN, 'plots/src');
const vchartDir = join(PATHS.DESIGN, 'vchart/src');
const vchartThemeDir = join(PATHS.DESIGN, 'vchart-theme/src');

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
      {
        find: '@sensoro-design/vchart',
        replacement: vchartDir,
      },
      {
        find: '@sensoro-design/vchart-theme',
        replacement: vchartThemeDir,
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
          resolveStyle: (name: string) => {
            return join(designDir, name, 'style');
          },
        },
      ],
    }),
  ],
});
