import { useEffect } from 'react';
import { useResizeObserver } from '@rcuse/core';
import { useScrollAreaContext } from '../context';
import type { ScopedProps } from '../types';

interface AutoHeightProps {}

export function AutoHeight(props: ScopedProps<AutoHeightProps>) {
  // eslint-disable-next-line react/prefer-destructuring-assignment
  const context = useScrollAreaContext('ScrollAreaScrollbar', props.__scopeScrollArea);

  const onResize = () => {
    if (context.scrollArea) {
      context.scrollArea.style.height = '100%';
      const height = context.scrollArea.clientHeight;
      const scrollHeight = context.scrollArea.scrollHeight;

      if (height < scrollHeight) {
        context.scrollArea.style.height = `${height}px`;
      }
    }
  };

  useResizeObserver(context.scrollArea, onResize);

  useEffect(() => {
    if (context.scrollArea) {
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.scrollArea]);

  return null;
}
