import React from 'react';
import { GROUP_NAME } from '../constants';
import { Collection } from '../context';
import type {
  RovingFocusGroupElement,
  RovingFocusGroupProps,
  ScopedProps,
} from '../types';
import { RovingFocusGroupImpl } from './RovingFocusGroupImpl';

export const RovingFocusGroup = React.forwardRef<RovingFocusGroupElement, RovingFocusGroupProps>(
  (props: ScopedProps<RovingFocusGroupProps>, forwardedRef) => {
    return (
      <Collection.Provider scope={props.__scopeRovingFocusGroup}>
        <Collection.Slot scope={props.__scopeRovingFocusGroup}>
          <RovingFocusGroupImpl {...props} ref={forwardedRef} />
        </Collection.Slot>
      </Collection.Provider>
    );
  },
);

RovingFocusGroup.displayName = GROUP_NAME;
