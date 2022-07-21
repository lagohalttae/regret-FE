import React from 'react';
import CoinCalculation from './CoinCalculation';
import CoinMain from './CoinMain';
import CoinPrice from './CoinPrice';

function Main(): any {
  return (
    <>
      <CoinMain />
      <CoinPrice />
      <CoinCalculation />
    </>
  );
}
export default Main;
