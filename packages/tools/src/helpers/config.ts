import { loadConfig as load } from 'unconfig';
import type { LoadConfigOptions } from 'unconfig';
import { CONFIG_FILE_NAME } from '../constants';

export async function loadConfig<T>(opts: Omit<LoadConfigOptions<T>, 'sources'> = {}) {
  const { config } = await load({
    sources: [
      {
        files: CONFIG_FILE_NAME,
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs'],
      },
    ],
    merge: false,
    ...opts,
  });

  return config;
}
