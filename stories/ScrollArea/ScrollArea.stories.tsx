import React from 'react';
import type { Meta } from '@storybook/react';
import { ScrollArea } from '@sensoro-design/react';
import { Tags } from './components';
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

export function MaxHeight() {
  return (
    <ScrollArea
      viewportProps={{
        style: {
          maxHeight: '18rem',
        },
      }}
      className={styles.demo2}
    >
      <Tags />
    </ScrollArea>
  );
}
