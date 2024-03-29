import React, { useState, useEffect } from 'react';
import Card from '../Atom/Card';
import styled from 'styled-components';
import SearchInput from '../Ion/SearchInput';
import { breakpoints } from '../../constants/breakpoints';
import HeadingAtom from '../Atom/HeadingAtom';
import Heading from '../Ion/Heading';

interface Country {
  name: string;
  languages: { name: string }[];
  region: string;
  currencies: { code: string }[];
  population: number;
  flags: {
    png: string; // Assuming it's a URL or path to the flag image
    // You can add more fields if needed, such as svg, gif, etc.
  };
}

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 50px 15px 0 15px;
  @media (min-width: ${breakpoints.desktop1440}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 100px 15px 0 15px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: ${breakpoints.mobileNarrow580}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop1440}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 70px 0 0 0;
  }
`;

const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  flex-direction: column-reverse;

  @media (min-width: ${breakpoints.mobile750}) {
    flex-direction: row;
  }
`;
const GeneralInfoHeadings = styled.div`
  padding-bottom: 20px;

  @media (min-width: ${breakpoints.mobile750}) {
    padding-bottom: 0px;
  }
`;
const ErrorWrapper = styled.div`
  text-align: center;
`;

const CountryStatistics: React.FC = () => {
  const [statistics, setStatistics] = useState<{ totalLanguages: number; averagePopulation: number }>({
    totalLanguages: 0,
    averagePopulation: 0,
  });
  const [search, setSearch] = useState<string>('');
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [searchData, setSearchData] = useState<Country[]>([]);
  const [searchError, setSearchError] = useState<boolean>(false);

  interface CountryDataGridProps {
    countryData: Country[];
  }

  const CountryDataGrid: React.FC<CountryDataGridProps> = ({ countryData }) => (
    <GridContainer>
      {countryData.map((country, index) => (
        <Card key={index} countryData={country} />
      ))}
    </GridContainer>
  );

  useEffect(() => {
    // Fetch overall statistics
    fetch('https://restcountries.com/v2/all')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Country[]) => {
        setCountryData(data);
        const totalLanguages = new Set(data.flatMap(country => country.languages.map(language => language.name))).size;
        const averagePopulation = Math.round(
          data.reduce((acc, country) => acc + country.population, 0) / data.length
        );

        setStatistics({
          totalLanguages,
          averagePopulation,
        });
      })
      .catch(error => console.error('Error fetching overall statistics:', error));
  }, []);

  const changeInput = (val: string) => {
    setSearch(val);
  };

  useEffect(() => {
    if (search) {
      fetch(`https://restcountries.com/v2/name/${search}`)
        .then(response => {
          if (!response.ok) {
            setSearchError(true);
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          setSearchError(false);
          return response.json();
        })
        .then((data: Country[]) => {
          setSearchData(data);
        })
        .catch(error => console.error('Error fetching country data:', error));
    }
  }, [search]);

  return (
    <Container>
      <GeneralInfo>
        <SearchInput value={search} onChange={changeInput} />
        <GeneralInfoHeadings>
          {statistics.totalLanguages && (
            <HeadingAtom title="Total Languages" content={statistics.totalLanguages.toString()} />
          )}
          {statistics.averagePopulation && (
            <HeadingAtom title="Average Population" content={statistics.averagePopulation.toString()} />
          )}
        </GeneralInfoHeadings>
      </GeneralInfo>
      <Heading
        fontSize="extraLarge"
        fontWeight="bold"
        as="h4"
        content="Countries"
      />
      {searchError && (
        <ErrorWrapper>
          <Heading
            fontSize="large"
            fontWeight="bold"
            as="h4"
            content={`Search error occurred. No countries found with the name "${search}"`}
          />
        </ErrorWrapper>
      )}
      {!searchError && (
          <CountryDataGrid countryData={search.length > 0 ? searchData : countryData} />
      )}
    </Container>
  );
};

export default CountryStatistics;
