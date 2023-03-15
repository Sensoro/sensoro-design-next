import React from 'react';
import { Switch, Space } from 'sensoro-design';

const App: React.FC = () => (
  <Space>
    <Switch defaultChecked />
    <Switch defaultChecked type="round" />
    <Switch defaultChecked type="line" />
  </Space>
);

export default App;
