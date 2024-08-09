import{r as _,R as c}from"./index-RYns6xqu.js";import{h as A,f as L,j as N,e as R,d as s}from"./index-B8j0lMuf.js";import{B as S,R as B,D,a as O}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var g=function(){return g=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},g.apply(this,arguments)},v=_.forwardRef(function(e,t){return c.createElement(S,g({},e,{chartType:"Gauge",ref:t}))});function M(e){return{color:{range:[A,e?L:N]}}}const U={textContent:(e,t)=>`${t?Math.round(e/t*100):0}%`,textFill:R,textFontSize:"24px",textLineHeight:"24px",textFontFamily:"DIN Alternate",textFontWeight:"bold",textY:"70%"},Z={x:{title:!1},y:{tick:!1,label:!1}},l=_.forwardRef((e,t)=>{const{data:n,insetLeft:i=D,insetRight:a=O,startAngle:G=-1.25*Math.PI,endAngle:x=.25*Math.PI,axis:y,scale:E,style:C,...F}=e,I=s({},n,{name:""},{}),b=s({},Z,y),T=s({},M(n.target===0||n.percent===0),E),w=s({},U,C);return c.createElement(v,{insetLeft:i,insetRight:a,startAngle:G,endAngle:x,data:I,axis:b,scale:T,style:w,...F,ref:t,renderer:new B})});l.__docgenInfo={description:"",methods:[],displayName:"Gauge"};const z={title:"Charts/Gauge"};function r(){const e={title:"仪表盘",data:{target:120,total:400,percent:.6},width:720};return c.createElement(l,{...e})}function o(){const e={title:"无数据仪表盘",data:{target:0,total:400,percent:0},width:720};return c.createElement(l,{...e})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"ZeroGauge"};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`function Basic() {
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
  return <Gauge {...config} />;
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`function ZeroGauge() {
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
  return <Gauge {...config} />;
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const W=["Basic","ZeroGauge"];export{r as Basic,o as ZeroGauge,W as __namedExportsOrder,z as default};
