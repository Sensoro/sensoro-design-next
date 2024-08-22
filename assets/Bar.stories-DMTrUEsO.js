import{R as l}from"./index-RYns6xqu.js";import{d as i,R as y}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{B as I}from"./index-CsGT32De.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";const S={x:{size:0,label:!1}},N={text:"name",position:"left",transform:[{type:"overlapDodgeY"}],dy:-18,lineHeight:20};function s(t){const{aloneLabel:o,data:e,axis:d,yField:c,label:m,width:g,height:_,paddingRight:L,markBackground:b,...v}=t,w=e==null?void 0:e.reduce((C,k)=>Math.max(k[c],C),0).toString().length,E=o?i({},S,d):d,F=o?i({},N,m):m,R=_||e.length*8+(e.length-1)*(o?36:24)+92+48,T=L||w*7,A=i({},{label:{dx:g-48-16-(o?0:110)}},b);return l.createElement(I,{width:g,height:R,yField:c,axis:E,label:F,paddingRight:T,markBackground:A,data:e,...v})}s.__docgenInfo={description:"",methods:[],displayName:"Bar",props:{aloneLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const X={title:"Charts/Bar"},n=[{name:"蓝领",value:108},{name:"白领",value:220},{name:"制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说",value:320},{name:"退休人员",value:440}];function a(){const t={title:"基础条形图",height:n.length*8+(n.length-1)*24+92+48,data:n,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}}};return l.createElement(s,{...t,renderer:new y})}function r(){const t={title:"独立标题行条形图",height:n.length*8+(n.length-1)*36+92+48,data:n,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},aloneLabel:!0};return l.createElement(s,{...t,renderer:new y})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"AloneTitle"};var h,p,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`function Basic() {
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
    }
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,B,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function AloneTitle() {
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
    aloneLabel: true
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}`,...(x=(B=r.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const Y=["Basic","AloneTitle"];export{r as AloneTitle,a as Basic,Y as __namedExportsOrder,X as default};
