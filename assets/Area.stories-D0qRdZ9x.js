import{r as _,R as s}from"./index-RYns6xqu.js";import{B as I,g as c,D as T,a as w}from"./index-CZdLZf2x.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";var d=function(){return d=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},d.apply(this,arguments)},x=_.forwardRef(function(t,e){return s.createElement(I,d({},t,{chartType:"Area",ref:e}))});const D={fillOpacity:.15},v={},O={x:{line:!0,grid:!1}},l=_.forwardRef((t,e)=>{const{insetLeft:n=T,insetRight:i=w,line:a=!0,axis:F=!0,style:h=!0,...E}=t,A=c(a,v),b=c(F,O),C=c(h,D);return s.createElement(x,{insetLeft:n,insetRight:i,axis:b,line:A,style:C,...E,ref:e})});l.__docgenInfo={description:"",methods:[],displayName:"Area"};const k={title:"Charts/Area"};function r(){const t={title:{title:"基础面积图"},data:{type:"fetch",value:"https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json"},xField:e=>new Date(e.date),yField:"unemployed",colorField:"industry"};return s.createElement(l,{...t})}function o(){const t={title:{title:"堆叠面积图"},data:{type:"fetch",value:"https://assets.antv.antgroup.com/g2/unemployment-by-industry.json"},xField:e=>new Date(e.date),yField:"unemployed",colorField:"industry",stack:!0};return s.createElement(l,{...t})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"Stack"};var u,f,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`function Basic() {
  const config: AreaConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础面积图'
    },
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json'
    },
    xField: (d: any) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry'
  };
  return <Area {...config} />;
}`,...(p=(f=r.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var m,y,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`function Stack() {
  const config: AreaConfig = {
    title: {
      title: '堆叠面积图'
    },
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/unemployment-by-industry.json'
    },
    xField: (d: any) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry',
    stack: true
  };
  return <Area {...config} />;
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const B=["Basic","Stack"];export{r as Basic,o as Stack,B as __namedExportsOrder,k as default};
