// files names that should not have use client directive at the top of the output file
export const ROLLUP_EXCLUDE_USE_CLIENT = [
  'index',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
