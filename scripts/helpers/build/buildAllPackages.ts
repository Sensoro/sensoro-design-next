// prettier-ignore
import chalk from 'chalk';
import { createLogger } from '../utils/signale';
import { buildPackage } from './buildPackage';
import { getBuildTime } from './getBuildTime';
import { getPackagesBuildOrder } from './getPackagesBuildOrder';

const logger = createLogger('build-all-packages');

export async function buildAllPackages() {
  const packages = await getPackagesBuildOrder();

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
