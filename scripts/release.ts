import simpleGit from 'simple-git';
import { createLogger } from './helpers/signale';

const git = simpleGit();
const logger = createLogger('release');

async function release() {
  const branch = await git.branch();
  logger.info(`branch: ${branch.current}`);

  logger.log('check git status');
  const status = await git.status();
  if (status.files.length !== 0) {
    logger.error('git status is not clean');
    process.exit(1);
  }

  logger.log('check git remote update');
  await git.fetch()
  const status1 = await git.status();
  if (status1.behind) {
    logger.error('git status is behind remote`');
    process.exit(1);
  }

  logger.log('check');
}

release().catch(() => {
  process.exit(1);
});
