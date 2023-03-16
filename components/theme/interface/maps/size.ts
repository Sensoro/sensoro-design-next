export interface SizeMapToken {
  /**
   * @name XXL
   * @default 48
   */
  sizeXXL: number;
  /**
   * @name XL
   * @default 32
   */
  sizeXL: number;
  /**
   * @name LG
   * @default 24
   */
  sizeLG: number;
  /**
   * @name MD
   * @default 20
   */
  sizeMD: number;
  /** Same as size by default, but could be larger in compact mode */
  sizeMS: number;
  /**
   * @name 默认
   * @desc 默认尺寸
   * @default 16
   */
  size: number;
  /**
   * @name SM
   * @default 12
   */
  sizeSM: number;
  /**
   * @name XS
   * @default 8
   */
  sizeXS: number;
  /**
   * @name XXS
   * @default 4
   */
  sizeXXS: number;
}

export interface HeightMapToken {
  // Control
  /** Only Used for control inside component like Multiple Select inner selection item */

  /**
   * @name 更小的组件高度
   * @nameEN XS component height
   * @desc 更小的组件高度
   * @descEN XS component height
   */
  controlHeightXS: number;

  /**
   * @name 较小的组件高度
   * @nameEN SM component height
   * @desc 较小的组件高度
   * @descEN SM component height
   */
  controlHeightSM: number;

  /**
   * @name 较高的组件高度
   * @nameEN LG component height
   * @desc 较高的组件高度
   * @descEN LG component height
   */
  controlHeightLG: number;
}
