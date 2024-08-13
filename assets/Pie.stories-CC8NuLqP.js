import{r as E,R as s}from"./index-RYns6xqu.js";import{f as N,e as w,k as B,d as D,R as h}from"./index-W-Zgmc1l.js";import{B as G,D as L,a as O}from"./index-DWkPdOFk.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var u=function(){return u=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)},V=E.forwardRef(function(e,t){return s.createElement(G,u({},e,{chartType:"Pie",ref:t}))});const Z={fill:N};function z(e,t){return[{type:"text",style:{text:`${e}`,x:"50%",y:"50%",dy:-10,textAlign:"center",fontSize:24,lineHeight:24,fontFamily:"DINAlternate-Bold",fill:w}},{type:"text",style:{text:t,x:"50%",y:"50%",dy:10,textAlign:"center",fontSize:12,lineHeight:12,fill:B}}]}const c=E.forwardRef((e,t)=>{const{insetLeft:r=L,insetRight:l=O,innerRadius:n=.6,style:T=!0,statisticCount:d,statisticText:p,annotations:P,...A}=e,S=n===0?void 0:P||d&&p&&z(d,p),I=D({},d===0?Z:{},T);return s.createElement(V,{insetLeft:r,insetRight:l,innerRadius:n,annotations:S,style:I,...A,ref:t})});c.__docgenInfo={description:"",methods:[],displayName:"Pie"};const Y={title:"Charts/Pie"},C=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}],H=[{type:"分类一",value:0},{type:"分类二",value:0},{type:"分类三",value:0},{type:"分类四",value:0},{type:"分类五",value:0},{type:"其他",value:0}];function i(){const e={title:"饼图",data:C,angleField:"value",colorField:"type",innerRadius:0};return s.createElement(c,{...e})}function a(){const e={title:"环图",data:C,angleField:"value",colorField:"type",innerRadius:.6,statisticCount:232,statisticText:"AntV"};return s.createElement(c,{...e,renderer:new h})}function o(){const e={title:"无数据环图",data:H,angleField:"value",colorField:"type",statisticCount:0,statisticText:"AntV"};return s.createElement(c,{...e,renderer:new h})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"Ring"};o.__docgenInfo={description:"",methods:[],displayName:"ZeroRing"};var f,g,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
  const config: PieConfig = {
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0
  };
  return <Pie {...config} />;
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var m,R,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`function Ring() {
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
}`,...(v=(R=a.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var _,x,F;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`function ZeroRing() {
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
}`,...(F=(x=o.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const $=["Basic","Ring","ZeroRing"];export{i as Basic,a as Ring,o as ZeroRing,$ as __namedExportsOrder,Y as default};
