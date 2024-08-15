import path from 'node:path';
import process from 'node:process';
import { execa } from 'execa';
import { build as viteBuild } from 'vite';
import { type OutputOptions, rollup } from 'rollup';
import type { ToolsConfig } from './types';
import { createConfig as createRollupConfig } from './helpers/rollup';
import { createConfig as createViteConfig } from './helpers/vite';
import { loadConfig } from './helpers/config';

export async function build() {
  const config = await loadConfig<ToolsConfig>({
    defaults: {
      cwd: process.cwd(),
      esm: {
        output: 'es',
        dts: true,
      },
      cjs: {
        output: 'lib',
        dts: true,
      },
    },
  });

  const cwd = config.cwd!;

  if (config.esm || config.cjs) {
    const rollupConfig = await createRollupConfig(config);
    const build = await rollup(rollupConfig);

    const outputs: OutputOptions[] = Array.isArray(rollupConfig.output)
      ? rollupConfig.output
      : [rollupConfig.output!];

    await Promise.all(outputs.map(output => build.write(output)));
  }

  if (config.esm?.dts) {
    await execa('pnpm', [
      'tsc',
      '--project',
      path.join(cwd, 'tsconfig.build.json'),
      '--outDir',
      path.join(cwd, 'es'),
    ]);
  }

  if (config.cjs?.dts) {
    await execa('pnpm', [
      'tsc',
      '--project',
      path.join(cwd, 'tsconfig.build.json'),
      '--outDir',
      path.join(cwd, 'lib'),
    ]);
  }

  if (config.umd) {
    // 压缩，输出 {name}.min.js
    await viteBuild(createViteConfig({ ...config, minify: true }));
    // 未压缩，输出 {name}.development.js
    await viteBuild(createViteConfig({ ...config, minify: false }));
  }
}
