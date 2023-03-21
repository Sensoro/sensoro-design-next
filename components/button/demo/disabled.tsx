import React from 'react';
import { Button, Space } from 'sensoro-design';

const App: React.FC = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary">Primary Button</Button>
      <Button type="primary" disabled>Primary Button</Button>
    </Space>
    <Space>
      <Button>Default Button</Button>
      <Button disabled>Default Button</Button>
    </Space>
    <Space>
      <Button type="dashed">Dashed Button</Button>
      <Button type="dashed" disabled>Dashed Button</Button>
    </Space>
    <Space>
      <Button type="link">Link Button</Button>
      <Button type="link" disabled>Link Button</Button>
    </Space>
  </Space>
)

export default App;
