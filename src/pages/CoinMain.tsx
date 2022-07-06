import styled from 'styled-components';
import MainTitle from '../components/mainTitle';
import CoinInfo from '../components/coinInfo';
import pepeImage from '../images/pepe.png';
import { getCoins } from '../api';
// const coinList = [
//   {
//     coins: [
//       {
//         coinId: 'bitcoin',
//         label: '비트코인',
//       },
//       {
//         coinId: 'etherium',
//         label: '이더리움',
//       },
//     ],
//   },
// ];

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #000;
  background-color: #fff;
  font-family: Noto Sans KR;
`;

const PepeImage = styled.img`
  transform: scaleX(-1);
  height: 100vh;
  position: absolute;
  right: -15%;
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

function CoinMain(): any {
  getCoins();
  return (
    <Wrapper>
      <MainTitle />
      <CoinInfo />
      <PepeImage src={pepeImage} alt="pepe" />
    </Wrapper>
  );
}

export default CoinMain;
