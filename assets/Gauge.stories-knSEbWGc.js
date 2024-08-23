import{R as g}from"./index-RYns6xqu.js";import{g as d}from"./utils-Bz6E4Kwq.js";import{G as m}from"./index-CqDZS3bm.js";import"./index.esm-C7RJGmRu.js";import"./index-BQ5IbGbl.js";import"./index-Bmo7iHix.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";import"./colors-CMe-4sOE.js";const w={title:"Charts/Gauge"};function t(){const n={...d(),title:"仪表盘",data:{target:120,total:400,percent:.6},width:720};return g.createElement(m,{...n})}function e(){const n={...d(),title:"无数据仪表盘",data:{target:0,total:400,percent:0},width:720};return g.createElement(m,{...n})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};e.__docgenInfo={description:"",methods:[],displayName:"ZeroGauge"};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<GaugeConfig>();
  const config: GaugeConfig = {
    ...sharedConfig,
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
  return <Gauge {...config} />;
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,s,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`function ZeroGauge() {
  const sharedConfig = getSharedConfig<GaugeConfig>();
  const config: GaugeConfig = {
    ...sharedConfig,
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
  return <Gauge {...config} />;
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const B=["Basic","ZeroGauge"];export{t as Basic,e as ZeroGauge,B as __namedExportsOrder,w as default};
