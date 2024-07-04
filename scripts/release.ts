import chalk from 'chalk';
import { execa } from 'execa';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { getNextVersion } from 'version-next';
import simpleGit from 'simple-git';
import { createLogger } from './helpers/utils/signale';
import { publishPackage } from './helpers/publish/publishPackage';
import { getDesignPackagesList } from './helpers/packages/getPackagesList';
import { setDesignPackagesVersion } from './helpers/release/setPackagesVersion'
import { buildAllPackages } from './helpers/build/buildAllPackages'
import { getPath } from './helpers/utils/getPath';
import packageJson from '../package.json';

const git = simpleGit();
const logger = createLogger('release');

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('stage', {
    type: 'string',
    choices: ['alpha', 'beta'],
    description: "Prerelease stage: 'alpha', 'beta'",
  })
  .option('tag', {
    type: 'string',
    default: 'latest',
    description: 'Tag',
  });

async function release() {
  const status = await git.status();

  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  logger.log('Releasing all packages');

  const incrementedVersion = getNextVersion(packageJson.version, {
    type: argv._[0],
    stage: argv.stage,
  });

  logger.log(`New version: ${chalk.cyan(incrementedVersion)}`);
  await setDesignPackagesVersion(incrementedVersion);

  await buildAllPackages();
  logger.success('All packages have been built successfully');

  logger.log('Publishing packages to npm');
  if (argv.stage && argv.tag === 'latest') {
    argv.tag = 'next';
  }

  const designPackages = await getDesignPackagesList();
  await Promise.all(
    designPackages.map((p) =>
      publishPackage({ packagePath: p!.path, name: p!.packageJson.name!, tag: argv.tag })
    )
  );

  logger.success('All packages have been published successfully');

  await execa('pnpm');
  await git.add([
    getPath('packages'),
    getPath('package.json'),
    getPath('pnpm-lock.yaml')
  ]);
  await git.commit(`chore(release): version ${incrementedVersion}`);
  await git.push();
}

release();
