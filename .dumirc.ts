import { join } from 'path';
import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';
const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

const prodConfig = isProd
  ? defineConfig({
    ssr: {},
  })
  : defineConfig({
    ssr: false,
  });

export default defineConfig({
  hash: true,
  crossorigin: {},
  outputPath: '_site',
  favicons: [logo],
  themeConfig: {
    logo,
    name: 'Sensoro Design',
    socialLinks: {
      github: 'https://github.com/sensoro-design/material-components',
    },
    nav: [
      { title: '开发', link: '/react' },
      { title: '组件', link: '/components' },
    ],
  },
  alias: {
    'sensoro-design/es': join(__dirname, 'components'),
    'sensoro-design/lib': join(__dirname, 'components'),
    'sensoro-design/locale': join(__dirname, 'components/locale'),
    'sensoro-design': join(__dirname, 'components/index.ts')
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: 'components' }
    ],
    codeBlockMode: 'passive',
  },
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  mfsu: false,
  ...prodConfig
})
