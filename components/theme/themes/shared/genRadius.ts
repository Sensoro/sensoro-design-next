import type { MapToken } from '../../interface';

type Radius = Pick<MapToken, 'borderRadius' | 'borderRadiusXS' | 'borderRadiusSM' | 'borderRadiusLG'>;

export const genRadius = (radiusBase: number): Radius => {
  let radiusSM = radiusBase;
  let radiusXS = radiusBase * 2;
  let radiusLG = radiusBase * 2 * 2;

  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
  };
}
