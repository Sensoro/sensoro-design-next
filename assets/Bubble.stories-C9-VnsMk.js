import{r as a,R as m}from"./index-RYns6xqu.js";import{i as u,c as E,g as C,C as R,a as _}from"./index-CcMl-4KX.js";import"./index-BQ5IbGbl.js";const f=a.forwardRef((e,p)=>{const{colors:h=_,data:g=[],style:v,...b}=e,t=a.useRef(),s=a.useRef(),o=a.useRef(null);return a.useImperativeHandle(p,()=>t.current),a.useEffect(()=>{if(t.current&&!u(s.current,e)){let n=!1;if(s.current){const{data:r,...y}=s.current,{data:D,...B}=e;n=u(y,B)}s.current=E(e),n&&t.current.changeData({value:{name:"flare",children:C(e,"data")}})}},[e.data]),a.useEffect(()=>{if(!o.current)return()=>{};const n=new R({container:o.current});return n.options({type:"pack",data:{value:{name:"flare",children:g}},encode:{value:"value",color:r=>r.data.name},scale:{color:{range:["transparent",...h]}},legend:!1,style:{labelText:r=>r.depth===1?`${r.data.name}`:"",labelFontSize:16,...v},...b}),n.render(),()=>{t.current&&(t.current.destroy(),t.current=void 0)}},[]),m.createElement("div",{ref:o})});f.__docgenInfo={description:"",methods:[],displayName:"Bubble"};const N={title:"Charts/Bubble"};function c(){const e={layout:{padding:10},width:400,height:300,data:[{name:"上海",value:4},{name:"深圳",value:6},{name:"北京",value:10}]};return m.createElement(f,{...e})}c.__docgenInfo={description:"",methods:[],displayName:"Basic"};var l,i,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`function Basic() {
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
  return <Bubble {...config} />;
}`,...(d=(i=c.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const O=["Basic"];export{c as Basic,O as __namedExportsOrder,N as default};
