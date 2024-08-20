import{r as T,R as s}from"./index-RYns6xqu.js";import{f as I,e as G,k as N,d as B,R as p}from"./index-qRM7OX3P.js";import{B as D}from"./index-BrZt84n0.js";import{D as V,a as L}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var u=function(){return u=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)},O=T.forwardRef(function(e,t){return s.createElement(D,u({},e,{chartType:"Pie",ref:t}))});const Z={fill:I};function z(e,t){return[{type:"text",style:{text:`${e}`,x:"50%",y:"50%",dy:-10,textAlign:"center",fontSize:24,lineHeight:24,fontFamily:"DINAlternate-Bold",fill:G}},{type:"text",style:{text:t,x:"50%",y:"50%",dy:10,textAlign:"center",fontSize:12,lineHeight:12,fill:N}}]}const c=T.forwardRef((e,t)=>{const{insetLeft:r=V,insetRight:l=L,innerRadius:n=.6,style:C=!0,statisticCount:d,statisticText:f,annotations:P,...A}=e,S=n===0?void 0:P||d&&f&&z(d,f),w=B({},d===0?Z:{},C);return s.createElement(O,{insetLeft:r,insetRight:l,innerRadius:n,annotations:S,style:w,...A,ref:t})});c.__docgenInfo={description:"",methods:[],displayName:"Pie"};const $={title:"Plots/Pie"},h=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}],H=[{type:"分类一",value:0},{type:"分类二",value:0},{type:"分类三",value:0},{type:"分类四",value:0},{type:"分类五",value:0},{type:"其他",value:0}];function i(){const e={title:"饼图",data:h,angleField:"value",colorField:"type",innerRadius:0};return s.createElement(c,{...e,renderer:new p})}function a(){const e={title:"环图",data:h,angleField:"value",colorField:"type",innerRadius:.6,statisticCount:232,statisticText:"AntV"};return s.createElement(c,{...e,renderer:new p})}function o(){const e={title:"无数据环图",data:H,angleField:"value",colorField:"type",statisticCount:0,statisticText:"AntV"};return s.createElement(c,{...e,renderer:new p})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"Ring"};o.__docgenInfo={description:"",methods:[],displayName:"ZeroRing"};var g,m,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`function Basic() {
  const config: PieConfig = {
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0
  };

  // @ts-expect-error 暂时忽略
  return <Pie {...config} renderer={new SVGRenderer()} />;
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var R,v,_;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`function Ring() {
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
}`,...(_=(v=a.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,F,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`function ZeroRing() {
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
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const q=["Basic","Ring","ZeroRing"];export{i as Basic,a as Ring,o as ZeroRing,q as __namedExportsOrder,$ as default};
