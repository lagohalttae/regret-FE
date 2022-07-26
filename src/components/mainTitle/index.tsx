import React from 'react';
import styled from 'styled-components';
import SelectCoin from '../selectcoin';

const Wrapper = styled.div`
  position: absolute;
  top: 25vh;
  left: 5vw;
  font-size: 6vw;
  font-weight: 700;
  color: #43841f;
  z-index: 1;

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 480px) {
    top: 10vh;
    font-size: 8vw;
  } */

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
