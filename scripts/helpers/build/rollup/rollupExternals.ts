import packageJson from '../../../../package.json';
import { getPackagesList } from '../../packages/getPackagesList';

export const ROLLUP_EXTERNALS = [
  'dayjs/locale/ru',
  'dayjs/plugin/customParseFormat.js',
  'dayjs/plugin/customParseFormat',
  'dayjs/plugin/utc.js',
  'dayjs/plugin/timezone.js',
  'react-is',
  'react/jsx-runtime',
  ...getPackagesList().map((pkg) => pkg.packageJson.name!),
  ...Object.keys({
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }),
];
