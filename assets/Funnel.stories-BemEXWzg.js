import{R as a}from"./index-RYns6xqu.js";import"./index-nIUqYezY.js";import{g as i}from"./utils-D1g7R430.js";import{F as s}from"./index-CV9Eqh6o.js";import"./index.esm-C7RJGmRu.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-Bmo7iHix.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const x={title:"Plots/Funnel"},m=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}];function e(){const o={...i(),title:"漏斗图",data:m,xField:"stage",yField:"number",width:500};return a.createElement(s,{...o})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<FunnelConfig>();
  const config: FunnelConfig = {
    ...sharedConfig,
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500
  };
  return <Funnel {...config} />;
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const B=["Basic"];export{e as Basic,B as __namedExportsOrder,x as default};
