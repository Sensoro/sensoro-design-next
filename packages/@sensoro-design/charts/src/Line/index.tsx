import type { FC } from 'react';
import React from 'react';

import type { LineConfig } from '@ant-design/plots';
import { Line as BaseLine } from '@ant-design/plots';

export { LineConfig };

const Line: FC<LineConfig> = (config) => {
  return <BaseLine {...config} />;
};

export default Line;
