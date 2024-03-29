import type { PresetColorType, SeedToken } from '../internal';

export const defaultPresetColors: PresetColorType = {
  // 蓝色
  blue: '#2B6DE5',
  // 蓝紫色
  violet: '#4A42F0',
  // 紫色
  purple: '#A140E7',
  // 红色
  red: '#F72231',
  // 橙色
  orange: '#F98206',
  // 黄橙色
  gold: '#F9AA06',
  // 黄色
  yellow: '#F9D806',
  // 亮绿色
  lime: '#80D40C',
  // 绿色
  green: '#1ACB7C',
  // 亮蓝色
  lightblue: '#2EBBEA',
};

export const seedToken: SeedToken = {
  // preset color palettes
  ...defaultPresetColors,

  // Color
  colorPrimary: defaultPresetColors.blue,
  colorSuccess: defaultPresetColors.green,
  colorWarning: defaultPresetColors.gold,
  colorError: defaultPresetColors.red,
  colorInfo: defaultPresetColors.blue,
  colorTextBase: '',

  colorBgBase: '',

  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,

  // Line
  lineWidth: 1,
  lineType: 'solid',

  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',

  // Radius
  borderRadius: 2,
  borderRadiusNone: 0,
  borderRadiusCircle: '50%',

  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,

  // Control Base
  controlHeight: 32,

  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,

  // Image
  opacityImage: 1,
}

