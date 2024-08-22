import{R as d}from"./index-RYns6xqu.js";import{R as m}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{G as p}from"./index-Drr1lRpf.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const _={title:"Plots/Gauge"};function e(){const r={title:"仪表盘",data:{target:120,total:400,percent:.6},width:720};return d.createElement(p,{...r,renderer:new m})}function t(){const r={title:"无数据仪表盘",data:{target:0,total:400,percent:0},width:720};return d.createElement(p,{...r,renderer:new m})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"ZeroGauge"};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function Basic() {
  const config: GaugeConfig = {
    title: '仪表盘',
    // data 格式为 { target: number, total: number } | { percent: number }
    // percent 优先级更高，会覆盖 target 和 total
    data: {
      target: 120,
      total: 400,
      percent: 0.6
    },
    width: 720
  };

  // @ts-expect-error 暂时忽略
  return <Gauge {...config} renderer={new SVGRenderer()} />;
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var c,i,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`function ZeroGauge() {
  const config: GaugeConfig = {
    title: '无数据仪表盘',
    // data 格式为 { target: number, total: number } | { percent: number }
    // 如果比例为 0 时，只传入percent: 0会导致没有圆环，此时需要传入target和total的方式
    // 建议所有数据都是用 target 和 total 的方式传入
    data: {
      target: 0,
      total: 400,
      percent: 0
    },
    width: 720
  };

  // @ts-expect-error 暂时忽略
  return <Gauge {...config} renderer={new SVGRenderer()} />;
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const x=["Basic","ZeroGauge"];export{e as Basic,t as ZeroGauge,x as __namedExportsOrder,_ as default};
