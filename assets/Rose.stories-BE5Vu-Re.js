import{r as f,R as i}from"./index-RYns6xqu.js";import{j as _}from"./index-DiO4j-mk.js";import{B as E,R as F,D as C,a as T}from"./index.esm-00dIfVum.js";import{g as x}from"./utils-bwei8BHp.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var s=function(){return s=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)},I=f.forwardRef(function(e,r){return i.createElement(E,s({},e,{chartType:"Rose",ref:r}))});const v={y:{type:"sqrt"},x:{padding:0},color:{range:_}},m=f.forwardRef((e,r)=>{const{insetLeft:t=C,insetRight:o=T,scale:a=!0,axis:u=!1,innerRadius:g,height:c,...y}=e,h=x(a,v),R=g??8/(c||320);return i.createElement(I,{height:c,insetLeft:t,insetRight:o,scale:h,axis:u,innerRadius:R,...y,ref:r,renderer:new F})});m.__docgenInfo={description:"",methods:[],displayName:"Rose"};const w={title:"Charts/Rose"};function n(){const e={title:"玫瑰图",data:{type:"fetch",value:"https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json"},xField:"year",yField:"people",colorField:"year"};return i.createElement(m,{...e})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`function Basic() {
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
  return <Rose {...config} />;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const A=["Basic"];export{n as Basic,A as __namedExportsOrder,w as default};
