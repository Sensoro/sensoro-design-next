import{R as n}from"./index-RYns6xqu.js";import"./index-nIUqYezY.js";import{g as s}from"./utils-D1g7R430.js";import{R as i}from"./index-C9Pd76UK.js";import"./index.esm-C7RJGmRu.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-Bmo7iHix.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const R={title:"Plots/Rose"};function e(){const a={...s(),title:"玫瑰图",data:{type:"fetch",value:"https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json"},xField:"year",yField:"people",colorField:"year"};return n.createElement(i,{...a})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<RoseConfig>();
  const config: RoseConfig = {
    ...sharedConfig,
    title: '玫瑰图',
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json'
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year'
  };
  return <Rose {...config} />;
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const F=["Basic"];export{e as Basic,F as __namedExportsOrder,R as default};