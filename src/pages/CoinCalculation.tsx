import styled from 'styled-components';
import { Calculation } from '../components/calculation';
import smilePepeImage from '../images/smilePepe.png';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #000;
  overflow: hidden;
  background-color: #fff;
`;

const SmilePepeImage = styled.img`
  position: absolute;
  left: 0;
  width: 32vw;
  bottom: 0vh;
  @media (max-width: 1439px) {
    width: 25vw;
  }

  @media (max-width: 1240px) {
    width: 20vw;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 480px) {
    display: block;
    height: 50vh;
    opacity: 0.5;
  }
`;

function CoinCalculation(): any {
  return (
    <Wrapper>
      <Calculation />
      <SmilePepeImage src={smilePepeImage} alt="smilePepe" />
    </Wrapper>
  );
}

export default CoinCalculation;
