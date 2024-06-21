import type React from 'react';
import type { Primitive } from '../primitive';
import type { Scope } from '../context';

export interface ItemData { id: string; focusable: boolean; active: boolean }
export type ScopedProps<P> = P & { __scopeRovingFocusGroup?: Scope };

export type Orientation = React.AriaAttributes['aria-orientation'];
export type Direction = 'ltr' | 'rtl';
export type FocusIntent = 'first' | 'last' | 'prev' | 'next';

export interface RovingFocusGroupOptions {
  /**
   * The orientation of the group.
   * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   */
  orientation?: Orientation;
  /**
   * The direction of navigation between items.
   */
  dir?: Direction;
  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  loop?: boolean;
}

export type RovingContextValue = RovingFocusGroupOptions & {
  currentTabStopId: string | null;
  onItemFocus: (tabStopId: string) => void;
  onItemShiftTab: () => void;
  onFocusableItemAdd: () => void;
  onFocusableItemRemove: () => void;
};

/* ----------------------------------------------------------------------------------------------- */
export type RovingFocusGroupImplElement = React.ElementRef<typeof Primitive.div>;
export type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface RovingFocusGroupImplProps
  extends Omit<PrimitiveDivProps, 'dir'>,
  RovingFocusGroupOptions {
  currentTabStopId?: string | null;
  defaultCurrentTabStopId?: string;
  onCurrentTabStopIdChange?: (tabStopId: string | null) => void;
  onEntryFocus?: (event: Event) => void;
  preventScrollOnEntryFocus?: boolean;
}

/* ----------------------------------------------------------------------------------------------- */
export type RovingFocusGroupElement = RovingFocusGroupImplElement;
export interface RovingFocusGroupProps extends RovingFocusGroupImplProps {}

/* ----------------------------------------------------------------------------------------------- */
export type RovingFocusItemElement = React.ElementRef<typeof Primitive.span>;
export type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Primitive.span>;
export interface RovingFocusItemProps extends PrimitiveSpanProps {
  tabStopId?: string;
  focusable?: boolean;
  active?: boolean;
}
