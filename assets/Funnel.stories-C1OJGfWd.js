import{r as l,R as i}from"./index-RYns6xqu.js";import{d as F,R as _}from"./index-CJ5FF5R5.js";import{B as h}from"./index-DKU4ibjz.js";import{D as E,a as y}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var o=function(){return o=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)},b=l.forwardRef(function(e,n){return i.createElement(h,o({},e,{chartType:"Funnel",ref:n}))});const R={stroke:"white",lineWidth:2},m=l.forwardRef((e,n)=>{const{insetLeft:t=E,insetRight:s=y,label:r=!1,style:f,...g}=e,p=F({},R,f);return i.createElement(b,{insetLeft:t,insetRight:s,label:r,style:p,...g,ref:n})});m.__docgenInfo={description:"",methods:[],displayName:"Funnel"};const N={title:"Plots/Funnel"},T=[{stage:"简历筛选",number:253},{stage:"初试人数",number:151},{stage:"复试人数",number:113},{stage:"录取人数",number:87},{stage:"入职人数",number:59}];function a(){const e={title:"漏斗图",data:T,xField:"stage",yField:"number",width:500};return i.createElement(m,{...e,renderer:new _})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`function Basic() {
  const config: FunnelConfig = {
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500
  };

  // @ts-expect-error 暂时忽略
  return <Funnel {...config} renderer={new SVGRenderer()} />;
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const O=["Basic"];export{a as Basic,O as __namedExportsOrder,N as default};
