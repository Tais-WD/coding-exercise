import React from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  padding: 8px;
  width: 300px;
  font-size: 1rem;
  border: 1px solid #ccc;
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
