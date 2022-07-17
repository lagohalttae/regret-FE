import styled from 'styled-components';
import Price from '../components/price';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #000;
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
