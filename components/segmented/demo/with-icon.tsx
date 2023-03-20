import React from 'react';
import { Segmented } from 'sensoro-design';
import UnorderedListOutlined from '@sensoro-design/icons/UnorderedListOutlined';
import AppstoreOutlined from '@sensoro-design/icons/AppstoreOutlined';

const App: React.FC = () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <UnorderedListOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);

export default App;
