import { SegmentedProps } from 'antd/es/segmented';

export interface BaseLegend {
  direction?: 'horizontal' | 'vertical' | 'alone';
  /** direction === alone 生效 */
  position?: 'top' | 'bottom';
  processData?: (name: string, index: number) => string;
  type?: 'svg' | 'box';
}

export interface BaseTooltip {
  theme?: 'light' | 'dark';
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
}
