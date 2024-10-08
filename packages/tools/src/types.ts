export type BuildMode = 'default' | 'design';

export interface ToolsConfig {
  /**
   * Root directory
   *
   * @default process.cwd()
   */
  cwd?: string;

  /**
   * source code directory
   * @default src
   */
  input?: string;

  /**
   * 是否清空输出目录
   * @default true
   */
  clean?: boolean;

  /**
   * 编译模式
   * @default 'default'
   */
  mode?: BuildMode;

  ignores?: string[];

  /**
   * transformer config (esm)
   */
  esm?: {
    /**
     * 输出目录
     * @default es
     */
    output?: string;
    /**
     * 是否生成类型定义
     * @default true
     */
    dts?: boolean;
  };

  /**
   * transformer config (cjs)
   */
  cjs?: {
    /**
     * 输出目录
     * @default lib
     */
    output?: string;
    /**
     * 是否生成类型定义
     * @default true
     */
    dts?: boolean;
  };

  /**
   * bundler config (umd)
   */
  umd?: {
    /**
     * 库名称
     */
    name?: string;
    /**
     * 输出目录
     * @default dist
     */
    outDir?: string;
    /**
     * 外部依赖
     */
    externals?: Record<string, string>;
    /**
     * 文件名
     */
    fileName?: string;
  };

  /** design 模式相关配置 */
  design?: {
    /**
     * 全部样式的文件名
     */
    designStyleFileName?: string;
  };
}
