import React from 'react';
import { isString } from '@pansy/shared';
import { isFragment, cloneElement } from '../_utils/reactNode';

import type { BaseButtonProps } from './Button';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];

const ButtonStatuses = ['default', 'warning', 'danger', 'success'] as const;
export type ButtonStatus = typeof ButtonStatuses[number];

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = typeof ButtonShapes[number];

function splitCNCharsBySpace(child: React.ReactElement | string | number, needInserted: boolean) {
  if (child === null || child === undefined) {
    return;
  }

  const SPACE = needInserted ? ' ' : '';

  if (
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    isString(child.type) &&
    isTwoCNChar(child.props.children)
  ) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE),
    });
  }

  if (typeof child === 'string') {
    return isTwoCNChar(child) ? <span>{child.split('').join(SPACE)}</span> : <span>{child}</span>;
  }

  if (isFragment(child)) {
    return <span>{child}</span>;
  }

  return child;
}

export function isUnBorderedButtonType(type?: ButtonType) {
  return type === 'text' || type === 'link';
}

export function spaceChildren(children: React.ReactNode, needInserted: boolean) {
  let isPrevChildPure: boolean = false;
  const childList: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  });

  return React.Children.map(childList, (child) =>
    splitCNCharsBySpace(child as React.ReactElement | string | number, needInserted),
  );
}

export type LoadingConfigType = {
  loading: boolean;
  delay: number;
};

export function getLoadingConfig(loading: BaseButtonProps['loading']): LoadingConfigType {
  if (typeof loading === 'object' && loading) {
    const delay = loading?.delay;
    const isDelay = !Number.isNaN(delay) && typeof delay === 'number';
    return {
      loading: false,
      delay: isDelay ? delay : 0,
    };
  }

  return {
    loading: !!loading,
    delay: 0,
  };
}
