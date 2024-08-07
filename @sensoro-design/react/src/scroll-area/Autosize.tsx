import * as React from 'react';
import { clsx } from 'clsx';
import { Primitive } from '@lotus-design/react-primitives/es/primitive';
import { useConfigContext } from '../config-provider';
import { factory } from '../helpers/factory';
import type { AutosizeFactory } from './interface';
import { ScrollArea } from './ScrollArea';

export const Autosize = factory<AutosizeFactory>(
  (props, forwardedRef) => {
    const {
      children,
      scrollHideDelay,
      type,
      dir,
      scrollbars,
      size,
      theme,
      viewportRef,
      viewportProps,
      onScrollPositionChange,
      ...others
    } = props;
    const { getPrefixCls } = useConfigContext('ScrollArea');
    const prefixCls = getPrefixCls!('scroll-area');

    return (
      <Primitive.div
        {...others}
        ref={forwardedRef}
        className={clsx(`${prefixCls}-autosize`, props.className)}
      >
        <Primitive.div>
          <ScrollArea
            type={type}
            scrollHideDelay={scrollHideDelay}
            dir={dir}
            scrollbars={scrollbars}
            theme={theme}
            viewportRef={viewportRef}
            viewportProps={viewportProps}
            size={size}
            onScrollPositionChange={onScrollPositionChange}
          >
            {children}
          </ScrollArea>
        </Primitive.div>
      </Primitive.div>
    );
  },
);
