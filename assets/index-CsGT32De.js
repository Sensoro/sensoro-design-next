import{r as s,R as c}from"./index-RYns6xqu.js";import{B as F}from"./index-4sF_yb9E.js";import{b as f,d as h}from"./colors-CMe-4sOE.js";import{d as n}from"./cloneDeep-Q-bFRGJl.js";var l=function(){return l=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++){e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l.apply(this,arguments)},B=s.forwardRef(function(t,e){return c.createElement(F,l({},t,{chartType:"Bar",ref:e}))});const E={radius:1,maxWidth:8},b={x:{size:110,labelAutoEllipsis:!0,tick:!1,title:!1,labelFontSize:12,labelFill:f,labelFillOpacity:.6,labelSpacing:16},y:{grid:!1,tick:!1,label:!1,title:!1}},k={elementHighlight:!1},x={y:{domain:[0,1e3]}},O=t=>({label:{text:({originData:e})=>`${e[t]}`,position:"left",dx:0,dy:0,style:{fill:f,fillOpacity:1,fontSize:14,fontFamily:"DINAlternate-Bold",lineHeight:14}},style:{fill:h}}),A=s.forwardRef((t,e)=>{const{axis:a,style:i,scale:r,interaction:d,markBackground:g,paddingRight:m=0,...o}=t,u=n({},E,i),p=n({},b,a),y=n({},O(o.yField),g),C=n({},k,d),_=n({},x,r);return c.createElement(B,{paddingRight:m,axis:p,style:u,markBackground:y,interaction:C,scale:_,...o,ref:e})});A.__docgenInfo={description:"",methods:[],displayName:"Bar"};export{A as B};
