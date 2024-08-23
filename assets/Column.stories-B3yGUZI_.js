import{R as t}from"./index-RYns6xqu.js";import{g as a}from"./utils-Bz6E4Kwq.js";import{C as i}from"./index-DPnWRbHF.js";import"./index.esm-C7RJGmRu.js";import"./index-BQ5IbGbl.js";import"./index-Bmo7iHix.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";const _={title:"Charts/Column"},C=[{name:"London",月份:"Jan.",月均降雨量:18.9},{name:"London",月份:"Feb.",月均降雨量:28.8},{name:"London",月份:"Mar.",月均降雨量:39.3},{name:"London",月份:"Apr.",月均降雨量:81.4},{name:"London",月份:"May",月均降雨量:47},{name:"London",月份:"Jun.",月均降雨量:20.3},{name:"London",月份:"Jul.",月均降雨量:24},{name:"London",月份:"Aug.",月均降雨量:35.6},{name:"Berlining",月份:"Jan.",月均降雨量:-12.4},{name:"Berlining",月份:"Feb.",月均降雨量:-23.2},{name:"Berlining",月份:"Mar.",月均降雨量:-34.5},{name:"Berlining",月份:"Apr.",月均降雨量:-99.7},{name:"Berlining",月份:"May",月均降雨量:-52.6},{name:"Berlining",月份:"Jun.",月均降雨量:-35.5},{name:"Berlining",月份:"Jul.",月均降雨量:-37.4},{name:"Berlining",月份:"Aug.",月均降雨量:-42.4}];function e(){const n={...a(),title:"基础柱状图",data:[{letter:"A",frequency:67},{letter:"B",frequency:92},{letter:"C",frequency:82},{letter:"D",frequency:53},{letter:"E",frequency:12},{letter:"F",frequency:88},{letter:"G",frequency:15},{letter:"H",frequency:94},{letter:"I",frequency:66},{letter:"J",frequency:53}],xField:"letter",yField:"frequency"};return t.createElement(i,{...n})}function r(){const n={...a(),title:"分组柱状图",data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0};return t.createElement(i,{...n})}function o(){const n={...a(),title:"双向柱状图",data:C,xField:"月份",yField:"月均降雨量",colorField:"name"};return t.createElement(i,{...n})}e.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"Group"};o.__docgenInfo={description:"",methods:[],displayName:"BothwayGroup"};var l,d,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<ColumnConfig>();
  const config: ColumnConfig = {
    ...sharedConfig,
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
}`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,f,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`function Group() {
  const sharedConfig = getSharedConfig<ColumnConfig>();
  const config: ColumnConfig = {
    ...sharedConfig,
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
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,p,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`function BothwayGroup() {
  const sharedConfig = getSharedConfig<ColumnConfig>();
  const config: ColumnConfig = {
    ...sharedConfig,
    title: '双向柱状图',
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name'
  };
  return <Column {...config} />;
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const S=["Basic","Group","BothwayGroup"];export{e as Basic,o as BothwayGroup,r as Group,S as __namedExportsOrder,_ as default};
