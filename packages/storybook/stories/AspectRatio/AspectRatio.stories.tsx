import React from 'react';
import { Space } from '@arco-design/web-react';
import { Map } from '@pansy/react-amap';
import type { Meta } from '@storybook/react';
import { AspectRatio } from '@sensoro-design/react';
import { Player as PlayerCom } from './components';
import styles from './demo.module.less';

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { },
} satisfies Meta<typeof AspectRatio>;

export default meta;

export function Basic() {
  return (
    <div className={styles.container}>
      <AspectRatio ratio={1080 / 720}>
        <img
          className={styles.image}
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
          alt="Panda"
        />
      </AspectRatio>
    </div>
  );
}

export function AMap() {
  return (
    <Space direction="vertical">
      <div className={styles.container} style={{ width: 500 }}>
        <AspectRatio ratio={16 / 9}>
          <Map />
        </AspectRatio>
      </div>
      <div className={styles.container} style={{ width: 500 }}>
        <AspectRatio ratio={4 / 3}>
          <Map />
        </AspectRatio>
      </div>
    </Space>
  );
}

export function Player() {
  return (
    <Space direction="vertical">
      <div className={styles.container} style={{ width: 500 }}>
        <AspectRatio ratio={16 / 9}>
          <PlayerCom />
        </AspectRatio>
      </div>
      <div className={styles.container} style={{ width: 500 }}>
        <AspectRatio ratio={4 / 3}>
          <PlayerCom />
        </AspectRatio>
      </div>
    </Space>
  );
}
