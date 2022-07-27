import styled from 'styled-components';
import Product from '../components/product';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: #000;
  overflow: hidden;

  background-color: #fff;
  font-family: Noto Sans KR;
`;

function CoinProduct(): any {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  );
}

export default CoinProduct;
