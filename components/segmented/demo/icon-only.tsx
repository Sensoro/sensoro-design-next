import React from 'react';
import { Segmented } from 'antd';
import UnorderedListOutlined from '@sensoro-design/icons/UnorderedListOutlined';
import AppstoreOutlined from '@sensoro-design/icons/AppstoreOutlined';

const App: React.FC = () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <UnorderedListOutlined />,
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);

export default App;
