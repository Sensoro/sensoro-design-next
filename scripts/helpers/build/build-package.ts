import path from 'node:path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { getPackageName } from '../packages/get-package-name';
import { locatePackage } from '../packages/locate-package';
import { createLogger } from '../utils/signale';
import { compile } from './compile';
import { generateDts } from './generate-dts';
import { generateCss } from './generate-css';
import { generateCssTs } from './generate-css-ts';
import { getBuildTime } from './get-build-time';
import { createPackageConfig } from './rollup/create-package-config';

const logger = createLogger('build-package');

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

    const config = await createPackageConfig(packagePath);
    logger.log(`Compiling ${formattedPackageName} package with rollup...`);

    await compile(config);

    await generateCss(packagePath);
    await generateCssTs(packagePath);

    logger.success(
      `Package ${formattedPackageName} has been built in ${chalk.green(getBuildTime(startTime))}`
    );
  } catch (err: any) {
    logger.error(`Failed to compile package: ${formattedPackageName}`);
    logger.error(err);
    process.exit(1);
  }
}
