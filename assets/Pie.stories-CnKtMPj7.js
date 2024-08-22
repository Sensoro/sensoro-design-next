import{R as i}from"./index-RYns6xqu.js";import{R as o}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{P as a}from"./index-Drsd-r6W.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const A={title:"Plots/Pie"},y=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}],R=[{type:"分类一",value:0},{type:"分类二",value:0},{type:"分类三",value:0},{type:"分类四",value:0},{type:"分类五",value:0},{type:"其他",value:0}];function t(){const e={title:"饼图",data:y,angleField:"value",colorField:"type",innerRadius:0};return i.createElement(a,{...e,renderer:new o})}function n(){const e={title:"环图",data:y,angleField:"value",colorField:"type",innerRadius:.6,statisticCount:232,statisticText:"AntV"};return i.createElement(a,{...e,renderer:new o})}function r(){const e={title:"无数据环图",data:R,angleField:"value",colorField:"type",statisticCount:0,statisticText:"AntV"};return i.createElement(a,{...e,renderer:new o})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};n.__docgenInfo={description:"",methods:[],displayName:"Ring"};r.__docgenInfo={description:"",methods:[],displayName:"ZeroRing"};var s,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function Basic() {
  const config: PieConfig = {
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0
  };

  // @ts-expect-error 暂时忽略
  return <Pie {...config} renderer={new SVGRenderer()} />;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`function Ring() {
  const config: PieConfig = {
    title: '环图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    statisticCount: 232,
    statisticText: 'AntV'
  };

  // @ts-expect-error 暂时忽略
  return <Pie {...config} renderer={new SVGRenderer()} />;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`function ZeroRing() {
  const config: PieConfig = {
    title: '无数据环图',
    data: zeroData,
    angleField: 'value',
    colorField: 'type',
    statisticCount: 0,
    statisticText: 'AntV'
  };

  // @ts-expect-error 暂时忽略
  return <Pie {...config} renderer={new SVGRenderer()} />;
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const B=["Basic","Ring","ZeroRing"];export{t as Basic,n as Ring,r as ZeroRing,B as __namedExportsOrder,A as default};
