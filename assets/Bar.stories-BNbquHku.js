import{r as F,R as s}from"./index-RYns6xqu.js";import{e as B,f as O,d as i,R as k}from"./index-qRM7OX3P.js";import{B as N}from"./index-BrZt84n0.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var d=function(){return d=Object.assign||function(e){for(var n,a=1,c=arguments.length;a<c;a++){n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)},R=F.forwardRef(function(e,n){return s.createElement(N,d({},e,{chartType:"Bar",ref:n}))});const S={radius:1,maxWidth:8},D={x:{size:110,labelAutoEllipsis:!0,tick:!1,title:!1,labelFontSize:12,labelFill:B,labelFillOpacity:.6,labelSpacing:16},y:{grid:!1,tick:!1,label:!1,title:!1}},G={elementHighlight:!1},L={y:{domain:[0,1e3]}},w=e=>({label:{text:({originData:n})=>`${n[e]}`,position:"right",dx:44,dy:0,style:{fill:B,fillOpacity:1,fontSize:14,fontFamily:"DINAlternate-Bold",lineHeight:14}},style:{fill:O}}),f=F.forwardRef((e,n)=>{const{axis:a,style:c,scale:r,interaction:_,markBackground:C,paddingRight:v=44,...g}=e,E=i({},S,c),b=i({},D,a),A=i({},w(g.yField),C),T=i({},G,_),I=i({},L,r);return s.createElement(R,{paddingRight:v,axis:b,style:E,markBackground:A,interaction:T,scale:I,...g,ref:n})});f.__docgenInfo={description:"",methods:[],displayName:"Bar"};const M={title:"Plots/Bar"},t=[{name:"蓝领",value:10},{name:"白领",value:220},{name:"制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说",value:320},{name:"退休人员",value:440}];function l(){const e={title:"基础条形图",height:t.length*8+(t.length-1)*24+92+48,data:t,xField:"name",yField:"value",scale:{y:{domain:[0,800]}}};return s.createElement(f,{...e,renderer:new k})}function o(){const e={title:"独立标题行条形图",height:t.length*8+(t.length-1)*24+92+48,data:t,xField:"name",yField:"value",scale:{y:{domain:[0,800]}},axis:{x:{size:0,label:!1}},label:{text:"name",position:"left",transform:[{type:"overlapDodgeY"}],dy:-18,lineHeight:20}};return s.createElement(f,{...e})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"AloneTitle"};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`function Basic() {
  const config: BarConfig = {
    title: '基础条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    scale: {
      y: {
        domain: [0, 800]
      }
    }
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`function AloneTitle() {
  const config: BarConfig = {
    title: '独立标题行条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    scale: {
      y: {
        domain: [0, 800]
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
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const P=["Basic","AloneTitle"];export{o as AloneTitle,l as Basic,P as __namedExportsOrder,M as default};
