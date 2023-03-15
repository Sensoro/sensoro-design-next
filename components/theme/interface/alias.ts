import type { MapToken } from './maps';

export interface AliasToken extends MapToken {
  /**
   * @desc 固定文本高亮颜色，用于带背景色的文本如 Primary Button 组件
   * @descEN Fixed text highlight color, used for text with background color such as Primary Button components
   */
  colorTextLightSolid: string;

  // Font
  /** Operation icon in Select, Cascader, etc. icon fontSize. Normal is same as fontSizeSM */
  fontSizeIcon: number;

  // Line
  /**
   * @desc 聚焦时 Outline 尺寸
   * @descEN Outline size when focused
   */
  lineWidthFocus: number;

  // Padding
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  paddingXXS: number;
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  paddingXS: number;
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  paddingSM: number;
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  padding: number;
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  paddingMD: number;
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  paddingLG: number;
  /**
   * @desc 内间距尺寸
   * @descEN Padding size
   */
  paddingXL: number;

  // Margin
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginXXS: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginXS: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginSM: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  margin: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginMD: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginLG: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginXL: number;
  /**
   * @desc 外间距
   * @descEN Margin size.
   */
  marginXXL: number;

  // =============== Legacy: should be remove ===============
  /**
   * @desc 加载状态透明度
   * @descEN Loading opacity
   */
  opacityLoading: number;
}
