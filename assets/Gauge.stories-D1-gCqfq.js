import{r as G,R as c}from"./index-RYns6xqu.js";import{h as T,f as A,j as L,e as N,d as s,R as _}from"./index-W-Zgmc1l.js";import{B,D,a as O}from"./index-DWkPdOFk.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var g=function(){return g=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)},v=G.forwardRef(function(e,t){return c.createElement(B,g({},e,{chartType:"Gauge",ref:t}))});function M(e){return{color:{range:[T,e?A:L]}}}const U={textContent:(e,t)=>`${t?Math.round(e/t*100):0}%`,textFill:N,textFontSize:"24px",textLineHeight:"24px",textFontFamily:"DIN Alternate",textFontWeight:"bold",textY:"70%"},Z={x:{title:!1},y:{tick:!1,label:!1}},l=G.forwardRef((e,t)=>{const{data:n,insetLeft:i=D,insetRight:r=O,startAngle:x=-1.25*Math.PI,endAngle:y=.25*Math.PI,axis:E,scale:C,style:F,...I}=e,w=s({},n,{name:""},{}),b=s({},Z,E),R=s({},M(n.target===0||n.percent===0),C),S=s({},U,F);return c.createElement(v,{insetLeft:i,insetRight:r,startAngle:x,endAngle:y,data:w,axis:b,scale:R,style:S,...I,ref:t})});l.__docgenInfo={description:"",methods:[],displayName:"Gauge"};const k={title:"Charts/Gauge"};function a(){const e={title:"仪表盘",data:{target:120,total:400,percent:.6},width:720};return c.createElement(l,{...e,renderer:new _})}function o(){const e={title:"无数据仪表盘",data:{target:0,total:400,percent:0},width:720};return c.createElement(l,{...e,renderer:new _})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"ZeroGauge"};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function Basic() {
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var p,m,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`function ZeroGauge() {
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
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const z=["Basic","ZeroGauge"];export{a as Basic,o as ZeroGauge,z as __namedExportsOrder,k as default};
