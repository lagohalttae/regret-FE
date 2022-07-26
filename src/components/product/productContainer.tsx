import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const ProductText = styled.p`
  position: absolute;
  top: 20vh;
  left: 7vh;
  font-size: 3.7vw;
  font-weight: 700;
`;

type ProductContainerType = {
  product: string;
};
export const ProductContainer = function ({ product }: ProductContainerType): any {
  return (
    <Wrapper>
      <ProductText>{product} 15대를 살 수 있었을 텐데..</ProductText>
    </Wrapper>
  );
};
