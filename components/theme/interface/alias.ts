import type { MapToken } from './maps';

export interface AliasToken extends MapToken {
  // Background
  /**
   * @name 内容区域背景色（悬停）
   * @nameEN Background color of content area (hover)
   * @desc 控制内容区域背景色在鼠标悬停时的样式。
   * @descEN Control the style of background color of content area when mouse hovers over it.
   */
  colorFillContentHover: string;
  /**
   * @name 替代背景色
   * @nameEN Alternative background color
   * @desc 控制元素替代背景色。
   * @descEN Control the alternative background color of element.
   */
  colorFillAlter: string;
  /**
   * @name 内容区域背景色
   * @nameEN Background color of content area
   * @desc 控制内容区域的背景色。
   * @descEN Control the background color of content area.
   */
  colorFillContent: string;
  /**
   * @name 容器禁用态下的背景色
   * @nameEN Disabled container background color
   * @desc 控制容器在禁用状态下的背景色。
   * @descEN Control the background color of container in disabled state.
   */
  colorBgContainerDisabled: string;
  /**
   * @name 文本悬停态背景色
   * @nameEN Text hover background color
   * @desc 控制文本在悬停状态下的背景色。
   * @descEN Control the background color of text in hover state.
   */
  colorBgTextHover: string;
  /**
   * @name 文本激活态背景色
   * @nameEN Text active background color
   * @desc 控制文本在激活状态下的背景色。
   * @descEN Control the background color of text in active state.
   */
  colorBgTextActive: string;

  // Border
  /**
   * @name 背景边框颜色
   * @nameEN Background border color
   * @desc 控制元素背景边框的颜色。
   * @descEN Control the color of background border of element.
   */
  colorBorderBg: string;
  /**
   * @name 分割线颜色
   * @nameEN Separator color
   * @desc 用于作为分割线的颜色，此颜色和 colorBorderSecondary 的颜色一致，但是用的是透明色。
   * @descEN Used as the color of separator, this color is the same as colorBorderSecondary but with transparency.
   */
  colorSplit: string;

  // Text
  /**
   * @name 占位文本颜色
   * @nameEN Placeholder text color
   * @desc 控制占位文本的颜色。
   * @descEN Control the color of placeholder text.
   */
  colorTextPlaceholder: string;
  /**
   * @name 禁用字体颜色
   * @nameEN Disabled text color
   * @desc 控制禁用状态下的字体颜色。
   * @descEN Control the color of text in disabled state.
   */
  colorTextDisabled: string;
  /**
   * @name 标题字体颜色
   * @nameEN Heading font color
   * @desc 控制标题字体颜色。
   * @descEN Control the font color of heading.
   */
  colorTextHeading: string;
  /**
   * @name 文本标签字体颜色
   * @nameEN Text label font color
   * @desc 控制文本标签字体颜色。
   * @descEN Control the font color of text label.
   */
  colorTextLabel: string;
  /**
   * @name 文本描述字体颜色
   * @nameEN Text description font color
   * @desc 控制文本描述字体颜色。
   * @descEN Control the font color of text description.
   */
  colorTextDescription: string;
  /**
   * @name 固定文本高亮颜色
   * @nameEN Fixed text highlight color
   * @desc 控制带背景色的文本，例如 Primary Button 组件中的文本高亮颜色。
   * @descEN Control the highlight color of text with background color, such as the text in Primary Button components.
   */
  colorTextLightSolid: string;

  /**
   * @name 超链接颜色
   * @nameEN Hyperlink color
   * @desc 控制超链接的颜色。
   * @descEN Control the color of hyperlink.
   */
  colorLink: string;
  /**
   * @name 超链接悬浮颜色
   * @nameEN Hyperlink hover color
   * @desc 控制超链接悬浮时的颜色。
   * @descEN Control the color of hyperlink when hovering.
   */
  colorLinkHover: string;
  /**
   * @name 超链接激活颜色
   * @nameEN Hyperlink active color
   * @desc 控制超链接被点击时的颜色。
   * @descEN Control the color of hyperlink when clicked.
   */
  colorLinkActive: string;
  /**
   * @name 超链接激活颜色
   * @nameEN Hyperlink active color
   * @desc 控制超链接被点击时的颜色。
   * @descEN Control the color of hyperlink when clicked.
   */
  colorLinkDisabled: string;

  // Control
  /**
   * @name 输入组件的外轮廓线宽度
   * @nameEN Input component outline width
   * @desc 控制输入组件的外轮廓线宽度。
   * @descEN Control the outline width of input component.
   */
  controlOutlineWidth: number;

