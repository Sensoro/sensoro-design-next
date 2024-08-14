(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "react", "react-dom"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.sensoro = {}, global.React, global.ReactDOM));
})(this, function(exports2, React, ReactDOM) {
  "use strict";var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  function setRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => refs.forEach((ref) => setRef(ref, node));
  }
  function useComposedRefs(...refs) {
    return React.useCallback(composeRefs(...refs), refs);
  }
  const SCROLL_AREA_NAME = "ScrollArea";
  const SCROLLBAR_NAME$1 = "ScrollAreaScrollbar";
  const THUMB_NAME = "ScrollAreaThumb";
  const CORNER_NAME = "ScrollAreaCorner";
  function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1)
      return baseScope;
    const createScope = () => {
      const scopeHooks = scopes.map((createScope2) => ({
        useScope: createScope2(),
        scopeName: createScope2.scopeName
      }));
      return function useComposedScopes(overrideScopes) {
        const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps[`__scope${scopeName}`];
          return __spreadValues(__spreadValues({}, nextScopes2), currentScope);
        }, {});
        return React.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
      };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
  }
  function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext$1(rootComponentName, defaultContext) {
      const BaseContext = React.createContext(defaultContext);
      const index = defaultContexts.length;
      defaultContexts = [...defaultContexts, defaultContext];
      function Provider(props) {
        const _a = props, { scope, children } = _a, context = __objRest(_a, ["scope", "children"]);
        const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
        const value = React.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
      }
      function useContext$1(consumerName, scope) {
        const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
        const context = React.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      Provider.displayName = `${rootComponentName}Provider`;
      return [Provider, useContext$1];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return React.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
        return React.useMemo(
          () => ({ [`__scope${scopeName}`]: __spreadProps(__spreadValues({}, scope), { [scopeName]: contexts }) }),
          [scope, contexts]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [createContext$1, composeContextScopes(createScope, ...createContextScopeDeps)];
  }
  const [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
  const [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
  const [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME$1);
  const DirectionContext = React.createContext(void 0);
  function useDirection(localDir) {
    const globalDir = React.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
  }
  function Slottable({ children }) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  }
  function isSlottable(child) {
    return React.isValidElement(child) && child.type === Slottable;
  }
  function mergeProps(slotProps, childProps) {
    const overrideProps = __spreadValues({}, childProps);
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            childPropValue(...args);
            slotPropValue(...args);
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return __spreadValues(__spreadValues({}, slotProps), overrideProps);
  }
  const SlotClone = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
      if (React.isValidElement(children)) {
        return React.cloneElement(children, __spreadProps(__spreadValues({}, mergeProps(slotProps, children.props)), {
          // @ts-expect-error 暂时忽略
          ref: forwardedRef ? composeRefs(forwardedRef, children.ref) : children.ref
        }));
      }
      return React.Children.count(children) > 1 ? React.Children.only(null) : null;
    }
  );
  SlotClone.displayName = "SlotClone";
  const Slot = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
      const childrenArray = React.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (React.Children.count(newElement) > 1)
              return React.Children.only(null);
            return React.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ React.createElement(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef }), React.isValidElement(newElement) ? React.cloneElement(newElement, void 0, newChildren) : null);
      }
      return /* @__PURE__ */ React.createElement(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef }), children);
    }
  );
  Slot.displayName = "Slot";
  const NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ];
  const Primitive = NODES.reduce(
    (primitive, node) => {
      const Node = React.forwardRef((props, forwardedRef) => {
        const _a = props, { asChild } = _a, primitiveProps = __objRest(_a, ["asChild"]);
        const Comp = asChild ? Slot : node;
        return /* @__PURE__ */ React.createElement(Comp, __spreadProps(__spreadValues({}, primitiveProps), { ref: forwardedRef }));
      });
      Node.displayName = `Primitive.${node}`;
      return __spreadProps(__spreadValues({}, primitive), { [node]: Node });
    },
    {}
  );
  const ScrollArea$3 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeScrollArea,
        type = "hover",
        dir,
        scrollbars = "xy",
        scrollHideDelay = 600
      } = _a, scrollAreaProps = __objRest(_a, [
        "__scopeScrollArea",
        "type",
        "dir",
        "scrollbars",
        "scrollHideDelay"
      ]);
      const [scrollArea, setScrollArea] = React.useState(null);
      const [viewport, setViewport] = React.useState(null);
      const [content, setContent] = React.useState(null);
      const [scrollbarX, setScrollbarX] = React.useState(null);
      const [scrollbarY, setScrollbarY] = React.useState(null);
      const [cornerWidth, setCornerWidth] = React.useState(0);
      const [cornerHeight, setCornerHeight] = React.useState(0);
      const [scrollbarXEnabled, setScrollbarXEnabled] = React.useState(false);
      const [scrollbarYEnabled, setScrollbarYEnabled] = React.useState(false);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
      const direction = useDirection(dir);
      return /* @__PURE__ */ React.createElement(
        ScrollAreaProvider,
        {
          scope: __scopeScrollArea,
          type,
          dir: direction,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight
        },
        /* @__PURE__ */ React.createElement(
          Primitive.div,
          __spreadProps(__spreadValues({
            dir: direction
          }, scrollAreaProps), {
            ref: composedRefs,
            style: __spreadValues({
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--lotus-scroll-area-corner-width"]: scrollbars !== "xy" ? "0px" : `${cornerWidth}px`,
              ["--lotus-scroll-area-corner-height"]: scrollbars !== "xy" ? "0px" : `${cornerHeight}px`
            }, props.style)
          })
        )
      );
    }
  );
  ScrollArea$3.displayName = SCROLL_AREA_NAME;
  const VIEWPORT_NAME = "ScrollAreaViewport";
  const ScrollAreaViewport = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeScrollArea, children, nonce } = _a, viewportProps = __objRest(_a, ["__scopeScrollArea", "children", "nonce"]);
      const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
      const ref = React.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-lotus-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-lotus-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ), /* @__PURE__ */ React.createElement(
        Primitive.div,
        __spreadProps(__spreadValues({
          "data-lotus-scroll-area-viewport": ""
        }, viewportProps), {
          ref: composedRefs,
          style: __spreadValues({
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden"
          }, props.style)
        }),
        /* @__PURE__ */ React.createElement("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" } }, children)
      ));
    }
  );
  ScrollAreaViewport.displayName = VIEWPORT_NAME;
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  const isNavigator = typeof navigator !== "undefined";
  function testPlatform(re) {
    var _a;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_a = window.navigator["userAgentData"]) == null ? void 0 : _a.platform) || window.navigator.platform) : false;
  }
  function isMac() {
    return testPlatform(/^Mac/i);
  }
  function isIPhone() {
    return testPlatform(/^iPhone/i);
  }
  function isIPad() {
    return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
  }
  function isIOS() {
    return isIPhone() || isIPad();
  }
  function isAppleDevice() {
    return isMac() || isIOS();
  }
  const nav = isNavigator ? navigator : void 0;
  nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
  function useMemoizedFn(fn) {
    const fnRef = React.useRef(fn);
    fnRef.current = React.useMemo(() => fn, [fn]);
    const memoizedFn = React.useRef();
    if (!memoizedFn.current) {
      memoizedFn.current = function(...args) {
        return fnRef.current.apply(this, args);
      };
    }
    return memoizedFn.current;
  }
  isClient && ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  ({
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    meta: isAppleDevice() ? [91, 93] : [91, 92],
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebracket: 221,
    singlequote: 222
  });
  const useLayoutEffect$1 = (globalThis == null ? void 0 : globalThis.document) ? React.useLayoutEffect : () => {
  };
  function useResizeObserver(element, onResize) {
    const handleResize = useMemoizedFn(onResize);
    useLayoutEffect$1(() => {
      let rAF = 0;
      if (element) {
        const resizeObserver = new ResizeObserver(() => {
          cancelAnimationFrame(rAF);
          rAF = window.requestAnimationFrame(handleResize);
        });
        resizeObserver.observe(element);
        return () => {
          window.cancelAnimationFrame(rAF);
          resizeObserver.unobserve(element);
        };
      }
    }, [element, handleResize]);
  }
  React["useId".toString()] || (() => void 0);
  function useCallbackRef(callback) {
    const callbackRef = React.useRef(callback);
    React.useEffect(() => {
      callbackRef.current = callback;
    });
    return React.useMemo(() => (...args) => {
      var _a;
      return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
    }, []);
  }
  function useDebounceCallback(callback, delay) {
    const handleCallback = useCallbackRef(callback);
    const debounceTimerRef = React.useRef(0);
    React.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
    return React.useCallback(
      () => {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
      },
      [handleCallback, delay]
    );
  }
  function toInt(value) {
    return value ? Number.parseInt(value, 10) : 0;
  }
  function clamp$1(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
  }
  function composeEventHandlers$1(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler == null ? void 0 : originalEventHandler(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented) {
        return ourEventHandler == null ? void 0 : ourEventHandler(event);
      }
    };
  }
  function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return Number.isNaN(ratio) ? 0 : ratio;
  }
  function linearScale(input, output) {
    return (value) => {
      if (input[0] === input[1] || output[0] === output[1])
        return output[0];
      const ratio = (output[1] - output[0]) / (input[1] - input[0]);
      return output[0] + ratio * (value - input[0]);
    };
  }
  function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
  }
  function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
    const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
    return interpolate(pointerPos);
  }
  function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
    const scrollWithoutMomentum = clamp$1(scrollPos, scrollClampRange);
    const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
    return interpolate(scrollWithoutMomentum);
  }
  function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
  }
  function addUnlinkedScrollListener(node, handler = () => {
  }) {
    let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
    let rAF = 0;
    (function loop() {
      const position = { left: node.scrollLeft, top: node.scrollTop };
      const isHorizontalScroll = prevPosition.left !== position.left;
      const isVerticalScroll = prevPosition.top !== position.top;
      if (isHorizontalScroll || isVerticalScroll)
        handler();
      prevPosition = position;
      rAF = window.requestAnimationFrame(loop);
    })();
    return () => window.cancelAnimationFrame(rAF);
  }
  const ScrollAreaScrollbarImpl = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeScrollArea,
        sizes,
        hasThumb,
        onThumbChange,
        onThumbPointerUp,
        onThumbPointerDown,
        onThumbPositionChange,
        onDragScroll,
        onWheelScroll,
        onResize
      } = _a, scrollbarProps = __objRest(_a, [
        "__scopeScrollArea",
        "sizes",
        "hasThumb",
        "onThumbChange",
        "onThumbPointerUp",
        "onThumbPointerDown",
        "onThumbPositionChange",
        "onDragScroll",
        "onWheelScroll",
        "onResize"
      ]);
      const context = useScrollAreaContext(SCROLLBAR_NAME$1, __scopeScrollArea);
      const [scrollbar, setScrollbar] = React.useState(null);
      const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
      const rectRef = React.useRef(null);
      const prevWebkitUserSelectRef = React.useRef("");
      const viewport = context.viewport;
      const maxScrollPos = sizes.content - sizes.viewport;
      const handleWheelScroll = useCallbackRef(onWheelScroll);
      const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
      const handleResize = useDebounceCallback(onResize, 10);
      function handleDragScroll(event) {
        if (rectRef.current) {
          const x = event.clientX - rectRef.current.left;
          const y = event.clientY - rectRef.current.top;
          onDragScroll({ x, y });
        }
      }
      React.useEffect(() => {
        const handleWheel = (event) => {
          const element = event.target;
          const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
          if (isScrollbarWheel)
            handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener("wheel", handleWheel, { passive: false });
        return () => document.removeEventListener("wheel", handleWheel, { passive: false });
      }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
      React.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
      useResizeObserver(scrollbar, handleResize);
      useResizeObserver(context.content, handleResize);
      return /* @__PURE__ */ React.createElement(
        ScrollbarProvider,
        {
          scope: __scopeScrollArea,
          scrollbar,
          hasThumb,
          onThumbChange: useCallbackRef(onThumbChange),
          onThumbPointerUp: useCallbackRef(onThumbPointerUp),
          onThumbPositionChange: handleThumbPositionChange,
          onThumbPointerDown: useCallbackRef(onThumbPointerDown)
        },
        /* @__PURE__ */ React.createElement(
          Primitive.div,
          __spreadProps(__spreadValues({}, scrollbarProps), {
            ref: composeRefs2,
            style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
            onPointerDown: composeEventHandlers$1(props.onPointerDown, (event) => {
              const mainPointer = 0;
              if (event.button === mainPointer) {
                const element = event.target;
                element.setPointerCapture(event.pointerId);
                rectRef.current = scrollbar.getBoundingClientRect();
                prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                document.body.style.webkitUserSelect = "none";
                if (context.viewport)
                  context.viewport.style.scrollBehavior = "auto";
                handleDragScroll(event);
              }
            }),
            onPointerMove: composeEventHandlers$1(props.onPointerMove, handleDragScroll),
            onPointerUp: composeEventHandlers$1(props.onPointerUp, (event) => {
              const element = event.target;
              if (element.hasPointerCapture(event.pointerId)) {
                element.releasePointerCapture(event.pointerId);
              }
              document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
              if (context.viewport)
                context.viewport.style.scrollBehavior = "";
              rectRef.current = null;
            })
          })
        )
      );
    }
  );
  const ScrollAreaScrollbarX = React.forwardRef((props, forwardedRef) => {
    const _a = props, { sizes, onSizesChange } = _a, scrollbarProps = __objRest(_a, ["sizes", "onSizesChange"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME$1, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = React.useState();
    const ref = React.useRef(null);
    const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
    React.useEffect(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ React.createElement(
      ScrollAreaScrollbarImpl,
      __spreadProps(__spreadValues({
        "data-orientation": "horizontal"
      }, scrollbarProps), {
        ref: composeRefs2,
        sizes,
        style: __spreadValues({
          bottom: 0,
          left: context.dir === "rtl" ? "var(--lotus-scroll-area-corner-width)" : 0,
          right: context.dir === "ltr" ? "var(--lotus-scroll-area-corner-width)" : 0,
          ["--lotus-scroll-area-thumb-width"]: `${getThumbSize(sizes)}px`
        }, props.style),
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollWidth,
              viewport: context.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      })
    );
  });
  const ScrollAreaScrollbarY = React.forwardRef((props, forwardedRef) => {
    const _a = props, { sizes, onSizesChange } = _a, scrollbarProps = __objRest(_a, ["sizes", "onSizesChange"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME$1, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = React.useState();
    const ref = React.useRef(null);
    const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
    React.useEffect(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ React.createElement(
      ScrollAreaScrollbarImpl,
      __spreadProps(__spreadValues({
        "data-orientation": "vertical"
      }, scrollbarProps), {
        ref: composeRefs2,
        sizes,
        style: __spreadValues({
          top: 0,
          right: context.dir === "ltr" ? 0 : void 0,
          left: context.dir === "rtl" ? 0 : void 0,
          bottom: "var(--lotus-scroll-area-corner-height)",
          ["--lotus-scroll-area-thumb-height"]: `${getThumbSize(sizes)}px`
        }, props.style),
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      })
    );
  });
  const SCROLLBAR_NAME = "ScrollAreaScrollbar";
  const ScrollAreaScrollbarVisible = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
      const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
      const thumbRef = React.useRef(null);
      const pointerOffsetRef = React.useRef(0);
      const [sizes, setSizes] = React.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
      });
      const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
      const commonProps = __spreadProps(__spreadValues({}, scrollbarProps), {
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb) => thumbRef.current = thumb,
        onThumbPointerUp: () => pointerOffsetRef.current = 0,
        onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
      });
      function getScrollPosition(pointerPos, dir) {
        return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
      }
      if (orientation === "horizontal") {
        return /* @__PURE__ */ React.createElement(
          ScrollAreaScrollbarX,
          __spreadProps(__spreadValues({}, commonProps), {
            ref: forwardedRef,
            onThumbPositionChange: () => {
              if (context.viewport && thumbRef.current) {
                const scrollPos = context.viewport.scrollLeft;
                const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
              }
            },
            onWheelScroll: (scrollPos) => {
              if (context.viewport)
                context.viewport.scrollLeft = scrollPos;
            },
            onDragScroll: (pointerPos) => {
              if (context.viewport) {
                context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
              }
            }
          })
        );
      }
      if (orientation === "vertical") {
        return /* @__PURE__ */ React.createElement(
          ScrollAreaScrollbarY,
          __spreadProps(__spreadValues({}, commonProps), {
            ref: forwardedRef,
            onThumbPositionChange: () => {
              if (context.viewport && thumbRef.current) {
                const scrollPos = context.viewport.scrollTop;
                const offset = getThumbOffsetFromScroll(scrollPos, sizes);
                thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
              }
            },
            onWheelScroll: (scrollPos) => {
              if (context.viewport)
                context.viewport.scrollTop = scrollPos;
            },
            onDragScroll: (pointerPos) => {
              if (context.viewport)
                context.viewport.scrollTop = getScrollPosition(pointerPos);
            }
          })
        );
      }
      return null;
    }
  );
  const useLayoutEffect = (globalThis == null ? void 0 : globalThis.document) ? React.useLayoutEffect : () => {
  };
  function useStateMachine(initialState, machine) {
    return React.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState != null ? nextState : state;
    }, initialState);
  }
  function getAnimationName(styles) {
    return (styles == null ? void 0 : styles.animationName) || "none";
  }
  function getElementRef(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }
  function usePresence(present) {
    const [node, setNode] = React.useState();
    const stylesRef = React.useRef({});
    const prevPresentRef = React.useRef(present);
    const prevAnimationNameRef = React.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    React.useEffect(() => {
      const currentAnimationName = getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [state]);
    useLayoutEffect(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = getAnimationName(styles);
        if (present) {
          send("MOUNT");
        } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
          send("UNMOUNT");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating) {
            send("ANIMATION_OUT");
          } else {
            send("UNMOUNT");
          }
        }
        prevPresentRef.current = present;
      }
    }, [present, send]);
    useLayoutEffect(() => {
      if (node) {
        const handleAnimationEnd = (event) => {
          const currentAnimationName = getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(event.animationName);
          if (event.target === node && isCurrentAnimation) {
            ReactDOM.flushSync(() => send("ANIMATION_END"));
          }
        };
        const handleAnimationStart = (event) => {
          if (event.target === node) {
            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
          }
        };
        node.addEventListener("animationstart", handleAnimationStart);
        node.addEventListener("animationcancel", handleAnimationEnd);
        node.addEventListener("animationend", handleAnimationEnd);
        return () => {
          node.removeEventListener("animationstart", handleAnimationStart);
          node.removeEventListener("animationcancel", handleAnimationEnd);
          node.removeEventListener("animationend", handleAnimationEnd);
        };
      } else {
        send("ANIMATION_END");
      }
    }, [node, send]);
    return {
      isPresent: ["mounted", "unmountSuspended"].includes(state),
      ref: React.useCallback((node2) => {
        if (node2)
          stylesRef.current = getComputedStyle(node2);
        setNode(node2);
      }, [])
    };
  }
  function Presence(props) {
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({ present: presence.isPresent }) : React.Children.only(children);
    const ref = useComposedRefs(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? React.cloneElement(child, { ref }) : null;
  }
  Presence.displayName = "Presence";
  const ScrollAreaScrollbarAuto = React.forwardRef(
    (props, forwardedRef) => {
      const context = useScrollAreaContext(SCROLLBAR_NAME$1, props.__scopeScrollArea);
      const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
      const [visible, setVisible] = React.useState(false);
      const isHorizontal = props.orientation === "horizontal";
      const handleResize = useDebounceCallback(() => {
        if (context.viewport) {
          const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
          const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
          setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
      }, 10);
      useResizeObserver(context.viewport, handleResize);
      useResizeObserver(context.content, handleResize);
      return /* @__PURE__ */ React.createElement(Presence, { present: forceMount || visible }, /* @__PURE__ */ React.createElement(
        ScrollAreaScrollbarVisible,
        __spreadProps(__spreadValues({
          "data-state": visible ? "visible" : "hidden"
        }, scrollbarProps), {
          ref: forwardedRef
        })
      ));
    }
  );
  const ScrollAreaScrollbarHover = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
      const context = useScrollAreaContext(SCROLLBAR_NAME$1, props.__scopeScrollArea);
      const [visible, setVisible] = React.useState(false);
      React.useEffect(() => {
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
          const handlePointerEnter = () => {
            window.clearTimeout(hideTimer);
            setVisible(true);
          };
          const handlePointerLeave = () => {
            hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
          };
          scrollArea.addEventListener("pointerenter", handlePointerEnter);
          scrollArea.addEventListener("pointerleave", handlePointerLeave);
          return () => {
            window.clearTimeout(hideTimer);
            scrollArea.removeEventListener("pointerenter", handlePointerEnter);
            scrollArea.removeEventListener("pointerleave", handlePointerLeave);
          };
        }
      }, [context.scrollArea, context.scrollHideDelay]);
      return /* @__PURE__ */ React.createElement(Presence, { present: forceMount || visible }, /* @__PURE__ */ React.createElement(
        ScrollAreaScrollbarAuto,
        __spreadProps(__spreadValues({
          "data-state": visible ? "visible" : "hidden"
        }, scrollbarProps), {
          ref: forwardedRef
        })
      ));
    }
  );
  function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler == null ? void 0 : originalEventHandler(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented) {
        return ourEventHandler == null ? void 0 : ourEventHandler(event);
      }
    };
  }
  const ScrollAreaScrollbarScroll = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
      const context = useScrollAreaContext(SCROLLBAR_NAME$1, props.__scopeScrollArea);
      const isHorizontal = props.orientation === "horizontal";
      const [state, send] = useStateMachine("hidden", {
        hidden: {
          SCROLL: "scrolling"
        },
        scrolling: {
          SCROLL_END: "idle",
          POINTER_ENTER: "interacting"
        },
        interacting: {
          SCROLL: "interacting",
          POINTER_LEAVE: "idle"
        },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting"
        }
      });
      const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
      React.useEffect(() => {
        if (state === "idle") {
          const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
          return () => window.clearTimeout(hideTimer);
        }
      }, [state, context.scrollHideDelay, send]);
      React.useEffect(() => {
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
        if (viewport) {
          let prevScrollPos = viewport[scrollDirection];
          const handleScroll = () => {
            const scrollPos = viewport[scrollDirection];
            const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
            if (hasScrollInDirectionChanged) {
              send("SCROLL");
              debounceScrollEnd();
            }
            prevScrollPos = scrollPos;
          };
          viewport.addEventListener("scroll", handleScroll);
          return () => viewport.removeEventListener("scroll", handleScroll);
        }
      }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
      return /* @__PURE__ */ React.createElement(Presence, { present: forceMount || state !== "hidden" }, /* @__PURE__ */ React.createElement(
        ScrollAreaScrollbarVisible,
        __spreadProps(__spreadValues({
          "data-state": state === "hidden" ? "hidden" : "visible"
        }, scrollbarProps), {
          ref: forwardedRef,
          onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
        })
      ));
    }
  );
  const ScrollAreaScrollbar = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
      const context = useScrollAreaContext(SCROLLBAR_NAME$1, props.__scopeScrollArea);
      const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
      const isHorizontal = props.orientation === "horizontal";
      React.useEffect(() => {
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return () => {
          isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
      }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
      return context.type === "hover" ? /* @__PURE__ */ React.createElement(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ React.createElement(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ React.createElement(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ React.createElement(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
    }
  );
  const ScrollAreaThumbImpl = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeScrollArea, style } = _a, thumbProps = __objRest(_a, ["__scopeScrollArea", "style"]);
      const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
      const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
      const { onThumbPositionChange } = scrollbarContext;
      const composedRef = useComposedRefs(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
      const removeUnlinkedScrollListenerRef = React.useRef();
      const debounceScrollEnd = useDebounceCallback(() => {
        if (removeUnlinkedScrollListenerRef.current) {
          removeUnlinkedScrollListenerRef.current();
          removeUnlinkedScrollListenerRef.current = void 0;
        }
      }, 100);
      React.useEffect(() => {
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
          const handleScroll = () => {
            debounceScrollEnd();
            if (!removeUnlinkedScrollListenerRef.current) {
              const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
              removeUnlinkedScrollListenerRef.current = listener;
              onThumbPositionChange();
            }
          };
          onThumbPositionChange();
          viewport.addEventListener("scroll", handleScroll);
          return () => viewport.removeEventListener("scroll", handleScroll);
        }
      }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
      return /* @__PURE__ */ React.createElement(
        Primitive.div,
        __spreadProps(__spreadValues({
          "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
        }, thumbProps), {
          ref: composedRef,
          style: __spreadValues({
            width: "var(--lotus-scroll-area-thumb-width)",
            height: "var(--lotus-scroll-area-thumb-height)"
          }, style),
          onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x, y });
          }),
          onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
        })
      );
    }
  );
  const ScrollAreaThumb = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
      const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
      return /* @__PURE__ */ React.createElement(Presence, { present: forceMount || scrollbarContext.hasThumb }, /* @__PURE__ */ React.createElement(ScrollAreaThumbImpl, __spreadValues({ ref: forwardedRef }, thumbProps)));
    }
  );
  const ScrollAreaCornerImpl = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeScrollArea } = _a, cornerProps = __objRest(_a, ["__scopeScrollArea"]);
      const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
      const [width, setWidth] = React.useState(0);
      const [height, setHeight] = React.useState(0);
      const hasSize = Boolean(width && height);
      useResizeObserver(context.scrollbarX, () => {
        var _a2;
        const height2 = ((_a2 = context.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
        context.onCornerHeightChange(height2);
        setHeight(height2);
      });
      useResizeObserver(context.scrollbarY, () => {
        var _a2;
        const width2 = ((_a2 = context.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
        context.onCornerWidthChange(width2);
        setWidth(width2);
      });
      return hasSize ? /* @__PURE__ */ React.createElement(
        Primitive.div,
        __spreadProps(__spreadValues({}, cornerProps), {
          ref: forwardedRef,
          style: __spreadValues({
            width,
            height,
            position: "absolute",
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: 0
          }, props.style)
        })
      ) : null;
    }
  );
  const ScrollAreaCorner = React.forwardRef(
    (props, forwardedRef) => {
      const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
      const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
      const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
      return hasCorner ? /* @__PURE__ */ React.createElement(ScrollAreaCornerImpl, __spreadProps(__spreadValues({}, props), { ref: forwardedRef })) : null;
    }
  );
  const Root$2 = ScrollArea$3;
  const Viewport = ScrollAreaViewport;
  const Scrollbar = ScrollAreaScrollbar;
  const Thumb = ScrollAreaThumb;
  const Corner = ScrollAreaCorner;
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  function createContext(rootComponentName, defaultContext) {
    const Context = React.createContext(defaultContext);
    function Provider(props) {
      const _a = props, { children } = _a, context = __objRest(_a, ["children"]);
      const value = React.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
    }
    function useContext$1(consumerName) {
      const context = React.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = `${rootComponentName}Provider`;
    return [Provider, useContext$1];
  }
  const DefaultConfigContextValue = {
    prefixCls: "s",
    getPrefixCls: (componentName, customPrefix) => `${customPrefix || "s"}-${componentName}`
  };
  const [ConfigContextProvider, useConfigContext] = createContext("ConfigProvider", DefaultConfigContextValue);
  function factory(ui) {
    const Component = React.forwardRef(ui);
    Component.withProps = (fixedProps) => {
      const Extended = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues(__spreadValues({}, fixedProps), props), { ref })));
      Extended.displayName = `WithProps(${Component.displayName})`;
      return Extended;
    };
    return Component;
  }
  const ScrollBar = React.forwardRef((_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const { getPrefixCls } = useConfigContext("ScrollArea");
    const prefixCls = getPrefixCls("scroll-area");
    return /* @__PURE__ */ React.createElement(
      Scrollbar,
      __spreadValues({
        ref,
        className: `${prefixCls}-scrollbar`
      }, props),
      /* @__PURE__ */ React.createElement(Thumb, { className: `${prefixCls}-thumb` })
    );
  });
  ScrollBar.displayName = Scrollbar.displayName;
  const ScrollArea$2 = factory((_c, ref) => {
    var _d = _c, {
      className,
      children,
      viewportRef,
      viewportProps,
      scrollbars = "xy",
      size = "default",
      theme = "light",
      onScrollPositionChange
    } = _d, props = __objRest(_d, [
      "className",
      "children",
      "viewportRef",
      "viewportProps",
      "scrollbars",
      "size",
      "theme",
      "onScrollPositionChange"
    ]);
    const { getPrefixCls } = useConfigContext("ScrollArea");
    const prefixCls = getPrefixCls("scroll-area");
    return /* @__PURE__ */ React__namespace.createElement(
      Root$2,
      __spreadValues({
        ref,
        className: clsx(
          prefixCls,
          {
            [`${prefixCls}-small`]: size === "small",
            [`${prefixCls}-dark`]: theme === "dark"
          },
          className
        )
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        Viewport,
        __spreadProps(__spreadValues({}, viewportProps), {
          className: clsx(`${prefixCls}-viewport`, viewportProps == null ? void 0 : viewportProps.className),
          onScroll: (e) => {
            var _a;
            (_a = viewportProps == null ? void 0 : viewportProps.onScroll) == null ? void 0 : _a.call(viewportProps, e);
            onScrollPositionChange == null ? void 0 : onScrollPositionChange({
              x: e.currentTarget.scrollLeft,
              y: e.currentTarget.scrollTop
            });
          },
          ref: viewportRef
        }),
        children
      ),
      (scrollbars === "xy" || scrollbars === "x") && /* @__PURE__ */ React__namespace.createElement(ScrollBar, { orientation: "horizontal" }),
      (scrollbars === "xy" || scrollbars === "y") && /* @__PURE__ */ React__namespace.createElement(ScrollBar, { orientation: "vertical" }),
      /* @__PURE__ */ React__namespace.createElement(Corner, null)
    );
  });
  const Autosize = factory(
    (props, forwardedRef) => {
      const _a = props, {
        children,
        scrollHideDelay,
        type,
        dir,
        scrollbars,
        size,
        theme,
        viewportRef,
        viewportProps,
        onScrollPositionChange
      } = _a, others = __objRest(_a, [
        "children",
        "scrollHideDelay",
        "type",
        "dir",
        "scrollbars",
        "size",
        "theme",
        "viewportRef",
        "viewportProps",
        "onScrollPositionChange"
      ]);
      const { getPrefixCls } = useConfigContext("ScrollArea");
      const prefixCls = getPrefixCls("scroll-area");
      return /* @__PURE__ */ React__namespace.createElement(
        Primitive.div,
        __spreadProps(__spreadValues({}, others), {
          ref: forwardedRef,
          className: clsx(`${prefixCls}-autosize`, props.className)
        }),
        /* @__PURE__ */ React__namespace.createElement(Primitive.div, null, /* @__PURE__ */ React__namespace.createElement(
          ScrollArea$2,
          {
            type,
            scrollHideDelay,
            dir,
            scrollbars,
            theme,
            viewportRef,
            viewportProps,
            size,
            onScrollPositionChange
          },
          children
        ))
      );
    }
  );
  const ScrollArea = ScrollArea$2;
  ScrollArea.Autosize = Autosize;
  ScrollArea.useScrollAreaContext = useScrollAreaContext;
  ScrollArea.displayName = Root$2.displayName;
  const ScrollArea$1 = ScrollArea;
  const NAME$1 = "AspectRatio";
  const AspectRatio$1 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { ratio = 1 / 1, style } = _a, aspectRatioProps = __objRest(_a, ["ratio", "style"]);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            // ensures inner element is contained
            position: "relative",
            // ensures padding bottom trick maths works
            width: "100%",
            paddingBottom: `${100 / ratio}%`
          },
          "data-lotus-aspect-ratio-wrapper": ""
        },
        /* @__PURE__ */ React.createElement(
          Primitive.div,
          __spreadProps(__spreadValues({}, aspectRatioProps), {
            ref: forwardedRef,
            style: __spreadProps(__spreadValues({}, style), {
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            })
          })
        )
      );
    }
  );
  AspectRatio$1.displayName = NAME$1;
  const Root$1 = AspectRatio$1;
  const AspectRatio = factory((props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(Root$1, __spreadProps(__spreadValues({}, props), { ref }));
  });
  AspectRatio.displayName = Root$1.displayName;
  function __rest(s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
        t[p] = s[p];
      }
    }
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) {
          t[p[i]] = s[p[i]];
        }
      }
    }
    return t;
  }
  var SourceType;
  (function(SourceType2) {
    SourceType2["event"] = "event";
    SourceType2["props"] = "prop";
  })(SourceType || (SourceType = {}));
  function noop() {
  }
  function memoizeOnce(cb) {
    var lastArgs;
    var lastValue = void 0;
    return function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      if (lastArgs && args.length === lastArgs.length && args.every(function(value, index) {
        return value === lastArgs[index];
      })) {
        return lastValue;
      }
      lastArgs = args;
      lastValue = cb.apply(void 0, args);
      return lastValue;
    };
  }
  function charIsNumber(char) {
    return !!(char || "").match(/\d/);
  }
  function isNil(val) {
    return val === null || val === void 0;
  }
  function isNanValue(val) {
    return typeof val === "number" && isNaN(val);
  }
  function isNotValidValue(val) {
    return isNil(val) || isNanValue(val) || typeof val === "number" && !isFinite(val);
  }
  function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
  function getThousandsGroupRegex(thousandsGroupStyle) {
    switch (thousandsGroupStyle) {
      case "lakh":
        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
      case "wan":
        return /(\d)(?=(\d{4})+(?!\d))/g;
      case "thousand":
      default:
        return /(\d)(?=(\d{3})+(?!\d))/g;
    }
  }
  function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index = str.search(/[1-9]/);
    index = index === -1 ? str.length : index;
    return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, "$1" + thousandSeparator);
  }
  function usePersistentCallback(cb) {
    var callbackRef = React.useRef(cb);
    callbackRef.current = cb;
    var persistentCbRef = React.useRef(function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      return callbackRef.current.apply(callbackRef, args);
    });
    return persistentCbRef.current;
  }
  function splitDecimal(numStr, allowNegative) {
    if (allowNegative === void 0) allowNegative = true;
    var hasNegation = numStr[0] === "-";
    var addNegation = hasNegation && allowNegative;
    numStr = numStr.replace("-", "");
    var parts = numStr.split(".");
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || "";
    return {
      beforeDecimal,
      afterDecimal,
      hasNegation,
      addNegation
    };
  }
  function fixLeadingZero(numStr) {
    if (!numStr) {
      return numStr;
    }
    var isNegative = numStr[0] === "-";
    if (isNegative) {
      numStr = numStr.substring(1, numStr.length);
    }
    var parts = numStr.split(".");
    var beforeDecimal = parts[0].replace(/^0+/, "") || "0";
    var afterDecimal = parts[1] || "";
    return (isNegative ? "-" : "") + beforeDecimal + (afterDecimal ? "." + afterDecimal : "");
  }
  function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = "";
    var filler = fixedDecimalScale ? "0" : "";
    for (var i = 0; i <= scale - 1; i++) {
      str += numStr[i] || filler;
    }
    return str;
  }
  function repeat(str, count) {
    return Array(count + 1).join(str);
  }
  function toNumericString(num) {
    var _num = num + "";
    var sign = _num[0] === "-" ? "-" : "";
    if (sign) {
      _num = _num.substring(1);
    }
    var ref = _num.split(/[eE]/g);
    var coefficient = ref[0];
    var exponent = ref[1];
    exponent = Number(exponent);
    if (!exponent) {
      return sign + coefficient;
    }
    coefficient = coefficient.replace(".", "");
    var decimalIndex = 1 + exponent;
    var coffiecientLn = coefficient.length;
    if (decimalIndex < 0) {
      coefficient = "0." + repeat("0", Math.abs(decimalIndex)) + coefficient;
    } else if (decimalIndex >= coffiecientLn) {
      coefficient = coefficient + repeat("0", decimalIndex - coffiecientLn);
    } else {
      coefficient = (coefficient.substring(0, decimalIndex) || "0") + "." + coefficient.substring(decimalIndex);
    }
    return sign + coefficient;
  }
  function roundToPrecision(numStr, scale, fixedDecimalScale) {
    if (["", "-"].indexOf(numStr) !== -1) {
      return numStr;
    }
    var shouldHaveDecimalSeparator = (numStr.indexOf(".") !== -1 || fixedDecimalScale) && scale;
    var ref = splitDecimal(numStr);
    var beforeDecimal = ref.beforeDecimal;
    var afterDecimal = ref.afterDecimal;
    var hasNegation = ref.hasNegation;
    var floatValue = parseFloat("0." + (afterDecimal || "0"));
    var floatValueStr = afterDecimal.length <= scale ? "0." + afterDecimal : floatValue.toFixed(scale);
    var roundedDecimalParts = floatValueStr.split(".");
    var intPart = beforeDecimal;
    if (beforeDecimal && Number(roundedDecimalParts[0])) {
      intPart = beforeDecimal.split("").reverse().reduce(function(roundedStr, current, idx) {
        if (roundedStr.length > idx) {
          return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
        }
        return current + roundedStr;
      }, roundedDecimalParts[0]);
    }
    var decimalPart = limitToScale(roundedDecimalParts[1] || "", scale, fixedDecimalScale);
    var negation = hasNegation ? "-" : "";
    var decimalSeparator = shouldHaveDecimalSeparator ? "." : "";
    return "" + negation + intPart + decimalSeparator + decimalPart;
  }
  function setCaretPosition(el, caretPos) {
    el.value = el.value;
    if (el !== null) {
      if (el.createTextRange) {
        var range = el.createTextRange();
        range.move("character", caretPos);
        range.select();
        return true;
      }
      if (el.selectionStart || el.selectionStart === 0) {
        el.focus();
        el.setSelectionRange(caretPos, caretPos);
        return true;
      }
      el.focus();
      return false;
    }
  }
  var findChangeRange = memoizeOnce(function(prevValue, newValue) {
    var i = 0, j = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;
    while (prevValue[i] === newValue[i] && i < prevLength) {
      i++;
    }
    while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
      j++;
    }
    return {
      from: { start: i, end: prevLength - j },
      to: { start: i, end: newLength - j }
    };
  });
  var findChangedRangeFromCaretPositions = function(lastCaretPositions, currentCaretPosition) {
    var startPosition = Math.min(lastCaretPositions.selectionStart, currentCaretPosition);
    return {
      from: { start: startPosition, end: lastCaretPositions.selectionEnd },
      to: { start: startPosition, end: currentCaretPosition }
    };
  };
  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  function geInputCaretPosition(el) {
    return Math.max(el.selectionStart, el.selectionEnd);
  }
  function addInputMode() {
    return typeof navigator !== "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
  }
  function getDefaultChangeMeta(value) {
    return {
      from: {
        start: 0,
        end: 0
      },
      to: {
        start: 0,
        end: value.length
      },
      lastValue: ""
    };
  }
  function defaultIsCharacterSame(ref) {
    var currentValue = ref.currentValue;
    var formattedValue = ref.formattedValue;
    var currentValueIndex = ref.currentValueIndex;
    var formattedValueIndex = ref.formattedValueIndex;
    return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
  }
  function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, isCharacterSame) {
    if (isCharacterSame === void 0) isCharacterSame = defaultIsCharacterSame;
    var firstAllowedPosition = boundary.findIndex(function(b) {
      return b;
    });
    var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
    if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
      lastFormattedValue = prefixFormat;
      curValue = prefixFormat + curValue;
      curCaretPos = curCaretPos + prefixFormat.length;
    }
    var curValLn = curValue.length;
    var formattedValueLn = newFormattedValue.length;
    var addedIndexMap = {};
    var indexMap = new Array(curValLn);
    for (var i = 0; i < curValLn; i++) {
      indexMap[i] = -1;
      for (var j = 0, jLn = formattedValueLn; j < jLn; j++) {
        var isCharSame = isCharacterSame({
          currentValue: curValue,
          lastValue: lastFormattedValue,
          formattedValue: newFormattedValue,
          currentValueIndex: i,
          formattedValueIndex: j
        });
        if (isCharSame && addedIndexMap[j] !== true) {
          indexMap[i] = j;
          addedIndexMap[j] = true;
          break;
        }
      }
    }
    var pos = curCaretPos;
    while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
      pos++;
    }
    var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
    pos = curCaretPos - 1;
    while (pos > 0 && indexMap[pos] === -1) {
      pos--;
    }
    var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
    if (startIndex > endIndex) {
      return endIndex;
    }
    return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
  }
  function getCaretPosInBoundary(value, caretPos, boundary, direction) {
    var valLn = value.length;
    caretPos = clamp(caretPos, 0, valLn);
    if (direction === "left") {
      while (caretPos >= 0 && !boundary[caretPos]) {
        caretPos--;
      }
      if (caretPos === -1) {
        caretPos = boundary.indexOf(true);
      }
    } else {
      while (caretPos <= valLn && !boundary[caretPos]) {
        caretPos++;
      }
      if (caretPos > valLn) {
        caretPos = boundary.lastIndexOf(true);
      }
    }
    if (caretPos === -1) {
      caretPos = valLn;
    }
    return caretPos;
  }
  function caretUnknownFormatBoundary(formattedValue) {
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
      return true;
    });
    for (var i = 0, ln = boundaryAry.length; i < ln; i++) {
      boundaryAry[i] = Boolean(charIsNumber(formattedValue[i]) || charIsNumber(formattedValue[i - 1]));
    }
    return boundaryAry;
  }
  function useInternalValues(value, defaultValue, valueIsNumericString, format2, removeFormatting2, onValueChange) {
    if (onValueChange === void 0) onValueChange = noop;
    var getValues = usePersistentCallback(function(value2, valueIsNumericString2) {
      var formattedValue, numAsString;
      if (isNotValidValue(value2)) {
        numAsString = "";
        formattedValue = "";
      } else if (typeof value2 === "number" || valueIsNumericString2) {
        numAsString = typeof value2 === "number" ? toNumericString(value2) : value2;
        formattedValue = format2(numAsString);
      } else {
        numAsString = removeFormatting2(value2, void 0);
        formattedValue = format2(numAsString);
      }
      return { formattedValue, numAsString };
    });
    var ref = React.useState(function() {
      return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
    });
    var values = ref[0];
    var setValues = ref[1];
    var _onValueChange = function(newValues2, sourceInfo) {
      if (newValues2.formattedValue !== values.formattedValue) {
        setValues({
          formattedValue: newValues2.formattedValue,
          numAsString: newValues2.value
        });
      }
      onValueChange(newValues2, sourceInfo);
    };
    var _value = value;
    var _valueIsNumericString = valueIsNumericString;
    if (isNil(value)) {
      _value = values.numAsString;
      _valueIsNumericString = true;
    }
    var newValues = getValues(_value, _valueIsNumericString);
    React.useMemo(function() {
      setValues(newValues);
    }, [newValues.formattedValue]);
    return [values, _onValueChange];
  }
  function defaultRemoveFormatting(value) {
    return value.replace(/[^0-9]/g, "");
  }
  function defaultFormat(value) {
    return value;
  }
  function NumberFormatBase(props) {
    var type = props.type;
    if (type === void 0) type = "text";
    var displayType = props.displayType;
    if (displayType === void 0) displayType = "input";
    var customInput = props.customInput;
    var renderText = props.renderText;
    var getInputRef = props.getInputRef;
    var format2 = props.format;
    if (format2 === void 0) format2 = defaultFormat;
    var removeFormatting2 = props.removeFormatting;
    if (removeFormatting2 === void 0) removeFormatting2 = defaultRemoveFormatting;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var isAllowed = props.isAllowed;
    var onChange = props.onChange;
    if (onChange === void 0) onChange = noop;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop;
    var onMouseUp = props.onMouseUp;
    if (onMouseUp === void 0) onMouseUp = noop;
    var onFocus = props.onFocus;
    if (onFocus === void 0) onFocus = noop;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop;
    var propValue = props.value;
    var getCaretBoundary2 = props.getCaretBoundary;
    if (getCaretBoundary2 === void 0) getCaretBoundary2 = caretUnknownFormatBoundary;
    var isValidInputCharacter = props.isValidInputCharacter;
    if (isValidInputCharacter === void 0) isValidInputCharacter = charIsNumber;
    var isCharacterSame = props.isCharacterSame;
    var otherProps = __rest(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]);
    var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format2, removeFormatting2, onValueChange);
    var ref_0 = ref[0];
    var formattedValue = ref_0.formattedValue;
    var numAsString = ref_0.numAsString;
    var onFormattedValueChange = ref[1];
    var caretPositionBeforeChange = React.useRef();
    var lastUpdatedValue = React.useRef({ formattedValue, numAsString });
    var _onValueChange = function(values, source) {
      lastUpdatedValue.current = { formattedValue: values.formattedValue, numAsString: values.value };
      onFormattedValueChange(values, source);
    };
    var ref$1 = React.useState(false);
    var mounted = ref$1[0];
    var setMounted = ref$1[1];
    var focusedElm = React.useRef(null);
    var timeout = React.useRef({
      setCaretTimeout: null,
      focusTimeout: null
    });
    React.useEffect(function() {
      setMounted(true);
      return function() {
        clearTimeout(timeout.current.setCaretTimeout);
        clearTimeout(timeout.current.focusTimeout);
      };
    }, []);
    var _format = format2;
    var getValueObject = function(formattedValue2, numAsString2) {
      var floatValue = parseFloat(numAsString2);
      return {
        formattedValue: formattedValue2,
        value: numAsString2,
        floatValue: isNaN(floatValue) ? void 0 : floatValue
      };
    };
    var setPatchedCaretPosition = function(el, caretPos, currentValue) {
      if (el.selectionStart === 0 && el.selectionEnd === el.value.length) {
        return;
      }
      setCaretPosition(el, caretPos);
      timeout.current.setCaretTimeout = setTimeout(function() {
        if (el.value === currentValue && el.selectionStart !== caretPos) {
          setCaretPosition(el, caretPos);
        }
      }, 0);
    };
    var correctCaretPosition = function(value, caretPos, direction) {
      return getCaretPosInBoundary(value, caretPos, getCaretBoundary2(value), direction);
    };
    var getNewCaretPosition = function(inputValue, newFormattedValue, caretPos) {
      var caretBoundary = getCaretBoundary2(newFormattedValue);
      var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
      updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
      return updatedCaretPos;
    };
    var updateValueAndCaretPosition = function(params) {
      var newFormattedValue = params.formattedValue;
      if (newFormattedValue === void 0) newFormattedValue = "";
      var input = params.input;
      var source = params.source;
      var event = params.event;
      var numAsString2 = params.numAsString;
      var caretPos;
      if (input) {
        var inputValue = params.inputValue || input.value;
        var currentCaretPosition2 = geInputCaretPosition(input);
        input.value = newFormattedValue;
        caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition2);
        if (caretPos !== void 0) {
          setPatchedCaretPosition(input, caretPos, newFormattedValue);
        }
      }
      if (newFormattedValue !== formattedValue) {
        _onValueChange(getValueObject(newFormattedValue, numAsString2), { event, source });
      }
    };
    React.useEffect(function() {
      var ref2 = lastUpdatedValue.current;
      var lastFormattedValue = ref2.formattedValue;
      var lastNumAsString = ref2.numAsString;
      if (formattedValue !== lastFormattedValue || numAsString !== lastNumAsString) {
        _onValueChange(getValueObject(formattedValue, numAsString), {
          event: void 0,
          source: SourceType.props
        });
      }
    }, [formattedValue, numAsString]);
    var currentCaretPosition = focusedElm.current ? geInputCaretPosition(focusedElm.current) : void 0;
    var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
    useIsomorphicLayoutEffect(function() {
      var input = focusedElm.current;
      if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
        var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
        input.value = formattedValue;
        setPatchedCaretPosition(input, caretPos, formattedValue);
      }
    }, [formattedValue]);
    var formatInputValue = function(inputValue, event, source) {
      var input = event.target;
      var changeRange = caretPositionBeforeChange.current ? findChangedRangeFromCaretPositions(caretPositionBeforeChange.current, input.selectionEnd) : findChangeRange(formattedValue, inputValue);
      var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
      var _numAsString = removeFormatting2(inputValue, changeMeta);
      var _formattedValue = _format(_numAsString);
      _numAsString = removeFormatting2(_formattedValue, void 0);
      if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
        var input$1 = event.target;
        var currentCaretPosition2 = geInputCaretPosition(input$1);
        var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition2);
        input$1.value = formattedValue;
        setPatchedCaretPosition(input$1, caretPos, formattedValue);
        return false;
      }
      updateValueAndCaretPosition({
        formattedValue: _formattedValue,
        numAsString: _numAsString,
        inputValue,
        event,
        source,
        input: event.target
      });
      return true;
    };
    var setCaretPositionInfoBeforeChange = function(el, endOffset) {
      if (endOffset === void 0) endOffset = 0;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      caretPositionBeforeChange.current = { selectionStart, selectionEnd: selectionEnd + endOffset };
    };
    var _onChange = function(e) {
      var el = e.target;
      var inputValue = el.value;
      var changed = formatInputValue(inputValue, e, SourceType.event);
      if (changed) {
        onChange(e);
      }
      caretPositionBeforeChange.current = void 0;
    };
    var _onKeyDown = function(e) {
      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value;
      if (value === void 0) value = "";
      var expectedCaretPosition;
      if (key === "ArrowLeft" || key === "Backspace") {
        expectedCaretPosition = Math.max(selectionStart - 1, 0);
      } else if (key === "ArrowRight") {
        expectedCaretPosition = Math.min(selectionStart + 1, value.length);
      } else if (key === "Delete") {
        expectedCaretPosition = selectionStart;
      }
      var endOffset = 0;
      if (key === "Delete" && selectionStart === selectionEnd) {
        endOffset = 1;
      }
      var isArrowKey = key === "ArrowLeft" || key === "ArrowRight";
      if (expectedCaretPosition === void 0 || selectionStart !== selectionEnd && !isArrowKey) {
        onKeyDown(e);
        setCaretPositionInfoBeforeChange(el, endOffset);
        return;
      }
      var newCaretPosition = expectedCaretPosition;
      if (isArrowKey) {
        var direction = key === "ArrowLeft" ? "left" : "right";
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
        if (newCaretPosition !== expectedCaretPosition) {
          e.preventDefault();
        }
      } else if (key === "Delete" && !isValidInputCharacter(value[expectedCaretPosition])) {
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "right");
      } else if (key === "Backspace" && !isValidInputCharacter(value[expectedCaretPosition])) {
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "left");
      }
      if (newCaretPosition !== expectedCaretPosition) {
        setPatchedCaretPosition(el, newCaretPosition, value);
      }
      onKeyDown(e);
      setCaretPositionInfoBeforeChange(el, endOffset);
    };
    var _onMouseUp = function(e) {
      var el = e.target;
      var correctCaretPositionIfRequired = function() {
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = "";
        if (selectionStart === selectionEnd) {
          var caretPosition = correctCaretPosition(value, selectionStart);
          if (caretPosition !== selectionStart) {
            setPatchedCaretPosition(el, caretPosition, value);
          }
        }
      };
      correctCaretPositionIfRequired();
      requestAnimationFrame(function() {
        correctCaretPositionIfRequired();
      });
      onMouseUp(e);
      setCaretPositionInfoBeforeChange(el);
    };
    var _onFocus = function(e) {
      if (e.persist) {
        e.persist();
      }
      var el = e.target;
      var currentTarget = e.currentTarget;
      focusedElm.current = el;
      timeout.current.focusTimeout = setTimeout(function() {
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = "";
        var caretPosition = correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          setPatchedCaretPosition(el, caretPosition, value);
        }
        onFocus(Object.assign(Object.assign({}, e), { currentTarget }));
      }, 0);
    };
    var _onBlur = function(e) {
      focusedElm.current = null;
      clearTimeout(timeout.current.focusTimeout);
      clearTimeout(timeout.current.setCaretTimeout);
      onBlur(e);
    };
    var inputMode = mounted && addInputMode() ? "numeric" : void 0;
    var inputProps = Object.assign({ inputMode }, otherProps, {
      type,
      value: formattedValue,
      onChange: _onChange,
      onKeyDown: _onKeyDown,
      onMouseUp: _onMouseUp,
      onFocus: _onFocus,
      onBlur: _onBlur
    });
    if (displayType === "text") {
      return renderText ? React.createElement(React.Fragment, null, renderText(formattedValue, otherProps) || null) : React.createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue);
    } else if (customInput) {
      var CustomInput = customInput;
      return React.createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }
    return React.createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
  }
  function format(numStr, props) {
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var allowNegative = props.allowNegative;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    if (thousandsGroupStyle === void 0) thousandsGroupStyle = "thousand";
    if (numStr === "" || numStr === "-") {
      return numStr;
    }
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var hasDecimalSeparator = decimalScale !== 0 && numStr.indexOf(".") !== -1 || decimalScale && fixedDecimalScale;
    var ref$1 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$1.beforeDecimal;
    var afterDecimal = ref$1.afterDecimal;
    var addNegation = ref$1.addNegation;
    if (decimalScale !== void 0) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
    }
    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }
    if (prefix) {
      beforeDecimal = prefix + beforeDecimal;
    }
    if (suffix) {
      afterDecimal = afterDecimal + suffix;
    }
    if (addNegation) {
      beforeDecimal = "-" + beforeDecimal;
    }
    numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || "") + afterDecimal;
    return numStr;
  }
  function getSeparators(props) {
    var decimalSeparator = props.decimalSeparator;
    if (decimalSeparator === void 0) decimalSeparator = ".";
    var thousandSeparator = props.thousandSeparator;
    var allowedDecimalSeparators = props.allowedDecimalSeparators;
    if (thousandSeparator === true) {
      thousandSeparator = ",";
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, "."];
    }
    return {
      decimalSeparator,
      thousandSeparator,
      allowedDecimalSeparators
    };
  }
  function handleNegation(value, allowNegative) {
    if (value === void 0) value = "";
    var negationRegex = new RegExp("(-)");
    var doubleNegationRegex = new RegExp("(-)(.)*(-)");
    var hasNegation = negationRegex.test(value);
    var removeNegation = doubleNegationRegex.test(value);
    value = value.replace(/-/g, "");
    if (hasNegation && !removeNegation && allowNegative) {
      value = "-" + value;
    }
    return value;
  }
  function getNumberRegex(decimalSeparator, global) {
    return new RegExp("(^-)|[0-9]|" + escapeRegExp(decimalSeparator), "g");
  }
  function isNumericString(val, prefix, suffix) {
    if (val === "") {
      return true;
    }
    return !(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === "string" && !isNaN(Number(val));
  }
  function removeFormatting(value, changeMeta, props) {
    var assign;
    if (changeMeta === void 0) changeMeta = getDefaultChangeMeta(value);
    var allowNegative = props.allowNegative;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var decimalScale = props.decimalScale;
    var from = changeMeta.from;
    var to = changeMeta.to;
    var start = to.start;
    var end = to.end;
    var ref = getSeparators(props);
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var decimalSeparator = ref.decimalSeparator;
    var isBeforeDecimalSeparator = value[end] === decimalSeparator;
    if (charIsNumber(value) && (value === prefix || value === suffix) && changeMeta.lastValue === "") {
      return value;
    }
    if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
      var separator = decimalScale === 0 ? "" : decimalSeparator;
      value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
    }
    var stripNegation = function(value2, start2, end2) {
      var hasNegation2 = false;
      var hasDoubleNegation = false;
      if (prefix.startsWith("-")) {
        hasNegation2 = false;
      } else if (value2.startsWith("--")) {
        hasNegation2 = false;
        hasDoubleNegation = true;
      } else if (suffix.startsWith("-") && value2.length === suffix.length) {
        hasNegation2 = false;
      } else if (value2[0] === "-") {
        hasNegation2 = true;
      }
      var charsToRemove = hasNegation2 ? 1 : 0;
      if (hasDoubleNegation) {
        charsToRemove = 2;
      }
      if (charsToRemove) {
        value2 = value2.substring(charsToRemove);
        start2 -= charsToRemove;
        end2 -= charsToRemove;
      }
      return { value: value2, start: start2, end: end2, hasNegation: hasNegation2 };
    };
    var toMetadata = stripNegation(value, start, end);
    var hasNegation = toMetadata.hasNegation;
    assign = toMetadata, value = assign.value, start = assign.start, end = assign.end;
    var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
    var fromStart = ref$1.start;
    var fromEnd = ref$1.end;
    var lastValue = ref$1.value;
    var updatedSuffixPart = value.substring(start, end);
    if (value.length && lastValue.length && (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) && !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
      value = lastValue;
    }
    var startIndex = 0;
    if (value.startsWith(prefix)) {
      startIndex += prefix.length;
    } else if (start < prefix.length) {
      startIndex = start;
    }
    value = value.substring(startIndex);
    end -= startIndex;
    var endIndex = value.length;
    var suffixStartIndex = value.length - suffix.length;
    if (value.endsWith(suffix)) {
      endIndex = suffixStartIndex;
    } else if (end > suffixStartIndex) {
      endIndex = end;
    } else if (end > value.length - suffix.length) {
      endIndex = end;
    }
    value = value.substring(0, endIndex);
    value = handleNegation(hasNegation ? "-" + value : value, allowNegative);
    value = (value.match(getNumberRegex(decimalSeparator)) || []).join("");
    var firstIndex = value.indexOf(decimalSeparator);
    value = value.replace(new RegExp(escapeRegExp(decimalSeparator), "g"), function(match, index) {
      return index === firstIndex ? "." : "";
    });
    var ref$2 = splitDecimal(value, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation;
    if (to.end - to.start < from.end - from.start && beforeDecimal === "" && isBeforeDecimalSeparator && !parseFloat(afterDecimal)) {
      value = addNegation ? "-" : "";
    }
    return value;
  }
  function getCaretBoundary(formattedValue, props) {
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
      return true;
    });
    var hasNegation = formattedValue[0] === "-";
    boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
    var valLn = formattedValue.length;
    boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
    return boundaryAry;
  }
  function validateAndUpdateProps(props) {
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var allowNegative = props.allowNegative;
    if (allowNegative === void 0) allowNegative = true;
    if (thousandSeparator === decimalSeparator) {
      throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + decimalSeparator + " (default value for decimalSeparator is .)\n     ");
    }
    if (prefix.startsWith("-") && allowNegative) {
      console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    ");
      allowNegative = false;
    }
    return Object.assign(Object.assign({}, props), { allowNegative });
  }
  function useNumericFormat(props) {
    props = validateAndUpdateProps(props);
    props.decimalSeparator;
    props.allowedDecimalSeparators;
    props.thousandsGroupStyle;
    var suffix = props.suffix;
    var allowNegative = props.allowNegative;
    var allowLeadingZeros = props.allowLeadingZeros;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop;
    var thousandSeparator = props.thousandSeparator;
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var defaultValue = props.defaultValue;
    var value = props.value;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var restProps = __rest(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
    var ref = getSeparators(props);
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var _format = function(numStr) {
      return format(numStr, props);
    };
    var _removeFormatting = function(inputValue, changeMeta) {
      return removeFormatting(inputValue, changeMeta, props);
    };
    var _value = isNil(value) ? defaultValue : value;
    var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
    if (!isNil(value)) {
      _valueIsNumericString = _valueIsNumericString || typeof value === "number";
    } else if (!isNil(defaultValue)) {
      _valueIsNumericString = _valueIsNumericString || typeof defaultValue === "number";
    }
    var roundIncomingValueToPrecision = function(value2) {
      if (isNotValidValue(value2)) {
        return value2;
      }
      if (typeof value2 === "number") {
        value2 = toNumericString(value2);
      }
      if (_valueIsNumericString && typeof decimalScale === "number") {
        return roundToPrecision(value2, decimalScale, Boolean(fixedDecimalScale));
      }
      return value2;
    };
    var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
    var ref$1_0 = ref$1[0];
    var numAsString = ref$1_0.numAsString;
    var formattedValue = ref$1_0.formattedValue;
    var _onValueChange = ref$1[1];
    var _onKeyDown = function(e) {
      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value2 = el.value;
      if (value2 === void 0) value2 = "";
      if ((key === "Backspace" || key === "Delete") && selectionEnd < prefix.length) {
        e.preventDefault();
        return;
      }
      if (selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }
      if (key === "Backspace" && value2[0] === "-" && selectionStart === prefix.length + 1 && allowNegative) {
        setCaretPosition(el, 1);
      }
      if (decimalScale && fixedDecimalScale) {
        if (key === "Backspace" && value2[selectionStart - 1] === decimalSeparator) {
          setCaretPosition(el, selectionStart - 1);
          e.preventDefault();
        } else if (key === "Delete" && value2[selectionStart] === decimalSeparator) {
          e.preventDefault();
        }
      }
      if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value2[selectionStart] === decimalSeparator) {
        setCaretPosition(el, selectionStart + 1);
      }
      var _thousandSeparator = thousandSeparator === true ? "," : thousandSeparator;
      if (key === "Backspace" && value2[selectionStart - 1] === _thousandSeparator) {
        setCaretPosition(el, selectionStart - 1);
      }
      if (key === "Delete" && value2[selectionStart] === _thousandSeparator) {
        setCaretPosition(el, selectionStart + 1);
      }
      onKeyDown(e);
    };
    var _onBlur = function(e) {
      var _value2 = numAsString;
      if (!_value2.match(/\d/g)) {
        _value2 = "";
      }
      if (!allowLeadingZeros) {
        _value2 = fixLeadingZero(_value2);
      }
      if (fixedDecimalScale && decimalScale) {
        _value2 = roundToPrecision(_value2, decimalScale, fixedDecimalScale);
      }
      if (_value2 !== numAsString) {
        var formattedValue2 = format(_value2, props);
        _onValueChange({
          formattedValue: formattedValue2,
          value: _value2,
          floatValue: parseFloat(_value2)
        }, {
          event: e,
          source: SourceType.event
        });
      }
      onBlur(e);
    };
    var isValidInputCharacter = function(inputChar) {
      if (inputChar === decimalSeparator) {
        return true;
      }
      return charIsNumber(inputChar);
    };
    var isCharacterSame = function(ref2) {
      var currentValue = ref2.currentValue;
      var lastValue = ref2.lastValue;
      var formattedValue2 = ref2.formattedValue;
      var currentValueIndex = ref2.currentValueIndex;
      var formattedValueIndex = ref2.formattedValueIndex;
      var curChar = currentValue[currentValueIndex];
      var newChar = formattedValue2[formattedValueIndex];
      var typedRange = findChangeRange(lastValue, currentValue);
      var to = typedRange.to;
      if (currentValueIndex >= to.start && currentValueIndex < to.end && allowedDecimalSeparators && allowedDecimalSeparators.includes(curChar) && newChar === decimalSeparator) {
        return true;
      }
      return curChar === newChar;
    };
    return Object.assign(Object.assign({}, restProps), {
      value: formattedValue,
      valueIsNumericString: false,
      isValidInputCharacter,
      isCharacterSame,
      onValueChange: _onValueChange,
      format: _format,
      removeFormatting: _removeFormatting,
      getCaretBoundary: function(formattedValue2) {
        return getCaretBoundary(formattedValue2, props);
      },
      onKeyDown: _onKeyDown,
      onBlur: _onBlur
    });
  }
  function NumericFormat(props) {
    var numericFormatProps = useNumericFormat(props);
    return React.createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
  }
  const NumberFormatter = factory((props) => {
    const _a = props, { value, defaultValue } = _a, others = __objRest(_a, ["value", "defaultValue"]);
    if (value === void 0) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(NumericFormat, __spreadValues({ displayType: "text", value }, others));
  });
  const NAME = "Divider";
  const DEFAULT_ORIENTATION = "horizontal";
  const ORIENTATIONS = ["horizontal", "vertical"];
  function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
  }
  const Divider$1 = React.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { decorative, orientation: orientationProp = DEFAULT_ORIENTATION } = _a, domProps = __objRest(_a, ["decorative", "orientation"]);
      const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
      const ariaOrientation = orientation === "vertical" ? orientation : void 0;
      const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, "role": "separator" };
      return /* @__PURE__ */ React.createElement(
        Primitive.div,
        __spreadProps(__spreadValues(__spreadValues({
          "data-orientation": orientation
        }, semanticProps), domProps), {
          ref: forwardedRef
        })
      );
    }
  );
  Divider$1.displayName = NAME;
  const Root = Divider$1;
  const Divider = React.forwardRef((_e, ref) => {
    var _f = _e, { className, orientation = "horizontal", decorative = true } = _f, props = __objRest(_f, ["className", "orientation", "decorative"]);
    const { getPrefixCls } = useConfigContext("Divider");
    const prefixCls = getPrefixCls("divider");
    return /* @__PURE__ */ React.createElement(
      Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: clsx(
          prefixCls,
          className
        )
      }, props)
    );
  });
  exports2.AspectRatio = AspectRatio;
  exports2.Divider = Divider;
  exports2.NumberFormatter = NumberFormatter;
  exports2.ScrollArea = ScrollArea$1;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
