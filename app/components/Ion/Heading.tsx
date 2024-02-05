import React, { FC } from 'react';
import styled from 'styled-components';

interface HeadingProps {
  text: string;
}

const StyledHeading = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;

const Heading: FC<HeadingProps> = ({ text }) => <StyledHeading>{text}</StyledHeading>;

export default Heading;

