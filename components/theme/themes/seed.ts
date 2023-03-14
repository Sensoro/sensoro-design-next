import type { PresetColorType, SeedToken } from '../internal';

export const defaultPresetColors: PresetColorType = {
  blue: '#2b6de5',
  purple: '#A140E7',
  cyan: '#13C2C2',
  green: '#1ACB7C',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F72231',
  orange: '#F98209',
  yellow: '#F9D806',
  volcano: '#FA541C',
  geekblue: '#2EBBEA',
  gold: '#F9AA06',
  lime: '#80D40C',
};

export const seedToken: SeedToken = {
  // preset color palettes
  ...defaultPresetColors,

  // Color
  colorPrimary: defaultPresetColors.blue,
  colorSuccess: defaultPresetColors.green,
  colorWarning: defaultPresetColors.gold,
  colorError: defaultPresetColors.red,
  colorInfo: '#1677ff',
  colorTextBase: '',

  colorBgBase: '',

  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,

  // Radius
  borderRadius: 2,

  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,

  // Control Base
  controlHeight: 32,

  // Line
  lineWidth: 1,
  lineType: 'solid',

  // Motion
  motionUnit: 0.1,
  motionBase: 0,

  // Image
  opacityImage: 1,
}

