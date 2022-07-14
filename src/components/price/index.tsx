import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { getCoinCurrentPrice, getCoinPrice } from '../../api';
import { ICoinPrice, ICoinCurrentPrice } from '../../interface/coin';

const Wrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 8vw;
  @media (max-width: 480px) {
    top: 35vh;
    font-size: 8vw;
  }
`;
const Date1 = styled.div`
  font-size: 2.6vw;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 7vw;
  }
`;
const Price1 = styled.div`
  font-size: 2.3vw;
  font-weight: 700;
  margin: 2vh 0 2vh 0;
  color: ${(props) => props.color};
  @media (max-width: 480px) {
    font-size: 7vw;
  }
`;
const Term = styled.div`
  font-size: 1.3vw;
  color: lightgray;
  @media (max-width: 480px) {
    font-size: 5vw;
  }
`;
const Lowest = styled.div`
  margin-bottom: 8vh;
`;
const Highest = styled.div``;

function Price(): any {
  const [coinPrice, setCoinPrice] = useState<ICoinPrice>();
  const [coinCurrentPrice, setCoinCurrentPrice] = useState<ICoinCurrentPrice>();

  useEffect(() => {
    getCoinPrice(setCoinPrice, 'bitcoin');
    getCoinCurrentPrice(setCoinCurrentPrice, 'bitcoin');
  }, []);

  const dateToString = (date: Date): string =>
    `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;
  return (
    <Wrapper>
      <div>{coinCurrentPrice?.price.won}</div>
      <Lowest>
        <Date1>
          {coinPrice ? dateToString(new Date(coinPrice.minPrice.atMillis)) : ''}에 살걸..
        </Date1>
        <Price1 color="#E92C2C">39,123,000KRW</Price1>
        <Term>2022.04.30 ~ 2022.05.30 간 최저가</Term>
      </Lowest>
      <Highest>
        <Date1>
          {coinPrice ? dateToString(new Date(coinPrice.maxPrice.atMillis)) : ''}에 팔걸..
        </Date1>
        <Price1 color="#0085FF">39,619,000KRW</Price1>
        <Term>2022.04.30 ~ 2022.05.30 간 최고가</Term>
      </Highest>
    </Wrapper>
  );
}

export default Price;
