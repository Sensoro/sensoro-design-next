import{r as q,R as i}from"./index-RYns6xqu.js";import{d as s}from"./index-B8j0lMuf.js";import{B as N,R as w,D as J,a as R}from"./index.esm-VbcZeqnA.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";var d=function(){return d=Object.assign||function(e){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},d.apply(this,arguments)},D=q.forwardRef(function(e,n){return i.createElement(N,d({},e,{chartType:"Column",ref:n}))});const O={radiusTopLeft:1,radiusTopRight:1},b={x:{line:!0,tick:!1}},S={x:{padding:.6}},j={elementHighlight:!1},l=q.forwardRef((e,n)=>{const{insetLeft:t=J,insetRight:u=R,axis:c,scale:E,style:B,interaction:L,...x}=e,I=s({},O,B),T=s({},b,{}),A=s({},S,E),G=s({},j,L);return i.createElement(D,{insetLeft:t,insetRight:u,axis:T,scale:A,style:I,interaction:G,...x,ref:n,renderer:new w})});l.__docgenInfo={description:"",methods:[],displayName:"Column"};const k={title:"Charts/Column"},v=[{name:"London",月份:"Jan.",月均降雨量:18.9},{name:"London",月份:"Feb.",月均降雨量:28.8},{name:"London",月份:"Mar.",月均降雨量:39.3},{name:"London",月份:"Apr.",月均降雨量:81.4},{name:"London",月份:"May",月均降雨量:47},{name:"London",月份:"Jun.",月均降雨量:20.3},{name:"London",月份:"Jul.",月均降雨量:24},{name:"London",月份:"Aug.",月均降雨量:35.6},{name:"Berlining",月份:"Jan.",月均降雨量:-12.4},{name:"Berlining",月份:"Feb.",月均降雨量:-23.2},{name:"Berlining",月份:"Mar.",月均降雨量:-34.5},{name:"Berlining",月份:"Apr.",月均降雨量:-99.7},{name:"Berlining",月份:"May",月均降雨量:-52.6},{name:"Berlining",月份:"Jun.",月均降雨量:-35.5},{name:"Berlining",月份:"Jul.",月均降雨量:-37.4},{name:"Berlining",月份:"Aug.",月均降雨量:-42.4}];function r(){const e={title:"基础柱状图",data:[{letter:"A",frequency:67},{letter:"B",frequency:92},{letter:"C",frequency:82},{letter:"D",frequency:53},{letter:"E",frequency:12},{letter:"F",frequency:88},{letter:"G",frequency:15},{letter:"H",frequency:94},{letter:"I",frequency:66},{letter:"J",frequency:53}],xField:"letter",yField:"frequency"};return i.createElement(l,{...e})}function o(){const e={title:"分组柱状图",data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0};return i.createElement(l,{...e})}function a(){const e={title:"双向柱状图",data:v,xField:"月份",yField:"月均降雨量",colorField:"name"};return i.createElement(l,{...e})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"Group"};a.__docgenInfo={description:"",methods:[],displayName:"BothwayGroup"};var f,m,p;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
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
  return <Column {...config} />;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,y,F;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`function Group() {
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
  return <Column {...config} />;
}`,...(F=(y=o.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var C,_,h;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`function BothwayGroup() {
  const config: ColumnConfig = {
    title: '双向柱状图',
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name'
  };
  return <Column {...config} />;
}`,...(h=(_=a.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const X=["Basic","Group","BothwayGroup"];export{r as Basic,a as BothwayGroup,o as Group,X as __namedExportsOrder,k as default};
