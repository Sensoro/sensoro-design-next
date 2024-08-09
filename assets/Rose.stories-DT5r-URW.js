import{r as f,R as i}from"./index-RYns6xqu.js";import{b as _,d as E}from"./index-B8j0lMuf.js";import{B as F,R as x,D as C,a as T}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var o=function(){return o=Object.assign||function(e){for(var r,a=1,s=arguments.length;a<s;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)},v=f.forwardRef(function(e,r){return i.createElement(F,o({},e,{chartType:"Rose",ref:r}))});const B={y:{type:"sqrt"},x:{padding:0},color:{range:_}},u=f.forwardRef((e,r)=>{const{insetLeft:a=C,insetRight:s=T,axis:t=!1,scale:m,innerRadius:y,height:c,...g}=e,h=E({},B,m),R=y??8/(c||320);return i.createElement(v,{height:c,insetLeft:a,insetRight:s,scale:h,axis:t,innerRadius:R,...g,ref:r,renderer:new x})});u.__docgenInfo={description:"",methods:[],displayName:"Rose"};const j={title:"Charts/Rose"};function n(){const e={title:"玫瑰图",data:{type:"fetch",value:"https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json"},xField:"year",yField:"people",colorField:"year"};return i.createElement(u,{...e})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`function Basic() {
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const w=["Basic"];export{n as Basic,w as __namedExportsOrder,j as default};
