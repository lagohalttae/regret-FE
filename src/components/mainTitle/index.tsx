import React from 'react';
import styled from 'styled-components';
import SelectCoin from '../selectcoin';

const Wrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 8vw;
  font-size: 4vw;
  font-weight: 700;
  color: #43841f;
  align-items: center;

  @media (max-width: 480px) {
    top: 10vh;
    font-size: 8vw;
  }

  // 모바일
  // @media (max-width: 767px) {
  // }
`;

function MainTitle(): any {
  return (
    <Wrapper>
      라고 할 때
      <SelectCoin />
    </Wrapper>
  );
}

export default MainTitle;
