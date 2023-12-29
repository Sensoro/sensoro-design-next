import { SegmentedProps } from 'antd/es/segmented';

export interface BaseLegend {
  direction?: 'horizontal' | 'left' | 'right' | 'alone';
  /** direction === alone 生效 */
  position?: 'top' | 'bottom';
  /** direction === left | right 生效，图例距离图表的间距 */
  verticalGap?: number;
  /** 图例各个项的间距 */
  legendItemGap?: number;
  /** 换行后的行间距 */
  lineGap?: number;
  /** direction === alone 生效,图例距离图表的上\下间距 */
  aloneGap?: number;
  processData?: (name: string, index: number) => string;
  /** 图例类型 */
  type?: 'svg' | 'box';
  /** 自定义图例样式 */
  textStyle?: React.CSSProperties;
  /** 没有分组情况下需要展示多个图例，图例名称 */
  labels?: string[];
  /** 图例高度 */
  height?: number;
  /** 分页图例每页多少行 */
  pageRow?: number;
}

export interface BaseTooltip {
  theme?: 'light' | 'dark';
  showTitle?: boolean;
}

export interface BaseConfig {
  /** 图表标题 */
  title?: string;
  /** 自定义 Tooltip 数据处理 */
  customContentData?: (data: any[]) => any[];
  /** 自定义图例配置 */
  legend?: boolean | BaseLegend;
  /** 自定义tooltip配置 */
  tooltip?: boolean | BaseTooltip;
  /** 时间选择器配置 */
  timeRange?: SegmentedProps;
  /** style */
  style?: React.CSSProperties;
  /** 类名 */
  className?: string;
  // 自定义色值
  customsColors?: string[];
  empty?: boolean | string | React.ReactNode;
}
