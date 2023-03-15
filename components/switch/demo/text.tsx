import React from 'react';
import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';
import { Switch, Space } from 'sensoro-design';

const App: React.FC = () => (
  <Space direction="vertical">
    <Switch checkedText="开启" unCheckedText="关闭" defaultChecked />
    <Switch checkedText="1" unCheckedText="0" />
    <Switch
      checkedText={<CheckOutlined />}
      unCheckedText={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);

export default App;
