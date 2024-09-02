import{R as i}from"./index-RYns6xqu.js";import"./index-aBNx29v1.js";import{g as a}from"./utils-DarGM9Ef.js";import{R as s}from"./index-D-lVtt7n.js";import"./index.esm-DwMD56tm.js";import"./index-BQ5IbGbl.js";import"./colors-B089-zBF.js";import"./index-CTDHj6cD.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const x={title:"Plots/Radar"},c=[{item:"Design",type:"a",score:70},{item:"Design",type:"b",score:30},{item:"Development",type:"a",score:60},{item:"Development",type:"b",score:70},{item:"Marketing",type:"a",score:50},{item:"Marketing",type:"b",score:60},{item:"Users",type:"a",score:40},{item:"Users",type:"b",score:50},{item:"Test",type:"a",score:60},{item:"Test",type:"b",score:70},{item:"Language",type:"a",score:70},{item:"Language",type:"b",score:50},{item:"Technology",type:"a",score:50},{item:"Technology",type:"b",score:40},{item:"Support",type:"a",score:30},{item:"Support",type:"b",score:40},{item:"Sales",type:"a",score:60},{item:"Sales",type:"b",score:40},{item:"UX",type:"a",score:50},{item:"UX",type:"b",score:60}];function e(){const n={...a(),title:"雷达图",data:c,xField:"item",yField:"score",colorField:"type",scale:{y:{domainMax:80}},legend:{color:{itemMarker:"hyphenPoint",layout:{justifyContent:"flex-end"}}}};return i.createElement(s,{...n})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<RadarConfig>();
  const config: RadarConfig = {
    ...sharedConfig,
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
  return <Radar {...config} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const R=["Basic"];export{e as Basic,R as __namedExportsOrder,x as default};
