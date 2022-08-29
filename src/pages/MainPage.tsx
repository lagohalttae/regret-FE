import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { calculateButtondAtom } from '../atoms';
import { Calculation } from '../components/calculation';
import MainTitle from '../components/mainTitle';
import Price from '../components/price';
import Product from '../components/product';

const WhiteContainer = styled.div`
  height: 30vh;
`;

function MainPage() {
  const calculateButton = useRecoilValue(calculateButtondAtom);
  return (
    <>
      <MainTitle />
      <Price />
      <Calculation />
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
export default MainPage;
