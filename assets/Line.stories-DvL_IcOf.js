import{r as N,R as a}from"./index-RYns6xqu.js";import{e as A}from"./index-DiO4j-mk.js";import{g as d,i as D}from"./utils-bwei8BHp.js";import{B as k,R as w,D as U,a as j}from"./index.esm-00dIfVum.js";import"./index-BQ5IbGbl.js";import"./index-DvSUCdeO.js";function z(e){return[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}var f=function(){return f=Object.assign||function(e){for(var n,t=1,y=arguments.length;t<y;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)},P=N.forwardRef(function(e,n){return a.createElement(k,f({},e,{chartType:"Line",ref:n}))});const Y={style:{opacity:.2,fill:`linear-gradient(-90deg, white 0%, rgba(${z(A).join(",")},.15) 100%)`},tooltip:!1},H={size:2,shape:"circle",style:{fill:"white",lineWidth:1},tooltip:!1},W={x:{line:!0}},l=N.forwardRef((e,n)=>{const{insetLeft:t=U,insetRight:y=j,area:i=!0,point:O=!0,axis:T=!0,...b}=e,M=d(O,H),R=d(T,W);let m=d(i,Y);return e.colorField&&D(e.axis)&&(m=void 0),a.createElement(P,{insetLeft:t,insetRight:y,area:m,point:M,axis:R,...b,ref:n,renderer:new w})});l.__docgenInfo={description:"",methods:[],displayName:"Line"};const Z={title:"Charts/Line"};function r(){const e={title:{title:"基础折线图"},xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return a.createElement(l,{...e})}function s(){const e={title:"多条折线图",xField:"year",yField:"value",colorField:"category",legend:{color:{itemMarker:"hyphen",layout:{justifyContent:"flex-end"}}},data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return a.createElement(l,{...e})}function o(){const e={title:"曲线图",shapeField:"smooth",xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}]};return a.createElement(l,{...e})}function c(){const e={title:"多条曲线图",shapeField:"smooth",xField:"year",yField:"value",colorField:"category",legend:!1,data:[{year:"2010",value:510,category:"Liquid fuel"},{year:"2010",value:481,category:"Solid fuel"},{year:"2010",value:570,category:"Gas flarinl"},{year:"2011",value:513,category:"Liquid fuel"},{year:"2011",value:405,category:"Solid fuel"},{year:"2011",value:164,category:"Gas flarinl"},{year:"2012",value:320,category:"Liquid fuel"},{year:"2012",value:410,category:"Solid fuel"},{year:"2012",value:250,category:"Gas flarinl"},{year:"2013",value:222,category:"Liquid fuel"},{year:"2013",value:512,category:"Solid fuel"},{year:"2013",value:408,category:"Gas flarinl"},{year:"2014",value:428,category:"Liquid fuel"},{year:"2014",value:111,category:"Solid fuel"},{year:"2014",value:568,category:"Gas flarinl"},{year:"2015",value:428,category:"Liquid fuel"},{year:"2015",value:111,category:"Solid fuel"},{year:"2015",value:568,category:"Gas flarinl"}]};return a.createElement(l,{...e})}function u(){const e={title:"辅助线",shapeField:"smooth",xField:"time",yField:"scales",data:[{time:"2010-01",scales:1998},{time:"2010-02",scales:1850},{time:"2010-03",scales:1720},{time:"2010-04",scales:1818},{time:"2010-05",scales:1920},{time:"2010-06",scales:1802},{time:"2010-07",scales:1945},{time:"2010-08",scales:1856},{time:"2010-09",scales:2107},{time:"2010-10",scales:2140}],annotations:[{type:"lineY",yField:1800,style:{stroke:"#F72231"},label:{text:"报警阀值:50",position:"right",style:{strokeOpacity:0,fill:"#F72231",fontSize:10,textBaseline:"bottom"}}}]};return a.createElement(l,{...e})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"Middle"};o.__docgenInfo={description:"",methods:[],displayName:"Smooth"};c.__docgenInfo={description:"",methods:[],displayName:"MiddleSmooth"};u.__docgenInfo={description:"",methods:[],displayName:"Baseline"};var g,v,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`function Basic() {
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
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var F,L,h;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`function Middle() {
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
}`,...(h=(L=s.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var S,G,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`function Smooth() {
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
  return <Line {...config} />;
}`,...(_=(G=o.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var x,q,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`function MiddleSmooth() {
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
  return <Line {...config} />;
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var I,C,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`function Baseline() {
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
  return <Line {...config} />;
}`,...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const ee=["Basic","Middle","Smooth","MiddleSmooth","Baseline"];export{u as Baseline,r as Basic,s as Middle,c as MiddleSmooth,o as Smooth,ee as __namedExportsOrder,Z as default};
