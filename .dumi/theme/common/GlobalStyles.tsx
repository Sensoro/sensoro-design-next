import React from 'react';
import { ColorStyle } from './Color/ColorStyle';
import { Markdown, Common, Demo, Highlight, SearchBar } from './styles';

export const GlobalStyles: React.FC = () => (
  <>
    <Common />
    <Highlight />
    <Markdown />
    <SearchBar />
    <Demo />
    <ColorStyle />
  </>
)
