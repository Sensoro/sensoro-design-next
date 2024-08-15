import{r as f,R as i}from"./index-RYns6xqu.js";import{b as _,d as E,R as F}from"./index-CJ5FF5R5.js";import{B as x}from"./index-DKU4ibjz.js";import{D as T,a as C}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var s=function(){return s=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)},v=f.forwardRef(function(e,r){return i.createElement(x,s({},e,{chartType:"Rose",ref:r}))});const B={y:{type:"sqrt"},x:{padding:0},color:{range:_}},m=f.forwardRef((e,r)=>{const{insetLeft:n=T,insetRight:o=C,axis:t=!1,scale:u,innerRadius:y,height:c,...g}=e,R=E({},B,u),h=y??8/(c||320);return i.createElement(v,{height:c,insetLeft:n,insetRight:o,scale:R,axis:t,innerRadius:h,...g,ref:r})});m.__docgenInfo={description:"",methods:[],displayName:"Rose"};const S={title:"Plots/Rose"};function a(){const e={title:"玫瑰图",data:{type:"fetch",value:"https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json"},xField:"year",yField:"people",colorField:"year"};return i.createElement(m,{...e,renderer:new F})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function Basic() {
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

  // @ts-expect-error 暂时忽略
  return <Rose {...config} renderer={new SVGRenderer()} />;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["Basic"];export{a as Basic,j as __namedExportsOrder,S as default};
