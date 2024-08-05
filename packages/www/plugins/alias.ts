import path from 'node:path';
import { PATHS } from '../../../scripts/.internal/constants';

function aliasPlugin() {
  return {
    name: 'plugin-alias',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@sensoro-design/react': path.resolve(PATHS.DESIGN, 'react'),
          },
        },
      };
    },
  };
}

export default aliasPlugin;
