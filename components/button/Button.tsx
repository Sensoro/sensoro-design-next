import React, { forwardRef, createRef, useContext, useMemo, useState, useEffect, } from 'react';
import { classNames, omit, } from '@pansy/shared';
import { ConfigContext } from '../config-provider';
import { SizeContext } from '../config-provider/SizeContext';
import { DisabledContext } from '../config-provider/DisabledContext';
import { useCompactItemContext } from '../space/Compact';
import LoadingIcon from './LoadingIcon';
import { isUnBorderedButtonType, isTwoCNChar, spaceChildren, getLoadingConfig } from './buttonHelpers';
import useStyle from './style';

import { NodeJSTimeout } from '@pansy/shared/types';
import type { ButtonType, ButtonStatus, ButtonHTMLType, ButtonShape, LoadingConfigType } from './buttonHelpers';
import type { SizeType } from '../config-provider/SizeContext';

export interface BaseButtonProps {
  prefixCls?: string;
  className?: string;
  /**
   * 设置按钮类型
   */
  type?: ButtonType;
  /**
   * 设置按钮状态
   */
  status?: ButtonStatus;
  /**
   * 设置按钮失效状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 将按钮宽度调整为其父宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * 设置按钮载入状态
   * @default false
   */
  loading?: boolean | { delay?: number };
  /**
   * 设置按钮形状
   * @default 'default'
   */
  shape?: ButtonShape;
  /**
   * 设置按钮大小
   * @default 'middle'
   */
  size?: SizeType;
  /**
   * 设置按钮的图标组件
   */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href: string;
  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  target?: string;
  /**
   * 点击按钮时的回调
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  /**
   * 设置 `button` 原生的 `type` 值
   * @default 'button'
   */
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

type Loading = number | boolean;
type CompoundedComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
> & {};

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    htmlType = 'button',
    loading = false,
    icon,
    block = false,
    type = 'default',
    shape = 'default',
    status = 'default',
    size: customizeSize,
    children,
    disabled: customDisabled,
    ...restProps
  } = props;

  const { getPrefixCls, autoInsertSpaceInButton, direction } = useContext(ConfigContext);
  const buttonRef = (ref as any) ||createRef<HTMLAnchorElement | HTMLButtonElement>();
  const linkButtonRestProps = omit(restProps as AnchorButtonProps & { navigate: any }, ['navigate']);

  // ===================== Style =====================
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  // ===================== Disabled =====================
  const disabled = useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const hrefAndDisabled = linkButtonRestProps.href !== undefined && mergedDisabled;

  // ===================== Loading =====================
  const loadingOrDelay: LoadingConfigType = useMemo(
    () => getLoadingConfig(loading),
    [loading],
  );
  const [innerLoading, setLoading] = useState<Loading>(loadingOrDelay.loading);

  // ===================== InsertSpace =====================
  const autoInsertSpace = autoInsertSpaceInButton !== false;
  const [hasTwoCNChar, setHasTwoCNChar] = useState(false);

  const isNeedInserted = () =>
    React.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);

  const fixTwoCNChar = () => {
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    const buttonText = buttonRef.current.textContent;
    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }

  // ===================== Size =====================
  const size = useContext(SizeContext);
  const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls, direction);
  const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
  const sizeFullname = compactSize || customizeSize || size;
  const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';

  // ===================== Effect =====================
  useEffect(fixTwoCNChar, [buttonRef]);

  useEffect(() => {
    let delayTimer: NodeJSTimeout | null = null;

    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }

    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanupTimer;
  }, [loadingOrDelay])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;

    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  const iconType = innerLoading ? 'loading' : icon;
  const iconNode =
    icon && !innerLoading ? (
      icon
    ) : (
      <LoadingIcon existIcon={!!icon} prefixCls={prefixCls} loading={!!innerLoading} />
    );

  const classes = classNames(
    prefixCls,
    hashId,
    {
      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-disabled`]: hrefAndDisabled,
    },
    compactItemClassnames,
    className,
  )

  const kids =
    children || children === 0
      ? spaceChildren(children, isNeedInserted() && autoInsertSpace)
      : null;

  if (linkButtonRestProps.href !== undefined) {
    return wrapSSR(
      <a {...linkButtonRestProps} className={classes} onClick={handleClick} ref={buttonRef}>
        {iconNode}
        {kids}
      </a>,
    );
  }

  let buttonNode = (
    <button
      {...restProps}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      disabled={mergedDisabled}
      ref={buttonRef}
    >
      {iconNode}
      {kids}
    </button>
  )

  return wrapSSR(buttonNode);
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  InternalButton,
) as CompoundedComponent;
