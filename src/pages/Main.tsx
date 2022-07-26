import React from 'react';
import Product from '../components/product';
import CoinCalculation from './CoinCalculation';
import CoinMain from './CoinMain';
import CoinPrice from './CoinPrice';

function Main(): any {
  return (
    <>
      <CoinMain />
      <CoinPrice />
      <CoinCalculation />
      <Product />
    </>
  );
}
export default Main;
