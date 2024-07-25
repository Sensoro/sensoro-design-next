import{r as m,R as s}from"./index-RYns6xqu.js";import{B as T,c as g,b as I,g as r,D as O,a as x}from"./index-Bx2dUfWs.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";var o=function(){return o=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)},A=m.forwardRef(function(e,t){return s.createElement(T,o({},e,{chartType:"Bar",ref:t}))});const k={radius:1,maxWidth:8},v={x:{size:110,labelAutoEllipsis:!0,tick:!1,title:!1,labelFontSize:12,labelFill:g,labelFillOpacity:.6,labelSpacing:16},y:{grid:!1,tick:!1,label:!1,title:!1}},D={elementHighlight:!1},L={y:{domain:[0,1e3]}},S=e=>({label:{text:({originData:t})=>`${t[e]}`,position:"right",dx:30,style:{fill:g,fillOpacity:1,fontSize:14,fontFamily:"DINAlternate-Bold",lineHeight:14}},style:{fill:I}}),p=m.forwardRef((e,t)=>{const{insetLeft:a=O,insetRight:i=x,axis:n=!0,style:_=!0,scale:y=!0,interaction:F=!0,markBackground:B=!0,...c}=e,E=r(_,k),C=r(n,v),N=r(B,S(c.yField)),b=r(F,D),h=r(y,L);return s.createElement(A,{insetLeft:a,insetRight:i,axis:C,style:E,markBackground:N,interaction:b,scale:h,...c,ref:t})});p.__docgenInfo={description:"",methods:[],displayName:"Bar"};const H={title:"Charts/Bar"},G=[{labelName:"蓝领",value:110},{labelName:"白领",value:220},{labelName:"制造业蓝领哈久啊禄口街道发了卡萨丁激发",value:330},{labelName:"退休人员",value:400}];function l(){const e={title:{title:"基础柱状图"},data:G,xField:"labelName",yField:"value"};return s.createElement(p,{...e})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};var f,u,d;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
  const config: BarConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础柱状图'
    },
    data,
    xField: 'labelName',
    yField: 'value'
  };
  return <Bar {...config} />;
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const j=["Basic"];export{l as Basic,j as __namedExportsOrder,H as default};
