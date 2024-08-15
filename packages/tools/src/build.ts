import path from 'node:path';
import process from 'node:process';
import { execa } from 'execa';
import chalk from 'chalk';
import fsExtra from 'fs-extra';
import { build as viteBuild } from 'vite';
import { rollup } from 'rollup';
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
  clean: true,
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

  // 清空目录
  if (config.clean) {
    logger.log(`清空输出目录`);
    const outputDirs = [config.esm?.output, config.cjs?.output, config.umd?.outDir]
      .filter(Boolean)
      .map(item => path.join(cwd, item!));
    await Promise.all(outputDirs.map(dir => fsExtra.rmSync(dir, { recursive: true, force: true })));
  }

  // 编译 TS
  if (config.esm || config.cjs) {
    const {
      rollupOptions,
      esmOutpout,
      cjsOutpout,
    } = await createRollupConfig({
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
    const build = await rollup(rollupOptions);

    logger.log(`编译 ESM`);
    await build.write(esmOutpout);
    // 拷贝其他不可编译文件

    logger.log(`编译 CJS`);
    await build.write(cjsOutpout);
  }

  logger.log(`编译类型定义`);
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
