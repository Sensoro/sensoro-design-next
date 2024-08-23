import{R as a}from"./index-RYns6xqu.js";import{g as s}from"./utils-Bz6E4Kwq.js";import{F as i}from"./index-CV9Eqh6o.js";import"./index.esm-C7RJGmRu.js";import"./index-BQ5IbGbl.js";import"./index-Bmo7iHix.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const C={title:"Charts/Funnel"},m=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}];function e(){const o={...s(),title:"漏斗图",data:m,xField:"stage",yField:"number",width:500};return a.createElement(i,{...o})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function Basic() {
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,C as default};
