import{R as r}from"./index-RYns6xqu.js";import{g as i}from"./utils-Bz6E4Kwq.js";import{B as s}from"./index-BqFOTNtW.js";import"./index.esm-C7RJGmRu.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";const p={title:"Charts/Bubble"};function n(){const t={...i(),layout:{padding:10},width:400,height:300,data:[{name:"上海",value:4},{name:"深圳",value:6},{name:"北京",value:10}]};return r.createElement(s,{...t})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var e,a,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<BubbleConfig>();
  const config: BubbleConfig = {
    ...sharedConfig,
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
  return <Bubble {...config} />;
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Basic"];export{n as Basic,h as __namedExportsOrder,p as default};
