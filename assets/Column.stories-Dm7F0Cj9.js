import{r as h,R as c}from"./index-RYns6xqu.js";import{B as G,g as d,D as I,a as T}from"./index-Bx2dUfWs.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";var u=function(){return u=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)},A=h.forwardRef(function(e,n){return c.createElement(G,u({},e,{chartType:"Column",ref:n}))});const J={radiusTopLeft:1,radiusTopRight:1},w={x:{line:!0,tick:!1}},s=h.forwardRef((e,n)=>{const{insetLeft:t=I,insetRight:l=T,axis:r=!0,style:B=!0,...E}=e,L=d(B,J),x=d(r,w);return c.createElement(A,{insetLeft:t,insetRight:l,axis:x,style:L,...E,ref:n})});s.__docgenInfo={description:"",methods:[],displayName:"Column"};const S={title:"Charts/Column"},b=[{name:"London",月份:"Jan.",月均降雨量:18.9},{name:"London",月份:"Feb.",月均降雨量:28.8},{name:"London",月份:"Mar.",月均降雨量:39.3},{name:"London",月份:"Apr.",月均降雨量:81.4},{name:"London",月份:"May",月均降雨量:47},{name:"London",月份:"Jun.",月均降雨量:20.3},{name:"London",月份:"Jul.",月均降雨量:24},{name:"London",月份:"Aug.",月均降雨量:35.6},{name:"Berlining",月份:"Jan.",月均降雨量:-12.4},{name:"Berlining",月份:"Feb.",月均降雨量:-23.2},{name:"Berlining",月份:"Mar.",月均降雨量:-34.5},{name:"Berlining",月份:"Apr.",月均降雨量:-99.7},{name:"Berlining",月份:"May",月均降雨量:-52.6},{name:"Berlining",月份:"Jun.",月均降雨量:-35.5},{name:"Berlining",月份:"Jul.",月均降雨量:-37.4},{name:"Berlining",月份:"Aug.",月均降雨量:-42.4}];function o(){const e={title:{title:"基础柱状图"},data:[{letter:"A",frequency:67},{letter:"B",frequency:92},{letter:"C",frequency:82},{letter:"D",frequency:53},{letter:"E",frequency:12},{letter:"F",frequency:88},{letter:"G",frequency:15},{letter:"H",frequency:94},{letter:"I",frequency:66},{letter:"J",frequency:53}],xField:"letter",yField:"frequency"};return c.createElement(s,{...e})}function a(){const e={title:{title:"分组柱状图"},data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0};return c.createElement(s,{...e})}function i(){const e={title:{title:"分组柱状图"},data:b,xField:"月份",yField:"月均降雨量",seriesField:"name",group:!0};return c.createElement(s,{...e})}o.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"Group"};i.__docgenInfo={description:"",methods:[],displayName:"BothwayGroup"};var f,m,p;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
  const config: ColumnConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础柱状图'
    },
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,y,F;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`function Group() {
  const config: ColumnConfig = {
    title: {
      title: '分组柱状图'
    },
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
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var C,q,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`function BothwayGroup() {
  const config: ColumnConfig = {
    title: {
      title: '分组柱状图'
    },
    data,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    group: true
  };
  return <Column {...config} />;
}`,...(_=(q=i.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};const j=["Basic","Group","BothwayGroup"];export{o as Basic,i as BothwayGroup,a as Group,j as __namedExportsOrder,S as default};
