import path from 'node:path';
import { existsSync } from 'node:fs';

/**
 * 获取入口文件
 * @param dirPath
 * @param files
 */
export function getEntryFile(
  dirPath: string,
  files = [
    'src/index.tsx',
    'src/index.ts',
    'src/index.jsx',
    'src/index.js',
  ],
) {
  return files.reduce(
    (prev, cur) => {
      const filePath = path.join(dirPath, cur);

      if (existsSync(filePath) && !prev)
        prev = cur;

      return prev;
    },
    '',
  ) || 'index.tsx';
}

/**
 * 判断文件是否为 TS 文件
 * @param filePath
 */
export function isTsFile(filePath: string): boolean {
  return /\.(?:ts|tsx)$/i.test(filePath);
}

interface RenameOptions {
  basename?: string;
  extname?: string;
}

export function rename(
  filePath: string,
  options: RenameOptions = {},
) {
  const dirname = path.dirname(filePath);
  const basename = path.basename(filePath, path.extname(filePath));
  const extname = path.extname(filePath);

  const fileName = `${options.basename || basename}${options.extname || extname}`;

  return path.join(dirname, fileName);
}
