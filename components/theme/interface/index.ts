import type { AliasToken } from './alias';
import type { ComponentTokenMap } from './components';

export type OverrideToken = {
  [key in keyof ComponentTokenMap]: Partial<ComponentTokenMap[key]> & Partial<AliasToken>;
};

/** Final token which contains the components level override */
export type GlobalToken = AliasToken & ComponentTokenMap;

export { PresetColors } from './presetColors';
export type {
  PresetColorType,
  ColorPalettes,
  LegacyColorPalettes,
  PresetColorKey,
} from './presetColors';
export type { SeedToken } from './seeds';
export type {
  MapToken,
  ColorMapToken,
  ColorNeutralMapToken,
  CommonMapToken,
  FontMapToken,
  SizeMapToken,
  HeightMapToken,
} from './maps';
export type { AliasToken } from './alias';
export type { ComponentTokenMap } from './components';
