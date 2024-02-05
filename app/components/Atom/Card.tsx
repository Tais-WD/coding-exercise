import React from 'react';
import styled from 'styled-components';
import Text from '../Ion/Text';
import Title from '../Ion/Title';
import FlagIcon from '../Ion/FlagIcon';

interface CardProps {
  countryData: {
    name: string;
    languages: { name: string }[];
    region: string;
    currencies: { name: string }[];
    flags: {
      png: string; // Assuming it's a URL or path to the flag image
      // You can add more fields if needed, such as svg, gif, etc.
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

const TagsWrapper = styled.div`
  padding-bottom: 10px;
`;

const Card: React.FC<CardProps> = ({ countryData }) => {
  const { name, languages, region, currencies, flags } = countryData;

  return (
    <CardContainer>
      <Wrapper>
        <FlagElement>
          <FlagIcon src={flags?.png} alt={`${name} flag`} />
        </FlagElement>

        <Title text={name} />
      </Wrapper>
      <Text content={region} />
      <TagsWrapper>
        {currencies && currencies.map((currency) => <Text key={currency.name} content={currency.name} />)}
      </TagsWrapper>
      <Text title="Languages" content={languages.map((lang) => lang.name).join(', ')} />
    </CardContainer>
  );
};

export default Card;
