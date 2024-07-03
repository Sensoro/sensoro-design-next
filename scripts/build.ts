import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { buildAllPackages } from './helpers/build/build-all-packages';
import { buildPackage } from './helpers/build/build-package';

const { argv } = yargs(hideBin(process.argv)) as any;

(async () => {
  if (argv._[0] === 'all') {
    await buildAllPackages();
  } else if (argv._[0]) {
    for (const item of argv._) {
      await buildPackage(item);
    }
  }
})();
