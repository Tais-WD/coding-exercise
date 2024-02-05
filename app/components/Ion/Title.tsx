import React, { FC } from 'react';
import styled from 'styled-components';

interface TitleProps {
  text: string; // Change to accept a string
}

const StyledTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;

const Title: FC<TitleProps> = ({ text }) => <StyledTitle>{text}</StyledTitle>;

export default Title;
