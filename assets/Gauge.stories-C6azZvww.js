import{r as h,R as c}from"./index-RYns6xqu.js";import{h as T,f as A,j as L,e as N,d as s,R as _}from"./index-CJ5FF5R5.js";import{B}from"./index-DKU4ibjz.js";import{D,a as O}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var g=function(){return g=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)},v=h.forwardRef(function(e,t){return c.createElement(B,g({},e,{chartType:"Gauge",ref:t}))});function M(e){return{color:{range:[T,e?A:L]}}}const P={textContent:(e,t)=>`${t?Math.round(e/t*100):0}%`,textFill:N,textFontSize:"24px",textLineHeight:"24px",textFontFamily:"DIN Alternate",textFontWeight:"bold",textY:"70%"},U={x:{title:!1},y:{tick:!1,label:!1}},l=h.forwardRef((e,t)=>{const{data:n,insetLeft:i=D,insetRight:r=O,startAngle:x=-1.25*Math.PI,endAngle:y=.25*Math.PI,axis:E,scale:C,style:F,...I}=e,w=s({},n,{name:""},{}),b=s({},U,E),R=s({},M(n.target===0||n.percent===0),C),S=s({},P,F);return c.createElement(v,{insetLeft:i,insetRight:r,startAngle:x,endAngle:y,data:w,axis:b,scale:R,style:S,...I,ref:t})});l.__docgenInfo={description:"",methods:[],displayName:"Gauge"};const z={title:"Plots/Gauge"};function a(){const e={title:"仪表盘",data:{target:120,total:400,percent:.6},width:720};return c.createElement(l,{...e,renderer:new _})}function o(){const e={title:"无数据仪表盘",data:{target:0,total:400,percent:0},width:720};return c.createElement(l,{...e,renderer:new _})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"ZeroGauge"};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function Basic() {
  const config: GaugeConfig = {
    title: '仪表盘',
    // data 格式为 { target: number, total: number } | { percent: number }
    // percent 优先级更高，会覆盖 target 和 total
    data: {
      target: 120,
      total: 400,
      percent: 0.6
    },
    width: 720
  };

  // @ts-expect-error 暂时忽略
  return <Gauge {...config} renderer={new SVGRenderer()} />;
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var m,p,G;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`function ZeroGauge() {
  const config: GaugeConfig = {
    title: '无数据仪表盘',
    // data 格式为 { target: number, total: number } | { percent: number }
    // 如果比例为 0 时，只传入percent: 0会导致没有圆环，此时需要传入target和total的方式
    // 建议所有数据都是用 target 和 total 的方式传入
    data: {
      target: 0,
      total: 400,
      percent: 0
    },
    width: 720
  };

  // @ts-expect-error 暂时忽略
  return <Gauge {...config} renderer={new SVGRenderer()} />;
}`,...(G=(p=o.parameters)==null?void 0:p.docs)==null?void 0:G.source}}};const W=["Basic","ZeroGauge"];export{a as Basic,o as ZeroGauge,W as __namedExportsOrder,z as default};
