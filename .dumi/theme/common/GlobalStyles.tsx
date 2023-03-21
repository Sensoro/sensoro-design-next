import React from 'react';
import { ColorStyle } from './Color/ColorStyle';
import { Markdown, Common } from './styles';

export const GlobalStyles: React.FC = () => (
  <>
    <Common />
    <Markdown />
    <ColorStyle />
  </>
)
