import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { calculateButtondAtom } from '../atoms';
import { Calculation } from '../components/Calculation';
import MainTitle from '../components/MainTitle';
import Price from '../components/Price';
import Product from '../components/Product';

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
