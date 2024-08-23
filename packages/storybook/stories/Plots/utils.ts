import { Renderer as SVGRenderer } from '@antv/g-svg';

export function getSharedConfig<T = any>() {
  return {
    renderer: new SVGRenderer(),
  } as T;
}
