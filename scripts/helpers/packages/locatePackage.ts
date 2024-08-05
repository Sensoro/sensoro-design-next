import path from 'node:path';
import fs from 'fs-extra';
import { getPath } from '../utils/getPath';
import { PATHS } from '../../.internal/constants'
import { getPackageName } from './getPackageName';

export async function locatePackage(packageName: string) {
  const packagePath = path.join(getPath(PATHS.ROOT), getPackageName(packageName));
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
