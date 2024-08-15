import process from 'node:process';
import path from 'node:path';
import { readPackage } from 'read-pkg';
import glob from 'fast-glob';
import type { OutputOptions, Plugin, RollupOptions } from 'rollup';
import type { ToolsConfig } from '../../types';
import { type Options as GetPluginOptions, getPlugins } from './plugins';

interface Options extends ToolsConfig, Omit<GetPluginOptions, 'plugins'> {
  source?: glob.Pattern | glob.Pattern[];
}

export async function createConfig(options: Options = {}) {
  const {
    source = [
      'src/**/*.{ts,tsx}',
    ],
    nodeResolveOptions,
    esbuildOptions,
    commonjsOptions,
  } = options;
  const cwd = options.cwd ?? process.cwd();

  const packageJson = await readPackage({
    cwd,
  });
  const isCli = packageJson.bin !== undefined;

  const plugins: Plugin[] = [
    ...getPlugins({
      esbuildOptions: {
        platform: isCli ? 'node' : 'browser',
        ...esbuildOptions,
      },
      nodeResolveOptions,
      commonjsOptions,
    }),
    {
      name: '@rollup-plugin/remove-empty-chunks',
      generateBundle(_, bundle) {
        for (const [name, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'chunk' && chunk.code.length === 0) {
            delete bundle[name];
          }
        }
      },
    },
  ];

  const deps = [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ];

  const external = new RegExp(`^(${deps.join('|')})`);

  const entries = await glob(source, {
    cwd,
    ignore: [
      'src/**/style/*.ts',
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
    ],
  });

  const rollupOptions: RollupOptions = {
    input: entries.map((filePath) => {
      return path.resolve(cwd, filePath);
    }),
    plugins,
    external,
    onLog(level, log, handler) {
      if (log.code === 'EMPTY_BUNDLE')
        return;
      if (log.code === 'UNRESOLVED_IMPORT')
        return;
      return handler(level, log);
    },
    onwarn(warning, warn) {
      if (warning.code === 'SOURCEMAP_ERROR')
        return;
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE')
        return;
      warn(warning);
    },
  };

  const output: OutputOptions[] = [];

  if (options.esm) {
    const esmOutpout: OutputOptions = {
      format: 'es',
      entryFileNames: '[name].mjs',
      dir: path.resolve(cwd, options.esm?.output || 'es'),
      preserveModules: true,
      sourcemap: true,
    };

    output.push(esmOutpout);
  }

  if (options.cjs) {
    const cjsOutpout: OutputOptions = {
      format: 'cjs',
      entryFileNames: '[name].cjs',
      dir: path.resolve(cwd, options?.cjs?.output || 'lib'),
      preserveModules: true,
      sourcemap: true,
      interop: 'auto',
    };

    output.push(cjsOutpout);
  }

  return {
    ...rollupOptions,
    output,
  };
}
