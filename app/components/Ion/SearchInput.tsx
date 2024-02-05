import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';
import colors from '../../constants/colors';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const InputContainer = styled.div`
  margin-bottom: 16px;
  width: 180px;
  @media (min-width: ${breakpoints.mobilePortrai400}) {
    width: 300px;
  }
`;

const StyledInput = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 1rem;
  border: 2px solid ${colors.secondary};
  border-radius: 6px;
`;

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      <StyledInput type="text" value={value} onChange={handleChange} placeholder="Search for a country" />
    </InputContainer>
  );
};

export default SearchInput;
