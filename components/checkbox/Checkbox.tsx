import React, { forwardRef, useContext, } from 'react';
import LotusCheckbox from '@lotus-design/checkbox';
import { classNames } from '@pansy/shared';
import { ConfigContext } from '../config-provider';
import { DisabledContext } from '../config-provider/DisabledContext';
import { GroupContext } from './Group';

import useStyle from './style';

export interface AbstractCheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 初始是否选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * 指定当前是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * 自动获取焦点
   * @default false
   */
  autoFocus?: boolean;
  /**
   * 失效状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 变化时的回调函数
   * @param e
   * @returns
   */
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean;
}

const InternalCheckbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    disabled,
    indeterminate = false,
    onMouseEnter,
    onMouseLeave,
    ...restProps
  } = props;
  const { getPrefixCls, direction } = useContext(ConfigContext);
  const contextDisabled = useContext(DisabledContext);
  const checkboxGroup = useContext(GroupContext);
  const mergedDisabled = (checkboxGroup?.disabled || disabled) ?? contextDisabled;

  const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const checkboxProps: CheckboxProps = { ...restProps };

  const classes = classNames(
    {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
      // [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
    },
    className,
    hashId,
  );
  const checkboxClass = classNames(
    {
      [`${prefixCls}-indeterminate`]: indeterminate,
    },
    hashId,
  );
  const ariaChecked = indeterminate ? 'mixed' : undefined;

  return wrapSSR(
    <label
      className={classes}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LotusCheckbox
        aria-checked={ariaChecked}
        {...checkboxProps}
        prefixCls={prefixCls}
        className={checkboxClass}
        disabled={mergedDisabled}
        // ref={ref}
      />

    </label>
  )
}

export const Checkbox = forwardRef<unknown, CheckboxProps>(InternalCheckbox);
