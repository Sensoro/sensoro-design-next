import type { DataSchemeTokenMap, PaletteTokenMap, ThemeMode } from '@visactor/vchart-theme-utils';
import { VChartExtendThemeHelper } from '@visactor/vchart-theme-utils';
import type { ITheme } from '@visactor/vchart';
import type { InitThemeOption } from './interface';

import { light } from './light';
import { dark } from './dark';
import { getDataSchemeTokenMap, getPaletteTokenMap } from './tokenMap';

export class ThemeHelper extends VChartExtendThemeHelper {
  static themeModeAttribute = 'sensoro-theme';
  static themeNamePrefix = 's';
  themeModeAttribute = ThemeHelper.themeModeAttribute;
  themeNamePrefix = ThemeHelper.themeNamePrefix;

  baseTheme: Record<ThemeMode, ITheme> = {
    light,
    dark,
  };

  declare tokenMap: {
    dataScheme?: DataSchemeTokenMap;
    palette?: PaletteTokenMap;
  };

  declare options: InitThemeOption;

  constructor(options: InitThemeOption) {
    super(options);

    const { prefix } = options;
    this.tokenMap = {
      dataScheme: getDataSchemeTokenMap(prefix),
      palette: getPaletteTokenMap(prefix),
    };
  }
}
