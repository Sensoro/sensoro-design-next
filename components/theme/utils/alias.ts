import { seedToken } from '../themes/seed';
import { getAlphaColor } from './getAlphaColor';

import type { AliasToken, MapToken, OverrideToken, SeedToken } from '../interface';

/** Raw merge of `@ant-design/cssinjs` token. Which need additional process */
type RawMergedToken = MapToken & OverrideToken & { override: Partial<AliasToken> };

/**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */
export function formatToken(derivativeToken: RawMergedToken): AliasToken {
  const { override, ...restToken } = derivativeToken;
  const overrideTokens = { ...override };

  Object.keys(seedToken).forEach((token) => {
    delete overrideTokens[token as keyof SeedToken];
  });

  const mergedToken = {
    ...restToken,
    ...overrideTokens,
  };

  // Generate alias token
  const aliasToken: AliasToken = {
    ...mergedToken,

    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    colorLinkDisabled: mergedToken.colorInfoDisabled,

    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,

    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),

    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,

    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,

    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,

    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,

    boxShadowNone: 'none',
    boxShadow: `
      0 1px 2px -2px rgba(60,73,97,.12),
      0 3px 6px 0 rgba(60,73,97,.08),
      0 5px 12px 4px rgba(60,73,97,.06)
    `,
    boxShadowSecondary: `
      0 3px 6px -4px rgba(60,73,97,.08),
      0 6px 16px 0 rgba(60,73,97,.06),
      0 9px 28px 8px rgba(60,73,97,.04)
    `,
    boxShadowTertiary: `
      0 6px 16px -8px rgba(60,73,97,.08),
      0 9px 28px 0 rgba(60,73,97,.04),
      0 12px 48px 16px rgba(60,73,97,.02)
    `,

    // Font
    fontSizeIcon: mergedToken.fontSizeSM,

    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,

    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,

    controlTmpOutline: mergedToken.colorFillQuaternary,
    colorHighlight: mergedToken.colorError,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),

    opacityLoading: 0.65,

    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,

    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
  }

  return aliasToken;
}
