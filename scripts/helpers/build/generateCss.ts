import 'zx/globals';
import path from 'node:path';
import postcss from 'postcss';
import cssnano from 'cssnano';
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

  await Promise.all(files.map((file) => build(file)))

  let content = '';
  const dirs = fs.readdirSync(path.join(packagePath, 'src'))

  dirs.forEach((dir) => {
    const lessFilePath = path.join(dir, 'style', 'index.less')
    const filePath = path.join(packagePath, 'src', lessFilePath);

    if (fs.existsSync(filePath)) {
      content += `@import "../${lessFilePath}";\n`;
    }
  })

  await fs.writeFile(
    path.join(packagePath, 'es', 'style', 'components.less'),
    content,
  );
  await fs.writeFile(
    path.join(packagePath, 'lib', 'style', 'components.less'),
    content,
  );

  await fs.ensureDir(path.join(packagePath, 'dist'));
  fs.writeFileSync(
    path.join(packagePath, 'dist', 'sensoro.less'),
    '@import "../es/style/index.less";\n@import "../es/style/components.less";',
  );

  const distFiles = await glob(`${packagePath}/dist/**/*.less`);

  await Promise.all(distFiles.map(async (filePath) => {
    const lessToCss = await $`lessc ${filePath}`;

    const { css } = await postcss([autoprefixer]).process(lessToCss, {
      from: filePath
    })

    await fs.writeFile(rename(filePath, { extname: '.css' }), css);

    const { css: minCss } = await postcss([autoprefixer, cssnano]).process(lessToCss, {
      from: filePath
    })

    await fs.writeFile(rename(filePath, { extname: '.min.css' }), minCss);
  }))
}
