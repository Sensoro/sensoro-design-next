import{r as s,R as l}from"./index-uubelm5h.js";import{u as x,P as _,S as P}from"./Primitive-DSXIHhCO.js";import{R as Qe}from"./index-Dei0BBcc.js";import"./extends-CF3RwP-h.js";function Ze(e,t){const r=s.createContext(t);function n(a){const{children:c,...i}=a,u=s.useMemo(()=>i,Object.values(i));return l.createElement(r.Provider,{value:u},c)}function o(a){const c=s.useContext(r);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return n.displayName=`${e}Provider`,[n,o]}function et(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=n.reduce((i,{useScope:u,scopeName:d})=>{const h=u(a)[`__scope${d}`];return{...i,...h}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return r.scopeName=t.scopeName,r}function tt(e,t=[]){let r=[];function n(a,c){const i=s.createContext(c),u=r.length;r=[...r,c];function d(h){const{scope:f,children:p,...S}=h,C=(f==null?void 0:f[e][u])||i,O=s.useMemo(()=>S,Object.values(S));return l.createElement(C.Provider,{value:O},p)}function m(h,f){const p=(f==null?void 0:f[e][u])||i,S=s.useContext(p);if(S)return S;if(c!==void 0)return c;throw new Error(`\`${h}\` must be used within \`${a}\``)}return d.displayName=`${a}Provider`,[d,m]}const o=()=>{const a=r.map(c=>s.createContext(c));return function(i){const u=(i==null?void 0:i[e])||a;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return o.scopeName=e,[n,et(o,...t)]}const ne="ScrollArea",A="ScrollAreaScrollbar",te="ScrollAreaThumb",ze="ScrollAreaCorner",[Ie,jt]=tt(ne),[rt,E]=Ie(ne),[nt,Oe]=Ie(A),ot=s.createContext(void 0);function lt(e){const t=s.useContext(ot);return e||t||"ltr"}const Me=s.forwardRef((e,t)=>{const{__scopeScrollArea:r,type:n="hover",dir:o,scrollbars:a="xy",scrollHideDelay:c=600,...i}=e,[u,d]=s.useState(null),[m,h]=s.useState(null),[f,p]=s.useState(null),[S,C]=s.useState(null),[O,T]=s.useState(null),[W,Z]=s.useState(0),[U,F]=s.useState(0),[M,V]=s.useState(!1),[X,b]=s.useState(!1),v=x(t,ce=>d(ce)),N=lt(o);return l.createElement(rt,{scope:r,type:n,dir:N,scrollHideDelay:c,scrollArea:u,viewport:m,onViewportChange:h,content:f,onContentChange:p,scrollbarX:S,onScrollbarXChange:C,scrollbarXEnabled:M,onScrollbarXEnabledChange:V,scrollbarY:O,onScrollbarYChange:T,scrollbarYEnabled:X,onScrollbarYEnabledChange:b,onCornerWidthChange:Z,onCornerHeightChange:F},l.createElement(_.div,{dir:N,...i,ref:v,style:{position:"relative","--lotus-scroll-area-corner-width":a!=="xy"?"0px":`${W}px`,"--lotus-scroll-area-corner-height":a!=="xy"?"0px":`${U}px`,...e.style}}))});Me.displayName=ne;const $e="ScrollAreaViewport",Be=s.forwardRef((e,t)=>{const{__scopeScrollArea:r,children:n,nonce:o,...a}=e,c=E($e,r),i=s.useRef(null),u=x(t,i,c.onViewportChange);return l.createElement(l.Fragment,null,l.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-lotus-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-lotus-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),l.createElement(_.div,{"data-lotus-scroll-area-viewport":"",...a,ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}},l.createElement("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},n)))});Be.displayName=$e;const st=typeof window<"u"&&typeof document<"u",at=typeof navigator<"u";function oe(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)==null?void 0:t.platform)||window.navigator.platform):!1}function We(){return oe(/^Mac/i)}function ct(){return oe(/^iPhone/i)}function it(){return oe(/^iPad/i)||We()&&navigator.maxTouchPoints>1}function ut(){return ct()||it()}function dt(){return We()||ut()}const Y=at?navigator:void 0;Y&&(Y.connection||Y.mozConnection||Y.webkitConnection);function mt(e){const t=s.useRef(e);t.current=s.useMemo(()=>e,[e]);const r=s.useRef();return r.current||(r.current=function(...n){return t.current.apply(this,n)}),r.current}st&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch);dt();const ft=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function I(e,t){const r=mt(t);ft(()=>{let n=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(r)});return o.observe(e),()=>{window.cancelAnimationFrame(n),o.unobserve(e)}}},[e,r])}l.useId;function R(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function K(e,t){const r=R(e),n=s.useRef(0);return s.useEffect(()=>()=>window.clearTimeout(n.current),[]),s.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function q(e){return e?Number.parseInt(e,10):0}function ht(e,[t,r]){return Math.min(r,Math.max(t,e))}function ee(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Ue(e,t){const r=e/t;return Number.isNaN(r)?0:r}function Fe(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function Q(e){const t=Ue(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function pt(e,t,r,n="ltr"){const o=Q(r),a=o/2,c=t||a,i=o-c,u=r.scrollbar.paddingStart+c,d=r.scrollbar.size-r.scrollbar.paddingEnd-i,m=r.content-r.viewport,h=n==="ltr"?[0,m]:[m*-1,0];return Fe([u,d],h)(e)}function ie(e,t,r="ltr"){const n=Q(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-o,c=t.content-t.viewport,i=a-n,u=r==="ltr"?[0,c]:[c*-1,0],d=ht(e,u);return Fe([0,c],[0,i])(d)}function Ve(e,t){return e>0&&e<t}function St(e,t=()=>{}){let r={left:e.scrollLeft,top:e.scrollTop},n=0;return function o(){const a={left:e.scrollLeft,top:e.scrollTop},c=r.left!==a.left,i=r.top!==a.top;(c||i)&&t(),r=a,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)}const Xe=s.forwardRef((e,t)=>{const{__scopeScrollArea:r,sizes:n,hasThumb:o,onThumbChange:a,onThumbPointerUp:c,onThumbPointerDown:i,onThumbPositionChange:u,onDragScroll:d,onWheelScroll:m,onResize:h,...f}=e,p=E(A,r),[S,C]=s.useState(null),O=x(t,b=>C(b)),T=s.useRef(null),W=s.useRef(""),Z=p.viewport,U=n.content-n.viewport,F=R(m),M=R(u),V=K(h,10);function X(b){if(T.current){const v=b.clientX-T.current.left,N=b.clientY-T.current.top;d({x:v,y:N})}}return s.useEffect(()=>{const b=v=>{const N=v.target;(S==null?void 0:S.contains(N))&&F(v,U)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[Z,S,U,F]),s.useEffect(M,[n,M]),I(S,V),I(p.content,V),l.createElement(nt,{scope:r,scrollbar:S,hasThumb:o,onThumbChange:R(a),onThumbPointerUp:R(c),onThumbPositionChange:M,onThumbPointerDown:R(i)},l.createElement(_.div,{...f,ref:O,style:{position:"absolute",...f.style},onPointerDown:ee(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),T.current=S.getBoundingClientRect(),W.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),X(b))}),onPointerMove:ee(e.onPointerMove,X),onPointerUp:ee(e.onPointerUp,b=>{const v=b.target;v.hasPointerCapture(b.pointerId)&&v.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=W.current,p.viewport&&(p.viewport.style.scrollBehavior=""),T.current=null})}))}),gt=s.forwardRef((e,t)=>{const{sizes:r,onSizesChange:n,...o}=e,a=E(A,e.__scopeScrollArea),[c,i]=s.useState(),u=s.useRef(null),d=x(t,u,a.onScrollbarXChange);return s.useEffect(()=>{u.current&&i(getComputedStyle(u.current))},[u]),l.createElement(Xe,{"data-orientation":"horizontal",...o,ref:d,sizes:r,style:{bottom:0,left:a.dir==="rtl"?"var(--lotus-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--lotus-scroll-area-corner-width)":0,"--lotus-scroll-area-thumb-width":`${Q(r)}px`,...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.x),onDragScroll:m=>e.onDragScroll(m.x),onWheelScroll:(m,h)=>{if(a.viewport){const f=a.viewport.scrollLeft+m.deltaX;e.onWheelScroll(f),Ve(f,h)&&m.preventDefault()}},onResize:()=>{u.current&&a.viewport&&c&&n({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:q(c.paddingLeft),paddingEnd:q(c.paddingRight)}})}})}),bt=s.forwardRef((e,t)=>{const{sizes:r,onSizesChange:n,...o}=e,a=E(A,e.__scopeScrollArea),[c,i]=s.useState(),u=s.useRef(null),d=x(t,u,a.onScrollbarYChange);return s.useEffect(()=>{u.current&&i(getComputedStyle(u.current))},[u]),l.createElement(Xe,{"data-orientation":"vertical",...o,ref:d,sizes:r,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--lotus-scroll-area-corner-height)","--lotus-scroll-area-thumb-height":`${Q(r)}px`,...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.y),onDragScroll:m=>e.onDragScroll(m.y),onWheelScroll:(m,h)=>{if(a.viewport){const f=a.viewport.scrollTop+m.deltaY;e.onWheelScroll(f),Ve(f,h)&&m.preventDefault()}},onResize:()=>{u.current&&a.viewport&&c&&n({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:q(c.paddingTop),paddingEnd:q(c.paddingBottom)}})}})}),wt="ScrollAreaScrollbar",le=s.forwardRef((e,t)=>{const{orientation:r="vertical",...n}=e,o=E(wt,e.__scopeScrollArea),a=s.useRef(null),c=s.useRef(0),[i,u]=s.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Ue(i.viewport,i.content),m={...n,sizes:i,onSizesChange:u,hasThumb:d>0&&d<1,onThumbChange:f=>a.current=f,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:f=>c.current=f};function h(f,p){return pt(f,c.current,i,p)}return r==="horizontal"?l.createElement(gt,{...m,ref:t,onThumbPositionChange:()=>{if(o.viewport&&a.current){const f=o.viewport.scrollLeft,p=ie(f,i,o.dir);a.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollLeft=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollLeft=h(f,o.dir))}}):r==="vertical"?l.createElement(bt,{...m,ref:t,onThumbPositionChange:()=>{if(o.viewport&&a.current){const f=o.viewport.scrollTop,p=ie(f,i);a.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollTop=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollTop=h(f))}}):null}),ue=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function Ye(e,t){return s.useReducer((r,n)=>t[r][n]??r,e)}function H(e){return(e==null?void 0:e.animationName)||"none"}function yt(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Et(e){const[t,r]=s.useState(),n=s.useRef({}),o=s.useRef(e),a=s.useRef("none"),c=e?"mounted":"unmounted",[i,u]=Ye(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=H(n.current);a.current=i==="mounted"?d:"none"},[i]),ue(()=>{const d=n.current,m=o.current;if(m!==e){const f=a.current,p=H(d);e?u("MOUNT"):p==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(m&&f!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,u]),ue(()=>{if(t){const d=h=>{const p=H(n.current).includes(h.animationName);h.target===t&&p&&Qe.flushSync(()=>u("ANIMATION_END"))},m=h=>{h.target===t&&(a.current=H(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:l.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}function B(e){const{present:t,children:r}=e,n=Et(t),o=typeof r=="function"?r({present:n.isPresent}):s.Children.only(r),a=x(n.ref,yt(o));return typeof r=="function"||n.isPresent?s.cloneElement(o,{ref:a}):null}B.displayName="Presence";const He=s.forwardRef((e,t)=>{const r=E(A,e.__scopeScrollArea),{forceMount:n,...o}=e,[a,c]=s.useState(!1),i=e.orientation==="horizontal",u=K(()=>{if(r.viewport){const d=r.viewport.offsetWidth<r.viewport.scrollWidth,m=r.viewport.offsetHeight<r.viewport.scrollHeight;c(i?d:m)}},10);return I(r.viewport,u),I(r.content,u),l.createElement(B,{present:n||a},l.createElement(le,{"data-state":a?"visible":"hidden",...o,ref:t}))}),vt=s.forwardRef((e,t)=>{const{forceMount:r,...n}=e,o=E(A,e.__scopeScrollArea),[a,c]=s.useState(!1);return s.useEffect(()=>{const i=o.scrollArea;let u=0;if(i){const d=()=>{window.clearTimeout(u),c(!0)},m=()=>{u=window.setTimeout(()=>c(!1),o.scrollHideDelay)};return i.addEventListener("pointerenter",d),i.addEventListener("pointerleave",m),()=>{window.clearTimeout(u),i.removeEventListener("pointerenter",d),i.removeEventListener("pointerleave",m)}}},[o.scrollArea,o.scrollHideDelay]),l.createElement(B,{present:r||a},l.createElement(He,{"data-state":a?"visible":"hidden",...n,ref:t}))});function G(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}const At=s.forwardRef((e,t)=>{const{forceMount:r,...n}=e,o=E(A,e.__scopeScrollArea),a=e.orientation==="horizontal",[c,i]=Ye("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}}),u=K(()=>i("SCROLL_END"),100);return s.useEffect(()=>{if(c==="idle"){const d=window.setTimeout(()=>i("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(d)}},[c,o.scrollHideDelay,i]),s.useEffect(()=>{const d=o.viewport,m=a?"scrollLeft":"scrollTop";if(d){let h=d[m];const f=()=>{const p=d[m];h!==p&&(i("SCROLL"),u()),h=p};return d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[o.viewport,a,i,u]),l.createElement(B,{present:r||c!=="hidden"},l.createElement(le,{"data-state":c==="hidden"?"hidden":"visible",...n,ref:t,onPointerEnter:G(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:G(e.onPointerLeave,()=>i("POINTER_LEAVE"))}))}),Ct=s.forwardRef((e,t)=>{const{forceMount:r,...n}=e,o=E(A,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:c}=o,i=e.orientation==="horizontal";return s.useEffect(()=>(i?a(!0):c(!0),()=>{i?a(!1):c(!1)}),[i,a,c]),o.type==="hover"?l.createElement(vt,{...n,ref:t,forceMount:r}):o.type==="scroll"?l.createElement(At,{...n,ref:t,forceMount:r}):o.type==="auto"?l.createElement(He,{...n,ref:t,forceMount:r}):o.type==="always"?l.createElement(le,{...n,ref:t}):null}),Tt=s.forwardRef((e,t)=>{const{__scopeScrollArea:r,style:n,...o}=e,a=E(te,r),c=Oe(te,r),{onThumbPositionChange:i}=c,u=x(t,h=>c.onThumbChange(h)),d=s.useRef(),m=K(()=>{d.current&&(d.current(),d.current=void 0)},100);return s.useEffect(()=>{const h=a.viewport;if(h){const f=()=>{if(m(),!d.current){const p=St(h,i);d.current=p,i()}};return i(),h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[a.viewport,m,i]),l.createElement(_.div,{"data-state":c.hasThumb?"visible":"hidden",...o,ref:u,style:{width:"var(--lotus-scroll-area-thumb-width)",height:"var(--lotus-scroll-area-thumb-height)",...n},onPointerDownCapture:G(e.onPointerDownCapture,h=>{const p=h.target.getBoundingClientRect(),S=h.clientX-p.left,C=h.clientY-p.top;c.onThumbPointerDown({x:S,y:C})}),onPointerUp:G(e.onPointerUp,c.onThumbPointerUp)})}),Nt=s.forwardRef((e,t)=>{const{forceMount:r,...n}=e,o=Oe(te,e.__scopeScrollArea);return l.createElement(B,{present:r||o.hasThumb},l.createElement(Tt,{ref:t,...n}))}),Pt=s.forwardRef((e,t)=>{const{__scopeScrollArea:r,...n}=e,o=E(ze,r),[a,c]=s.useState(0),[i,u]=s.useState(0),d=!!(a&&i);return I(o.scrollbarX,()=>{var h;const m=((h=o.scrollbarX)==null?void 0:h.offsetHeight)||0;o.onCornerHeightChange(m),u(m)}),I(o.scrollbarY,()=>{var h;const m=((h=o.scrollbarY)==null?void 0:h.offsetWidth)||0;o.onCornerWidthChange(m),c(m)}),d?l.createElement(_.div,{...n,ref:t,style:{width:a,height:i,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null}),_t=s.forwardRef((e,t)=>{const r=E(ze,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&n?l.createElement(Pt,{...e,ref:t}):null}),je=Me,xt=Be,qe=Ct,Rt=Nt,Dt=_t;function Ge(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=Ge(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function re(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=Ge(e))&&(n&&(n+=" "),n+=t);return n}const kt={prefixCls:"s",getPrefixCls:(e,t)=>`${t||"s"}-${e}`},[qt,se]=Ze("ConfigProvider",kt),J=s.forwardRef(({className:e,...t},r)=>{const{getPrefixCls:n}=se("ScrollArea"),o=n("scroll-area");return l.createElement(qe,{ref:r,className:`${o}-scrollbar`,...t},l.createElement(Rt,{className:`${o}-thumb`}))});J.displayName=qe.displayName;J.__docgenInfo={description:"",methods:[]};const ae=s.forwardRef(({className:e,children:t,viewportRef:r,viewportProps:n,scrollbars:o="xy",size:a="default",theme:c="light",onScrollPositionChange:i,...u},d)=>{const{getPrefixCls:m}=se("ScrollArea"),h=m("scroll-area");return l.createElement(je,{ref:d,className:re(h,{[`${h}-small`]:a==="small",[`${h}-dark`]:c==="dark"},e),...u},l.createElement(xt,{...n,className:re(`${h}-viewport`,n==null?void 0:n.className),onScroll:f=>{var p;(p=n==null?void 0:n.onScroll)==null||p.call(n,f),i==null||i({x:f.currentTarget.scrollLeft,y:f.currentTarget.scrollTop})},ref:r},t),(o==="xy"||o==="x")&&l.createElement(J,{orientation:"horizontal"}),(o==="xy"||o==="y")&&l.createElement(J,{orientation:"vertical"}),l.createElement(Dt,null))});ae.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{scrollbars:{defaultValue:{value:"'xy'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},required:!1}}};const Je=s.forwardRef((e,t)=>{const{children:r,scrollHideDelay:n,type:o,dir:a,scrollbars:c,size:i,theme:u,viewportRef:d,viewportProps:m,onScrollPositionChange:h,...f}=e,{getPrefixCls:p}=se("ScrollArea"),S=p("scroll-area");return l.createElement(_.div,{...f,ref:t,className:re(`${S}-autosize`,e.className)},l.createElement(_.div,null,l.createElement(ae,{type:o,scrollHideDelay:n,dir:a,scrollbars:c,theme:u,viewportRef:d,viewportProps:m,size:i,onScrollPositionChange:h},r)))});Je.__docgenInfo={description:"",methods:[],displayName:"Autosize"};const g=ae;g.Autosize=Je;g.useScrollAreaContext=E;g.displayName=je.displayName;const Lt="_content_1k2tp_1",zt="_text_1k2tp_4",It="_tag_1k2tp_10",Ot="_separator_1k2tp_14",j={content:Lt,text:zt,tag:It,separator:Ot},Mt=Array.from({length:50}).map((e,t,r)=>`v1.2.0-beta.${r.length-t}`);function w(){return l.createElement("div",{className:j.content},l.createElement("div",{className:j.text},"Tags"),Mt.map(e=>l.createElement("div",{className:j.tag,key:e},e,l.createElement("div",{className:j.separator}))))}w.__docgenInfo={description:"",methods:[],displayName:"Tags"};const $t="_root_5mvqe_1",Bt={root:$t};function Ke(){return l.createElement("div",{className:Bt.root},"Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame. Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.")}Ke.__docgenInfo={description:"",methods:[],displayName:"Box"};const Wt="_demo1_1w4wh_1",Ut="_demo2_1w4wh_11",Ft="_demo3_1w4wh_15",y={demo1:Wt,demo2:Ut,demo3:Ft},Gt={title:"Components/ScrollArea",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}};function $(){return l.createElement(g,{className:y.demo1},l.createElement(w,null))}function D(){return l.createElement(P,{direction:"vertical"},l.createElement(P,null,l.createElement(g,{className:y.demo1},l.createElement(w,null)),l.createElement(g,{size:"small",className:y.demo1},l.createElement(w,null))),l.createElement(P,null,l.createElement(g,{type:"always",className:y.demo1},l.createElement(w,null)),l.createElement(g,{type:"always",size:"small",className:y.demo1},l.createElement(w,null))))}function k(){return l.createElement(P,null,l.createElement(g,{className:y.demo1},l.createElement(w,null)),l.createElement(g,{type:"always",className:y.demo1},l.createElement(w,null)),l.createElement(g,{type:"hover",className:y.demo1},l.createElement(w,null)),l.createElement(g,{type:"scroll",className:y.demo1},l.createElement(w,null)),l.createElement(g,{type:"never",className:y.demo1},l.createElement(w,null)))}function L(){return l.createElement(P,{direction:"vertical"},l.createElement(P,null,l.createElement(g,{className:y.demo1},l.createElement(w,null)),l.createElement(g,{theme:"dark",className:y.demo1,style:{background:"rgb(26, 38, 61)"}},l.createElement(w,null))),l.createElement(P,null,l.createElement(g,{type:"always",className:y.demo1},l.createElement(w,null)),l.createElement(g,{type:"always",theme:"dark",className:y.demo1,style:{background:"rgb(26, 38, 61)"}},l.createElement(w,null))))}function z(){return l.createElement(g,{scrollbars:"y",className:y.demo2},l.createElement(Ke,null))}$.__docgenInfo={description:"",methods:[],displayName:"Basic"};D.__docgenInfo={description:"大小示例",methods:[],displayName:"Size"};k.__docgenInfo={description:"类型示例，设置滚动条的显示策略",methods:[],displayName:"Type"};L.__docgenInfo={description:"主题示例、目前仅支持暗黑主题及明亮主题",methods:[],displayName:"Theme"};z.__docgenInfo={description:"禁用水平滚动条",methods:[],displayName:"DisableHorizontalScrollbars"};var de,me,fe;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`function Basic() {
  return <ScrollArea className={styles.demo1}>
      <Tags />
    </ScrollArea>;
}`,...(fe=(me=$.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,pe,Se,ge,be;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`function Size() {
  return <Space direction="vertical">
      <Space>
        <ScrollArea className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea size="small" className={styles.demo1}>
          <Tags />
        </ScrollArea>
      </Space>
      <Space>
        <ScrollArea type="always" className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea type="always" size="small" className={styles.demo1}>
          <Tags />
        </ScrollArea>
      </Space>
    </Space>;
}`,...(Se=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:Se.source},description:{story:"大小示例",...(be=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var we,ye,Ee,ve,Ae;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`function Type() {
  return <Space>
      <ScrollArea className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="always" className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="hover" className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="scroll" className={styles.demo1}>
        <Tags />
      </ScrollArea>
      <ScrollArea type="never" className={styles.demo1}>
        <Tags />
      </ScrollArea>
    </Space>;
}`,...(Ee=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ee.source},description:{story:"类型示例，设置滚动条的显示策略",...(Ae=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:Ae.description}}};var Ce,Te,Ne,Pe,_e;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`function Theme() {
  return <Space direction="vertical">
      <Space>
        <ScrollArea className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea theme="dark" className={styles.demo1} style={{
        background: 'rgb(26, 38, 61)'
      }}>
          <Tags />
        </ScrollArea>
      </Space>
      <Space>
        <ScrollArea type="always" className={styles.demo1}>
          <Tags />
        </ScrollArea>
        <ScrollArea type="always" theme="dark" className={styles.demo1} style={{
        background: 'rgb(26, 38, 61)'
      }}>
          <Tags />
        </ScrollArea>
      </Space>
    </Space>;
}`,...(Ne=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source},description:{story:"主题示例、目前仅支持暗黑主题及明亮主题",...(_e=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:_e.description}}};var xe,Re,De,ke,Le;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`function DisableHorizontalScrollbars() {
  return <ScrollArea scrollbars="y" className={styles.demo2}>
      <Box />
    </ScrollArea>;
}`,...(De=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:De.source},description:{story:"禁用水平滚动条",...(Le=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Le.description}}};const Jt=["Basic","Size","Type","Theme","DisableHorizontalScrollbars"];export{$ as Basic,z as DisableHorizontalScrollbars,D as Size,L as Theme,k as Type,Jt as __namedExportsOrder,Gt as default};