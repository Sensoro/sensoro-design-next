import React, { useContext, forwardRef, } from 'react';
import { classNames } from '@pansy/shared';
import LoadingPurely from '@sensoro-design/icons/LoadingPurely';
import { Switch as LotusSwitch } from '@lotus-design/switch';

import { ConfigContext } from '../config-provider';
import { SizeContext } from '../config-provider/SizeContext';
import { DisabledContext } from '../config-provider/DisabledContext';
import useStyle from './style';

export type SwitchSize = 'small' | 'default';
export type SwitchType = 'circle' | 'round' | 'line';
export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 自动获取焦点
   * @default false
   */
  autoFocus?: boolean;
  /**
   * 初始是否选中
   */
  defaultChecked?: boolean;
  /**
   * 指定当前是否选中
   */
  checked?: boolean;
  /**
   * 加载中的开关
   */
  loading?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 开关的尺寸
   */
  size?: SwitchSize;
  /**
   * 三种样式类型
   * @default 'circle'
   */
  type?: SwitchType;
  /**
   * 选中时的内容
   */
  checkedText?: React.ReactNode;
  /**
   * 非选中时的内容
   */
  unCheckedText?: React.ReactNode;
  /**
   * 变化时的回调函数
   */
  onChange?: SwitchChangeEventHandler;
  /**
   * 点击时的回调函数
   */
  onClick?: SwitchClickEventHandler;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    size: customizeSize,
    disabled: customDisabled,
    type = 'circle',
    loading,
    ...restProps
  } = props;
  const { getPrefixCls, direction, } = useContext(ConfigContext);
  const size = useContext(SizeContext);

  // ===================== Disabled =====================
  const disabled = useContext(DisabledContext);
  const mergedDisabled = (customDisabled ?? disabled) || loading;

  // ===================== Style =====================
  const prefixCls = getPrefixCls('switch', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const classes = classNames(
    {
      [`${prefixCls}-small`]: (customizeSize || size) === 'small',
      [`${prefixCls}-type-${type}`]: true,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    className,
    hashId,
  );

  const loadingIcon = (
    <div className={`${prefixCls}-handle`}>
      {loading && <LoadingPurely className={`${prefixCls}-loading-icon`} />}
    </div>
  );

  return wrapSSR(
    <LotusSwitch
      {...restProps}
      prefixCls={prefixCls}
      className={classes}
      disabled={mergedDisabled}
      ref={ref}
      loadingIcon={loadingIcon}
    />
  );
})
