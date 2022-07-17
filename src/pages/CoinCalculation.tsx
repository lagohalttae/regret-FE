import styled from 'styled-components';
import { Calculation } from '../components/calculation';
import smilePepeImage from '../images/smilePepe.png';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #000;
  background-color: #fff;
`;

const SmilePepeImage = styled.img`
  position: absolute;
  height: 80%;
  left: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 1439px) {
    right: -27%;
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
