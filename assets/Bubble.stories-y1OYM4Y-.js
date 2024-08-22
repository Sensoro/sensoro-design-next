import{R as o}from"./index-RYns6xqu.js";import{R as i}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{B as s}from"./index-BM0pWGjP.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";const f={title:"Plots/Bubble"};function e(){const t={layout:{padding:10},width:400,height:300,data:[{name:"上海",value:4},{name:"深圳",value:6},{name:"北京",value:10}]};return o.createElement(s,{...t,renderer:new i})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function Basic() {
  const config: BubbleConfig = {
    layout: {
      padding: 10
    },
    width: 400,
    height: 300,
    data: [{
      name: '上海',
      value: 4
    }, {
      name: '深圳',
      value: 6
    }, {
      name: '北京',
      value: 10
    }]
  };

  // @ts-expect-error 暂时忽略
  return <Bubble {...config} renderer={new SVGRenderer()} />;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const g=["Basic"];export{e as Basic,g as __namedExportsOrder,f as default};
