// import { Navigate } from 'react-router-dom';

import styled from 'styled-components';
import MainTitle from '../components/mainTitle';
import pepeImage from '../images/pepe.png';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: #000;
  background-color: #fff;
  font-family: Noto Sans KR;
  overflow: hidden;
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

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
  }*
  @media (max-width: 480px) {
    display: block;
    height: 50vh;
    opacity: 0.5;
  } */
`;

function CoinMain(): any {
  return (
    <Wrapper>
      <MainTitle />
      <PepeImage src={pepeImage} alt="pepe" />
    </Wrapper>
  );
}

export default CoinMain;
