import React, { FC } from 'react';
import styled from 'styled-components';

interface TextProps {
  title: string;
  content: string | number;
}

const TextComponent = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 7px;
`;
const TextStrong = styled.strong`
  font-size: 16px;
  margin: 0;
  margin-bottom: 7px;
  font-weight: 700;
`;

const Text: FC<TextProps> = ({ title, content }) => (
  <TextComponent>
    {title && <TextStrong>{title}: </TextStrong>}{content}
  </TextComponent>
);

export default Text;