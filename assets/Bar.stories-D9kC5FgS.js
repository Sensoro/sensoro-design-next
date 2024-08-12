import{r as u,R as c}from"./index-RYns6xqu.js";import{e as p,f as O,d as r}from"./index-B8j0lMuf.js";import{B as R,R as T,a as k}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var l=function(){return l=Object.assign||function(e){for(var a,t=1,o=arguments.length;t<o;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)},v=u.forwardRef(function(e,a){return c.createElement(R,l({},e,{chartType:"Bar",ref:a}))});const A={radius:1,maxWidth:8},N={x:{size:110,labelAutoEllipsis:!0,tick:!1,title:!1,labelFontSize:12,labelFill:p,labelFillOpacity:.6,labelSpacing:16},y:{grid:!1,tick:!1,label:!1,title:!1}},b={elementHighlight:!1},S={y:{domain:[0,1e3]}},D=e=>({label:{text:({originData:a})=>`${a[e]}`,position:"right",dx:30,style:{fill:p,fillOpacity:1,fontSize:14,fontFamily:"DINAlternate-Bold",lineHeight:14}},style:{fill:O}}),h=u.forwardRef((e,a)=>{const{axis:t,style:o,scale:n,interaction:y,markBackground:_,insetRight:B=k,...d}=e,F=r({},A,o),C=r({},N,t),E=r({},D(d.yField),_),x=r({},b,y),I=r({},S,n);return c.createElement(v,{insetRight:B,axis:C,style:F,markBackground:E,interaction:x,scale:I,...d,ref:a,renderer:new T})});h.__docgenInfo={description:"",methods:[],displayName:"Bar"};const H={title:"Charts/Bar"},s=[{name:"蓝领",value:1100},{name:"白领",value:2200},{name:"制造业蓝领哈久啊禄口街道发了卡萨丁激发",value:330},{name:"退休人员",value:400}];function i(){const e={title:"基础条形图",height:s.length*8+(s.length-1)*24+92,data:s,xField:"name",yField:"value",paddingRight:-160,scale:{y:{domain:[0,2200]}}};return c.createElement(h,{...e})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var f,g,m;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
  const config: BarConfig = {
    title: '基础条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92,
    data,
    xField: 'name',
    yField: 'value',
    paddingRight: -160,
    scale: {
      y: {
        domain: [0, 2200]
      }
    }
  };
  return <Bar {...config} />;
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const j=["Basic"];export{i as Basic,j as __namedExportsOrder,H as default};
