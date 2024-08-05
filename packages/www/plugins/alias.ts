import path from 'node:path'

function aliasPlugin() {
  return {
    name: 'plugin-alias',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@sensoro-design/react': path.resolve(__dirname, '../../packages/react'),
            '@lotus-design/react-primitives': path.resolve(__dirname, '../../packages/primitives'),
          }
        }
      }
    }
  }
}

export default aliasPlugin;
