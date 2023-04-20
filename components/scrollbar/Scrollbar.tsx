import React, { useContext, forwardRef, } from 'react';
import { Scrollbar as LotusScrollbar } from '@lotus-design/scrollbar';
import { classNames } from '@pansy/shared';
import { ConfigContext } from '../config-provider';
import useStyle from './style';

import type { ScrollbarProps, ScrollbarRef } from '@lotus-design/scrollbar';

export const InternalScrollbar: React.ForwardRefRenderFunction<ScrollbarRef, ScrollbarProps> = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    size: customizeSize
  } = props;

  // ===================== Style =====================
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('scrollbar', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const classes = classNames(
    hashId,
    {
      [`${prefixCls}-small`]: customizeSize === 'small',
    },
    className,
  );

  return wrapSSR(
    <LotusScrollbar
      {...props}
      className={classes}
      prefixCls={prefixCls}
      ref={ref}
    />
  );
}

export const Scrollbar = forwardRef<ScrollbarRef, ScrollbarProps>(InternalScrollbar);
