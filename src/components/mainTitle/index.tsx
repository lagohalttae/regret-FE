import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import SelectCoin from '../selectcoin';
import pepeImage from '../../assets/images/pepe.png';

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

const PepeImage = styled.img`
  transform: scaleX(-1);
  height: 100vh;
  margin-left: 60vw;

  @media (max-width: 1439px) {
    right: -27%;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
function MainTitle(): any {
  return (
    <>
      <Wrapper>
        <Fade delay={1000} direction="up" triggerOnce>
          <p>라고 할 때</p>
        </Fade>
        <SelectCoin />
      </Wrapper>
      <Slide triggerOnce direction="right" duration={1000}>
        <PepeImage src={pepeImage} alt="pepe" />
      </Slide>
    </>
  );
}

export default MainTitle;
