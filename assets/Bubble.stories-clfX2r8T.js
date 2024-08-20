import{r as a,R as m}from"./index-RYns6xqu.js";import{i as u,c as R,g as E,C as w,a as _,R as x}from"./index-qRM7OX3P.js";import"./index-BQ5IbGbl.js";const f=a.forwardRef((e,p)=>{const{colors:h=_,data:g=[],style:v,...b}=e,n=a.useRef(),s=a.useRef(),o=a.useRef(null);return a.useImperativeHandle(p,()=>n.current),a.useEffect(()=>{if(n.current&&!u(s.current,e)){let t=!1;if(s.current){const{data:r,...y}=s.current,{data:C,...B}=e;t=u(y,B)}s.current=R(e),t&&n.current.changeData({value:{name:"flare",children:E(e,"data")}})}},[e.data]),a.useEffect(()=>{if(!o.current)return()=>{};const t=new w({container:o.current});return t.options({type:"pack",data:{value:{name:"flare",children:g}},encode:{value:"value",color:r=>r.data.name},scale:{color:{range:["transparent",...h]}},legend:!1,style:{labelText:r=>r.depth===1?`${r.data.name}`:"",labelFontSize:16,...v},...b}),t.render(),()=>{n.current&&(n.current.destroy(),n.current=void 0)}},[]),m.createElement("div",{ref:o})});f.__docgenInfo={description:"",methods:[],displayName:"Bubble"};const N={title:"Plots/Bubble"};function c(){const e={layout:{padding:10},width:400,height:300,data:[{name:"上海",value:4},{name:"深圳",value:6},{name:"北京",value:10}]};return m.createElement(f,{...e,renderer:new x})}c.__docgenInfo={description:"",methods:[],displayName:"Basic"};var l,d,i;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`function Basic() {
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
}`,...(i=(d=c.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const O=["Basic"];export{c as Basic,O as __namedExportsOrder,N as default};
