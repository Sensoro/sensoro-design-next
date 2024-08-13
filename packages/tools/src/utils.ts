import { join } from 'node:path';
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
      const filePath = join(dirPath, cur);

      if (existsSync(filePath) && !prev)
        prev = cur;

      return prev;
    },
    '',
  ) || 'index.tsx';
}
