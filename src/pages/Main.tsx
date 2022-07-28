import React from 'react';
import styled from 'styled-components';
import Product from '../components/product';
import CoinCalculation from './CoinCalculation';
import CoinMain from './CoinMain';
import CoinPrice from './CoinPrice';

const WhiteContainer = styled.div`
  height: 30vh;
`;
function Main(): any {
  return (
    <>
      <CoinMain />
      {/* <WhiteContainer /> */}
      <CoinPrice />
      {/* <WhiteContainer /> */}
      <CoinCalculation />
      <WhiteContainer />
      <Product />
    </>
  );
}
export default Main;
