export interface BaseLegend {
  direction?: 'horizontal' | 'vertical' | 'alone';
  processData?: (name: string, index: number) => string;
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
}
