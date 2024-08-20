import{r as l,R as c}from"./index-RYns6xqu.js";import{d as i,R as T}from"./index-qRM7OX3P.js";import{B as b}from"./index-BrZt84n0.js";import{D as h,a as E}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var s=function(){return s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)},x=l.forwardRef(function(e,t){return c.createElement(b,s({},e,{chartType:"Radar",ref:t}))});const D={style:{fillOpacity:.15}},L={size:2,style:{fill:"white"}},S={x:{line:!1,tick:null,labelSpacing:12},y:{labelSpacing:4,gridConnect:"line",gridLineWidth:1,gridLineDash:[3,2]}},y=l.forwardRef((e,t)=>{const{insetLeft:r=h,insetRight:o=E,area:a,point:f,axis:g,...u}=e,_=i({},L,f),R=i({},S,g),F=i({},D,a);return c.createElement(x,{insetLeft:r,insetRight:o,area:F,point:_,axis:R,...u,ref:t})});y.__docgenInfo={description:"",methods:[],displayName:"Radar"};const w={title:"Plots/Radar"},C=[{item:"Design",type:"a",score:70},{item:"Design",type:"b",score:30},{item:"Development",type:"a",score:60},{item:"Development",type:"b",score:70},{item:"Marketing",type:"a",score:50},{item:"Marketing",type:"b",score:60},{item:"Users",type:"a",score:40},{item:"Users",type:"b",score:50},{item:"Test",type:"a",score:60},{item:"Test",type:"b",score:70},{item:"Language",type:"a",score:70},{item:"Language",type:"b",score:50},{item:"Technology",type:"a",score:50},{item:"Technology",type:"b",score:40},{item:"Support",type:"a",score:30},{item:"Support",type:"b",score:40},{item:"Sales",type:"a",score:60},{item:"Sales",type:"b",score:40},{item:"UX",type:"a",score:50},{item:"UX",type:"b",score:60}];function n(){const e={title:"雷达图",data:C,xField:"item",yField:"score",colorField:"type",scale:{y:{domainMax:80}}};return c.createElement(y,{...e,renderer:new T})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`function Basic() {
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

  // @ts-expect-error 暂时忽略
  return <Radar {...config} renderer={new SVGRenderer()} />;
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Basic"];export{n as Basic,B as __namedExportsOrder,w as default};
