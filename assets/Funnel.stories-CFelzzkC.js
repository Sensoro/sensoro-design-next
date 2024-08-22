import{R as o}from"./index-RYns6xqu.js";import{R as s}from"./cloneDeep-Q-bFRGJl.js";import{F as i}from"./index-BebJEz-y.js";import"./index-BQ5IbGbl.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const F={title:"Charts/Funnel"},m=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}];function e(){const a={title:"漏斗图",data:m,xField:"stage",yField:"number",width:500};return o.createElement(i,{...a,renderer:new s})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function Basic() {
  const config: FunnelConfig = {
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500
  };

  // @ts-expect-error 暂时忽略
  return <Funnel {...config} renderer={new SVGRenderer()} />;
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,F as default};
