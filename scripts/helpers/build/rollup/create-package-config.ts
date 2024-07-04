import path from 'node:path';
import alias, { Alias } from '@rollup/plugin-alias';
import esbuild from 'rollup-plugin-esbuild';
import banner from 'rollup-plugin-banner2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { getPackagesList } from '../../packages/get-packages-list';
import { getPath } from '../../utils/get-path'
import { getEntryFile } from '../../utils/getEntryFile'
import { ROLLUP_EXCLUDE_USE_CLIENT } from './rollup-exclude-use-client';
import { ROLLUP_EXTERNALS } from './rollup-externals';
import glob from 'fast-glob'

import type { Plugin, RollupOptions } from 'rollup'

interface Options {
  cwd?: string
  esDir?: string;
  libDir?: string;
  aliases?: Alias[],
  source?: glob.Pattern | glob.Pattern[]
}

export async function createPackageConfig(options: Options): Promise<RollupOptions> {
  const {
    cwd = process.cwd(),
    esDir = 'es',
    libDir = 'lib',
    aliases = [],
    source = [
      'src/**/*.{ts,tsx}'
    ]
  } = options;
  const packagePath = cwd;
  const packagesList = getPackagesList();

  const packageJson = await import(path.resolve(packagePath, 'package.json'))
  const isCli = packageJson.bin !== undefined

  const entry = `${getEntryFile(packagePath)}`;

  const aliasEntries: Alias[] = packagesList.map((pkg) => ({
    find: new RegExp(`^${pkg.packageJson.name}`),
    replacement: path.resolve(pkg.path, 'src'),
  }));

  const plugins: Plugin[] = [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: getPath(`tsconfig.json`),
      platform: isCli ? 'node' : 'browser',
    }),
    alias({ entries: aliasEntries }),
    replace({ preventAssignment: true }),
    banner((chunk) => {
      if (!ROLLUP_EXCLUDE_USE_CLIENT.includes(chunk.fileName)) {
        return "'use client';\n";
      }

      return undefined;
    }),
    {
      name: '@rollup-plugin/remove-empty-chunks',
      generateBundle(_, bundle) {
        for (const [name, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'chunk' && chunk.code.length === 0) {
            delete bundle[name]
          }
        }
      },
    },
  ]

  const deps = [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ]

  const external = new RegExp(`^(${deps.join('|')})`)

  const entries = await glob(source, {
    cwd: packagePath,
    ignore: [
      'src/**/style/*.ts',
      'src/**/*.test.ts',
      'src/**/*.test.tsx'
    ]
  })

  const rollupOptions: RollupOptions = {
    input: entries.map(filePath => {
      return path.resolve(packagePath, filePath)
    }),
    output: [
      {
        format: 'es',
        entryFileNames: '[name].mjs',
        dir: path.resolve(packagePath, esDir),
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        dir: path.resolve(packagePath, libDir),
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

  return rollupOptions;
}
