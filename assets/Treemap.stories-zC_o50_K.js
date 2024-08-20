import{r as u,R as s}from"./index-RYns6xqu.js";import{a as v,d as g,R as _}from"./index-qRM7OX3P.js";import{B as T}from"./index-BrZt84n0.js";import{D as E,a as h}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var l=function(){return l=Object.assign||function(a){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}return a},l.apply(this,arguments)},F=u.forwardRef(function(a,e){return s.createElement(T,l({},a,{chartType:"Treemap",ref:e}))});const R={color:{range:v}},d=u.forwardRef((a,e)=>{const{insetLeft:n=E,insetRight:o=h,scale:r,...p}=a,f=g({},R,r);return s.createElement(F,{insetLeft:n,insetRight:o,scale:f,...p,ref:e})});d.__docgenInfo={description:"",methods:[],displayName:"Treemap"};const N={title:"Plots/Treemap"},y={name:"root",children:[{name:"分类 1",value:560},{name:"分类 2",value:500},{name:"分类 3",value:150},{name:"分类 4",value:140},{name:"分类 5",value:115},{name:"分类 6",value:95},{name:"分类 7",value:90},{name:"分类 8",value:75},{name:"分类 9",value:98},{name:"分类 10",value:60},{name:"分类 11",value:45},{name:"分类 12",value:40},{name:"分类 13",value:40},{name:"分类 14",value:35},{name:"分类 15",value:40},{name:"分类 16",value:40},{name:"分类 17",value:40},{name:"分类 18",value:30},{name:"分类 19",value:28},{name:"分类 20",value:16}]};function t(){const a={title:"矩形树图",data:y,colorField:"value",valueField:"value",tooltip:{title:e=>e.data.name},legend:!1};return s.createElement(d,{...a,renderer:new _})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var m,i,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`function Basic() {
  const config: TreemapConfig = {
    title: '矩形树图',
    data,
    colorField: 'value',
    valueField: 'value',
    tooltip: {
      title: d => d.data.name
    },
    legend: false
  };

  // @ts-expect-error 暂时忽略
  return <Treemap {...config} renderer={new SVGRenderer()} />;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const O=["Basic"];export{t as Basic,O as __namedExportsOrder,N as default};