  /**
   * @name 高亮颜色
   * @nameEN Highlight color
   * @desc 控制页面元素高亮时的颜色。
   * @descEN Control the color of page element when highlighted.
   */
  colorHighlight: string;

  /**
   * @name 输入组件的 Outline 颜色
   * @nameEN Input component outline color
   * @desc 控制输入组件的外轮廓线颜色。
   * @descEN Control the outline color of input component.
   */
  controlOutline: string;

  /**
   * @name 控制组件的交互大小
   * @nameEN Interactive size of control component
   * @desc 控制组件的交互大小。
   * @descEN Control the interactive size of control component.
   */
  controlInteractiveSize: number;

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

  // Padding Content
  /**
   * @name 内容水平内间距（LG）
   * @nameEN Content horizontal padding (LG)
   * @desc 控制内容元素水平内间距，适用于大屏幕设备。
   * @descEN Control the horizontal padding of content element, suitable for large screen devices.
   */
  paddingContentHorizontalLG: number;
  /**
   * @name 内容水平内间距
   * @nameEN Content horizontal padding
   * @desc 控制内容元素水平内间距。
   * @descEN Control the horizontal padding of content element.
   */
  paddingContentHorizontal: number;
  /**
   * @name 内容水平内间距（SM）
   * @nameEN Content horizontal padding (SM)
   * @desc 控制内容元素水平内间距，适用于小屏幕设备。
   * @descEN Control the horizontal padding of content element, suitable for small screen devices.
   */
  paddingContentHorizontalSM: number;
  /**
    * @name 内容垂直内间距（LG）
    * @nameEN Content vertical padding (LG)
    * @desc 控制内容元素垂直内间距，适用于大屏幕设备。
    * @descEN Control the vertical padding of content element, suitable for large screen devices.
    */
  paddingContentVerticalLG: number;
  /**
    * @name 内容垂直内间距
    * @nameEN Content vertical padding
    * @desc 控制内容元素垂直内间距。
    * @descEN Control the vertical padding of content element.
    */
  paddingContentVertical: number;
  /**
    * @name 内容垂直内间距（SM）
    * @nameEN Content vertical padding (SM)
    * @desc 控制内容元素垂直内间距，适用于小屏幕设备。
    * @descEN Control the vertical padding of content element, suitable for small screen devices.
    */
  paddingContentVerticalSM: number;

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

  /**
   * @name 无阴影
   * @nameEN Box shadow
   * @desc 控制元素阴影样式。
   * @descEN Control the box shadow style of an element.
   */
  boxShadowNone: string;
  /**
   * @name 一级阴影
   * @nameEN Box shadow
   * @desc 控制元素阴影样式。
   * @descEN Control the box shadow style of an element.
   */
  boxShadow: string;
  /**
   * @name 二级阴影
   * @nameEN Secondary box shadow
   * @desc 控制元素二级阴影样式。
   * @descEN Control the secondary box shadow style of an element.
   */
  boxShadowSecondary: string;
  /**
   * @name 三级阴影
   * @nameEN Tertiary box shadow
   * @desc 控制元素三级盒子阴影样式。
   * @descEN Control the tertiary box shadow style of an element.
   */
  boxShadowTertiary: string;
  /**
   * @name 四级阴影
   * @nameEN Tertiary box shadow
   * @desc 控制元素三级盒子阴影样式。
   * @descEN Control the tertiary box shadow style of an element.
   */
  boxShadowFourth?: string;
  /**
   * @name 五级阴影
   * @nameEN Tertiary box shadow
   * @desc 控制元素三级盒子阴影样式。
   * @descEN Control the tertiary box shadow style of an element.
   */
  boxShadowFifth?: string;

  /**
   * Used for DefaultButton, Switch which has default outline
   * @desc 默认样式的 Outline 颜色
   * @descEN Default style outline color.
   */
  controlTmpOutline: string;

  /**
   * @name 控制水平内间距
   * @nameEN Control horizontal padding
   * @desc 控制元素水平内间距。
   * @descEN Control the horizontal padding of an element.
   */
  controlPaddingHorizontal: number;
  /**
    * @name 控制中小尺寸水平内间距
    * @nameEN Control horizontal padding with a small-medium size
    * @desc 控制元素中小尺寸水平内间距。
    * @descEN Control the horizontal padding of an element with a small-medium size.
    */
  controlPaddingHorizontalSM: number;
}
