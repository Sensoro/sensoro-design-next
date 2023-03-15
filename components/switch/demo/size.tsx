import React from 'react';
import { Switch, Space, } from 'sensoro-design';

const App: React.FC = () => (
  <Space>
    <Switch defaultChecked />
    <Switch size="small" defaultChecked />
  </Space>
);

export default App;
