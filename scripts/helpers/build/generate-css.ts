import 'zx/globals';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs-extra';
import glob from 'fast-glob';
import { rename } from '../utils/rename'

async function build(filePath: string) {
  const esFilePath = filePath.replace('/src/', '/es/');
  const libFilePath = filePath.replace('/src/', '/lib/');

  await fs.copy(filePath, esFilePath, {
    errorOnExist: false,
  });
  await fs.copy(filePath, libFilePath, {
    errorOnExist: false,
  });

  const lessToCss = await $`lessc ${filePath}`;

  const { css } = await postcss([autoprefixer]).process(lessToCss, {
    from: filePath
  })

  await fs.writeFile(rename(esFilePath, { extname: '.css' }), css);
  await fs.writeFile(rename(libFilePath, { extname: '.css' }), css);
}

export async function generateCss(packagePath: string) {
  const files = await glob(`${packagePath}/src/**/*.less`);

  files.forEach((file) => build(file));
}
