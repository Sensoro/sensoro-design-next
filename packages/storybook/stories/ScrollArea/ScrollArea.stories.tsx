import React from 'react';
import type { Meta } from '@storybook/react';
import { ScrollArea } from '@sensoro-design/react';
import { Box, Tags } from './components';
import styles from './demo.module.less';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { },
} satisfies Meta<typeof ScrollArea>;

export default meta;

export function Basic() {
  return (
    <ScrollArea className={styles.demo1}>
      <Tags />
    </ScrollArea>
  );
}

/**
 * 禁用水平滚动条
 */
export function DisableHorizontalScrollbars() {
  return (
    <ScrollArea scrollbars="y" className={styles.demo2}>
      <Box />
    </ScrollArea>
  );
}

export function MaxHeight() {
  return (
    <ScrollArea
      viewportProps={{
        style: {
          maxHeight: '18rem',
        },
      }}
      className={styles.demo3}
    >
      <Tags />
    </ScrollArea>
  );
}
