import 'zx/globals';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs-extra';
import glob from 'fast-glob';

async function copyLessFile(lessPath: string) {
  await fs.copy(lessPath, lessPath.replace('/src/', '/es/'), {
    errorOnExist: false,
  });

  await fs.copy(lessPath, lessPath.replace('/src/', '/lib/'), {
    errorOnExist: false,
  });
}

async function lessToCss(lessPath: string) {
  const lessToCss = await $`lessc ${lessPath}`;

  const { css } = await postcss([autoprefixer, ]).process(lessToCss, {
    from: lessPath
  })

  await fs.writeFile(lessPath.replace('/src/', '/es/').replace('.less', '.css'), css);
  await fs.writeFile(lessPath.replace('/src/', '/lib/').replace('.less', '.css'), css);
}

export async function generateCss(packagePath: string) {
  const files = await glob(`${packagePath}/src/**/*.less`);

  files.forEach((file) => copyLessFile(file));

  files.forEach((file) => lessToCss(file));
}
