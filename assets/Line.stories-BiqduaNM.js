import{r as T,R as a}from"./index-RYns6xqu.js";import{B as U,c as k,g as y,i as j,D as w,a as z}from"./index-qpk0UVMz.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";function Y(e){return[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}var f=function(){return f=Object.assign||function(e){for(var n,l=1,d=arguments.length;l<d;l++){n=arguments[l];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)},P=T.forwardRef(function(e,n){return a.createElement(U,f({},e,{chartType:"Line",ref:n}))});const H={style:{opacity:.2,fill:`linear-gradient(-90deg, white 0%, rgba(${Y(k).join(",")},.15) 100%)`},tooltip:!1},W={size:2,shape:"circle",style:{fill:"white",lineWidth:1},tooltip:!1},X={x:{line:!0}},$={tooltip:{crosshairsY:!0}},t=T.forwardRef((e,n)=>{const{insetLeft:l=w,insetRight:d=z,area:i=!0,point:O=!0,axis:B=!0,interaction:b=!0,...A}=e,M=y(O,W),D=y(B,X),R=y(b,$);let m=y(i,H);return e.colorField&&j(e.axis)&&(m=void 0),a.createElement(P,{insetLeft:l,insetRight:d,area:m,point:M,axis:D,interaction:R,...A,ref:n})});t.__docgenInfo={description:"",methods:[],displayName:"Line"};const Z={title:"Charts/Line"};function r(){const e={title:{title:"基础折线图"},xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return a.createElement(t,{...e})}function s(){const e={title:"多条折线图",xField:"year",yField:"value",colorField:"category",legend:{color:{itemMarker:"hyphen",layout:{justifyContent:"flex-end"}}},data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return a.createElement(t,{...e})}function o(){const e={title:"曲线图",style:{shape:"smooth"},xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return a.createElement(t,{...e})}function c(){const e={title:"多条曲线图",style:{shape:"smooth"},xField:"year",yField:"value",colorField:"category",legend:!1,data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return a.createElement(t,{...e})}function u(){const e={title:"辅助线",style:{shape:"smooth"},xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}],annotations:[{type:"lineY",yField:1800,style:{stroke:"#F72231"},label:{text:"报警阀值:50",position:"right",style:{strokeOpacity:0,fill:"#F72231",fontSize:10,textBaseline:"bottom"}}}]};return a.createElement(t,{...e})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"Middle"};o.__docgenInfo={description:"",methods:[],displayName:"Smooth"};c.__docgenInfo={description:"",methods:[],displayName:"MiddleSmooth"};u.__docgenInfo={description:"",methods:[],displayName:"Baseline"};var g,v,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`function Basic() {
  const config: LineConfig = {
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
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var L,h,F;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`function Middle() {
  const config: LineConfig = {
    title: '多条折线图',
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    legend: {
      color: {
        itemMarker: 'hyphen',
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
}`,...(F=(h=s.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var S,_,G;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`function Smooth() {
  const config: LineConfig = {
    title: '曲线图',
    style: {
      shape: 'smooth'
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
}`,...(G=(_=o.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var x,q,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`function MiddleSmooth() {
  const config: LineConfig = {
    title: '多条曲线图',
    style: {
      shape: 'smooth'
    },
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
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var C,E,N;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`function Baseline() {
  const config: LineConfig = {
    title: '辅助线',
    style: {
      shape: 'smooth'
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
    }],
    annotations: [{
      type: 'lineY',
      yField: 1800,
      style: {
        stroke: '#F72231'
      },
      label: {
        text: '报警阀值:50',
        // dx: 30,
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
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ee=["Basic","Middle","Smooth","MiddleSmooth","Baseline"];export{u as Baseline,r as Basic,s as Middle,c as MiddleSmooth,o as Smooth,ee as __namedExportsOrder,Z as default};
