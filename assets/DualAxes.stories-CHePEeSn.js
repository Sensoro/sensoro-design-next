import{R as l}from"./index-RYns6xqu.js";import{g as o}from"./utils-CqaP2Bpb.js";import{D as r}from"./index-BEXjgnZX.js";import"./index.esm-CxAjjnVK.js";import"./index-BQ5IbGbl.js";import"./index-BBTzdywh.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const x={title:"Charts/DualAxes"},s=[{time:"2019-03",value:350,count:800},{time:"2019-04",value:900,count:600},{time:"2019-05",value:300,count:400},{time:"2019-06",value:450,count:380},{time:"2019-07",value:470,count:220}];function e(){const a={...o(),title:"双轴图",data:s,xField:"time",legend:!0,scale:{y:{zero:!0}},children:[{type:"interval",yField:"value",style:{maxWidth:80}},{type:"line",yField:"count",style:{lineWidth:2},axis:{y:{position:"right"}},area:{axis:{y:!1},style:{fill:"l(270) 0:#ffffff 1:#5AD8A6",fillOpacity:.3}},point:{style:{r:4,fill:"#fff",stroke:"#5AD8A6",lineWidth:2}}}]};return l.createElement(r,{...a})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<DualAxesConfig>();
  const config: DualAxesConfig = {
    ...sharedConfig,
    title: '双轴图',
    data,
    xField: 'time',
    legend: true,
    scale: {
      y: {
        zero: true
      }
    },
    children: [{
      type: 'interval',
      yField: 'value',
      style: {
        maxWidth: 80
      }
    }, {
      type: 'line',
      yField: 'count',
      style: {
        lineWidth: 2
      },
      axis: {
        y: {
          position: 'right'
        }
      },
      area: {
        axis: {
          y: false
        },
        style: {
          fill: 'l(270) 0:#ffffff 1:#5AD8A6',
          fillOpacity: 0.3
        }
      },
      point: {
        style: {
          r: 4,
          fill: '#fff',
          stroke: '#5AD8A6',
          lineWidth: 2
        }
      }
    }]
  };
  return <DualAxes {...config} />;
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const A=["Basic"];export{e as Basic,A as __namedExportsOrder,x as default};
