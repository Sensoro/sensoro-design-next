import React from 'react';
import { css } from '@emotion/react';
import { Tooltip } from 'antd';
import { useSiteToken } from '../../../hooks/useSiteToken';

export interface LangBtnProps {
  label1: React.ReactNode;
  label2: React.ReactNode;
  tooltip1?: React.ReactNode;
  tooltip2?: React.ReactNode;
  value: 1 | 2;
  pure?: boolean;
  onClick?: React.MouseEventHandler;
}

const BASE_SIZE = '1.2em';

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    btn: css({
      color: token.colorText,
      borderColor: token.colorBorder,
      padding: 0,
      width: token.controlHeight,
      height: token.controlHeight,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      borderRadius: token.borderRadius,
      transition: `all ${token.motionDurationMid}`,
      cursor: 'pointer',

      '.btn-inner': {
        transition: `all ${token.motionDurationMid}`
      },

      '&:hover': {
        background: token.colorBgTextHover
      },

      'img': {
        width: BASE_SIZE,
        height: BASE_SIZE,
      },

      [`${token.iconCls}`]: {
        fontSize: BASE_SIZE
      }
    }),
    innerDiv: css({
      position: 'relative',
      width: BASE_SIZE,
      height: BASE_SIZE,
    }),
    labelStyle: css({
      position: 'absolute',
      fontSize: BASE_SIZE,
      lineHeight: 1,
      border: `1px solid ${token.colorText}`,
      color: token.colorText,
    }),
    label1Style: css({
      left: '-5%',
      top: 0,
      zIndex: 1,
      backgroundColor: token.colorText,
      color: token.colorBgContainer,
      transform: 'scale(0.7)',
      transformOrigin: '0 0',
    }),
    label2Style: css({
      right: '-5%',
      bottom: 0,
      zIndex: 0,
      transform: `scale(0.5)`,
      transformOrigin: `100% 100%`,
    }),
  };
}

export const SwitchBtn: React.FC<LangBtnProps> = (props) => {
  const { label1, label2, tooltip1, tooltip2, value, pure, onClick } = props;

  const styles = useStyle();

  const node = (
    <button onClick={onClick} css={styles.btn} key="lang-button">
      <div className="btn-inner">
        {pure && (value === 1 ? label1 : label2)}
        {!pure && (
          <div css={styles.innerDiv}>
            <span css={[styles.labelStyle, value === 1 ? styles.label1Style : styles.label2Style]}>{label1}</span>
            <span css={[styles.labelStyle, value === 1 ? styles.label2Style : styles.label1Style]}>{label2}</span>
          </div>
        )}
      </div>
    </button>
  );

  if (tooltip1 || tooltip2) {
    return <Tooltip title={value === 1 ? tooltip1 : tooltip2}>{node}</Tooltip>;
  }

  return node;
}
