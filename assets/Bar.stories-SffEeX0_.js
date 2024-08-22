import{R as c}from"./index-RYns6xqu.js";import{R as m}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{B as g}from"./index-CsGT32De.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";const R={title:"Plots/Bar"},e=[{name:"蓝领",value:8},{name:"白领",value:220},{name:"制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说",value:320},{name:"退休人员",value:440}];function n(){const t={title:"基础条形图",height:e.length*8+(e.length-1)*24+92+48,data:e,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},paddingRight:21,markBackground:{label:{dx:316}}};return c.createElement(g,{...t,renderer:new m})}function a(){const t={title:"独立标题行条形图",height:e.length*8+(e.length-1)*36+92+48,data:e,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},paddingRight:21,markBackground:{label:{dx:427}},axis:{x:{size:0,label:!1}},label:{text:"name",position:"left",transform:[{type:"overlapDodgeY"}],dy:-18,lineHeight:20}};return c.createElement(g,{...t,renderer:new m})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"AloneTitle"};var r,i,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`function Basic() {
  const config: BarConfig = {
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

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,d,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`function AloneTitle() {
  const config: BarConfig = {
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

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const b=["Basic","AloneTitle"];export{a as AloneTitle,n as Basic,b as __namedExportsOrder,R as default};
