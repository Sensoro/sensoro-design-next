import{r as a,R as d}from"./index-uubelm5h.js";import{R as $e}from"./index-Dei0BBcc.js";function ge(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=ge(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ce(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=ge(e))&&(r&&(r+=" "),r+=t);return r}function Ce({children:e}){return d.createElement(d.Fragment,null,e)}function He(e){return a.isValidElement(e)&&e.type===Ce}Ce.__docgenInfo={description:"",methods:[],displayName:"Slottable",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function Ue(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Se(...e){return t=>e.forEach(n=>Ue(n,t))}function A(...e){return a.useCallback(Se(...e),e)}function Ve(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...l)=>{s(...l),o(...l)}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}const U=a.forwardRef((e,t)=>{const{children:n,...r}=e;return a.isValidElement(n)?a.cloneElement(n,{...Ve(r,n.props),ref:t?Se(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});U.displayName="SlotClone";U.__docgenInfo={description:"",methods:[],displayName:"SlotClone"};const K=a.forwardRef((e,t)=>{const{children:n,...r}=e,o=a.Children.toArray(n),s=o.find(He);if(s){const c=s.props.children,l=o.map(i=>i===s?a.Children.count(c)>1?a.Children.only(null):a.isValidElement(c)?c.props.children:null:i);return d.createElement(U,{...r,ref:t},a.isValidElement(c)?a.cloneElement(c,void 0,l):null)}return d.createElement(U,{...r,ref:t},n)});K.displayName="Slot";K.__docgenInfo={description:"",methods:[],displayName:"Slot"};const je=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],D=je.reduce((e,t)=>{const n=a.forwardRef((r,o)=>{const{asChild:s,...c}=r,l=s?K:t;return d.createElement(l,{...c,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function V(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Be(e,t){const n=a.createContext(t);function r(s){const{children:c,...l}=s,i=a.useMemo(()=>l,Object.values(l));return d.createElement(n.Provider,{value:i},c)}function o(s){const c=a.useContext(n);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return r.displayName=`${e}Provider`,[r,o]}function Xe(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const c=r.reduce((l,{useScope:i,scopeName:u})=>{const f=i(s)[`__scope${u}`];return{...l,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Ye(e,t=[]){let n=[];function r(s,c){const l=a.createContext(c),i=n.length;n=[...n,c];function u(f){const{scope:p,children:h,...g}=f,y=(p==null?void 0:p[e][i])||l,P=a.useMemo(()=>g,Object.values(g));return d.createElement(y.Provider,{value:P},h)}function m(f,p){const h=(p==null?void 0:p[e][i])||l,g=a.useContext(h);if(g)return g;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${s}\``)}return u.displayName=`${s}Provider`,[u,m]}const o=()=>{const s=n.map(c=>a.createContext(c));return function(l){const i=(l==null?void 0:l[e])||s;return a.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])}};return o.scopeName=e,[r,Xe(o,...t)]}const Q="ScrollArea",b="ScrollAreaScrollbar",J="ScrollAreaThumb",we="ScrollAreaCorner",[be,_t]=Ye(Q),[Fe,S]=be(Q),[Ze,ye]=be(b),Ge=a.createContext(void 0);function Je(e){const t=a.useContext(Ge);return e||t||"ltr"}const ee=a.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:o,scrollHideDelay:s=600,...c}=e,[l,i]=a.useState(null),[u,m]=a.useState(null),[f,p]=a.useState(null),[h,g]=a.useState(null),[y,P]=a.useState(null),[R,k]=a.useState(0),[Z,M]=a.useState(0),[O,T]=a.useState(!1),[q,z]=a.useState(!1),C=A(t,x=>i(x)),w=Je(o);return d.createElement(Fe,{scope:n,type:r,dir:w,scrollHideDelay:s,scrollArea:l,viewport:u,onViewportChange:m,content:f,onContentChange:p,scrollbarX:h,onScrollbarXChange:g,scrollbarXEnabled:O,onScrollbarXEnabledChange:T,scrollbarY:y,onScrollbarYChange:P,scrollbarYEnabled:q,onScrollbarYEnabledChange:z,onCornerWidthChange:k,onCornerHeightChange:M},d.createElement(D.div,{dir:w,...c,ref:C,style:{position:"relative","--lotus-scroll-area-corner-width":`${R}px`,"--lotus-scroll-area-corner-height":`${Z}px`,...e.style}}))});ee.displayName=Q;ee.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Re="ScrollAreaViewport",te=a.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,nonce:o,...s}=e,c=S(Re,n),l=a.useRef(null),i=A(t,l,c.onViewportChange);return d.createElement(d.Fragment,null,d.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-lotus-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-lotus-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),d.createElement(D.div,{"data-lotus-scroll-area-viewport":"",...s,ref:i,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}},d.createElement("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},r)))});te.displayName=Re;te.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaViewport",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const le=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{};function ve(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}function W(e){return(e==null?void 0:e.animationName)||"none"}function Ke(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Qe(e){const[t,n]=a.useState(),r=a.useRef({}),o=a.useRef(e),s=a.useRef("none"),c=e?"mounted":"unmounted",[l,i]=ve(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const u=W(r.current);s.current=l==="mounted"?u:"none"},[l]),le(()=>{const u=r.current,m=o.current;if(m!==e){const p=s.current,h=W(u);e?i("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(m&&p!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,i]),le(()=>{if(t){const u=f=>{const h=W(r.current).includes(f.animationName);f.target===t&&h&&$e.flushSync(()=>i("ANIMATION_END"))},m=f=>{f.target===t&&(s.current=W(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:d.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function E(e){const{present:t,children:n}=e,r=Qe(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),s=A(r.ref,Ke(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:s}):null}E.displayName="Presence";E.__docgenInfo={description:"",methods:[],displayName:"Presence",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement | ((props: { present: boolean }) => React.ReactElement)",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"unknown"}]},description:""},present:{required:!0,tsType:{name:"boolean"},description:""}}};const et=typeof window<"u"&&typeof document<"u",tt=typeof navigator<"u";function ne(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)==null?void 0:t.platform)||window.navigator.platform):!1}function Ae(){return ne(/^Mac/i)}function nt(){return ne(/^iPhone/i)}function rt(){return ne(/^iPad/i)||Ae()&&navigator.maxTouchPoints>1}function ot(){return nt()||rt()}function at(){return Ae()||ot()}const $=tt?navigator:void 0;$&&($.connection||$.mozConnection||$.webkitConnection);function st(e){const t=a.useRef(e);t.current=a.useMemo(()=>e,[e]);const n=a.useRef();return n.current||(n.current=function(...r){return t.current.apply(this,r)}),n.current}et&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch);at();const ct=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{};function v(e,t){const n=st(t);ct(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}d.useId;function _(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function X(e,t){const n=_(e),r=a.useRef(0);return a.useEffect(()=>()=>window.clearTimeout(r.current),[]),a.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function j(e){return e?parseInt(e,10):0}function lt(e,[t,n]){return Math.min(n,Math.max(t,e))}function G(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function xe(e,t){const n=e/t;return isNaN(n)?0:n}function _e(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Y(e){const t=xe(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function it(e,t,n,r="ltr"){const o=Y(n),s=o/2,c=t||s,l=o-c,i=n.scrollbar.paddingStart+c,u=n.scrollbar.size-n.scrollbar.paddingEnd-l,m=n.content-n.viewport,f=r==="ltr"?[0,m]:[m*-1,0];return _e([i,u],f)(e)}function ie(e,t,n="ltr"){const r=Y(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-o,c=t.content-t.viewport,l=s-r,i=n==="ltr"?[0,c]:[c*-1,0],u=lt(e,i);return _e([0,c],[0,l])(u)}function Ee(e,t){return e>0&&e<t}const ut=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function o(){const s={left:e.scrollLeft,top:e.scrollTop},c=n.left!==s.left,l=n.top!==s.top;(c||l)&&t(),n=s,r=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(r)},re=a.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:o,onThumbChange:s,onThumbPointerUp:c,onThumbPointerDown:l,onThumbPositionChange:i,onDragScroll:u,onWheelScroll:m,onResize:f,...p}=e,h=S(b,n),[g,y]=a.useState(null),P=A(t,C=>y(C)),R=a.useRef(null),k=a.useRef(""),Z=h.viewport,M=r.content-r.viewport,O=_(m),T=_(i),q=X(f,10);function z(C){if(R.current){const w=C.clientX-R.current.left,x=C.clientY-R.current.top;u({x:w,y:x})}}return a.useEffect(()=>{const C=w=>{const x=w.target;(g==null?void 0:g.contains(x))&&O(w,M)};return document.addEventListener("wheel",C,{passive:!1}),()=>document.removeEventListener("wheel",C,{passive:!1})},[Z,g,M,O]),a.useEffect(T,[r,T]),v(g,q),v(h.content,q),d.createElement(Ze,{scope:n,scrollbar:g,hasThumb:o,onThumbChange:_(s),onThumbPointerUp:_(c),onThumbPositionChange:T,onThumbPointerDown:_(l)},d.createElement(D.div,{...p,ref:P,style:{position:"absolute",...p.style},onPointerDown:G(e.onPointerDown,C=>{C.button===0&&(C.target.setPointerCapture(C.pointerId),R.current=g.getBoundingClientRect(),k.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",h.viewport&&(h.viewport.style.scrollBehavior="auto"),z(C))}),onPointerMove:G(e.onPointerMove,z),onPointerUp:G(e.onPointerUp,C=>{const w=C.target;w.hasPointerCapture(C.pointerId)&&w.releasePointerCapture(C.pointerId),document.body.style.webkitUserSelect=k.current,h.viewport&&(h.viewport.style.scrollBehavior=""),R.current=null})}))});re.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarImpl",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Ne=a.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...o}=e,s=S(b,e.__scopeScrollArea),[c,l]=a.useState(),i=a.useRef(null),u=A(t,i,s.onScrollbarXChange);return a.useEffect(()=>{i.current&&l(getComputedStyle(i.current))},[i]),d.createElement(re,{"data-orientation":"horizontal",...o,ref:u,sizes:n,style:{bottom:0,left:s.dir==="rtl"?"var(--lotus-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--lotus-scroll-area-corner-width)":0,"--lotus-scroll-area-thumb-width":`${Y(n)}px`,...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.x),onDragScroll:m=>e.onDragScroll(m.x),onWheelScroll:(m,f)=>{if(s.viewport){const p=s.viewport.scrollLeft+m.deltaX;e.onWheelScroll(p),Ee(p,f)&&m.preventDefault()}},onResize:()=>{i.current&&s.viewport&&c&&r({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:j(c.paddingLeft),paddingEnd:j(c.paddingRight)}})}})});Ne.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarX",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Pe=a.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...o}=e,s=S(b,e.__scopeScrollArea),[c,l]=a.useState(),i=a.useRef(null),u=A(t,i,s.onScrollbarYChange);return a.useEffect(()=>{i.current&&l(getComputedStyle(i.current))},[i]),d.createElement(re,{"data-orientation":"vertical",...o,ref:u,sizes:n,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--lotus-scroll-area-corner-height)","--lotus-scroll-area-thumb-height":`${Y(n)}px`,...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.y),onDragScroll:m=>e.onDragScroll(m.y),onWheelScroll:(m,f)=>{if(s.viewport){const p=s.viewport.scrollTop+m.deltaY;e.onWheelScroll(p),Ee(p,f)&&m.preventDefault()}},onResize:()=>{i.current&&s.viewport&&c&&r({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:j(c.paddingTop),paddingEnd:j(c.paddingBottom)}})}})});Pe.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarY",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const dt="ScrollAreaScrollbar",F=a.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,o=S(dt,e.__scopeScrollArea),s=a.useRef(null),c=a.useRef(0),[l,i]=a.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=xe(l.viewport,l.content),m={...r,sizes:l,onSizesChange:i,hasThumb:u>0&&u<1,onThumbChange:p=>s.current=p,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:p=>c.current=p};function f(p,h){return it(p,c.current,l,h)}return n==="horizontal"?d.createElement(Ne,{...m,ref:t,onThumbPositionChange:()=>{if(o.viewport&&s.current){const p=o.viewport.scrollLeft,h=ie(p,l,o.dir);s.current.style.transform=`translate3d(${h}px, 0, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollLeft=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollLeft=f(p,o.dir))}}):n==="vertical"?d.createElement(Pe,{...m,ref:t,onThumbPositionChange:()=>{if(o.viewport&&s.current){const p=o.viewport.scrollTop,h=ie(p,l);s.current.style.transform=`translate3d(0, ${h}px, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollTop=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollTop=f(p))}}):null});F.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarVisible",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const oe=a.forwardRef((e,t)=>{const n=S(b,e.__scopeScrollArea),{forceMount:r,...o}=e,[s,c]=a.useState(!1),l=e.orientation==="horizontal",i=X(()=>{if(n.viewport){const u=n.viewport.offsetWidth<n.viewport.scrollWidth,m=n.viewport.offsetHeight<n.viewport.scrollHeight;c(l?u:m)}},10);return v(n.viewport,i),v(n.content,i),d.createElement(E,{present:r||s},d.createElement(F,{"data-state":s?"visible":"hidden",...o,ref:t}))});oe.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarAuto",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Te=a.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=S(b,e.__scopeScrollArea),[s,c]=a.useState(!1);return a.useEffect(()=>{const l=o.scrollArea;let i=0;if(l){const u=()=>{window.clearTimeout(i),c(!0)},m=()=>{i=window.setTimeout(()=>c(!1),o.scrollHideDelay)};return l.addEventListener("pointerenter",u),l.addEventListener("pointerleave",m),()=>{window.clearTimeout(i),l.removeEventListener("pointerenter",u),l.removeEventListener("pointerleave",m)}}},[o.scrollArea,o.scrollHideDelay]),d.createElement(E,{present:n||s},d.createElement(oe,{"data-state":s?"visible":"hidden",...r,ref:t}))});Te.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarHover",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Ie=a.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=S(b,e.__scopeScrollArea),s=e.orientation==="horizontal",[c,l]=ve("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}}),i=X(()=>l("SCROLL_END"),100);return a.useEffect(()=>{if(c==="idle"){const u=window.setTimeout(()=>l("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(u)}},[c,o.scrollHideDelay,l]),a.useEffect(()=>{const u=o.viewport,m=s?"scrollLeft":"scrollTop";if(u){let f=u[m];const p=()=>{const h=u[m];f!==h&&(l("SCROLL"),i()),f=h};return u.addEventListener("scroll",p),()=>u.removeEventListener("scroll",p)}},[o.viewport,s,l,i]),d.createElement(E,{present:n||c!=="hidden"},d.createElement(F,{"data-state":c==="hidden"?"hidden":"visible",...r,ref:t,onPointerEnter:V(e.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:V(e.onPointerLeave,()=>l("POINTER_LEAVE"))}))});Ie.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbarScroll",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const ae=a.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=S(b,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:c}=o,l=e.orientation==="horizontal";return a.useEffect(()=>(l?s(!0):c(!0),()=>{l?s(!1):c(!1)}),[l,s,c]),o.type==="hover"?d.createElement(Te,{...r,ref:t,forceMount:n}):o.type==="scroll"?d.createElement(Ie,{...r,ref:t,forceMount:n}):o.type==="auto"?d.createElement(oe,{...r,ref:t,forceMount:n}):o.type==="always"?d.createElement(F,{...r,ref:t}):null});ae.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaScrollbar",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Le=a.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...o}=e,s=S(J,n),c=ye(J,n),{onThumbPositionChange:l}=c,i=A(t,f=>c.onThumbChange(f)),u=a.useRef(),m=X(()=>{u.current&&(u.current(),u.current=void 0)},100);return a.useEffect(()=>{const f=s.viewport;if(f){const p=()=>{if(m(),!u.current){const h=ut(f,l);u.current=h,l()}};return l(),f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[s.viewport,m,l]),d.createElement(D.div,{"data-state":c.hasThumb?"visible":"hidden",...o,ref:i,style:{width:"var(--lotus-scroll-area-thumb-width)",height:"var(--lotus-scroll-area-thumb-height)",...r},onPointerDownCapture:V(e.onPointerDownCapture,f=>{const h=f.target.getBoundingClientRect(),g=f.clientX-h.left,y=f.clientY-h.top;c.onThumbPointerDown({x:g,y})}),onPointerUp:V(e.onPointerUp,c.onThumbPointerUp)})});Le.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaThumbImpl",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const De=a.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=ye(J,e.__scopeScrollArea);return d.createElement(E,{present:n||o.hasThumb},d.createElement(Le,{ref:t,...r}))});De.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaThumb",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const ke=a.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,o=S(we,n),[s,c]=a.useState(0),[l,i]=a.useState(0),u=!!(s&&l);return v(o.scrollbarX,()=>{var f;const m=((f=o.scrollbarX)==null?void 0:f.offsetHeight)||0;o.onCornerHeightChange(m),i(m)}),v(o.scrollbarY,()=>{var f;const m=((f=o.scrollbarY)==null?void 0:f.offsetWidth)||0;o.onCornerWidthChange(m),c(m)}),u?d.createElement(D.div,{...r,ref:t,style:{width:s,height:l,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});ke.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaCornerImpl",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};const Me=a.forwardRef((e,t)=>{const n=S(we,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?d.createElement(ke,{...e,ref:t}):null});Me.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaCorner",props:{__scopeScrollArea:{required:!1,tsType:{name:"union",raw:"{ [scopeName: string]: React.Context<C>[] } | undefined",elements:[{name:"signature",type:"object",raw:"{ [scopeName: string]: React.Context<C>[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"ReactContext",raw:"React.Context<C>",elements:[{name:"C"}]}],raw:"React.Context<C>[]",required:!0}}]}},{name:"undefined"}]},description:""}}};function mt(e){const t=S("ScrollAreaScrollbar",e.__scopeScrollArea),n=()=>{if(t.scrollArea){t.scrollArea.style.height="100%";const r=t.scrollArea.clientHeight,o=t.scrollArea.scrollHeight;r<o&&(t.scrollArea.style.height=`${r}px`)}};return v(t.scrollArea,n),a.useEffect(()=>{if(t.scrollArea)return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t.scrollArea]),null}const Oe=ee,pt=te,ft=Me,ht={prefixCls:"s",getPrefixCls:(e,t)=>`${t||"s"}-${e}`},[Et,qe]=Be("ConfigProvider",ht),B=a.forwardRef(({className:e,...t},n)=>{const{getPrefixCls:r}=qe("ScrollArea"),o=r("scroll-area");return d.createElement(ae,{ref:n,className:`${o}-scrollbar`,...t},d.createElement(De,{className:`${o}-thumb`}))});B.displayName=ae.displayName;B.__docgenInfo={description:"",methods:[]};const ze=a.forwardRef(({className:e,children:t,viewportProps:n,size:r="default",theme:o="light",...s},c)=>{const{getPrefixCls:l}=qe("ScrollArea"),i=l("scroll-area");return d.createElement(Oe,{ref:c,className:ce(i,{[`${i}-small`]:r==="small",[`${i}-dark`]:o==="dark"},e),...s},d.createElement(pt,{className:ce(`${i}-viewport`,n==null?void 0:n.className),style:n==null?void 0:n.style},t),d.createElement(B,{orientation:"vertical"}),d.createElement(B,{orientation:"horizontal"}),d.createElement(ft,null))}),N=ze;N.AutoHeight=mt;N.useScrollAreaContext=S;N.displayName=Oe.displayName;ze.__docgenInfo={description:"",methods:[],displayName:"InternalCompoundedScrollArea",props:{size:{defaultValue:{value:"'default'",computed:!1},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},required:!1}}};const gt="_content_1k2tp_1",Ct="_text_1k2tp_4",St="_tag_1k2tp_10",wt="_separator_1k2tp_14",H={content:gt,text:Ct,tag:St,separator:wt},bt=Array.from({length:50}).map((e,t,n)=>`v1.2.0-beta.${n.length-t}`);function se(){return d.createElement("div",{className:H.content},d.createElement("div",{className:H.text},"Tags"),bt.map(e=>d.createElement("div",{className:H.tag,key:e},e,d.createElement("div",{className:H.separator}))))}se.__docgenInfo={description:"",methods:[],displayName:"Tags"};const yt="_demo1_1wa6p_1",Rt="_demo2_1wa6p_11",We={demo1:yt,demo2:Rt},Nt={title:"Components/ScrollArea",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}};function I(){return d.createElement(N,{className:We.demo1},d.createElement(se,null))}function L(){return d.createElement(N,{viewportProps:{style:{maxHeight:"18rem"}},className:We.demo2},d.createElement(se,null))}I.__docgenInfo={description:"",methods:[],displayName:"Basic"};L.__docgenInfo={description:"",methods:[],displayName:"MaxHeight"};var ue,de,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`function Basic() {
  return <ScrollArea className={styles.demo1}>
      <Tags />
    </ScrollArea>;
}`,...(me=(de=I.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,fe,he;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`function MaxHeight() {
  return <ScrollArea viewportProps={{
    style: {
      maxHeight: '18rem'
    }
  }} className={styles.demo2}>
      <Tags />
    </ScrollArea>;
}`,...(he=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const Pt=["Basic","MaxHeight"];export{I as Basic,L as MaxHeight,Pt as __namedExportsOrder,Nt as default};
