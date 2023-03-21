import React from 'react';
import CSSMotion from 'rc-motion';
import LoadingPurely from '@sensoro-design/icons/LoadingPurely'

export interface LoadingIconProps {
  prefixCls: string;
  existIcon: boolean;
  loading?: boolean | object;
}

const getCollapsedWidth = (): React.CSSProperties => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)',
});

const getRealWidth = (node: HTMLElement): React.CSSProperties => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)',
});

const LoadingIcon: React.FC<LoadingIconProps> = ({ prefixCls, loading, existIcon }) => {
  const visible = !!loading;

  if (existIcon) {
    return (
      <span className={`${prefixCls}-loading-icon`}>
        <LoadingPurely />
      </span>
    );
  }

  return (
    <CSSMotion
      visible={visible}
      // We do not really use this motionName
      motionName={`${prefixCls}-loading-icon-motion`}
      removeOnLeave
      onAppearStart={getCollapsedWidth}
      onAppearActive={getRealWidth}
      onEnterStart={getCollapsedWidth}
      onEnterActive={getRealWidth}
      onLeaveStart={getRealWidth}
      onLeaveActive={getCollapsedWidth}
    >
      {({ className, style }: { className?: string; style?: React.CSSProperties }, ref: any) => (
        <span className={`${prefixCls}-loading-icon`} style={style} ref={ref}>
          <LoadingPurely className={className} />
        </span>
      )}
    </CSSMotion>
  );
};

export default LoadingIcon;
