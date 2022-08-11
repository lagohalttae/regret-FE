import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import ViewportTypography from '../common/ViewportTypography';
import { GreenColor } from '../../constants';
import SelectCoinContainer from './selectCoinContainer';
import pepeImage from '../../assets/images/pepe.png';

const S = {
  Wrapper: styled.div`
    position: absolute;
    top: 25vh;
    left: 5vw;
    z-index: 1;
  `,
  PepeImage: styled.img`
    transform: scaleX(-1);
    height: 100vh;
    margin-left: 60vw;

    @media (max-width: 1439px) {
      right: -27%;
    }
    @media (max-width: 1023px) {
      display: none;
    }
  `,
};

function MainTitle(): any {
  return (
    <>
      <S.Wrapper>
        <Fade delay={1000} direction="up" triggerOnce>
          <ViewportTypography size="6" weight="700" color={GreenColor}>
            라고 할 때
          </ViewportTypography>
        </Fade>
        <SelectCoinContainer />
      </S.Wrapper>
      <Slide triggerOnce direction="right" duration={1000}>
        <S.PepeImage src={pepeImage} alt="pepe" />
      </Slide>
    </>
  );
}

export default MainTitle;
