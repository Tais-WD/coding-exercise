import React from 'react';
import styled from 'styled-components';

interface FlagIconProps {
  src: string;
  alt: string;
}

const Icon = styled.img`
  max-width: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  object-fit: cover;
`;

const FlagIcon: React.FC<FlagIconProps> = ({ src, alt }) => {
  return <Icon src={src} alt={alt} />;
};

export default FlagIcon;