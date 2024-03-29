import React, {
  isValidElement,
  cloneElement as reactCloneElement,
} from 'react';

type AnyObject = Record<PropertyKey, any>;
type RenderProps = AnyObject | ((originProps: AnyObject) => AnyObject | void);

export function isFragment(child: any): boolean {
  return child && isValidElement(child) && child.type === React.Fragment;
}

export function replaceElement(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props?: RenderProps,
): React.ReactNode {
  if (!isValidElement(element)) {
    return replacement;
  }
  return reactCloneElement(
    element,
    typeof props === 'function' ? props(element.props || {}) : props,
  );
}

export function cloneElement(element: React.ReactNode, props?: RenderProps): React.ReactElement {
  return replaceElement(element, element, props) as React.ReactElement;
}

export { isValidElement };
