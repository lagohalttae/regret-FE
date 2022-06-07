import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 8vw;
  @media (max-width: 480px) {
    top: 35vh;
    font-size: 8vw;
  }
`;
const Date = styled.div`
  font-size: 2.6vw;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 7vw;
  }
`;
const Price = styled.div`
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

function CoinInfo(): any {
  return (
    <Wrapper>
      <Lowest>
        <Date>2022년 5월 2일에 살걸..</Date>
        <Price color="#E92C2C">39,123,000KRW</Price>
        <Term>2022.04.30 ~ 2022.05.30 간 최저가</Term>
      </Lowest>
      <Highest>
        <Date>2022년 5월 15일에 팔걸..</Date>
        <Price color="#0085FF">39,619,000KRW</Price>
        <Term>2022.04.30 ~ 2022.05.30 간 최고가</Term>
      </Highest>
    </Wrapper>
  );
}

export default CoinInfo;
