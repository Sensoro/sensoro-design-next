import { RovingFocusGroup } from './components/RovingFocusGroup';
import { RovingFocusGroupItem } from './components/RovingFocusGroupItem';
import { createRovingFocusGroupScope } from './context';

import type { RovingFocusGroupProps, RovingFocusItemProps } from './types';

const Root = RovingFocusGroup;
const Item = RovingFocusGroupItem;

export {
  createRovingFocusGroupScope,
  //
  RovingFocusGroup,
  RovingFocusGroupItem,
  //
  Root,
  Item,
};
export type { RovingFocusGroupProps, RovingFocusItemProps };
