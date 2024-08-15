import { Line } from '@sensoro-design/charts';

import type { LineConfig } from '@sensoro-design/charts';

function App() {
  const config: LineConfig = {
    title: '基础折线图',
    xField: 'time',
    yField: 'scales',
    data: [
      { time: '2010-01', scales: 1998 },
      { time: '2010-02', scales: 1850 },
      { time: '2010-03', scales: 1720 },
      { time: '2010-04', scales: 1818 },
      { time: '2010-05', scales: 1920 },
      { time: '2010-06', scales: 1802 },
      { time: '2010-07', scales: 1945 },
      { time: '2010-08', scales: 1856 },
      { time: '2010-09', scales: 2107 },
      { time: '2010-10', scales: 2140 },
    ],
  };

  return <Line {...config} />;
}

export default App;
