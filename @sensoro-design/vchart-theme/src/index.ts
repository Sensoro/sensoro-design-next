import type { InitThemeOption } from './interface';
import { ThemeHelper } from './themeHelper';

export * from './interface';
export * from './themeMap';
export * from './light';
export * from './dark';

export function initTheme(options?: InitThemeOption) {
  const helper = new ThemeHelper(options ?? {});
  helper.init();
  return helper;
}
