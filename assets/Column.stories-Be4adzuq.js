import{r as q,R as c}from"./index-RYns6xqu.js";import{R as N,D as w,a as J}from"./index-DIRfuV7X.js";import{g as s}from"./utils-C_C-nW83.js";import{B as R}from"./index-BozI7CP4.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";var d=function(){return d=Object.assign||function(e){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)},D=q.forwardRef(function(e,n){return c.createElement(R,d({},e,{chartType:"Column",ref:n}))});const O={radiusTopLeft:1,radiusTopRight:1},b={x:{line:!0,tick:!1}},S={x:{padding:.6}},j={elementHighlight:!1},l=q.forwardRef((e,n)=>{const{insetLeft:t=w,insetRight:u=J,axis:r=!0,scale:E=!0,style:B=!0,interaction:L=!0,...I}=e,x=s(B,O),T=s(r,b),A=s(E,S),G=s(L,j);return c.createElement(D,{insetLeft:t,insetRight:u,axis:T,scale:A,style:x,interaction:G,...I,ref:n,renderer:new N})});l.__docgenInfo={description:"",methods:[],displayName:"Column"};const X={title:"Charts/Column"},v=[{name:"London",月份:"Jan.",月均降雨量:18.9},{name:"London",月份:"Feb.",月均降雨量:28.8},{name:"London",月份:"Mar.",月均降雨量:39.3},{name:"London",月份:"Apr.",月均降雨量:81.4},{name:"London",月份:"May",月均降雨量:47},{name:"London",月份:"Jun.",月均降雨量:20.3},{name:"London",月份:"Jul.",月均降雨量:24},{name:"London",月份:"Aug.",月均降雨量:35.6},{name:"Berlining",月份:"Jan.",月均降雨量:-12.4},{name:"Berlining",月份:"Feb.",月均降雨量:-23.2},{name:"Berlining",月份:"Mar.",月均降雨量:-34.5},{name:"Berlining",月份:"Apr.",月均降雨量:-99.7},{name:"Berlining",月份:"May",月均降雨量:-52.6},{name:"Berlining",月份:"Jun.",月均降雨量:-35.5},{name:"Berlining",月份:"Jul.",月均降雨量:-37.4},{name:"Berlining",月份:"Aug.",月均降雨量:-42.4}];function o(){const e={title:"基础柱状图",data:[{letter:"A",frequency:67},{letter:"B",frequency:92},{letter:"C",frequency:82},{letter:"D",frequency:53},{letter:"E",frequency:12},{letter:"F",frequency:88},{letter:"G",frequency:15},{letter:"H",frequency:94},{letter:"I",frequency:66},{letter:"J",frequency:53}],xField:"letter",yField:"frequency"};return c.createElement(l,{...e})}function a(){const e={title:"分组柱状图",data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0};return c.createElement(l,{...e})}function i(){const e={title:"双向柱状图",data:v,xField:"月份",yField:"月均降雨量",colorField:"name"};return c.createElement(l,{...e})}o.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"Group"};i.__docgenInfo={description:"",methods:[],displayName:"BothwayGroup"};var f,m,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic() {
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,y,F;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`function Group() {
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
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var C,_,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`function BothwayGroup() {
  const config: ColumnConfig = {
    title: '双向柱状图',
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name'
  };
  return <Column {...config} />;
}`,...(h=(_=i.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const z=["Basic","Group","BothwayGroup"];export{o as Basic,i as BothwayGroup,a as Group,z as __namedExportsOrder,X as default};
