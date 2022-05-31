import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 25vh;
  left: 8vw;
  font-size: 4vw;
  font-weight: 700;
  color: #43841f;

  // @media (max-width: 1439px) {
  // }

  @media (max-width: 480px) {
    top: 10vh;
    font-size: 8vw;
  }

  // 모바일
  // @media (max-width: 767px) {
  // }
`;
const Coin = styled.span`
  color: black;
`;
function MainTitle(): any {
  return (
    <Wrapper>
      라고 할 때 <Coin> 비트코인 </Coin> 살걸..
    </Wrapper>
  );
}

export default MainTitle;
