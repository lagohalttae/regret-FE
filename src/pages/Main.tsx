import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { calculateButtondAtom } from '../atoms';
import Product from '../components/product';
import CoinCalculation from './CoinCalculation';
import CoinMain from './CoinMain';
import CoinPrice from './CoinPrice';

const WhiteContainer = styled.div`
  height: 30vh;
`;
function Main(): any {
  const calculateButton = useRecoilValue(calculateButtondAtom);
  return (
    <>
      <CoinMain />
      {/* <WhiteContainer /> */}
      <CoinPrice />
      {/* <WhiteContainer /> */}
      <CoinCalculation />
      {calculateButton.isClicked ? (
        <>
          <WhiteContainer />
          <Product />
        </>
      ) : (
        ''
      )}
    </>
  );
}
export default Main;
