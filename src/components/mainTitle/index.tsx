import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 18rem;
  left: 10rem;
  font-size: 72px;
  font-weight: 700;
  color: #43841f;
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
