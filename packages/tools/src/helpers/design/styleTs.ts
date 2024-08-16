import path from 'node:path';
import ts from 'typescript';
import fs from 'fs-extra';
import glob from 'fast-glob';
import { rename } from '../../utils';

async function getStyleTs(filePath: string) {
  const esm = fs.readFileSync(filePath, 'utf8');

  const { outputText } = ts.transpileModule(esm, {
    compilerOptions: {
      declaration: false,
      module: ts.ModuleKind.CommonJS,
    },
  });

  return {
    esm,
    cjs: outputText,
  };
}

interface BuildLessTsOptions {
  cwd: string;
  input: string;
  esmDir?: string;
  cjsDir?: string;
}

export async function buildLessTs(options: BuildLessTsOptions) {
  const { cwd, input, esmDir, cjsDir } = options;
  const files = await glob(`**/style/index.ts`, {
    cwd: path.join(cwd, input),
  });

  for (const filePath of files) {
    const result = await getStyleTs(path.join(cwd, input, filePath));
    await fs.writeFile(rename(path.join(cwd, esmDir!, filePath), { extname: '.mjs' }), `${result.esm}`);
    await fs.writeFile(
      rename(path.join(cwd, esmDir!, filePath), {
        extname: '.mjs',
        basename: 'css',
      }),
      `${result.esm.toString().replaceAll('.less', '.css')}`,
    );

    await fs.writeFile(rename(path.join(cwd, cjsDir!, filePath), { extname: '.cjs' }), `${result.esm}`);
    await fs.writeFile(
      rename(path.join(cwd, cjsDir!, filePath), {
        extname: '.cjs',
        basename: 'css',
      }),
      `${result.esm.toString().replaceAll('.less', '.css')}`,
    );
  }
}
