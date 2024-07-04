import path from 'node:path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { getPackageName } from '../packages/getPackageName';
import { locatePackage } from '../packages/locatePackage';
import { createLogger } from '../utils/signale';
import { compile } from './compile';
import { generateDts } from './generateDts';
import { generateCss } from './generateCss';
import { generateCssTs } from './generateCssTs';
import { getBuildTime } from './getBuildTime';
import { viteBuild } from './vite'
import { createPackageConfig } from './rollup/createPackageConfig';

const logger = createLogger('build-package');

const distDir = 'dist';

export async function buildPackage(_packageName: string) {
  const packageName = getPackageName(_packageName);
  const packagePath = await locatePackage(packageName);
  const formattedPackageName = chalk.cyan(packageName);

  if (!packagePath) {
    logger.error(`Package ${formattedPackageName} does not exist`);
    process.exit(1);
  }

  logger.log(`Building package ${formattedPackageName}`);

  try {
    logger.log(`Clean up ${formattedPackageName} previous builds`);

    await Promise.all([[
      path.join(packagePath, 'dist'),
      path.join(packagePath, 'es'),
      path.join(packagePath, 'lib'),
    ].map(dir => fs.rmSync(dir, { recursive: true, force: true }))])

    const startTime = Date.now();

    logger.log(`Generating ${formattedPackageName} *.d.ts files...`);
    await generateDts(packagePath);

    const config = await createPackageConfig({
      cwd: packagePath,
    });
    logger.log(`Compiling ${formattedPackageName} package with rollup...`);

    await compile(config);

    logger.log(`Build ${formattedPackageName} style files...`);
    await generateCss(packagePath);
    await generateCssTs(packagePath);

    logger.log(`Build ${formattedPackageName} umd format`);

    // 编译 Umd
    await viteBuild({
      cwd: packagePath,
      distDir,
      minify: false,
    })

    await viteBuild({
      cwd: packagePath,
      distDir,
      minify: true,
    })

    logger.success(
      `Package ${formattedPackageName} has been built in ${chalk.green(getBuildTime(startTime))}`
    );
  } catch (err: any) {
    logger.error(`Failed to compile package: ${formattedPackageName}`);
    logger.error(err);
    process.exit(1);
  }
}
