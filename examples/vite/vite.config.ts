import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createStyleImportPlugin,
} from 'vite-plugin-style-import'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const lotusDesignDir = join(__dirname, '../../packages/react/src');
const pathResolve = (pathname: string) => resolve(__dirname, '.', pathname);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@sensoro-design/react',
        replacement: lotusDesignDir
      },
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
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
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@sensoro-design/react',
          libraryNameChangeCase: 'headerCase',
          resolveStyle: (name) => {
            return join(lotusDesignDir, name, 'style')
          },
        },
      ],
    })
  ],
  server: {
    port: 8000
  }
})
