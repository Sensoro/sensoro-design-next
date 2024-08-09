import{r as l,R as c}from"./index-RYns6xqu.js";import{d as o}from"./index-B8j0lMuf.js";import{B as F,R as T,D as b,a as E}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var s=function(){return s=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)},x=l.forwardRef(function(e,t){return c.createElement(F,s({},e,{chartType:"Radar",ref:t}))});const C={style:{fillOpacity:.15}},D={size:2,style:{fill:"white"}},L={x:{line:!1,tick:null,labelSpacing:12},y:{labelSpacing:4,gridConnect:"line",gridLineWidth:1,gridLineDash:[3,2]}},y=l.forwardRef((e,t)=>{const{insetLeft:r=b,insetRight:i=E,area:a,point:g,axis:f,...u}=e,_=o({},D,g),R=o({},L,f),h=o({},C,a);return c.createElement(x,{insetLeft:r,insetRight:i,area:h,point:_,axis:R,...u,ref:t,renderer:new T})});y.__docgenInfo={description:"",methods:[],displayName:"Radar"};const I=[{item:"Design",type:"a",score:70},{item:"Design",type:"b",score:30},{item:"Development",type:"a",score:60},{item:"Development",type:"b",score:70},{item:"Marketing",type:"a",score:50},{item:"Marketing",type:"b",score:60},{item:"Users",type:"a",score:40},{item:"Users",type:"b",score:50},{item:"Test",type:"a",score:60},{item:"Test",type:"b",score:70},{item:"Language",type:"a",score:70},{item:"Language",type:"b",score:50},{item:"Technology",type:"a",score:50},{item:"Technology",type:"b",score:40},{item:"Support",type:"a",score:30},{item:"Support",type:"b",score:40},{item:"Sales",type:"a",score:60},{item:"Sales",type:"b",score:40},{item:"UX",type:"a",score:50},{item:"UX",type:"b",score:60}],v={title:"Charts/Radar"};function n(){const e={title:"雷达图",data:I,xField:"item",yField:"score",colorField:"type",scale:{y:{domainMax:80}}};return c.createElement(y,{...e})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`function Basic() {
  const config: RadarConfig = {
    title: '雷达图',
    data,
    xField: 'item',
    yField: 'score',
    colorField: 'type',
    scale: {
      y: {
        domainMax: 80
      }
    }
  };
  return <Radar {...config} />;
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Basic"];export{n as Basic,B as __namedExportsOrder,v as default};
