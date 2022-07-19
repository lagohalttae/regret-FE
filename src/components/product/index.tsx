import styled from 'styled-components';
import pepeImage from '../../images/pepe.png';

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

const FirstContainer = styled.div`
  display: inline-block;
  position: relative;
  height: 100vh;
`;
const ProductContainer = styled.div`
  position: relative;
  height: 100vh;
`;

function Product(): any {
  return (
    <Wrapper>
      <FirstContainer>zz</FirstContainer>
      <PepeContainer>
        <PepeImage src={pepeImage} alt="pepe" />
      </PepeContainer>
      <ProductContainer>xx</ProductContainer>
      <ProductContainer>cc</ProductContainer>
    </Wrapper>
  );
}

export default Product;
