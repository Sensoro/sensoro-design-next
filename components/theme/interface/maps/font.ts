export interface FontMapToken {
  // Font Size
  /**
   * @desc 小号字体大小
   * @descEN Small font size
   * @default 12
   */
  fontSizeSM: number;
  /**
   * @desc 标准字体大小
   * @descEN Standard font size
   * @default 14
   */
  fontSize: number;
  /**
   * @desc 大号字体大小
   * @descEN Large font size
   * @default 16
   */
  fontSizeLG: number;
  /**
   * @desc 超大号字体大小
   * @descEN Super large font size
   * @default 20
   */
  fontSizeXL: number;

  /**
   * @name 一级标题字号
   * @desc H1 标签所使用的字号
   * @default 24
   */
  fontSizeHeading1: number;
  /**
   * @name 二级标题字号
   * @desc h2 标签所使用的字号
   * @default 16
   */
  fontSizeHeading2: number;
  /**
   * @name 三级标题字号
   * @desc h3 标签使用的字号
   * @default 14
   */
  fontSizeHeading3: number;

  // LineHeight
  /**
   * @desc 小型文本行高
   * @descEN Line height of small text.
   */
  lineHeightSM: number;
  /**
   * @desc 文本行高
   * @descEN Line height of text.
   */
  lineHeight: number;
  /**
   * @desc 大型文本行高
   * @descEN Line height of large text.
   */
  lineHeightLG: number;
  /**
   * @desc 超大型文本行高
   */
  lineHeightXL: number;

  /**
   * @desc 一级标题行高
   */
  lineHeightHeading1: number;
  /**
   * @desc 二级标题行高
   */
  lineHeightHeading2: number;
  /**
   * @desc 三级标题行高
   */
  lineHeightHeading3: number;

  /**
   * @desc 小号字重大小
   * @descEN Small font weight
   * @default 300
   */
  fontWeightSM: number;
  /**
   * @desc 标准字重大小
   * @descEN Small font weight
   * @default 400
   */
  fontWeight: number;
  /**
   * @desc 大号字重大小
   * @descEN Large font size
   * @default 500
   */
  fontWeightLG: number;
  /**
   * @desc 超大号字重大小
   * @descEN Super large font size
   * @default 600
   */
  fontWeightXL: number;
}
