import{r as u,R as s}from"./index-RYns6xqu.js";import{a as f,d as g}from"./index-B8j0lMuf.js";import{B as _,R as T,D as E,a as h}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var l=function(){return l=Object.assign||function(a){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}return a},l.apply(this,arguments)},F=u.forwardRef(function(a,e){return s.createElement(_,l({},a,{chartType:"Treemap",ref:e}))});const R={color:{range:f}},d=u.forwardRef((a,e)=>{const{insetLeft:n=E,insetRight:o=h,scale:r,...p}=a,v=g({},R,r);return s.createElement(F,{insetLeft:n,insetRight:o,scale:v,...p,ref:e,renderer:new T})});d.__docgenInfo={description:"",methods:[],displayName:"Treemap"};const O={title:"Charts/Treemap"},y={name:"root",children:[{name:"分类 1",value:560},{name:"分类 2",value:500},{name:"分类 3",value:150},{name:"分类 4",value:140},{name:"分类 5",value:115},{name:"分类 6",value:95},{name:"分类 7",value:90},{name:"分类 8",value:75},{name:"分类 9",value:98},{name:"分类 10",value:60},{name:"分类 11",value:45},{name:"分类 12",value:40},{name:"分类 13",value:40},{name:"分类 14",value:35},{name:"分类 15",value:40},{name:"分类 16",value:40},{name:"分类 17",value:40},{name:"分类 18",value:30},{name:"分类 19",value:28},{name:"分类 20",value:16}]};function t(){const a={title:"矩形树图",data:y,colorField:"value",valueField:"value",tooltip:{title:e=>e.data.name},legend:!1};return s.createElement(d,{...a})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var m,i,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`function Basic() {
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
  return <Treemap {...config} />;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,O as default};
