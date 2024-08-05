import type { ColumnConfig } from '@sensoro-design/charts';
import { Column } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];

export default () => {
  const [config, setConfig] = useState<ColumnConfig['config']>({
    data,
    xField: 'type',
    yField: 'sales',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    // interactions: [{ type: 'element-active' }], // 设置 hover 效果
    columnStyle: {
      radius: [1, 1, 0, 0], // 设置柱状图的圆角，
      // markBackground: {
      //   style: {
      //     fill: 'red',
      //     stroke: 'blue',
      //   },
      // },
    },
    // interactions: [{ type: 'element-active' }], // 设置 hover 效果
    // geometryOptions: [
    //   {
    //     geometry: 'column',
    //     color: 'lightblue', // 柱状图的填充色
    //     style: {
    //       stroke: 'blue', // 柱状图的边框色
    //     },
    //   },
    // ],
    // // 自定义渲染函数
    // geometry: {
    //   column: {
    //     label: {
    //       // 自定义标签渲染函数
    //       formatter: (datum) => {
    //         if (datum.value > 0) {
    //           return datum.value;
    //         }
    //         return ''; // 返回空字符串表示不显示标签
    //       },
    //     },
    //     // 自定义柱状图渲染函数
    //     customInfo: (datum, color) => {
    //       if (datum.data.value > 0) {
    //         return {
    //           color: 'blue', // 设置柱状图的填充色
    //           active: {
    //             // 设置 hover 时的样式
    //             style: {
    //               fill: 'rgba(10, 27, 57, 0.04)', // 设置 hover 下空白占位的颜色
    //             },
    //           },
    //         };
    //       }
    //       return {};
    //     },
    //   },
    // },
    // state: {
    // // 设置 active 激活状态的样式
    // active: {
    // columnBackground: {
    //   style: {
    //     fill: '#000',
    //     fillOpacity: 0.25,
    //   },
    // },
    //   },
    // },
    // interactions: [
    //   {
    //     type: 'element-highlight', // 设置 hover 效果
    //     cfg: {
    //       active: {
    //         style: {
    //           fill: 'red', // 设置 hover 时的背景色
    //         },
    //       },
    //     },
    //   },
    // ],
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 16,
        height: 500,
      }}
    >
      <div style={{ width: '40%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Column
          type="basic"
          title="基础柱状图"
          legend={{ type: 'box' }}
          config={config}
          tooltip={{ showTitle: false }}
        />
      </div>
    </div>
  );
};
