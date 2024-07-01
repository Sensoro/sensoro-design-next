import React from 'react';
import type { Meta } from '@storybook/react';
import { NumberFormatter } from '@sensoro-design/react';

const meta = {
  title: 'Components/NumberFormatter',
  component: NumberFormatter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { },
} satisfies Meta<typeof NumberFormatter>;

export default meta;

export function Basic() {
  return (
    <NumberFormatter value={1000000} thousandSeparator />
  );
}

export function Separator() {
  return (
    <NumberFormatter value={1000000} thousandSeparator="." decimalSeparator="," />
  );
}
