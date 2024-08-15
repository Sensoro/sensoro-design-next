export type BuildMode = 'default' | 'design';

export interface ToolsConfig {
  /**
   * Root directory
   *
   * @default process.cwd()
   */
  cwd?: string;
  /**
   * 编译模式
   * @default 'default'
   */
  mode?: BuildMode;

  /**
   * transformer config (esm)
   */
  esm?: {
    /**
     * 输出目录
     * @default es
     */
    output?: string;
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
}
