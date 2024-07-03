import chalk from 'chalk';
import { execa } from 'execa';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { getNextVersion } from 'version-next';
import simpleGit from 'simple-git';
import { createLogger } from './helpers/utils/signale';
import { setDesignPackagesVersion } from './helpers/release/set-packages-version'
import { buildAllPackages } from './helpers/build/build-all-packages'
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

  // if (status.files.length !== 0) {
  //   logger.error('Working tree is not clean');
  //   process.exit(1);
  // }

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
}

release();
