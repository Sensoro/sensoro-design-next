import 'zx/globals';
import ts from 'typescript';
import fs from 'fs-extra';
import glob from 'fast-glob';
import { rename } from '../utils/rename'

async function build(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const esFilePath = filePath.replace('/src/', '/es/');
  const libFilePath = filePath.replace('/src/', '/lib/');

  const { outputText } = ts.transpileModule(fileContent, {
    compilerOptions: {
      declaration: false,
      module: ts.ModuleKind.CommonJS
    }
  })

  await fs.writeFile(rename(esFilePath, { extname: '.mjs' }), `'use client';\n${fileContent}`);
  await fs.writeFile(
    rename(esFilePath, {
      extname: '.mjs',
      basename: 'css'
    }),
    `'use client';\n${fileContent.toString().replaceAll('.less', '.css')}`
  );

  await fs.writeFile(rename(libFilePath, { extname: '.cjs' }), outputText);
  await fs.writeFile(
    rename(libFilePath, {
      extname: '.cjs',
      basename: 'css'
    }),
    fileContent.toString().replaceAll('.less', '.css')
  );
}

export async function generateCssTs(packagePath: string) {
  const files = await glob(`${packagePath}/src/**/style/index.ts`);

  files.forEach((file) => build(file));
}
