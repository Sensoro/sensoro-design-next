import process from 'node:process';
import { build } from 'vite';
import { loadConfig } from '../helpers/config';
import { createConfig } from '../helpers/vite';
import type { ToolsConfig } from '../types';

async function runCli() {
  const config = await loadConfig<ToolsConfig>({
    defaults: {
      cwd: process.cwd(),
    },
  });

  if (config.umd) {
    build(createConfig({ ...config, minify: true }));
    build(createConfig({ ...config, minify: false }));
  }
}

runCli();
