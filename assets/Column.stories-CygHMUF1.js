import{R as o}from"./index-RYns6xqu.js";import{R as a}from"./cloneDeep-Q-bFRGJl.js";import"./index-BZv2_rtt.js";import{C as c}from"./index-Bdtvt9ag.js";import"./index-BQ5IbGbl.js";import"./colors-CMe-4sOE.js";import"./index-4sF_yb9E.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const L={title:"Plots/Column"},g=[{name:"London",月份:"Jan.",月均降雨量:18.9},{name:"London",月份:"Feb.",月均降雨量:28.8},{name:"London",月份:"Mar.",月均降雨量:39.3},{name:"London",月份:"Apr.",月均降雨量:81.4},{name:"London",月份:"May",月均降雨量:47},{name:"London",月份:"Jun.",月均降雨量:20.3},{name:"London",月份:"Jul.",月均降雨量:24},{name:"London",月份:"Aug.",月均降雨量:35.6},{name:"Berlining",月份:"Jan.",月均降雨量:-12.4},{name:"Berlining",月份:"Feb.",月均降雨量:-23.2},{name:"Berlining",月份:"Mar.",月均降雨量:-34.5},{name:"Berlining",月份:"Apr.",月均降雨量:-99.7},{name:"Berlining",月份:"May",月均降雨量:-52.6},{name:"Berlining",月份:"Jun.",月均降雨量:-35.5},{name:"Berlining",月份:"Jul.",月均降雨量:-37.4},{name:"Berlining",月份:"Aug.",月均降雨量:-42.4}];function n(){const e={title:"基础柱状图",data:[{letter:"A",frequency:67},{letter:"B",frequency:92},{letter:"C",frequency:82},{letter:"D",frequency:53},{letter:"E",frequency:12},{letter:"F",frequency:88},{letter:"G",frequency:15},{letter:"H",frequency:94},{letter:"I",frequency:66},{letter:"J",frequency:53}],xField:"letter",yField:"frequency"};return o.createElement(c,{...e,renderer:new a})}function r(){const e={title:"分组柱状图",data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0};return o.createElement(c,{...e,renderer:new a})}function t(){const e={title:"双向柱状图",data:g,xField:"月份",yField:"月均降雨量",colorField:"name"};return o.createElement(c,{...e,renderer:new a})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"Group"};t.__docgenInfo={description:"",methods:[],displayName:"BothwayGroup"};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function Basic() {
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,s,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`function Group() {
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,f,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`function BothwayGroup() {
  const config: ColumnConfig = {
    title: '双向柱状图',
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name'
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _=["Basic","Group","BothwayGroup"];export{n as Basic,t as BothwayGroup,r as Group,_ as __namedExportsOrder,L as default};
