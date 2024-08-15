import path from 'node:path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import { isTsFile } from '../utils';

interface Options {
  cwd: string;
  input: string;
  ignore?: string[];
}

/**
 * 拷贝无法编译的文件
 */
export async function copyAssets(target: string = 'es', opts: Options = {} as Options) {
  const {
    ignore = [],
    input,
    cwd,
  } = opts;
  const files = await glob('**/*', {
    cwd: path.join(cwd, input),
    ignore,
  });

  files
    .filter(path => !isTsFile(path))
    .forEach((file) => {
      fs.copySync(
        path.join(cwd, input, file),
        path.join(cwd, target, file),
      );
    },
    );
}
