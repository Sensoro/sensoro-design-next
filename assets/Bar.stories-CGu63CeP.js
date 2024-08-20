import{r as B,R as s}from"./index-RYns6xqu.js";import{e as F,f as A,d as i,R as _}from"./index-qRM7OX3P.js";import{B as w}from"./index-BrZt84n0.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var d=function(){return d=Object.assign||function(e){for(var n,t=1,c=arguments.length;t<c;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)},I=B.forwardRef(function(e,n){return s.createElement(w,d({},e,{chartType:"Bar",ref:n}))});const D={radius:1,maxWidth:8},N={x:{size:110,labelAutoEllipsis:!0,tick:!1,title:!1,labelFontSize:12,labelFill:F,labelFillOpacity:.6,labelSpacing:16},y:{grid:!1,tick:!1,label:!1,title:!1}},S={elementHighlight:!1},G={y:{domain:[0,1e3]}},L=e=>({label:{text:({originData:n})=>`${n[e]}`,position:"left",dx:0,dy:0,style:{fill:F,fillOpacity:1,fontSize:14,fontFamily:"DINAlternate-Bold",lineHeight:14}},style:{fill:A}}),g=B.forwardRef((e,n)=>{const{axis:t,style:c,scale:r,interaction:k,markBackground:b,paddingRight:C=0,...f}=e,O=i({},D,c),v=i({},N,t),E=i({},L(f.yField),b),R=i({},S,k),T=i({},G,r);return s.createElement(I,{paddingRight:C,axis:v,style:O,markBackground:E,interaction:R,scale:T,...f,ref:n})});g.__docgenInfo={description:"",methods:[],displayName:"Bar"};const M={title:"Plots/Bar"},a=[{name:"蓝领",value:8},{name:"白领",value:220},{name:"制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说",value:320},{name:"退休人员",value:440}];function l(){const e={title:"基础条形图",height:a.length*8+(a.length-1)*24+92+48,data:a,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},paddingRight:21,markBackground:{label:{dx:316}}};return s.createElement(g,{...e,renderer:new _})}function o(){const e={title:"独立标题行条形图",height:a.length*8+(a.length-1)*36+92+48,data:a,xField:"name",yField:"value",width:480,scale:{y:{domain:[0,1200]}},paddingRight:21,markBackground:{label:{dx:427}},axis:{x:{size:0,label:!1}},label:{text:"name",position:"left",transform:[{type:"overlapDodgeY"}],dy:-18,lineHeight:20}};return s.createElement(g,{...e,renderer:new _})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"AloneTitle"};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`function Basic() {
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
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`function AloneTitle() {
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
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const P=["Basic","AloneTitle"];export{o as AloneTitle,l as Basic,P as __namedExportsOrder,M as default};
