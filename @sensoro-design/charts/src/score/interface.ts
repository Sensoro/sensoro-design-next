import type React from 'react';

export interface ScoreConfig {
  /** 额外类名 */
  className?: string;
  /** 额外样式 */
  style?: React.CSSProperties;
  /** 图表大小 */
  size?: string | number;
  /** 图表颜色 */
  color?: string;
  /** 数值 */
  value: number;
  /** 数值样式 */
  valueStyle?: React.CSSProperties;
  /** 单位 */
  unit?: string;
  /** 单位样式 */
  unitStyle?: React.CSSProperties;
  /** 阈值和颜色值映射对象 */
  thresholds?: Record<string, string>;
}
