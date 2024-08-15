import process from 'node:process';
import { build } from 'vite';
import { type OutputOptions, rollup } from 'rollup';
import { loadConfig } from '../helpers/config';
import { createConfig as createViteConfig } from '../helpers/vite';
import { createConfig as createRollupConfig } from '../helpers/rollup';
import type { ToolsConfig } from '../types';

async function runCli() {
  const config = await loadConfig<ToolsConfig>({
    defaults: {
      cwd: process.cwd(),
    },
  });

  if (config.esm || config.cjs) {
    const rollupConfig = await createRollupConfig(config);
    const build = await rollup(rollupConfig);

    const outputs: OutputOptions[] = Array.isArray(rollupConfig.output)
      ? rollupConfig.output
      : [rollupConfig.output!];

    await Promise.all(outputs.map(output => build.write(output)));
  }

  if (config.umd) {
    // 压缩，输出 {name}.min.js
    build(createViteConfig({ ...config, minify: true }));
    // 未压缩，输出 {name}.development.js
    build(createViteConfig({ ...config, minify: false }));
  }
}

runCli();
