import{R as a}from"./index-RYns6xqu.js";import{R as s}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{F as i}from"./index-BebJEz-y.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const x={title:"Plots/Funnel"},m=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}];function e(){const o={title:"漏斗图",data:m,xField:"stage",yField:"number",width:500};return a.createElement(i,{...o,renderer:new s})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`function Basic() {
  const config: FunnelConfig = {
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500
  };

  // @ts-expect-error 暂时忽略
  return <Funnel {...config} renderer={new SVGRenderer()} />;
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const R=["Basic"];export{e as Basic,R as __namedExportsOrder,x as default};
