import{R as o}from"./index-RYns6xqu.js";import"./index-CeWukBdw.js";import{g as a}from"./utils-UCQ0NSiz.js";import{P as r}from"./index-BtfDwvCk.js";import"./index.esm-CxAjjnVK.js";import"./index-BQ5IbGbl.js";import"./colors-ueE8I_GV.js";import"./index-BBTzdywh.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const T={title:"Plots/Pie"},y=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}],h=[{type:"分类一",value:0},{type:"分类二",value:0},{type:"分类三",value:0},{type:"分类四",value:0},{type:"分类五",value:0},{type:"其他",value:0}];function n(){const e={...a(),title:"饼图",data:y,angleField:"value",colorField:"type",innerRadius:0};return o.createElement(r,{...e})}function t(){const e={...a(),title:"环图",data:y,angleField:"value",colorField:"type",innerRadius:.6,statisticCount:232,statisticText:"AntV"};return o.createElement(r,{...e})}function i(){const e={...a(),title:"无数据环图",data:h,angleField:"value",colorField:"type",statisticCount:0,statisticText:"AntV"};return o.createElement(r,{...e})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"Ring"};i.__docgenInfo={description:"",methods:[],displayName:"ZeroRing"};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<PieConfig>();
  const config: PieConfig = {
    ...sharedConfig,
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0
  };
  return <Pie {...config} />;
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,p,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`function Ring() {
  const sharedConfig = getSharedConfig<PieConfig>();
  const config: PieConfig = {
    ...sharedConfig,
    title: '环图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    statisticCount: 232,
    statisticText: 'AntV'
  };
  return <Pie {...config} />;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,m,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function ZeroRing() {
  const sharedConfig = getSharedConfig<PieConfig>();
  const config: PieConfig = {
    ...sharedConfig,
    title: '无数据环图',
    data: zeroData,
    angleField: 'value',
    colorField: 'type',
    statisticCount: 0,
    statisticText: 'AntV'
  };
  return <Pie {...config} />;
}`,...(C=(m=i.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const V=["Basic","Ring","ZeroRing"];export{n as Basic,t as Ring,i as ZeroRing,V as __namedExportsOrder,T as default};
