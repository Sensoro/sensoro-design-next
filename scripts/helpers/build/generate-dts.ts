import path from 'node:path';
import { execa } from 'execa';
import fs from 'fs-extra';

export async function generateDts(packagePath: string) {
  await execa('pnpm', [
    'tsc',
    '--project', path.join(packagePath, 'tsconfig.build.json'),
    '--outDir', path.join(packagePath, 'es')
  ]);

  await execa('pnpm', [
    'tsc',
    '--project', path.join(packagePath, 'tsconfig.build.json'),
    '--outDir', path.join(packagePath, 'lib')
  ]);

  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, 'es/index.d.ts'),
    path.join(packagePath, 'es/index.d.mts')
  );
}
