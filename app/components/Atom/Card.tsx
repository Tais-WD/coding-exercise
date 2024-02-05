import React from 'react';
import styled from 'styled-components';
import FlagIcon from '../Ion/FlagIcon';
import Heading from '../Ion/Heading';

interface CardProps {
  countryData: {
    name: string;
    languages: { name: string }[];
    region: string;
    currencies: { code: string }[];
    flags: {
      png: string;
    };
  };
}

const FlagElement = styled.div`
  padding-left: 20px;
  transition: transform 0.2s ease; /* Moved transition here for consistency */
`;

const CardContainer = styled.div`
  border: 1px solid #eaeaea;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.2s ease; /* Added transform transition */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02); /* Slightly scale on hover for a subtle effect */
    ${FlagElement} {
      transform: scale(1.1);
    }
  }

  cursor: pointer; /* Added cursor style for interactivity */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;



const Card: React.FC<CardProps> = ({ countryData }) => {
  const { name, languages, region, currencies, flags } = countryData;

  return (
    <CardContainer>
      <Wrapper>
        <FlagElement>
          <FlagIcon src={flags?.png} alt={`${name} flag`} />
        </FlagElement>
        <div>
           <Heading content={region} color='accent'  />
           <Heading content={name} fontSize='large' fontWeight='bold' />
        </div>
       
      </Wrapper>
      <div>
        <Heading content='Currency: ' fontSize='medium' lineHeight='medium' fontWeight='bold' as='span' spacing='none' /> 
        {currencies && 
        <Heading
         content={currencies.map((currency) => currency.code).join(', ')} 
         fontSize='medium' 
         lineHeight='medium' 
         as='span' 
         spacing='none'
         />}
      </div>
      <Heading content='Languages: ' fontSize='medium' lineHeight='medium' fontWeight='bold' as='span' /> 
      {languages && 
        <Heading
         content={languages.map((lang) => lang.name).join(', ')} 
         fontSize='medium' 
         lineHeight='medium' 
         as='span' 
         />}
    </CardContainer>
  );
};

export default Card;
