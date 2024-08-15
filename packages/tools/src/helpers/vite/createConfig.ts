import process from 'node:process';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { getEntryFile } from '../../utils';
import type { ToolsConfig } from '../../types';

interface Options extends ToolsConfig {
  minify?: boolean;
}

export function createConfig(options: Options = {}) {
  const {
    cwd = process.cwd(),
    umd = {},
    minify = true,
  } = options;
  const {
    name,
    outDir = 'dist',
    fileName = 'index',
    externals,
  } = umd;

  const entry = getEntryFile(cwd);

  return defineConfig({
    root: cwd,
    mode: 'production',
    plugins: [
      viteExternalsPlugin(externals),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    build: {
      emptyOutDir: false,
      lib: {
        entry,
        name,
        fileName: () => {
          return !minify ? `${fileName}.development.js` : `${fileName}.min.js`;
        },
        formats: ['umd'],
      },
      outDir,
      minify,
    },
  });
}
