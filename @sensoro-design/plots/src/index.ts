import { register } from '@antv/g2';
import { Dark } from './theme/dark';
import { Light } from './theme/light';

register('theme.dark', Dark);
register('theme.light', Light);

export { Dark, Light };
export * from './components';
export * from './config/colors';
