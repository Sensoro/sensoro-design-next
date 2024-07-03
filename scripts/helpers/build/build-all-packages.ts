// prettier-ignore
import chalk from 'chalk';
import { createLogger } from '../utils/signale';
import { buildPackage } from './build-package';
import { getBuildTime } from './get-build-time';
import { getPackagesBuildOrder } from './get-packages-build-order';

const logger = createLogger('build-all-packages');

export async function buildAllPackages() {
  const packages = await getPackagesBuildOrder();

  console.log(packages)
  return;

  const startTime = Date.now();
  logger.log('Building all packages...');

  for (const item of packages) {
    if (!item!.packageJson.name) {
      process.stdout.write(`Skipping ${item!.path} because it has no name\n`);
    } else {
      await buildPackage(item!.packageJson.name);
    }
  }

  logger.success(`All packages have been built in ${chalk.green(getBuildTime(startTime))}`);

  return packages;
}
