import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

import type { Plugin } from 'rollup';
import type { RollupCommonJSOptions } from '@rollup/plugin-commonjs';
import type { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';
import type { Options as EsbuildOptions } from 'rollup-plugin-esbuild';

export interface Options {
  plugins?: Plugin[];
  nodeResolveOptions?: RollupNodeResolveOptions;
  commonjsOptions?: RollupCommonJSOptions;
  esbuildOptions?: EsbuildOptions;
}

export function getPlugins(opts: Options = {}): Plugin[] {
  const {
    plugins = [],
    nodeResolveOptions = {},
    commonjsOptions = {},
    esbuildOptions = {},
  } = opts;

  return [
    ...plugins,
    nodeResolve({
      mainFields: ['module', 'browser', 'main'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'],
      ...nodeResolveOptions,
    }),
    commonjs(commonjsOptions),
    esbuild({
      sourceMap: false,
      ...esbuildOptions,
    }),
  ];
}
