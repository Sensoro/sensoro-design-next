import{r as f,R as i}from"./index-RYns6xqu.js";import{b as _,d as E,R as F}from"./index-W-Zgmc1l.js";import{B as x,D as C,a as T}from"./index-DWkPdOFk.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var o=function(){return o=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)},v=f.forwardRef(function(e,r){return i.createElement(x,o({},e,{chartType:"Rose",ref:r}))});const B={y:{type:"sqrt"},x:{padding:0},color:{range:_}},u=f.forwardRef((e,r)=>{const{insetLeft:n=C,insetRight:s=T,axis:t=!1,scale:m,innerRadius:y,height:c,...g}=e,h=E({},B,m),R=y??8/(c||320);return i.createElement(v,{height:c,insetLeft:n,insetRight:s,scale:h,axis:t,innerRadius:R,...g,ref:r})});u.__docgenInfo={description:"",methods:[],displayName:"Rose"};const O={title:"Charts/Rose"};function a(){const e={title:"玫瑰图",data:{type:"fetch",value:"https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json"},xField:"year",yField:"people",colorField:"year"};return i.createElement(u,{...e,renderer:new F})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function Basic() {
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["Basic"];export{a as Basic,S as __namedExportsOrder,O as default};
