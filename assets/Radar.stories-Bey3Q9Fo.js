import{r as d,R as c}from"./index-RYns6xqu.js";import"./index-DiO4j-mk.js";import{B as F,R as T,D as b,a as E}from"./index.esm-00dIfVum.js";import{g as i}from"./utils-bwei8BHp.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var s=function(){return s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)},C=d.forwardRef(function(e,t){return c.createElement(F,s({},e,{chartType:"Radar",ref:t}))});const x={style:{fillOpacity:.15}},D={size:2,style:{fill:"white"}},I={x:{line:!1,tick:null,labelSpacing:12},y:{labelSpacing:4,gridConnect:"line",gridLineWidth:1,gridLineDash:[3,2]}},y=d.forwardRef((e,t)=>{const{insetLeft:r=b,insetRight:o=E,area:a=!0,point:g=!0,axis:f=!0,...u}=e,_=i(g,D),R=i(f,I),h=i(a,x);return c.createElement(C,{insetLeft:r,insetRight:o,area:h,point:_,axis:R,...u,ref:t,renderer:new T})});y.__docgenInfo={description:"",methods:[],displayName:"Radar"};const L=[{item:"Design",type:"a",score:70},{item:"Design",type:"b",score:30},{item:"Development",type:"a",score:60},{item:"Development",type:"b",score:70},{item:"Marketing",type:"a",score:50},{item:"Marketing",type:"b",score:60},{item:"Users",type:"a",score:40},{item:"Users",type:"b",score:50},{item:"Test",type:"a",score:60},{item:"Test",type:"b",score:70},{item:"Language",type:"a",score:70},{item:"Language",type:"b",score:50},{item:"Technology",type:"a",score:50},{item:"Technology",type:"b",score:40},{item:"Support",type:"a",score:30},{item:"Support",type:"b",score:40},{item:"Sales",type:"a",score:60},{item:"Sales",type:"b",score:40},{item:"UX",type:"a",score:50},{item:"UX",type:"b",score:60}],B={title:"Charts/Radar"};function n(){const e={title:"雷达图",data:L,xField:"item",yField:"score",colorField:"type",scale:{y:{domainMax:80}}};return c.createElement(y,{...e})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`function Basic() {
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const w=["Basic"];export{n as Basic,w as __namedExportsOrder,B as default};
