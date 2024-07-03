import * as AspectRatioPrimitive from '@lotus-design/react-primitives/es/aspect-ratio';
import { factory } from '../helpers/factory';
import type { AspectRatioFactory } from './interface';

export const AspectRatio = factory<AspectRatioFactory>((props, ref) => {
  return (
    <AspectRatioPrimitive.Root {...props} ref={ref} />
  );
});

AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;
