import React, { forwardRef } from 'react';
import { Primitive, composeEventHandlers } from '../../primitive';
import { useControllableState } from '../../hooks/useControllableState';
import { useCallbackRef } from '../../hooks/useCallbackRef';
import { useDirection } from '../../direction';
import { useComposedRefs } from '../../compose-refs';
import { focusFirst } from '../utils';
import { RovingFocusProvider, useCollection } from '../context';
import { ENTRY_FOCUS, EVENT_OPTIONS } from '../constants';
import type {
  RovingFocusGroupImplElement,
  RovingFocusGroupImplProps,
  ScopedProps,
} from '../types';

export const RovingFocusGroupImpl = forwardRef<
  RovingFocusGroupImplElement,
  RovingFocusGroupImplProps
>((props: ScopedProps<RovingFocusGroupImplProps>, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React.useRef<RovingFocusGroupImplElement>(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange,
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React.useState(0);

  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);

  return (
    <RovingFocusProvider
      scope={__scopeRovingFocusGroup}
      orientation={orientation}
      dir={direction}
      loop={loop}
      currentTabStopId={currentTabStopId}
      onItemFocus={React.useCallback(
        tabStopId => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId],
      )}
      onItemShiftTab={React.useCallback(() => setIsTabbingBackOut(true), [])}
      onFocusableItemAdd={React.useCallback(
        () => setFocusableItemsCount(prevCount => prevCount + 1),
        [],
      )}
      onFocusableItemRemove={React.useCallback(
        () => setFocusableItemsCount(prevCount => prevCount - 1),
        [],
      )}
    >
      <Primitive.div
        tabIndex={isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0}
        data-orientation={orientation}
        {...groupProps}
        ref={composedRefs}
        style={{ outline: 'none', ...props.style }}
        onMouseDown={composeEventHandlers(props.onMouseDown, () => {
          isClickFocusRef.current = true;
        })}
        onFocus={composeEventHandlers(props.onFocus, (event) => {
          // We normally wouldn't need this check, because we already check
          // that the focus is on the current target and not bubbling to it.
          // We do this because Safari doesn't focus buttons when clicked, and
          // instead, the wrapper will get focused and not through a bubbling event.
          const isKeyboardFocus = !isClickFocusRef.current;

          if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
            const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
            event.currentTarget.dispatchEvent(entryFocusEvent);

            if (!entryFocusEvent.defaultPrevented) {
              const items = getItems().filter(item => item.focusable);
              const activeItem = items.find(item => item.active);
              const currentItem = items.find(item => item.id === currentTabStopId);
              const candidateItems = [activeItem, currentItem, ...items].filter(
                Boolean,
              ) as typeof items;
              const candidateNodes = candidateItems.map(item => item.ref.current!);
              focusFirst(candidateNodes, preventScrollOnEntryFocus);
            }
          }

          isClickFocusRef.current = false;
        })}
        onBlur={composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))}
      />
    </RovingFocusProvider>
  );
});
