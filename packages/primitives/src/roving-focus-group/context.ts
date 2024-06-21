import { createContextScope } from '../context';
import { createCollection } from '../collection';
import { GROUP_NAME } from './constants';
import type { ItemData, RovingContextValue } from './types';

const [Collection, useCollection, createCollectionScope]
  = createCollection<HTMLSpanElement, ItemData>(GROUP_NAME);

const [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope],
);

const [RovingFocusProvider, useRovingFocusContext]
  = createRovingFocusGroupContext<RovingContextValue>(GROUP_NAME);

export {
  Collection,
  useCollection,

  RovingFocusProvider,
  useRovingFocusContext,

  createRovingFocusGroupScope,
};
