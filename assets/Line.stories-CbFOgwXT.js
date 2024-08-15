import{r as B,R as a}from"./index-RYns6xqu.js";import{h as A,d as f,R as y}from"./index-CJ5FF5R5.js";import{B as D}from"./index-DKU4ibjz.js";import{D as k,a as U}from"./index-B5-wn6KZ.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";function j(e){return[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}function V(e){return e===void 0}var m=function(){return m=Object.assign||function(e){for(var n,l=1,d=arguments.length;l<d;l++){n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)},z=B.forwardRef(function(e,n){return a.createElement(D,m({},e,{chartType:"Line",ref:n}))});const P={style:{opacity:.2,fill:`linear-gradient(-90deg, white 0%, rgba(${j(A).join(",")},.15) 100%)`},tooltip:!1},Y={size:2,shape:"circle",style:{fill:"white",lineWidth:1},tooltip:!1},H={x:{line:!0}},r=B.forwardRef((e,n)=>{const{insetLeft:l=k,insetRight:d=U,area:t,point:N,axis:O,...T}=e,b=f({},Y,N),M=f({},H,O);let g=f({},P,t);return e.colorField&&V(e.axis)&&(g=void 0),a.createElement(z,{insetLeft:l,insetRight:d,area:g,point:b,axis:M,...T,ref:n})});r.__docgenInfo={description:"",methods:[],displayName:"Line"};const Z={title:"Plots/Line"};function i(){const e={title:{title:"基础折线图"},xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return a.createElement(r,{...e,renderer:new y})}function s(){const e={title:"多条折线图",xField:"year",yField:"value",colorField:"category",legend:{color:{itemMarker:"hyphen",layout:{justifyContent:"flex-end"}}},data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return a.createElement(r,{...e,renderer:new y})}function o(){const e={title:"曲线图",shapeField:"smooth",xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return a.createElement(r,{...e,renderer:new y})}function c(){const e={title:"多条曲线图",shapeField:"smooth",xField:"year",yField:"value",colorField:"category",legend:!1,data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return a.createElement(r,{...e,renderer:new y})}function u(){const e={title:"辅助线",shapeField:"smooth",xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}],annotations:[{type:"lineY",yField:1800,style:{stroke:"#F72231"},label:{text:"报警阀值:50",position:"right",style:{strokeOpacity:0,fill:"#F72231",fontSize:10,textBaseline:"bottom"}}}]};return a.createElement(r,{...e,renderer:new y})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"Middle"};o.__docgenInfo={description:"",methods:[],displayName:"Smooth"};c.__docgenInfo={description:"",methods:[],displayName:"MiddleSmooth"};u.__docgenInfo={description:"",methods:[],displayName:"Baseline"};var v,p,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`function Basic() {
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

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}`,...(S=(p=i.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var F,L,h;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`function Middle() {
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

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}`,...(h=(L=s.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var G,x,_;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`function Smooth() {
  const config: LineConfig = {
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

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var q,E,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`function MiddleSmooth() {
  const config: LineConfig = {
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

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var w,C,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`function Baseline() {
  const config: LineConfig = {
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

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const ee=["Basic","Middle","Smooth","MiddleSmooth","Baseline"];export{u as Baseline,i as Basic,s as Middle,c as MiddleSmooth,o as Smooth,ee as __namedExportsOrder,Z as default};
