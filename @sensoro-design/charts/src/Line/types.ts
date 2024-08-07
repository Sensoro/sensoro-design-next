import type { LineConfig } from '@ant-design/plots';

export type AreaConfig = NonNullable<LineConfig['area']>;
export type PointConfig = NonNullable<LineConfig['point']>;
export type AxisConfig = NonNullable<LineConfig['axis']>;
export type InteractionConfig = NonNullable<LineConfig['interaction']>;
