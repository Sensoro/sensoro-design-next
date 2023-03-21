import React, { useContext, useMemo, createContext } from 'react';
import { classNames } from '@pansy/shared';
import { ConfigContext } from '../config-provider';

import type { SizeType } from '../config-provider/SizeContext';
import type { DirectionType } from '../config-provider';

export interface SpaceCompactItemContextType {
  compactSize?: SizeType;
  compactDirection?: 'horizontal' | 'vertical';
  isFirstItem?: boolean;
  isLastItem?: boolean;
}

export const SpaceCompactItemContext = createContext<SpaceCompactItemContextType | null>(
  null,
);

export const useCompactItemContext = (prefixCls: string, direction: DirectionType) => {
  const compactItemContext = useContext(SpaceCompactItemContext);

  const compactItemClassnames = useMemo(() => {
    if (!compactItemContext) return '';

    const { compactDirection, isFirstItem, isLastItem } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';

    return classNames({
      [`${prefixCls}-compact${separator}item`]: true,
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl',
    });
  }, [prefixCls, direction, compactItemContext]);

  return {
    compactSize: compactItemContext?.compactSize,
    compactDirection: compactItemContext?.compactDirection,
    compactItemClassnames,
  };
}

export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  size?: SizeType;
  direction?: 'horizontal' | 'vertical';
  block?: boolean;
  rootClassName?: string;
}

export const Compact: React.FC<SpaceCompactProps> = (props) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
  } = props;
  const prefixCls = getPrefixCls('space-compact', customizePrefixCls);

  console.log(prefixCls);

  return null;
}
