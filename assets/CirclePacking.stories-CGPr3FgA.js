import{r as q,R as C}from"./index-RYns6xqu.js";import{a as z,e as P,R as E,C as R,b as K,r as L,c as X,n as d,h as Y,B as Z}from"./index-BozI7CP4.js";import"./index-DvSUCdeO.js";import"./index-BQ5IbGbl.js";const f=18,j=.96422,O=1,S=.82521,k=4/29,l=6/29,H=3*l*l,A=l*l*l;function T(n){if(n instanceof i)return new i(n.l,n.a,n.b,n.opacity);if(n instanceof c)return $(n);n instanceof E||(n=L(n));var e=y(n.r),t=y(n.g),a=y(n.b),r=g((.2225045*e+.7168786*t+.0606169*a)/O),s,u;return e===t&&t===a?s=u=r:(s=g((.4360747*e+.3850649*t+.1430804*a)/j),u=g((.0139322*e+.0971045*t+.7141733*a)/S)),new i(116*r-16,500*(s-r),200*(r-u),n.opacity)}function D(n,e,t,a){return arguments.length===1?T(n):new i(n,e,t,a??1)}function i(n,e,t,a){this.l=+n,this.a=+e,this.b=+t,this.opacity=+a}z(i,D,P(R,{brighter(n){return new i(this.l+f*(n??1),this.a,this.b,this.opacity)},darker(n){return new i(this.l-f*(n??1),this.a,this.b,this.opacity)},rgb(){var n=(this.l+16)/116,e=isNaN(this.a)?n:n+this.a/500,t=isNaN(this.b)?n:n-this.b/200;return e=j*m(e),n=O*m(n),t=S*m(t),new E(b(3.1338561*e-1.6168667*n-.4906146*t),b(-.9787684*e+1.9161415*n+.033454*t),b(.0719453*e-.2289914*n+1.4052427*t),this.opacity)}}));function g(n){return n>A?Math.pow(n,1/3):n/H+k}function m(n){return n>l?n*n*n:H*(n-k)}function b(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function y(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function G(n){if(n instanceof c)return new c(n.h,n.c,n.l,n.opacity);if(n instanceof i||(n=T(n)),n.a===0&&n.b===0)return new c(NaN,0<n.l&&n.l<100?0:NaN,n.l,n.opacity);var e=Math.atan2(n.b,n.a)*K;return new c(e<0?e+360:e,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}function v(n,e,t,a){return arguments.length===1?G(n):new c(n,e,t,a??1)}function c(n,e,t,a){this.h=+n,this.c=+e,this.l=+t,this.opacity=+a}function $(n){if(isNaN(n.h))return new i(n.l,0,0,n.opacity);var e=n.h*X;return new i(n.l,Math.cos(e)*n.c,Math.sin(e)*n.c,n.opacity)}z(c,v,P(R,{brighter(n){return new c(this.h,this.c,this.l+f*(n??1),this.opacity)},darker(n){return new c(this.h,this.c,this.l-f*(n??1),this.opacity)},rgb(){return $(this).rgb()}}));function J(n){return function(e,t){var a=n((e=v(e)).h,(t=v(t)).h),r=d(e.c,t.c),s=d(e.l,t.l),u=d(e.opacity,t.opacity);return function(p){return e.h=a(p),e.c=r(p),e.l=s(p),e.opacity=u(p),e+""}}}const Q=J(Y);var w=function(){return w=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},w.apply(this,arguments)},I=q.forwardRef(function(n,e){return C.createElement(Z,w({},n,{chartType:"CirclePacking",ref:e}))});const en={title:"Charts/CirclePacking"};function o(){const n={title:"基础捆绑图",data:{type:"fetch",value:"https://assets.antv.antgroup.com/g2/flare.json"},valueField:"value",colorField:"depth",scale:{color:{domain:[0,5],range:["hsl(152,80%,80%)","hsl(228,30%,40%)"],interpolate:Q}}};return C.createElement(I,{...n})}function h(){const n={title:"基础捆绑图1",data:{value:{children:[{name:"a",value:4},{name:"b",value:6},{name:"c",value:10}]}},layout:{padding:10},valueField:"value",colorField:"depth",style:{labelText:e=>e.depth===1?`${e.data.name}`:"",labelFontSize:30}};return C.createElement(I,{...n})}o.__docgenInfo={description:"",methods:[],displayName:"Basic"};h.__docgenInfo={description:"",methods:[],displayName:"Basic1"};var N,B,F;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`function Basic() {
  const config = {
    title: '基础捆绑图',
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/flare.json'
    },
    valueField: 'value',
    colorField: 'depth',
    scale: {
      color: {
        domain: [0, 5],
        range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
        interpolate: interpolateHcl
      }
    }
  };
  return <CirclePacking {...config} />;
}`,...(F=(B=o.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var _,M,x;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`function Basic1() {
  const config = {
    title: '基础捆绑图1',
    data: {
      value: {
        // name: 'flare',
        children: [{
          name: 'a',
          value: 4
        }, {
          name: 'b',
          value: 6
        }, {
          name: 'c',
          value: 10
        }]
      }
    },
    layout: {
      padding: 10
    },
    valueField: 'value',
    colorField: 'depth',
    // scale: {
    //   color: {
    //     range: ['transparent', 'red', 'green', 'blue'],
    //   },
    // },
    style: {
      labelText: (d: any) => {
        return d.depth === 1 ? \`\${d.data.name}\` : '';
      },
      labelFontSize: 30
    }
  };
  return <CirclePacking {...config} />;
}`,...(x=(M=h.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const tn=["Basic","Basic1"];export{o as Basic,h as Basic1,tn as __namedExportsOrder,en as default};
