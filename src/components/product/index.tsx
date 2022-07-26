import styled from 'styled-components';
import pepeImage from '../../images/pepe.png';
import { ProductContainer } from './productContainer';

const Wrapper = styled.div``;

const PepeContainer = styled.div`
  display: block;
  float: right;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 40%;
  overflow: hidden;
`;
const PepeImage = styled.img`
  transform: scaleX(-1);
  height: 100vh;
`;

function Product(): any {
  return (
    <Wrapper>
      <PepeContainer>
        <PepeImage src={pepeImage} alt="pepe" />
      </PepeContainer>
      <ProductContainer product="아이폰" />
      <ProductContainer product="국밥" />
      <ProductContainer product="황금올리브" />
    </Wrapper>
  );
}

export default Product;
