import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import { breakpoints } from '../../constants/breakpoints';

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  content: string;
  color?: 'primary' | 'accent';
  fontSize?: 'small' | 'medium' | 'large' | 'extraLarge' ;
  fontWeight?: 'normal' | 'bold' | 'bolder';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  spacing?: 'none' | 'small' | 'medium' | 'large';
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

const getMobileFontSize = (size?: 'small' | 'medium' | 'large' | 'extraLarge') => {
  switch (size) {
    case 'small':
      return '10px';
    case 'medium':
      return '12px';
    case 'large':
      return '18px';
    case 'extraLarge':
       return '23px';
    default:
      return '10px';
  }
};

const getDesktopFontSize = (size?: 'small' | 'medium' | 'large' | 'extraLarge') => {
  switch (size) {
    case 'small':
      return '12px';
    case 'medium':
      return '14px';
    case 'large':
      return '20px';
    case 'extraLarge':
      return '26px';
    default:
      return '12px';
  }
};

const getColor = (color?: 'primary' | 'accent') => {
  switch (color) {
    case 'primary':
      return colors.primary;
    case 'accent':
      return colors.accent;
    default:
      return colors.primary;
  }
};

const getSpacing = (spacing?: 'none' | 'small' | 'medium' | 'large') => {
  switch (spacing) {
    case 'none':
      return 0;
    case 'small':
      return '8px';
    case 'medium':
      return '14px';
    case 'large':
      return '21px';
    default:
      return '8px';
  }
};

const HeadingComponent = styled.p<HeadingProps>`
  margin: 0;
  margin-bottom: ${(props) => getSpacing(props.spacing)};
  font-weight: ${(props) => getFontWeight(props.fontWeight)};
  color: ${(props) => getColor(props.color)};
  font-size: ${(props) => getMobileFontSize(props.fontSize)};
  @media (min-width: ${breakpoints.tabletPortrait1000}) {
    font-size: ${(props) => getDesktopFontSize(props.fontSize)};
  }
`;

const Heading: FC<HeadingProps> = ({
    content,
    color = 'primary',
    fontSize = 'medium',
    fontWeight = 'normal',
    as = 'p',
    spacing = 'small'
  }) => {
    return (
      <HeadingComponent
        as={as}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        spacing={spacing}
      >
        {content}
      </HeadingComponent>
    );
  };

export default Heading;
