import React from 'react';
import GlobalStyle from '../app/styles/GlobalStyle';
import CountriesBlock from '../app/components/Block/CountriesBlock'

const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <CountriesBlock/>
    </div>
  );
};

export default HomePage;