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
import { buildLess, buildLessTs, lessToCss } from './helpers/design';
import { copyAssets } from './helpers/copy';
import { DEFAULT_IGNORES } from './constants';
import { rename } from './utils';

const logger = createLogger('build');
const defaults: ToolsConfig = {
  cwd: process.cwd(),
  clean: true,
  input: 'src',
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

  config.mode === 'design' && logger.log(`组件库编译模式`);

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
        '**/*.{ts,tsx}',
      ],
      ignores: [
        ...(config.ignores || []),
        '**/style/*.ts',
      ],
    });
    const build = await rollup(rollupOptions);

    logger.log(`编译 ESM`);
    await build.write(esmOutpout);
    await copyAssets(config.esm?.output, {
      cwd,
      input: config.input!,
      ignore: config.ignores,
    });

    logger.log(`编译 CJS`);
    await build.write(cjsOutpout);
    await copyAssets(config.cjs?.output, {
      cwd,
      input: config.input!,
      ignore: config.ignores,
    });

    if (config.mode === 'design') {
      // 编译 样式
      await buildLess({
        cwd,
        input: config.input!,
        esmDir: config.esm?.output,
        cjsDir: config.cjs?.output,
      });

      // 汇总所有样式
      const designFilePath = path.join(
        cwd,
        config.umd?.outDir as string,
        `${config.design?.designStyleFileName}.less`,
      );
      await fsExtra.ensureDir(path.join(cwd, 'dist'));
      await fsExtra.writeFile(
        designFilePath,
        `@import "../${config.esm?.output}/style/index.less";\n@import "../${config.esm?.output}/style/components.less";`,
      );
      const designCss = await lessToCss(designFilePath);
      await fsExtra.writeFile(
        rename(designFilePath, { extname: '.css' }),
        designCss,
      );

      const designMinCss = await lessToCss(designFilePath, {
        minify: true,
      });
      await fsExtra.writeFile(
        rename(designFilePath, { extname: '.min.css' }),
        designMinCss,
      );

      // 编译样式入口文件
      buildLessTs({
        cwd,
        input: config.input!,
        esmDir: config.esm?.output,
        cjsDir: config.cjs?.output,
      });
    }
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
