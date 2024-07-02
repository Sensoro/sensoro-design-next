import * as ScrollAreaPrimitive from '@lotus-design/react-primitives/es/scroll-area';
import { ScrollArea as InternalCompoundedScrollArea } from './ScrollArea';
import type { ScrollAreaProps } from './interface';
import { Autosize } from './Autosize';

type CompoundedComponent = typeof InternalCompoundedScrollArea & {
  Autosize: typeof Autosize;
  useScrollAreaContext: typeof ScrollAreaPrimitive.useScrollAreaContext;
};

const ScrollArea = InternalCompoundedScrollArea as CompoundedComponent;

ScrollArea.Autosize = Autosize;
ScrollArea.useScrollAreaContext = ScrollAreaPrimitive.useScrollAreaContext;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export {
  ScrollArea,
};
export type {
  ScrollAreaProps,
};

export default ScrollArea;
