import '@lotus-design/react-primitives/es/context';
import React from 'react';
import { Space } from '@arco-design/web-react';
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
 * 大小示例
 */
export function Size() {
  return (
    <Space direction="vertical">
      <Space>
        <ScrollArea className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea size="small" className={styles.demo1}>
          <Tags />
        </ScrollArea>
      </Space>
      <Space>
        <ScrollArea type="always" className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea type="always" size="small" className={styles.demo1}>
          <Tags />
        </ScrollArea>
      </Space>
    </Space>
  );
}

/**
 * 类型示例，设置滚动条的显示策略
 */
export function Type() {
  return (
    <Space>
      <ScrollArea className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="always" className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="hover" className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="scroll" className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="never" className={styles.demo1}>
        <Tags />
      </ScrollArea>
    </Space>
  );
}

/**
 * 主题示例、目前仅支持暗黑主题及明亮主题
 */
export function Theme() {
  return (
    <Space direction="vertical">
      <Space>
        <ScrollArea className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea
          theme="dark"
          className={styles.demo1}
          style={{ background: 'rgb(26, 38, 61)' }}
        >
          <Tags />
        </ScrollArea>
      </Space>
      <Space>
        <ScrollArea type="always" className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea
          type="always"
          theme="dark"
          className={styles.demo1}
          style={{ background: 'rgb(26, 38, 61)' }}
        >
          <Tags />
        </ScrollArea>
      </Space>
    </Space>
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
