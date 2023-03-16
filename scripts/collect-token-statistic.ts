import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import ProgressBar from 'progress';
import { glob, chalk, fsExtra } from '@umijs/utils';
import { DesignTokenContext } from '../components/theme/internal';
import { statistic } from '../components/theme/utils/statistic';
import { seedToken } from '../components/theme/themes/seed';
import { PATHS } from './.internal/constants';

console.log(chalk.green(`🔥 Collecting token statistics...`));

const EmptyElement = React.createElement('div');

const styleFiles = glob.sync(
  path.join(
    PATHS.ROOT,
    'components/!(version|config-provider|icon|locale-provider|auto-complete|col|row|time-picker|)/style/index.?(ts|tsx)',
  ),
);

const bar = new ProgressBar('🚀 Collecting by component: [:bar] :component (:current/:total)', {
  complete: '=',
  incomplete: ' ',
  total: styleFiles.length,
});

styleFiles.forEach((file) => {
  const pathArr = file.split('/');
  const styleIndex = pathArr.lastIndexOf('style');
  const componentName = pathArr[styleIndex - 1];
  bar.tick(1, { component: componentName });

  // @ts-ignore
  let useStyle = (prefixCls: string) => {};

  useStyle = require(file).default;

  const Component = () => {
    useStyle('file');
    return EmptyElement;
  };

  ReactDOMServer.renderToString(React.createElement(Component));

  // Render wireframe
  ReactDOMServer.renderToString(
    React.createElement(
      DesignTokenContext.Provider,
      { value: { token: { ...seedToken, wireframe: true } } },
      React.createElement(Component),
    ),
  );
});

(() => {
  const tokenPath = `${PATHS.ROOT}/components/version/token.json`;
  fsExtra.writeJsonSync(tokenPath, statistic, 'utf8');

  console.log(chalk.green(`✅  Collected token statistics successfully, check it in`), tokenPath);
})();
