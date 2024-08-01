import { } from '@antv/g2';

export interface Data {
  name: string;
  value: number;
}

export interface BubbleConfig {
  data: Data[];
  height?: number;
  width?: number;
  colors?: string[];
  layout?: {
    padding?: number;
  };
  style?: {
    labelFontSize?: number;
  };
}
