import{R as r}from"./index-RYns6xqu.js";import"./index-CavETqGh.js";import{g as i}from"./utils-UCQ0NSiz.js";import{B as s}from"./index-8t_2pQ5a.js";import"./index.esm-CxAjjnVK.js";import"./index-BQ5IbGbl.js";import"./colors-ueE8I_GV.js";const h={title:"Plots/Bubble"};function n(){const t={...i(),layout:{padding:10},width:400,height:300,data:[{name:"上海",value:4},{name:"深圳",value:6},{name:"北京",value:10}]};return r.createElement(s,{...t})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var e,a,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`function Basic() {
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const b=["Basic"];export{n as Basic,b as __namedExportsOrder,h as default};