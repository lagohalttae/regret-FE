import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const ProductText = styled.p`
  position: absolute;
  top: 30vh;
  left: 3vw;
  font-size: 3vw;
  font-weight: 700;
`;
const ProductImg = styled.img`
  position: absolute;
  top: 40vh;
  left: 12vw;
  width: 28vw;
`;

type ProductContainerProps = {
  productName: string;
  unit: string;
  num: number;
  img: string;
};
export function ProductContainer({ productName, unit, num, img }: ProductContainerProps): any {
  return (
    <Wrapper>
      <ProductText>
        {productName} {num}
        {unit}을(를) 살 수 있었을텐데..
      </ProductText>
      <ProductImg src={img} />
    </Wrapper>
  );
}
