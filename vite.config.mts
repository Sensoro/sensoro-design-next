import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const designDir = join(__dirname, './packages/react/src');
const primitivesDir = join(__dirname, './packages/primitives/src');

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@lotus-design/react-primitives/es',
        replacement: primitivesDir,
      },
      {
        find: '@sensoro-design/react',
        replacement: designDir,
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
