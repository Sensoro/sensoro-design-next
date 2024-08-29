import simpleGit from 'simple-git';
import { createLogger } from './helpers/signale';

const git = simpleGit();
const logger = createLogger('release');

async function release() {
  const branch = await git.branch();
  logger.info(`branch: ${branch.current}`);

  const status = await git.status();
  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  await git.fetch();
  const status1 = await git.status({

  });
}

release().catch(() => {
  process.exit(1);
});
