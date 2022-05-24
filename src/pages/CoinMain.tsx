import styled from 'styled-components';
import MainTitle from '../components/mainTitle';
import CoinInfo from '../components/coinInfo';
import pepeImage from '../images/pepe.png';
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

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  font-size: 15px;
  color: #000;
  height: 80px;
  background-color: #fff;
  font-family: Noto Sans KR;
`;

const PepeImage = styled.img`
  transform: scaleX(-1);
  height: 100vh;
  position: absolute;
  right: -15%;
`;

function CoinMain(): any {
  return (
    <Wrapper>
      <MainTitle />
      <CoinInfo />
      <PepeImage src={pepeImage} alt="pepe" />
    </Wrapper>
  );
}

export default CoinMain;
