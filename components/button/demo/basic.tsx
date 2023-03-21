import React from 'react';
import { Button, Space } from 'sensoro-design';

const App: React.FC = () => (
  <Space>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
)

export default App;
