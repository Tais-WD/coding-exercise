import React, { FC } from 'react';
import styled from 'styled-components';

interface TextProps {
  content: string | number;
  color?: 'primary' | 'secondary' | 'tertiary' | string;
  fontSize?: 'small' | 'medium' | 'large';
  fontWeight?: 'normal' | 'bold' | 'bolder';
  lineHeight?: 'normal' | 'compact' | 'comfortable';
}

const getFontWeight = (weight?: 'normal' | 'bold' | 'bolder') => {
  switch (weight) {
    case 'normal':
      return 'normal';
    case 'bold':
      return 'bold';
    default:
      return 'normal';
  }
};

const getMobileFontSize = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '12px';
    case 'medium':
      return '14px';
    case 'large':
      return '16px';
    default:
      return '14px';
  }
};

const getDesktopFontSize = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '14px';
    case 'medium':
      return '16px';
    case 'large':
      return '18px';
    default:
      return '16px';
  }
};

const getLineHeight = (lineHeight?: 'normal' | 'compact' | 'comfortable') => {
  switch (lineHeight) {
    case 'normal':
      return 'normal';
    case 'compact':
      return 1.2;
    case 'comfortable':
      return 1.5;
    default:
      return 'normal';
  }
};

const getColor = (color?: 'primary' | 'secondary' | 'tertiary' | string) => {
  switch (color) {
    case 'primary':
      return 'blue'; // Adjust the color values according to your design
    case 'secondary':
      return 'green';
    case 'tertiary':
      return 'orange';
    default:
      return color || 'inherit';
  }
};

const TextComponent = styled.p<TextProps>`
  margin: 0;
  margin-bottom: 7px;
  font-weight: ${(props) => getFontWeight(props.fontWeight)};
  color: ${(props) => getColor(props.color)};
  font-size: ${(props) => getMobileFontSize(props.fontSize)};
  line-height: ${(props) => getLineHeight(props.lineHeight)};

  @media (min-width: 769px) {
    font-size: ${(props) => getDesktopFontSize(props.fontSize)};
  }
`;

const Text: FC<TextProps> = ({ content, color, fontSize, fontWeight, lineHeight }) => (
  <TextComponent color={color} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight}>
    {content}
  </TextComponent>
);

export default Text;
