import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 35rem;
  left: 10rem;
`;
const Date = styled.div`
  font-size: 42px;
  font-weight: 700;
`;
const Price = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin: 20px 0 20px 0;
  color: ${(props) => props.color};
`;
const Term = styled.div`
  font-size: 24px;
  color: lightgray;
`;
const Lowest = styled.div`
  margin-bottom: 72px;
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
