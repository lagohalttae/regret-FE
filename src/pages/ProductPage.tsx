import styled from 'styled-components';
import Product from '../components/product';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #000;
  background-color: #fff;
  font-family: Noto Sans KR;
`;

function ProductPage(): any {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  );
}

export default ProductPage;
