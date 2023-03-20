import React, { useContext, useMemo, forwardRef } from 'react';
import { classNames } from '@pansy/shared'
import { Segmented as LotusSegmented } from '@lotus-design/segmented';
import { ConfigContext } from '../config-provider';
import { SizeContext } from '../config-provider/SizeContext';

import useStyle from './style';

import type {
  SegmentedLabeledOption as LotusSegmentedLabeledOption,
  SegmentedProps as LotusSegmentedProps,
  SegmentedRawOption,
} from '@lotus-design/segmented';
import type { SizeType } from '../config-provider/SizeContext';

interface SegmentedLabeledOptionWithoutIcon extends LotusSegmentedLabeledOption {
  label: LotusSegmentedLabeledOption['label'];
}

interface SegmentedLabeledOptionWithIcon extends Omit<LotusSegmentedLabeledOption, 'label'> {
  label?: LotusSegmentedLabeledOption['label'];
  /** Set icon for Segmented item */
  icon: React.ReactNode;
}

export type SegmentedLabeledOption =
  | SegmentedLabeledOptionWithIcon
  | SegmentedLabeledOptionWithoutIcon;

export interface SegmentedProps extends Omit<LotusSegmentedProps, 'size' | 'options'> {
  /**
   * 数据化配置选项内容
   * @default []
   */
  options: (SegmentedRawOption | SegmentedLabeledOption)[];
  /**
   * 将宽度调整为父元素宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * 控件尺寸
   * @default 'middle'
   */
  size?: SizeType;
}

function isSegmentedLabeledOptionWithIcon(
  option: SegmentedRawOption | SegmentedLabeledOptionWithIcon | SegmentedLabeledOptionWithoutIcon,
): option is SegmentedLabeledOptionWithIcon {
  return typeof option === 'object' && !!(option as SegmentedLabeledOptionWithIcon)?.icon;
}

export const Segmented = forwardRef<HTMLDivElement, SegmentedProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    size: customSize = 'middle',
    block,
    options = [],
    ...restProps
  } = props;
  const { getPrefixCls, direction } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('segmented', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  // ===================== Size =====================
  const size = useContext(SizeContext);
  const mergedSize = customSize || size;

  const extendedOptions = useMemo<LotusSegmentedProps['options']>(
    () =>
      options.map((option) => {
        if (isSegmentedLabeledOptionWithIcon(option)) {
          const { icon, label, ...restOption } = option;
          return {
            ...restOption,
            label: (
              <>
                <span className={`${prefixCls}-item-icon`}>{icon}</span>
                {label && <span>{label}</span>}
              </>
            ),
          };
        }
        return option;
      }),
    [options, prefixCls],
  )

  return wrapSSR(
    <LotusSegmented
      {...restProps}
      className={classNames(
        className,
        {
          [`${prefixCls}-block`]: block,
          [`${prefixCls}-sm`]: mergedSize === 'small',
          [`${prefixCls}-lg`]: mergedSize === 'large',
        },
        hashId,
      )}
      options={extendedOptions}
      ref={ref}
      prefixCls={prefixCls}
      direction={direction}
    />
  )
})
