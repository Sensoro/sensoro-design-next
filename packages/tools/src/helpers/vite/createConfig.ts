import process from 'node:process';
import { type BuildOptions, defineConfig } from 'vite';
import { getEntryFile } from '../../utils';
import type { ToolsConfig } from '../../types';

interface Options extends ToolsConfig {
  target?: BuildOptions['target'];
  minify?: boolean;
}

export function createConfig(options: Options = {}) {
  const {
    cwd = process.cwd(),
    umd = {},
    minify = true,
  } = options;
  const { name, externals } = umd;

  const entry = getEntryFile(cwd);

  return defineConfig({
    root: cwd,
    mode: 'production',
    plugins: [],
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
        formats: ['umd'],
      },
      rollupOptions: {
        output: {
          globals: externals,
        },
      },
      minify,
    },
  });
}
