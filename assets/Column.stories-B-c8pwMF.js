import{r as E,R as i}from"./index-RYns6xqu.js";import{d as s,R as f}from"./index-qRM7OX3P.js";import{B as R}from"./index-BrZt84n0.js";import{D as N,a as S}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-CpOIycTO.js";var u=function(){return u=Object.assign||function(e){for(var n,r=1,d=arguments.length;r<d;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},u.apply(this,arguments)},J=E.forwardRef(function(e,n){return i.createElement(R,u({},e,{chartType:"Column",ref:n}))});const D={radiusTopLeft:1,radiusTopRight:1},O={x:{line:!0,tick:!1}},b={x:{padding:.6}},j={elementHighlight:!1},l=E.forwardRef((e,n)=>{const{insetLeft:r=N,insetRight:d=S,axis:c,scale:x,style:B,interaction:L,...G}=e,I=s({},D,B),T=s({},O,{}),w=s({},b,x),A=s({},j,L);return i.createElement(J,{insetLeft:r,insetRight:d,axis:T,scale:w,style:I,interaction:A,...G,ref:n})});l.__docgenInfo={description:"",methods:[],displayName:"Column"};const k={title:"Plots/Column"},v=[{name:"London",月份:"Jan.",月均降雨量:18.9},{name:"London",月份:"Feb.",月均降雨量:28.8},{name:"London",月份:"Mar.",月均降雨量:39.3},{name:"London",月份:"Apr.",月均降雨量:81.4},{name:"London",月份:"May",月均降雨量:47},{name:"London",月份:"Jun.",月均降雨量:20.3},{name:"London",月份:"Jul.",月均降雨量:24},{name:"London",月份:"Aug.",月均降雨量:35.6},{name:"Berlining",月份:"Jan.",月均降雨量:-12.4},{name:"Berlining",月份:"Feb.",月均降雨量:-23.2},{name:"Berlining",月份:"Mar.",月均降雨量:-34.5},{name:"Berlining",月份:"Apr.",月均降雨量:-99.7},{name:"Berlining",月份:"May",月均降雨量:-52.6},{name:"Berlining",月份:"Jun.",月均降雨量:-35.5},{name:"Berlining",月份:"Jul.",月均降雨量:-37.4},{name:"Berlining",月份:"Aug.",月均降雨量:-42.4}];function t(){const e={title:"基础柱状图",data:[{letter:"A",frequency:67},{letter:"B",frequency:92},{letter:"C",frequency:82},{letter:"D",frequency:53},{letter:"E",frequency:12},{letter:"F",frequency:88},{letter:"G",frequency:15},{letter:"H",frequency:94},{letter:"I",frequency:66},{letter:"J",frequency:53}],xField:"letter",yField:"frequency"};return i.createElement(l,{...e,renderer:new f})}function o(){const e={title:"分组柱状图",data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0};return i.createElement(l,{...e,renderer:new f})}function a(){const e={title:"双向柱状图",data:v,xField:"月份",yField:"月均降雨量",colorField:"name"};return i.createElement(l,{...e,renderer:new f})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"Group"};a.__docgenInfo={description:"",methods:[],displayName:"BothwayGroup"};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`function Basic() {
  const config: ColumnConfig = {
    title: '基础柱状图',
    data: [{
      letter: 'A',
      frequency: 67
    }, {
      letter: 'B',
      frequency: 92
    }, {
      letter: 'C',
      frequency: 82
    }, {
      letter: 'D',
      frequency: 53
    }, {
      letter: 'E',
      frequency: 12
    }, {
      letter: 'F',
      frequency: 88
    }, {
      letter: 'G',
      frequency: 15
    }, {
      letter: 'H',
      frequency: 94
    }, {
      letter: 'I',
      frequency: 66
    }, {
      letter: 'J',
      frequency: 53
    }],
    xField: 'letter',
    yField: 'frequency'
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,F,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`function Group() {
  const config: ColumnConfig = {
    title: '分组柱状图',
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json'
    },
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}`,...(C=(F=o.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var _,h,q;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`function BothwayGroup() {
  const config: ColumnConfig = {
    title: '双向柱状图',
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name'
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}`,...(q=(h=a.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const X=["Basic","Group","BothwayGroup"];export{t as Basic,a as BothwayGroup,o as Group,X as __namedExportsOrder,k as default};
