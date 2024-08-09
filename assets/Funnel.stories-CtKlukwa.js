import{r as l,R as i}from"./index-RYns6xqu.js";import"./index-DaXsyoCT.js";import{B as F,R as _,D as h,a as E}from"./index.esm-B_1-7FWq.js";import{g as y}from"./utils-Biagt0rI.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var o=function(){return o=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)},b=l.forwardRef(function(e,n){return i.createElement(F,o({},e,{chartType:"Funnel",ref:n}))});const T={stroke:"white",lineWidth:2},d=l.forwardRef((e,n)=>{const{insetLeft:t=h,insetRight:s=E,label:r=!1,style:f=!0,...g}=e,p=y(f,T);return i.createElement(b,{insetLeft:t,insetRight:s,label:r,style:p,...g,ref:n,renderer:new _})});d.__docgenInfo={description:"",methods:[],displayName:"Funnel"};const R=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}],N={title:"Charts/Funnel"};function a(){const e={title:"漏斗图",data:R,xField:"stage",yField:"number",width:500};return i.createElement(d,{...e})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`function Basic() {
  const config: FunnelConfig = {
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500
  };
  return <Funnel {...config} />;
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const O=["Basic"];export{a as Basic,O as __namedExportsOrder,N as default};
