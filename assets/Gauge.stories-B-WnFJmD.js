import{r as d,R as c}from"./index-RYns6xqu.js";import{b as I,e as y,f as T}from"./index-DiO4j-mk.js";import{B as A,R as L,D as b,a as N}from"./index.esm-00dIfVum.js";import{g as s}from"./utils-bwei8BHp.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var i=function(){return i=Object.assign||function(t){for(var e,a=1,o=arguments.length;a<o;a++){e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},i.apply(this,arguments)},O=d.forwardRef(function(t,e){return c.createElement(A,i({},t,{chartType:"Gauge",ref:e}))});const R={textContent:(t,e)=>`${Math.round(t/e*100)}%`,textFill:I,textFontSize:"24px",textLineHeight:"24px",textFontFamily:"DIN Alternate",textFontWeight:"bold",textY:"70%"},B={x:{title:!1},y:{tick:!1,label:!1}},D={color:{range:[y,T]}},m=d.forwardRef((t,e)=>{const{data:a,insetLeft:o=b,insetRight:n=N,startAngle:p=-1.25*Math.PI,endAngle:_=.25*Math.PI,axis:h=!0,scale:l=!0,...x}=t,E=Object.assign({},a,{name:""}),C=s(h,B),F=s(l,D),G=s(l,R);return c.createElement(O,{insetLeft:o,insetRight:n,startAngle:p,endAngle:_,data:E,axis:C,scale:F,style:G,...x,ref:e,renderer:new L})});m.__docgenInfo={description:"",methods:[],displayName:"Gauge"};const P={title:"Charts/Gauge"};function r(){const t={title:"仪表盘",data:{target:120,total:400,percent:.6},width:720};return c.createElement(m,{...t})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};var g,f,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`function Basic() {
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
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const H=["Basic"];export{r as Basic,H as __namedExportsOrder,P as default};
