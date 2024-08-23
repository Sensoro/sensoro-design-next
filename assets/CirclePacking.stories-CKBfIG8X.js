import{R as ve}from"./index-RYns6xqu.js";import{i as G,a as _,s as xe,L as fe,b as j,c as J,f as ke,d as De,e as q,z as Pe,g as Me,h as Ce,j as Fe,C as Se,r as N,k as be,l as Q,m as X,B as Ae,F as C,n as Re,S,o as we,p as Te,q as Ee,t as Ie,u as Le,D as Z,v as Ne,w as Oe,x as He,y as Ke,A as B,E as ee,G as Ue,H as te,I as ie,J as Ve,K as je,M as qe,N as ze,O as We,P as Ye,Q as $e,R as Ge,T as Je,U as Qe,V as Xe,W as Ze,X as Be}from"./index--HgL91qy.js";import"./index-BX6J8nRb.js";import"./index-DcfIKM1A.js";import"./index-CpOIycTO.js";function re(i){if(G(i))return i;const e=+i;return G(e)?e:0}const ge=(i,e=[],t)=>{const a=(t==null?void 0:t.maxDepth)>=0;return i.forEach(r=>{(!a||r.depth<=t.maxDepth)&&(e.push(t!=null&&t.callback?t.callback(r):r),r.children&&(a&&r.depth===t.maxDepth?(r.children=null,r.isLeaf=!0):ge(r.children,e,t)))}),e},ye=(i,e,t=0,a=-1,r,s)=>{let l=0,n=a??-1,o=t;return i.forEach((d,y)=>{var g,p;const c={flattenIndex:++n,key:s?s(d):`${(g=r==null?void 0:r.key)!==null&&g!==void 0?g:""}-${y}`,maxDepth:-1,depth:t,index:y,value:d.value,isLeaf:!0,datum:r?r.datum.concat(d):[d],parentKey:r==null?void 0:r.key};if(!((p=d.children)===null||p===void 0)&&p.length){c.children=[],c.isLeaf=!1;const u=ye(d.children,c.children,t+1,n,c,s);c.value=_(d.value)?u.sum:Math.max(u.sum,re(d.value)),n=u.flattenIndex,o=Math.max(u.maxDepth,o)}else c.isLeaf=!0,c.value=re(d.value);l+=Math.abs(c.value),e.push(c)}),{sum:l,maxDepth:o,flattenIndex:n}},f=(i,e,t,a)=>{let r=a;return i.forEach((s,l)=>{var n;r=e(s,l,t,r),!((n=s.children)===null||n===void 0)&&n.length&&(r=f(s.children,e,s,r))}),a},O=(i,e,t,a)=>{let r=a;return i.forEach((s,l)=>{var n;!((n=s.children)===null||n===void 0)&&n.length&&(r=O(s.children,e,s,r)),r=e(s,l,t,r)}),r},et=1664525,tt=1013904223,ae=4294967296;function it(i=1){let e=i;return()=>(e=(et*e+tt)%ae)/ae}function rt(i,e){let t=0;const a=xe(Array.from(i),e),r=a.length;let s,l,n=[];for(;t<r;)s=a[t],l&&pe(l,s)?++t:(n=at(n,s),l=st(n),t=0);return l}function at(i,e){let t,a;if(U(e,i))return[e];for(t=0;t<i.length;++t)if(I(e,i[t])&&U(D(i[t],e),i))return[i[t],e];for(t=0;t<i.length-1;++t)for(a=t+1;a<i.length;++a)if(I(D(i[t],i[a]),e)&&I(D(i[t],e),i[a])&&I(D(i[a],e),i[t])&&U(me(i[t],i[a],e),i))return[i[t],i[a],e];fe.getInstance().error("error when packEncloseRandom")}function I(i,e){const t=i.radius-e.radius,a=e.x-i.x,r=e.y-i.y;return t<0||t*t<a*a+r*r}function pe(i,e){const t=i.radius-e.radius+1e-9*Math.max(i.radius,e.radius,1),a=e.x-i.x,r=e.y-i.y;return t>0&&t*t>a*a+r*r}function U(i,e){for(let t=0;t<e.length;++t)if(!pe(i,e[t]))return!1;return!0}function st(i){switch(i.length){case 1:return nt(i[0]);case 2:return D(i[0],i[1]);case 3:return me(i[0],i[1],i[2])}}function nt(i){return{x:i.x,y:i.y,radius:i.radius}}function D(i,e){const t=i.x,a=i.y,r=i.radius,s=e.x,l=e.y,n=e.radius,o=s-t,d=l-a,y=n-r,g=Math.sqrt(o*o+d*d);return{x:(t+s+o/g*y)/2,y:(a+l+d/g*y)/2,radius:(g+r+n)/2}}function me(i,e,t){const a=i.x,r=i.y,s=i.radius,l=e.x,n=e.y,o=e.radius,d=t.x,y=t.y,g=t.radius,p=a-l,c=a-d,u=r-n,h=r-y,k=o-s,m=g-s,z=a*a+r*r-s*s,W=z-l*l-n*n+o*o,Y=z-d*d-y*y+g*g,b=c*u-p*h,A=(u*Y-h*W)/(2*b)-a,R=(h*k-u*m)/b,w=(c*W-p*Y)/(2*b)-r,T=(p*m-c*k)/b,H=R*R+T*T-1,E=2*(s+A*R+w*T),$=A*A+w*w-s*s,K=-(Math.abs(H)>1e-6?(E+Math.sqrt(E*E-4*H*$))/(2*H):$/E);return{x:a+A+R*K,y:r+w+T*K,radius:K}}function se(i,e,t){const a=i.x-e.x;let r,s;const l=i.y-e.y;let n,o;const d=a*a+l*l;d?(s=e.radius+t.radius,s*=s,o=i.radius+t.radius,o*=o,s>o?(r=(d+o-s)/(2*d),n=Math.sqrt(Math.max(0,o/d-r*r)),t.x=i.x-r*a-n*l,t.y=i.y-r*l+n*a):(r=(d+s-o)/(2*d),n=Math.sqrt(Math.max(0,s/d-r*r)),t.x=e.x+r*a-n*l,t.y=e.y+r*l+n*a)):(t.x=e.x+t.radius,t.y=e.y)}function ne(i,e){const t=i.radius+e.radius-1e-6,a=e.x-i.x,r=e.y-i.y;return t>0&&t*t>a*a+r*r}function le(i){const e=i._,t=i.next._,a=e.radius+t.radius,r=(e.x*t.radius+t.x*e.radius)/a,s=(e.y*t.radius+t.y*e.radius)/a;return r*r+s*s}function L(i){return{_:i,next:null,prev:null}}function lt(i,e){const t=(i=j(i)).length;if(!t)return 0;let a=i[0];if(a.x=0,a.y=0,t===1)return a.radius;const r=i[1];if(a.x=-r.radius,r.x=a.radius,r.y=0,t===2)return a.radius+r.radius;let s=i[2];se(r,a,s);let l,n,o,d,y,g,p,c=L(a),u=L(r),h=L(s);c.next=u,h.prev=u,u.next=h,c.prev=h,h.next=c,u.prev=c;for(let m=3;m<t;++m){p=!1,s=i[m],se(c._,u._,s),h=L(s),l=u.next,n=c.prev,o=u._.radius,d=c._.radius;do if(o<=d){if(ne(l._,h._)){u=l,c.next=u,u.prev=c,--m,p=!0;break}o+=l._.radius,l=l.next}else{if(ne(n._,h._)){c=n,c.next=u,u.prev=c,--m,p=!0;break}d+=n._.radius,n=n.prev}while(l!==n.next);if(!p){for(h.prev=c,h.next=u,c.next=u.prev=u=h,y=le(c),h=h.next;h!==u;)g=le(h),g<y&&(c=h,y=g),h=h.next;u=c.next}}const k=[u._];for(h=u.next;h!==u;)k.push(h._),h=h.next;s=rt(k,e);for(let m=0;m<t;++m)a=i[m],a.x-=s.x,a.y-=s.y;return s.radius}function oe(i){return function(e){e.children||(e.radius=Math.max(0,+i(e)||0))}}function V(i,e,t){return function(a){const r=a==null?void 0:a.children;if(r){let s;const l=r.length,n=i(a)*e||0;if(n)for(s=0;s<l;++s)r[s].radius+=n;const o=lt(r,t);if(n)for(s=0;s<l;++s)r[s].radius-=n;a.radius=o+n}}}function ce(i,e){return function(t,a,r){t.radius*=i,t.maxDepth=e,r&&(t.x=r.x+i*t.x,t.y=r.y+i*t.y)}}class F{constructor(e){this.options=e;const t=e==null?void 0:e.nodeKey,a=J(t)?t:t?ke(t):null;this._getNodeKey=a,this._getPadding=De(e==null?void 0:e.padding)?r=>e.padding:q(e==null?void 0:e.padding)?r=>{var s;return(s=e.padding[r.depth+1])!==null&&s!==void 0?s:0}:()=>0,this._maxDepth=-1}layout(e,t){var a;const r="width"in t?{x0:0,x1:t.width,y0:0,y1:t.height,width:t.width,height:t.height}:{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),y0:Math.min(t.y0,t.y1),y1:Math.max(t.y0,t.y1),width:Math.abs(t.x1-t.x0),height:Math.abs(t.y1-t.y0)};if(!e||!e.length)return[];const s=[],l=ye(e,s,0,-1,null,this._getNodeKey);this._maxDepth=l.maxDepth;const n=it(),o={flattenIndex:-1,maxDepth:-1,key:"root",depth:-1,index:-1,value:l.sum,datum:null,children:s,x:r.x0+r.width/2,y:r.y0+r.height/2},{nodeSort:d,setRadius:y,padding:g,includeRoot:p}=(a=this.options)!==null&&a!==void 0?a:{};if(d!==!1){const c=J(d)?this.options.nodeKey:F.defaultOpionts.nodeSort;f([o],u=>{u.children&&u.children.length&&u.children.sort(c)})}if(y)f([o],oe(y)),O([o],V(this._getPadding,.5,n)),f([o],ce(1,this._maxDepth));else{const c=Math.min(r.width,r.height);f([o],oe(F.defaultOpionts.setRadius)),O([o],V(Pe,1,n)),g&&O([o],V(this._getPadding,o.radius/c,n)),f([o],ce(c/(2*o.radius),this._maxDepth))}return p?[o]:s}}F.defaultOpionts={setRadius:i=>Math.sqrt(i.value),padding:0,nodeSort:(i,e)=>e.value-i.value};const ot=(i,e={})=>{if(!i)return[];const t=[];return ge(i,t,e),t};var v;(function(i){i.DrillDown="drillDown",i.DrillUp="drillUp"})(v||(v={}));const ct=(i,e)=>{const t=e.info(),a=e.keyField(),r=t==null?void 0:t.key;if(_(r))return i;if(t.type===v.DrillDown){const s=Me(i,r,a,"children");return j(s)}if(t.type===v.DrillUp){const s=Ce(i,r,a,"children");if(s)return j(s)}return i};class dt{_getDrillTriggerEvent(e){var t;const{mode:a}=this._drillParams;return(t=Fe(a))===null||t===void 0?void 0:t[e]}_hideTooltip(){const e=this.getChart().getComponentsByType(Se.tooltip)[0];e&&e.hideTooltip()}initDrillable(e){this._drillParams=e}initDrillableData(e){const{getRawData:t}=this._drillParams;N(e,"drillFilter",ct),t().transform({type:"drillFilter",options:{info:()=>this._drillInfo,keyField:()=>this._drillParams.drillField()}})}bindDrillEvent(){const{event:e,getRawData:t,drillField:a}=this._drillParams,r=a();this._getDrillTriggerEvent("start")&&e.on(this._getDrillTriggerEvent("start"),s=>{var l,n,o;if(_(s.datum)||_((l=s.datum)===null||l===void 0?void 0:l[r]))return void this.drillUp();this._hideTooltip();const d=s.datum[r],y=(o=(n=this._drillInfo)===null||n===void 0?void 0:n.path)!==null&&o!==void 0?o:[],g=be(t().rawData,d,r,"children");y[y.length-1]===g[g.length-1]?this.drillUp():this.drillDown(g)})}drillDown(e=[]){const{getRawData:t,event:a}=this._drillParams;if(!q(e)||Q(e))return e;const r=e[e.length-1];return this._drillInfo={key:r,path:e,type:v.DrillDown},t().reRunAllTransform(),a.emit(X.drill,{value:{path:e,type:v.DrillDown},model:this}),e}drillUp(){var e,t;const{getRawData:a,event:r}=this._drillParams,s=(t=(e=this._drillInfo)===null||e===void 0?void 0:e.path)!==null&&t!==void 0?t:[];if(!q(s)||Q(s))return s;const l=s.pop();return this._drillInfo={key:l,path:s,type:v.DrillUp},a().reRunAllTransform(),r.emit(X.drill,{value:{path:s,type:v.DrillUp},model:this}),s}}const ut=(i,e)=>{if(!i)return i;const t=e(),{width:a,height:r}=t;return a===0||r===0?i:new F(t).layout(i,{width:a,height:r})};class ht extends Ae{constructor(){super(...arguments),this.markTooltipKeyCallback=e=>e==null?void 0:e[this.series.getDimensionField()[0]]}}const gt=i=>i==="fadeIn"?{type:"fadeIn"}:{type:"growRadiusIn"},yt=()=>{C.registerAnimation("circlePacking",(i,e)=>({appear:gt(e),enter:{type:"growRadiusIn"},exit:{type:"growRadiusOut"},disappear:{type:"growRadiusOut"}}))},pt=Object.assign(Object.assign({},Re),{circlePacking:{name:"circlePacking",type:"arc"}});class x extends Le{constructor(){super(...arguments),this.type=S.circlePacking}setCategoryField(e){return this._categoryField=e,this._categoryField}getCategoryField(){return this._categoryField}setValueField(e){return this._valueField=e,this._valueField}getValueField(){return this._valueField}getDimensionField(){return[this._categoryField]}getMeasureField(){return[this._valueField]}setAttrFromSpec(){var e;super.setAttrFromSpec(),this.setCategoryField(this._spec.categoryField),this.setValueField(this._spec.valueField),this.setSeriesField((e=this._spec.seriesField)!==null&&e!==void 0?e:Z),this._spec.drill&&this.initDrillable({event:this.event,mode:this._option.mode,drillField:()=>{var t;return(t=this._spec.drillField)!==null&&t!==void 0?t:Ne},getRawData:()=>this.getRawData()}),this._circlePacking=this._spec.circlePacking,this._label=this._spec.label,this._layoutPadding=this._spec.layoutPadding}initData(){super.initData();const e=this.getRawData();_(e)||(this._spec.drill&&this.initDrillableData(this._dataSet),N(this._dataSet,"circlePackingLayout",ut),N(this._dataSet,"flatten",ot),e.transform({type:"circlePackingLayout",options:()=>({nodeKey:this._categoryField,padding:this._layoutPadding,includeRoot:!1,width:this.getLayoutRect().width||1,height:this.getLayoutRect().height||1})}),e.transform({type:"flatten",options:{callback:t=>{if(t.datum){const a=t.datum[t.depth];return Object.assign(Object.assign({},t),a)}return t}}}))}_addDataIndexAndKey(){const e=this.getRawData();_(e==null?void 0:e.dataSet)||(N(e.dataSet,"addVChartProperty",Oe),e.transform({type:"addVChartProperty",options:{beforeCall:He.bind(this),call:Ke}}))}initMark(){this._initCirclePackingMark(),this._initLabelMark()}initMarkStyle(){this._initCirclePackingMarkStyle(),this._initLabelMarkStyle()}_initCirclePackingMark(){var e,t;if(((e=this._circlePacking)===null||e===void 0?void 0:e.visible)===!1)return;const a=this._createMark(x.mark.circlePacking,{isSeriesMark:!0,customShape:(t=this._spec.circlePacking)===null||t===void 0?void 0:t.customShape});this._circlePackingMark=a}_initCirclePackingMarkStyle(){_(this._circlePackingMark)||this.setMarkStyle(this._circlePackingMark,{x:e=>e.x,y:e=>e.y,outerRadius:e=>e.radius,innerRadius:0,startAngle:0,endAngle:2*Math.PI,fill:this.getColorAttribute(),zIndex:e=>e.depth},B.STATE_NORMAL,ee.Series)}_initLabelMark(){var e;if(((e=this._label)===null||e===void 0?void 0:e.visible)===!1)return;const t=this._createMark(x.mark.label,{isSeriesMark:!1});this._labelMark=t}_initLabelMarkStyle(){_(this._labelMark)||this.setMarkStyle(this._labelMark,{x:e=>e.x,y:e=>e.y,text:e=>e.key,cursor:"pointer"},B.STATE_NORMAL,ee.Series)}getStatisticFields(){return super.getStatisticFields().concat([{key:this._categoryField,operations:["values"]},{key:this._valueField,operations:["max","min"]},{key:Ue,operations:["max","min","values"]},{key:Z,operations:["values"]}])}initTooltip(){this._tooltipHelper=new ht(this),this._tooltipHelper.updateTooltipSpec(),this._circlePackingMark&&this._tooltipHelper.activeTriggerSet.mark.add(this._circlePackingMark),this._labelMark&&this._tooltipHelper.activeTriggerSet.mark.add(this._labelMark)}initAnimation(){var e;const t=(e=this._spec.animationAppear)===null||e===void 0?void 0:e.preset;this.getMarksInType("arc").forEach(a=>{var r;a.setAnimationConfig(te((r=C.getAnimationInKey("circlePacking"))===null||r===void 0?void 0:r(void 0,t),ie(a.name,this._spec,this._markAttributeContext)))}),this.getMarksInType("text").forEach(a=>{var r;a.setAnimationConfig(te((r=C.getAnimationInKey("scaleInOut"))===null||r===void 0?void 0:r(),ie(a.name,this._spec,this._markAttributeContext)))})}initEvent(){super.initEvent(),this._spec.drill&&this.bindDrillEvent()}onLayoutEnd(e){super.onLayoutEnd(e),this._rawData.reRunAllTransform()}_noAnimationDataKey(e,t){}getActiveMarks(){return[this._circlePackingMark]}}x.type=S.circlePacking,x.mark=pt,we(x,dt);const mt=()=>{C.registerSeries(x.type,x),Te(),Ee(),Ie(),yt()};class _e extends Ve{_getDefaultSeriesSpec(e){const t=Object.assign(Object.assign({},super._getDefaultSeriesSpec(e)),{categoryField:e.categoryField,valueField:e.valueField,seriesField:e.seriesField,layoutPadding:e.layoutPadding,label:e.label,circlePacking:e.circlePacking,drill:e.drill,drillField:e.drillField}),a=S.circlePacking;return t.type=a,t[a]=e[a],t}transformSpec(e){super.transformSpec(e),this.transformSeriesSpec(e)}}let M=class extends je{constructor(){super(...arguments),this.transformerConstructor=_e,this.type="circlePacking",this.seriesType=S.circlePacking}};M.type="circlePacking",M.seriesType=S.circlePacking,M.transformerConstructor=_e;const _t=()=>{mt(),C.registerChart(M.type,M)},vt=[qe,ze,We,Ye,$e,Ge,Je,Qe,Xe],xt=Ze("CirclePackingChart",{type:"circlePacking",vchartConstrouctor:Be},[_t,...vt]),Ft={title:"VChart/CirclePacking"};function P(){const i={data:{values:[{name:"上海",value:4},{name:"深圳",value:6},{name:"北京",value:10}]},categoryField:"name",valueField:"value"};return ve.createElement(xt,{...i})}P.__docgenInfo={description:"",methods:[],displayName:"Basic"};var de,ue,he;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`function Basic() {
  const config: CirclePackingProps = {
    data: {
      values: [{
        name: '上海',
        value: 4
      }, {
        name: '深圳',
        value: 6
      }, {
        name: '北京',
        value: 10
      }]
    },
    categoryField: 'name',
    valueField: 'value'
  };
  return <CirclePacking {...config} />;
}`,...(he=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const St=["Basic"];export{P as Basic,St as __namedExportsOrder,Ft as default};