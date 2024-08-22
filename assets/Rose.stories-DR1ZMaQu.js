import{R as a}from"./index-RYns6xqu.js";import{R as s}from"./cloneDeep-Q-bFRGJl.js";import{R as i}from"./index-Ci0oxvWs.js";import"./index-BQ5IbGbl.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";import"./colors-CMe-4sOE.js";const R={title:"Charts/Rose"};function e(){const n={title:"玫瑰图",data:{type:"fetch",value:"https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json"},xField:"year",yField:"people",colorField:"year"};return a.createElement(i,{...n,renderer:new s})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`function Basic() {
  const config: RoseConfig = {
    title: '玫瑰图',
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json'
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year'
  };

  // @ts-expect-error 暂时忽略
  return <Rose {...config} renderer={new SVGRenderer()} />;
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const h=["Basic"];export{e as Basic,h as __namedExportsOrder,R as default};
