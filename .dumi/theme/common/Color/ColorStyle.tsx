import React from 'react';
import { Global, css } from '@emotion/react';
import { useSiteToken } from '../../../hooks/useSiteToken';

const gray: Record<number, string> = {
  1: '#fff',
  2: '#fbfbfc',
  3: '#f6f7f8',
  4: '#f1f2f4',
  5: '#eceef0',
  6: '#dbdee2',
  7: '#c2c7ce',
  8: '#aab0ba',
  9: '#6d7789',
  10: '#3c4961',
  11: '#0a1b39',
  12: '#000',
};

export const ColorStyle = () => {
  const { token } = useSiteToken();

  const makePalette = (color: string, index: number = 1): string => {
    if (index <= 10) {
      return `
.palette-${color}-${index} {
  background: ${(token as any)[`${color}-${index}`]};
}
${makePalette(color, index + 1)}
    `;
    }
    return '';
  };

  return (
    <Global
      styles={css`
        .color-palettes {
          margin: 0 1%;
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: ${token.colorError};
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          ${makePalette('blue')}
          ${makePalette('purple')}
          ${makePalette('cyan')}
          ${makePalette('green')}
          ${makePalette('magenta')}
          ${makePalette('red')}
          ${makePalette('volcano')}
          ${makePalette('orange')}
          ${makePalette('gold')}
          ${makePalette('yellow')}
          ${makePalette('lime')}
          ${makePalette('geekblue')}

          text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

      `}
    />
  );
}
