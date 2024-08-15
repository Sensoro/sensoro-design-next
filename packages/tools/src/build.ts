import path from 'node:path';
import process from 'node:process';
import { execa } from 'execa';
import chalk from 'chalk';
import fsExtra from 'fs-extra';
import { build as viteBuild } from 'vite';
import { type OutputOptions, rollup } from 'rollup';
import type { ToolsConfig } from './types';
import { createConfig as createRollupConfig } from './helpers/rollup';
import { createConfig as createViteConfig } from './helpers/vite';
import { loadConfig } from './helpers/config';
import { createLogger } from './helpers/signale';
import { getBuildTime } from './helpers/time';
import { DEFAULT_IGNORES } from './constants';

const logger = createLogger('build');
const defaults: ToolsConfig = {
  cwd: process.cwd(),
  esm: {
    output: 'es',
    dts: true,
  },
  cjs: {
    output: 'lib',
    dts: true,
  },
  umd: {
    outDir: 'dist',
  },
  ignores: DEFAULT_IGNORES,
};

export async function build() {
  const config = await loadConfig<ToolsConfig>({
    defaults,
  });

  const cwd = config.cwd!;
  const startTime = Date.now();

  logger.log(`编译开始`);

  logger.log(`清空输出目录`);
  const outputDirs = [config.esm?.output, config.cjs?.output, config.umd?.outDir]
    .filter(Boolean)
    .map(item => path.join(cwd, item!));
  await Promise.all(outputDirs.map(dir => fsExtra.rmSync(dir, { recursive: true, force: true })));

  logger.log(`编译 ESM&CJS`);
  // 编译 JS&TS
  if (config.esm || config.cjs) {
    const rollupConfig = await createRollupConfig({
      ...config,
      source: [
        'src/**/*.{ts,tsx}',
        'src/**/*.{js,jsx}',
      ],
      ignores: [
        ...(config.ignores || []),
        'src/**/style/*.ts',
      ],
    });
    const build = await rollup(rollupConfig);

    const outputs: OutputOptions[] = Array.isArray(rollupConfig.output)
      ? rollupConfig.output
      : [rollupConfig.output!];

    await Promise.all(outputs.map(output => build.write(output)));
  }

  logger.log(`编译类型定义`);
  // 输出类型定义
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

  logger.log(`编译 Umd`);
  if (config.umd?.name) {
    // 压缩，输出 {name}.min.js
    await viteBuild(createViteConfig({ ...config, minify: true }));
    // 未压缩，输出 {name}.development.js
    await viteBuild(createViteConfig({ ...config, minify: false }));
  }

  logger.success(
    `编译花费时间 ${chalk.green(getBuildTime(startTime))}`,
  );
}
