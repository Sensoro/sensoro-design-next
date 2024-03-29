import React, { memo, forwardRef, useContext, } from 'react';
import { classNames } from '@pansy/shared';
import { path as d3Path } from 'd3-path';
import { ConfigContext } from '../config-provider';

export interface BatteryProps {
  /** 样式前缀 */
  prefixCls?: string;
  /** 额外的样式类 */
  className?: string;
  /** 额外的样式 */
  style?: React.CSSProperties;
  // 电量 0 - 100
  value: number;
  /** 颜色 */
  color?: string;
}

export const Battery = forwardRef<HTMLSpanElement, BatteryProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    color,
    style,
    value
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('battery', customizePrefixCls);

  const renderBattery = () => {
    let value: number = props.value || 0;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    const width = 640 * (value / 100);

    // 绘制外边框
    const path = d3Path();
    path.moveTo(172.5, 385);
    path.lineTo(172.5, 639);
    path.lineTo(172.5 + width, 639);
    path.lineTo(172.5 + width, 385);
    path.closePath();

    return <path fill={color} d={path.toString()}></path>;
  }

  return (
    <span
      className={classNames(className, 'anticon', {
        [`${prefixCls}`]: true
      })}
      style={style}
      ref={ref}
    >
      <svg
        viewBox="0 0 1024 1024"
        fill={color ? color : 'currentColor'}
        width="1em"
        height="1em"
      >
        {value !== -1 && (
          <>
            <path
              fill={color}
              d="M928.5 415.8h-10V309a32 32 0 0 0-32-32h-790a32 32 0 0 0-32 32v406a32 32 0 0 0 32 32h790a32 32 0 0 0 32-32V608.2h10a32 32 0 0 0 32-32V447.8a32 32 0 0 0-32-32z m-82 259.2h-710V349h710z"
            />
            {renderBattery()}
          </>
        )}

        {value === -1 && (
          <>
            <path
              d="M952 446.57a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H816v-60a32 32 0 0 0-32-32H527.9c-77.28 0-125 58.77-167.13 110.62C324.68 437.63 293.51 476 252 476H72.5a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8H252c41.51 0 72.68 38.37 108.77 82.81 42.11 51.85 89.85 110.62 167.13 110.62H784a32 32 0 0 0 32-32v-60h136a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H816V446.57zM744 669.43H527.9c-43 0-74.63-38.93-111.24-84C396 560 374 532.87 347.79 512c26.2-20.87 48.21-48 68.87-73.41 36.61-45.09 68.24-84 111.24-84H744z"
              fill={color}
            />
            <path
              d="M660 382.57m8 0l40 0q8 0 8 8l0 242.87q0 8-8 8l-40 0q-8 0-8-8l0-242.87q0-8 8-8Z"
              fill={color}
            />
          </>
        )}
      </svg>
    </span>
  );
})

export default memo(Battery)
