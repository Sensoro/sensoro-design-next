import React from 'react';
import { Segmented } from 'sensoro-design';

const App: React.FC = () => (
  <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
)

export default App;
