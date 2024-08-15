import path from 'node:path';
import { $ } from 'zx';
import fs from 'fs-extra';
import postcss from 'postcss';
import glob from 'fast-glob';
import autoprefixer from 'autoprefixer';
import { rename } from '../../utils';

export async function lessToCss(filePath: string) {
  const toCss = await $`lessc ${filePath}`;

  const { css } = await postcss([autoprefixer])
    .process(toCss, {
      from: filePath,
    });

  return css;
}

interface Options {
  cwd: string;
  input: string;
  esmDir?: string;
  cjsDir?: string;
}

export async function buildLess(opts: Options) {
  const { cwd, input, esmDir, cjsDir } = opts;
  if (!esmDir && !cjsDir)
    return;

  const files = await glob('**/*.less', {
    cwd: path.join(cwd, input),
  });

  // build less to css
  await Promise.all(files.map(async (item) => {
    const css = await lessToCss(path.join(cwd, input, item));

    if (esmDir) {
      await fs.writeFile(
        rename(path.join(cwd, esmDir, item), { extname: '.css' }),
        css,
      );
    }

    if (cjsDir) {
      await fs.writeFile(
        rename(path.join(cwd, cjsDir, item), { extname: '.css' }),
        css,
      );
    }
  }));

  let content = '';
  const dirs = fs.readdirSync(path.join(cwd, 'src'));

  dirs.forEach((dir) => {
    const lessFilePath = path.join(dir, 'style', 'index.less');
    const filePath = path.join(cwd, 'src', lessFilePath);

    if (fs.existsSync(filePath)) {
      content += `@import "../${lessFilePath}";\n`;
    }
  });

  if (esmDir) {
    await fs.writeFile(
      path.join(cwd, esmDir, 'style', 'components.less'),
      content,
    );
  }

  if (cjsDir) {
    await fs.writeFile(
      path.join(cwd, cjsDir, 'style', 'components.less'),
      content,
    );
  }
}
