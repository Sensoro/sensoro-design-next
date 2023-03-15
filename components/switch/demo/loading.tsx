import React from 'react';
import { Switch, Space } from 'sensoro-design';

const App: React.FC = () => (
  <Space direction="vertical">
    <Switch loading defaultChecked />
    <Switch size="small" loading />
  </Space>
);

export default App;
