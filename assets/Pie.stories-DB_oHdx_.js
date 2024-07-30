import{r as v,R as o}from"./index-RYns6xqu.js";import{B as E,c as P,b as T,D as C,a as A}from"./index-BSYnM7IN.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";var c=function(){return c=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)},B=v.forwardRef(function(e,t){return o.createElement(E,c({},e,{chartType:"Pie",ref:t}))});function I(e,t){return[{type:"text",style:{text:`${e}`,x:"50%",y:"50%",dy:-10,textAlign:"center",fontSize:24,lineHeight:24,fontFamily:"DINAlternate-Bold",fill:P}},{type:"text",style:{text:t,x:"50%",y:"50%",dy:10,textAlign:"center",fontSize:12,lineHeight:12,fill:T}}]}const l=v.forwardRef((e,t)=>{const{insetLeft:i=C,insetRight:s=A,innerRadius:n=.6,statisticCount:d,statisticText:u,annotations:h,...x}=e,F=n===0?void 0:h||d&&u&&I(d,u);return o.createElement(B,{insetLeft:i,insetRight:s,innerRadius:n,annotations:F,...x,ref:t})});l.__docgenInfo={description:"",methods:[],displayName:"Pie"};const O={title:"Charts/Pie"},R=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}];function a(){const e={title:"饼图",data:R,angleField:"value",colorField:"type",innerRadius:0};return o.createElement(l,{...e})}function r(){const e={title:"环图",data:R,angleField:"value",colorField:"type",innerRadius:.6,statisticCount:232,statisticText:"AntV"};return o.createElement(l,{...e})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"Ring"};var f,p,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
  const config: PieConfig = {
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0
  };
  return <Pie {...config} />;
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,y,_;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`function Ring() {
  const config: PieConfig = {
    title: '环图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    statisticCount: 232,
    statisticText: 'AntV'
  };
  return <Pie {...config} />;
}`,...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const b=["Basic","Ring"];export{a as Basic,r as Ring,b as __namedExportsOrder,O as default};