// CSS modules
interface CSSModuleClasses { readonly [key: string]: string };

declare module '*.module.less' {
  const classes: CSSModuleClasses;
  export default classes;
}

// CSS
declare module '*.less' {}
