import React from 'react';
import { } from '@sensoro-design/react/es/config-provider';

export interface TitleProps {
  /** 标题 */
  text: string;
  /** 副标题 */
  subtext?: string;
  /** 操作区域，开启 legend 后无效 */
  extra?: React.ReactNode;
  /** 是否展示图例 */
  legend?: boolean;
}

export function Title(props: TitleProps) {
  const { text = '' } = props;

  return (
    <div>
      {text}
    </div>
  );
}
