import path from 'node:path';
import alias, { Alias } from '@rollup/plugin-alias';
import esbuild from 'rollup-plugin-esbuild';
import banner from 'rollup-plugin-banner2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { RollupOptions } from 'rollup';
import { getPackagesList } from '../../packages/get-packages-list';
import { getPath } from '../../utils/get-path'
import { getEntryFile } from '../../utils/getEntryFile'
import { ROLLUP_EXCLUDE_USE_CLIENT } from './rollup-exclude-use-client';
import { ROLLUP_EXTERNALS } from './rollup-externals';

export async function createPackageConfig(packagePath: string): Promise<RollupOptions> {
  const packagesList = getPackagesList();

  const entry = `${getEntryFile(packagePath)}`;

  const aliasEntries: Alias[] = packagesList.map((pkg) => ({
    find: new RegExp(`^${pkg.packageJson.name}`),
    replacement: path.resolve(pkg.path, 'src'),
  }));

  const plugins = [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: getPath(`tsconfig.json`),
    }),
    alias({ entries: aliasEntries }),
    replace({ preventAssignment: true }),
    banner((chunk) => {
      if (!ROLLUP_EXCLUDE_USE_CLIENT.includes(chunk.fileName)) {
        return "'use client';\n";
      }

      return undefined;
    }),
  ]

  return {
    input: path.resolve(packagePath, entry),
    output: [
      {
        format: 'es',
        entryFileNames: '[name].mjs',
        dir: path.resolve(packagePath, 'esm'),
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        dir: path.resolve(packagePath, 'cjs'),
        preserveModules: true,
        sourcemap: true,
        interop: 'auto',
      },
    ],
    external: ROLLUP_EXTERNALS,
    plugins,
    onLog(level, log, handler) {
      if (log.code === 'EMPTY_BUNDLE') return
      if (log.code === 'UNRESOLVED_IMPORT') return
      return handler(level, log)
    },
    onwarn(warning, warn) {
      if (warning.code === 'SOURCEMAP_ERROR') return
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
      warn(warning)
    },
  };
}
