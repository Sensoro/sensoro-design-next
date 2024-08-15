import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import type { Plugin } from 'rollup';
import type { RollupCommonJSOptions } from '@rollup/plugin-commonjs';
import type { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';

interface Options {
  plugins?: Plugin[];
  nodeResolveOptions?: RollupNodeResolveOptions;
  commonjsOptions?: RollupCommonJSOptions;
}

export function getPlugins(opts: Options = {}): Plugin[] {
  const {
    plugins = [],
    nodeResolveOptions = {},
    commonjsOptions = {},
  } = opts;

  return [
    ...plugins,
    nodeResolve({
      mainFields: ['module', 'browser', 'main'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'],
      ...nodeResolveOptions,
    }),
    commonjs(commonjsOptions),
    typescript({ sourceMap: true }),
  ];
}
