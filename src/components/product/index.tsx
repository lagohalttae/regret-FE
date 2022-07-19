import styled from 'styled-components';
import pepeImage from '../../images/pepe.png';

const Wrapper = styled.div``;

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
`;
function Product(): any {
  return (
    <Wrapper>
      <PepeImage src={pepeImage} alt="pepe" />
    </Wrapper>
  );
}

export default Product;
