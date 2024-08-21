import type { InitThemeOption } from './interface';
import { ThemeHelper } from './themeHelper';

export * from './interface';

export function initTheme(options?: InitThemeOption) {
  const helper = new ThemeHelper(options ?? {});
  helper.init();

  return helper;
}
