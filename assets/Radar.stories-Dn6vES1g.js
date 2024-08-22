import{r as d,R as c}from"./index-RYns6xqu.js";import{d as i,R as x}from"./index-qRM7OX3P.js";import{B as F}from"./index-BrZt84n0.js";import{D as T,a as b}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var s=function(){return s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)},E=d.forwardRef(function(e,t){return c.createElement(F,s({},e,{chartType:"Radar",ref:t}))});const C={style:{fillOpacity:.15}},D={size:2,style:{fill:"white"}},I={x:{line:!1,tick:null,labelSpacing:12},y:{labelSpacing:4,gridConnect:"line",gridLineWidth:1,zIndex:0,gridLineDash:[3,2]}},y=d.forwardRef((e,t)=>{const{insetLeft:n=T,insetRight:o=b,area:r,point:f,axis:g,...u}=e,_=i({},D,f),h=i({},I,g),R=i({},C,r);return c.createElement(E,{insetLeft:n,insetRight:o,area:R,point:_,axis:h,...u,ref:t})});y.__docgenInfo={description:"",methods:[],displayName:"Radar"};const v={title:"Plots/Radar"},L=[{item:"Design",type:"a",score:70},{item:"Design",type:"b",score:30},{item:"Development",type:"a",score:60},{item:"Development",type:"b",score:70},{item:"Marketing",type:"a",score:50},{item:"Marketing",type:"b",score:60},{item:"Users",type:"a",score:40},{item:"Users",type:"b",score:50},{item:"Test",type:"a",score:60},{item:"Test",type:"b",score:70},{item:"Language",type:"a",score:70},{item:"Language",type:"b",score:50},{item:"Technology",type:"a",score:50},{item:"Technology",type:"b",score:40},{item:"Support",type:"a",score:30},{item:"Support",type:"b",score:40},{item:"Sales",type:"a",score:60},{item:"Sales",type:"b",score:40},{item:"UX",type:"a",score:50},{item:"UX",type:"b",score:60}];function a(){const e={title:"雷达图",data:L,xField:"item",yField:"score",colorField:"type",scale:{y:{domainMax:80}},legend:{color:{itemMarker:"hyphenPoint",layout:{justifyContent:"flex-end"}}}};return c.createElement(y,{...e,renderer:new x})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`function Basic() {
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
    },
    legend: {
      color: {
        itemMarker: 'hyphenPoint',
        layout: {
          justifyContent: 'flex-end'
        }
      }
    }
  };

  // @ts-expect-error 暂时忽略
  return <Radar {...config} renderer={new SVGRenderer()} />;
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const w=["Basic"];export{a as Basic,w as __namedExportsOrder,v as default};
