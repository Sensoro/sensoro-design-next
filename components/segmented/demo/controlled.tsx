import React, { useState } from 'react';
import { Segmented } from 'sensoro-design';

const App: React.FC = () => {
  const [value, setValue] = useState<string | number>('Map');

  return <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />;
};

export default App;
