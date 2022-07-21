import styled from 'styled-components';
import Price from '../components/price';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000;
  overflow: hidden;

  background-color: #fff;
  font-family: Noto Sans KR;
`;
function CoinPrice(): any {
  return (
    <Wrapper>
      <Price />
    </Wrapper>
  );
}

export default CoinPrice;
