import React from 'react';
import { Global, css } from '@emotion/react';
import { useSiteToken } from '../../../hooks/useSiteToken';

const gray: Record<number, string> = {
  1: '#fbfbfc',
  2: '#f6f7f8',
  3: '#f1f2f4',
  4: '#eceef0',
  5: '#dbdee2',
  6: '#c2c7ce',
  7: '#aab0ba',
  8: '#6d7789',
  9: '#3c4961',
  10: '#0a1b39',
};

export const ColorStyle: React.FC = () => {
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

  const makeGrayPalette = (index: number = 1): string => {
    if (index <= 12) {
      return `
.palette-gray-${index} {
  background: ${(gray as any)[index]};
}
${makeGrayPalette(index + 1)}
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
          ${makePalette('violet')}
          ${makePalette('purple')}
          ${makePalette('red')}
          ${makePalette('orange')}
          ${makePalette('gold')}
          ${makePalette('yellow')}
          ${makePalette('lime')}
          ${makePalette('green')}
          ${makePalette('lightblue')}
          ${makeGrayPalette()}

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

            &:first-of-type {
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

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `}
    />
  );
}
