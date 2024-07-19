import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const designDir = join(__dirname, '../@sensoro-design/react/src');
const chartsDir = join(__dirname, '../@sensoro-design/charts/src');
const plotsDir = join(__dirname, '../@sensoro-design/plots/src');

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
