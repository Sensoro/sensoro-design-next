import { G2 } from '@ant-design/plots';

import { Dark } from './theme/dark';
import { Light } from './theme/light';

G2.register('theme.dark', Dark);
G2.register('theme.light', Light);

export { G2 };
export * from './components';
export * from './config/colors';
