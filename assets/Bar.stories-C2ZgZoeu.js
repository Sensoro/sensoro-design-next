import{r as u,R as c}from"./index-RYns6xqu.js";import{e as p,f as I,d as r,R}from"./index-W-Zgmc1l.js";import{B as O,a as T}from"./index-DWkPdOFk.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var o=function(){return o=Object.assign||function(e){for(var n,a=1,l=arguments.length;a<l;a++){n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)},k=u.forwardRef(function(e,n){return c.createElement(O,o({},e,{chartType:"Bar",ref:n}))});const v={radius:1,maxWidth:8},A={x:{size:110,labelAutoEllipsis:!0,tick:!1,title:!1,labelFontSize:12,labelFill:p,labelFillOpacity:.6,labelSpacing:16},y:{grid:!1,tick:!1,label:!1,title:!1}},N={elementHighlight:!1},S={y:{domain:[0,1e3]}},G=e=>({label:{text:({originData:n})=>`${n[e]}`,position:"right",dx:30,style:{fill:p,fillOpacity:1,fontSize:14,fontFamily:"DINAlternate-Bold",lineHeight:14}},style:{fill:I}}),h=u.forwardRef((e,n)=>{const{axis:a,style:l,scale:t,interaction:y,markBackground:x,insetRight:_=T,...d}=e,B=r({},v,l),F=r({},A,a),C=r({},G(d.yField),x),E=r({},N,y),b=r({},S,t);return c.createElement(k,{insetRight:_,axis:F,style:B,markBackground:C,interaction:E,scale:b,...d,ref:n})});h.__docgenInfo={description:"",methods:[],displayName:"Bar"};const H={title:"Charts/Bar"},s=[{name:"蓝领",value:1100},{name:"白领",value:2200},{name:"制造业蓝领哈久啊禄口街道发了卡萨丁激发",value:330},{name:"退休人员",value:400}];function i(){const e={title:"基础条形图",height:s.length*8+(s.length-1)*24+92+48,data:s,xField:"name",yField:"value",paddingRight:-160,scale:{y:{domain:[0,2200]}},axis:{x:{size:0,label:!1,grid:!1}},label:{text:"name",position:"left",dy:-15}};return c.createElement(h,{...e,renderer:new R})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var f,g,m;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
  const config: BarConfig = {
    title: '基础条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    paddingRight: -160,
    scale: {
      y: {
        domain: [0, 2200]
      }
    },
    axis: {
      x: {
        size: 0,
        label: false,
        grid: false
      }
    },
    label: {
      text: 'name',
      position: 'left',
      dy: -15
    }
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const j=["Basic"];export{i as Basic,j as __namedExportsOrder,H as default};
