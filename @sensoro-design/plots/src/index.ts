import { register } from '@antv/g2';
import { Dark } from './theme/dark';
import { Light } from './theme/light';
import { hyphenPoint } from './symbol/hyphenPoint';

register('theme.dark', Dark);
register('theme.light', Light);

register('symbol.hyphenPoint', hyphenPoint);

export { Dark, Light };
export * from './components';
export * from './config/colors';
