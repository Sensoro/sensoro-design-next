import{R as r}from"./index-RYns6xqu.js";import{g as o}from"./utils-ux41aw2u.js";import{L as s}from"./index-DguoiiUm.js";import"./index.esm-DwMD56tm.js";import"./index-BQ5IbGbl.js";import"./index-CTDHj6cD.js";import"./index-CpOIycTO.js";import"./index-B5-wn6KZ.js";import"./colors-B089-zBF.js";const b={title:"Charts/Line"};function n(){const e={...o(),title:{title:"基础折线图"},xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return r.createElement(s,{...e})}function a(){const e={...o(),title:"多条折线图",xField:"year",yField:"value",colorField:"category",legend:{color:{showTitle:!0,title:" ",itemMarker:"hyphenPoint",layout:{justifyContent:"flex-end"}}},data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return r.createElement(s,{...e})}function l(){const e={...o(),title:"曲线图",shapeField:"smooth",xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return r.createElement(s,{...e})}function i(){const e={...o(),title:"多条曲线图",shapeField:"smooth",xField:"year",yField:"value",colorField:"category",legend:!1,data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return r.createElement(s,{...e})}function t(){const e={...o(),title:"辅助线",shapeField:"smooth",xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}],annotations:[{type:"lineY",yField:1800,style:{stroke:"#F72231"},label:{text:"报警阀值:50",position:"right",style:{strokeOpacity:0,fill:"#F72231",fontSize:10,textBaseline:"bottom"}}}]};return r.createElement(s,{...e})}n.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"Middle"};l.__docgenInfo={description:"",methods:[],displayName:"Smooth"};i.__docgenInfo={description:"",methods:[],displayName:"MiddleSmooth"};t.__docgenInfo={description:"",methods:[],displayName:"Baseline"};var u,y,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`function Basic() {
  const sharedConfig = getSharedConfig<LineConfig>();
  const config: LineConfig = {
    ...sharedConfig,
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础折线图'
    },
    xField: 'time',
    yField: 'scales',
    data: [{
      time: '2010-01',
      scales: 1998
    }, {
      time: '2010-02',
      scales: 1850
    }, {
      time: '2010-03',
      scales: 1720
    }, {
      time: '2010-04',
      scales: 1818
    }, {
      time: '2010-05',
      scales: 1920
    }, {
      time: '2010-06',
      scales: 1802
    }, {
      time: '2010-07',
      scales: 1945
    }, {
      time: '2010-08',
      scales: 1856
    }, {
      time: '2010-09',
      scales: 2107
    }, {
      time: '2010-10',
      scales: 2140
    }]
  };
  return <Line {...config} />;
}`,...(d=(y=n.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var f,g,m;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`function Middle() {
  const sharedConfig = getSharedConfig<LineConfig>();
  const config: LineConfig = {
    ...sharedConfig,
    title: '多条折线图',
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    legend: {
      color: {
        showTitle: true,
        title: ' ',
        itemMarker: 'hyphenPoint',
        layout: {
          justifyContent: 'flex-end'
        }
      }
    },
    data: [{
      year: '2010',
      value: 510,
      category: 'Liquid fuel'
    }, {
      year: '2010',
      value: 481,
      category: 'Solid fuel'
    }, {
      year: '2010',
      value: 570,
      category: 'Gas flarinl'
    }, {
      year: '2011',
      value: 513,
      category: 'Liquid fuel'
    }, {
      year: '2011',
      value: 405,
      category: 'Solid fuel'
    }, {
      year: '2011',
      value: 164,
      category: 'Gas flarinl'
    }, {
      year: '2012',
      value: 320,
      category: 'Liquid fuel'
    }, {
      year: '2012',
      value: 410,
      category: 'Solid fuel'
    }, {
      year: '2012',
      value: 250,
      category: 'Gas flarinl'
    }, {
      year: '2013',
      value: 222,
      category: 'Liquid fuel'
    }, {
      year: '2013',
      value: 512,
      category: 'Solid fuel'
    }, {
      year: '2013',
      value: 408,
      category: 'Gas flarinl'
    }, {
      year: '2014',
      value: 428,
      category: 'Liquid fuel'
    }, {
      year: '2014',
      value: 111,
      category: 'Solid fuel'
    }, {
      year: '2014',
      value: 568,
      category: 'Gas flarinl'
    }, {
      year: '2015',
      value: 428,
      category: 'Liquid fuel'
    }, {
      year: '2015',
      value: 111,
      category: 'Solid fuel'
    }, {
      year: '2015',
      value: 568,
      category: 'Gas flarinl'
    }]
  };
  return <Line {...config} />;
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,h,p;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`function Smooth() {
  const sharedConfig = getSharedConfig<LineConfig>();
  const config: LineConfig = {
    ...sharedConfig,
    title: '曲线图',
    shapeField: 'smooth',
    xField: 'time',
    yField: 'scales',
    data: [{
      time: '2010-01',
      scales: 1998
    }, {
      time: '2010-02',
      scales: 1850
    }, {
      time: '2010-03',
      scales: 1720
    }, {
      time: '2010-04',
      scales: 1818
    }, {
      time: '2010-05',
      scales: 1920
    }, {
      time: '2010-06',
      scales: 1802
    }, {
      time: '2010-07',
      scales: 1945
    }, {
      time: '2010-08',
      scales: 1856
    }, {
      time: '2010-09',
      scales: 2107
    }, {
      time: '2010-10',
      scales: 2140
    }]
  };
  return <Line {...config} />;
}`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var S,L,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`function MiddleSmooth() {
  const sharedConfig = getSharedConfig<LineConfig>();
  const config: LineConfig = {
    ...sharedConfig,
    title: '多条曲线图',
    shapeField: 'smooth',
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    legend: false,
    data: [{
      year: '2010',
      value: 510,
      category: 'Liquid fuel'
    }, {
      year: '2010',
      value: 481,
      category: 'Solid fuel'
    }, {
      year: '2010',
      value: 570,
      category: 'Gas flarinl'
    }, {
      year: '2011',
      value: 513,
      category: 'Liquid fuel'
    }, {
      year: '2011',
      value: 405,
      category: 'Solid fuel'
    }, {
      year: '2011',
      value: 164,
      category: 'Gas flarinl'
    }, {
      year: '2012',
      value: 320,
      category: 'Liquid fuel'
    }, {
      year: '2012',
      value: 410,
      category: 'Solid fuel'
    }, {
      year: '2012',
      value: 250,
      category: 'Gas flarinl'
    }, {
      year: '2013',
      value: 222,
      category: 'Liquid fuel'
    }, {
      year: '2013',
      value: 512,
      category: 'Solid fuel'
    }, {
      year: '2013',
      value: 408,
      category: 'Gas flarinl'
    }, {
      year: '2014',
      value: 428,
      category: 'Liquid fuel'
    }, {
      year: '2014',
      value: 111,
      category: 'Solid fuel'
    }, {
      year: '2014',
      value: 568,
      category: 'Gas flarinl'
    }, {
      year: '2015',
      value: 428,
      category: 'Liquid fuel'
    }, {
      year: '2015',
      value: 111,
      category: 'Solid fuel'
    }, {
      year: '2015',
      value: 568,
      category: 'Gas flarinl'
    }]
  };
  return <Line {...config} />;
}`,...(C=(L=i.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var F,q,G;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`function Baseline() {
  const sharedConfig = getSharedConfig<LineConfig>();
  const config: LineConfig = {
    ...sharedConfig,
    title: '辅助线',
    shapeField: 'smooth',
    xField: 'time',
    yField: 'scales',
    data: [{
      time: '2010-01',
      scales: 1998
    }, {
      time: '2010-02',
      scales: 1850
    }, {
      time: '2010-03',
      scales: 1720
    }, {
      time: '2010-04',
      scales: 1818
    }, {
      time: '2010-05',
      scales: 1920
    }, {
      time: '2010-06',
      scales: 1802
    }, {
      time: '2010-07',
      scales: 1945
    }, {
      time: '2010-08',
      scales: 1856
    }, {
      time: '2010-09',
      scales: 2107
    }, {
      time: '2010-10',
      scales: 2140
    }],
    annotations: [{
      type: 'lineY',
      yField: 1800,
      style: {
        stroke: '#F72231'
      },
      label: {
        text: '报警阀值:50',
        position: 'right',
        style: {
          strokeOpacity: 0,
          fill: '#F72231',
          fontSize: 10,
          textBaseline: 'bottom'
        }
      }
    }]
  };
  return <Line {...config} />;
}`,...(G=(q=t.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const T=["Basic","Middle","Smooth","MiddleSmooth","Baseline"];export{t as Baseline,n as Basic,a as Middle,i as MiddleSmooth,l as Smooth,T as __namedExportsOrder,b as default};
