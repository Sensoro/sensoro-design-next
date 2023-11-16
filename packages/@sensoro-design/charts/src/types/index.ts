import { SegmentedProps } from 'antd/es/segmented';

export interface BaseLegend {
  direction?: 'horizontal' | 'left' | 'right' | 'alone';
  /** direction === alone 生效 */
  position?: 'top' | 'bottom';
  /** direction === left | right 生效，图例距离图表的间距 */
  verticalGap?: number;
  /** 图例各个项的间距 */
  legendItemGap?: number;
  processData?: (name: string, index: number) => string;
  type?: 'svg' | 'box';
  textStyle?: React.CSSProperties;
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
