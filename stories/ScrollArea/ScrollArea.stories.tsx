import React from 'react';
import type { Meta } from '@storybook/react';
import { ScrollArea } from '@sensoro-design/react';
import { Tags } from './components';
import './demo.css';

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
    <ScrollArea className="scroll-area-demo1">
      <Tags />
    </ScrollArea>
  );
}

export function MaxHeight() {
  return (
    <ScrollArea
      style={{
        height: 'unset',
        maxHeight: '18rem',
      }}
      className="scroll-area-demo1 scroll-area-demo-max-height"
    >
      <Tags />
    </ScrollArea>
  );
}
