import React from 'react';
import { Button, Space } from 'sensoro-design';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined';

const App: React.FC = () => (
  <Space>
    <Button type="primary" icon={<PlusOutlined />} />
    <Button type="primary" shape="circle" icon={<PlusOutlined />} />
    <Button type="primary">Primary Button</Button>
    <Button type="primary" shape="round">Primary Button</Button>
  </Space>
)

export default App;
