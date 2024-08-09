import{r as l,R as i}from"./index-RYns6xqu.js";import{d as F}from"./index-B8j0lMuf.js";import{B as _,R as h,D as E,a as y}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var o=function(){return o=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)},b=l.forwardRef(function(e,n){return i.createElement(_,o({},e,{chartType:"Funnel",ref:n}))});const T={stroke:"white",lineWidth:2},m=l.forwardRef((e,n)=>{const{insetLeft:t=E,insetRight:s=y,label:r=!1,style:f,...g}=e,p=F({},T,f);return i.createElement(b,{insetLeft:t,insetRight:s,label:r,style:p,...g,ref:n,renderer:new h})});m.__docgenInfo={description:"",methods:[],displayName:"Funnel"};const R=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}],L={title:"Charts/Funnel"};function a(){const e={title:"漏斗图",data:R,xField:"stage",yField:"number",width:500};return i.createElement(m,{...e})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`function Basic() {
  const config: FunnelConfig = {
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500
  };
  return <Funnel {...config} />;
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const N=["Basic"];export{a as Basic,N as __namedExportsOrder,L as default};
