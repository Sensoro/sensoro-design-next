import{R as g}from"./index-RYns6xqu.js";import"./index-CavETqGh.js";import{g as c}from"./utils-UCQ0NSiz.js";import{B as m}from"./index-CLuaq5uy.js";import"./index.esm-CxAjjnVK.js";import"./index-BQ5IbGbl.js";import"./colors-ueE8I_GV.js";import"./index-BBTzdywh.js";import"./index-CpOIycTO.js";const k={title:"Plots/Bar"},n=[{name:"蓝领",value:8},{name:"白领",value:220},{name:"制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说",value:320},{name:"退休人员",value:440}];function e(){const t={...c(),title:"基础条形图",height:n.length*8+(n.length-1)*24+92+48,data:n,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},paddingRight:21,markBackground:{label:{dx:316}}};return g.createElement(m,{...t})}function a(){const t={...c(),title:"独立标题行条形图",height:n.length*8+(n.length-1)*36+92+48,data:n,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},paddingRight:21,markBackground:{label:{dx:427}},axis:{x:{size:0,label:!1}},label:{text:"name",position:"left",transform:[{type:"overlapDodgeY"}],dy:-18,lineHeight:20}};return g.createElement(m,{...t})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"AloneTitle"};var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<BarConfig>();
  const config: BarConfig = {
    ...sharedConfig,
    title: '基础条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    // 需要传入宽度
    width: 480,
    // 480 - 48 - 110 - 16,
    scale: {
      y: {
        domain: [0, 1200]
      }
    },
    // TODO 以下内容需要再 charts 中实现
    paddingRight: 21,
    markBackground: {
      label: {
        dx: 316
      }
    }
  };
  return <Bar {...config} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,d,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`function AloneTitle() {
  const sharedConfig = getSharedConfig<BarConfig>();
  const config: BarConfig = {
    ...sharedConfig,
    title: '独立标题行条形图',
    height: data.length * 8 + (data.length - 1) * 36 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    // 需要传入宽度
    width: 480,
    scale: {
      y: {
        domain: [0, 1200]
      }
    },
    // TODO 以下内容需要再 charts 中实现
    paddingRight: 21,
    markBackground: {
      label: {
        dx: 427
      }
    },
    axis: {
      x: {
        size: 0,
        label: false
      }
    },
    label: {
      text: 'name',
      position: 'left',
      transform: [{
        type: 'overlapDodgeY'
      }],
      dy: -18,
      lineHeight: 20
    }
  };
  return <Bar {...config} />;
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const F=["Basic","AloneTitle"];export{a as AloneTitle,e as Basic,F as __namedExportsOrder,k as default};
