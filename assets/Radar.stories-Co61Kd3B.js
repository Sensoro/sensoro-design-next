import{R as i}from"./index-RYns6xqu.js";import{R as a}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{R as n}from"./index-CwxVWbrJ.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const R={title:"Plots/Radar"},c=[{item:"Design",type:"a",score:70},{item:"Design",type:"b",score:30},{item:"Development",type:"a",score:60},{item:"Development",type:"b",score:70},{item:"Marketing",type:"a",score:50},{item:"Marketing",type:"b",score:60},{item:"Users",type:"a",score:40},{item:"Users",type:"b",score:50},{item:"Test",type:"a",score:60},{item:"Test",type:"b",score:70},{item:"Language",type:"a",score:70},{item:"Language",type:"b",score:50},{item:"Technology",type:"a",score:50},{item:"Technology",type:"b",score:40},{item:"Support",type:"a",score:30},{item:"Support",type:"b",score:40},{item:"Sales",type:"a",score:60},{item:"Sales",type:"b",score:40},{item:"UX",type:"a",score:50},{item:"UX",type:"b",score:60}];function e(){const s={title:"雷达图",data:c,xField:"item",yField:"score",colorField:"type",scale:{y:{domainMax:80}}};return i.createElement(n,{...s,renderer:new a})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`function Basic() {
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["Basic"];export{e as Basic,x as __namedExportsOrder,R as default};
