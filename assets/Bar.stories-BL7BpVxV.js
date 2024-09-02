import{R as s}from"./index-RYns6xqu.js";import"./index-aBNx29v1.js";import{d as r}from"./index.esm-DwMD56tm.js";import{B as w}from"./index-4x6n8C7g.js";import{g as y}from"./utils-ux41aw2u.js";import"./colors-B089-zBF.js";import"./index-BQ5IbGbl.js";import"./index-CTDHj6cD.js";import"./index-CpOIycTO.js";const N={x:{size:0,label:!1}},R={text:"name",position:"left",transform:[{type:"overlapDodgeY"}],dy:-18,lineHeight:20};function l(i){const{aloneLabel:e,data:n,axis:d,yField:c,label:g,width:m,height:x,paddingRight:_,markBackground:L,...b}=i,v=n==null?void 0:n.reduce((k,I)=>Math.max(I[c],k),0).toString().length,E=e?r({},N,d):d,F=e?r({},R,g):g,T=x||n.length*8+(n.length-1)*(e?36:24)+92+48,A=_||v*7,S=r({},{label:{dx:m-48-16-(e?0:110)}},L);return s.createElement(w,{width:m,height:T,yField:c,axis:E,label:F,paddingRight:A,markBackground:S,data:n,...b})}l.__docgenInfo={description:"",methods:[],displayName:"Bar",props:{aloneLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const j={title:"Charts/Bar"},a=[{name:"蓝领",value:108},{name:"白领",value:220},{name:"制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说",value:320},{name:"退休人员",value:440}];function t(){const e={...y(),title:"基础条形图",height:a.length*8+(a.length-1)*24+92+48,data:a,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}}};return s.createElement(l,{...e})}function o(){const e={...y(),title:"独立标题行条形图",height:a.length*8+(a.length-1)*36+92+48,data:a,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},aloneLabel:!0};return s.createElement(l,{...e})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"AloneTitle"};var h,f,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`function Basic() {
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
    }
  };
  return <Bar {...config} />;
}`,...(p=(f=t.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var u,C,B;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`function AloneTitle() {
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
    aloneLabel: true
  };
  return <Bar {...config} />;
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const G=["Basic","AloneTitle"];export{o as AloneTitle,t as Basic,G as __namedExportsOrder,j as default};
