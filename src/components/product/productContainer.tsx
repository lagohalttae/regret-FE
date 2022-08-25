import styled from 'styled-components';
import ViewportTypography from '../common/ViewportTypography';

const S = {
  Container: styled.div`
    position: relative;
    height: 150vh;
  `,

  ProductText: styled.p`
    position: absolute;
    top: 24vh;
    left: 3vw;
  `,

  ProductImg: styled.img`
    position: absolute;
    top: 40vh;
    left: 12vw;
    width: 28vw;
  `,
};
type ProductContainerProps = {
  productName: string;
  unit: string;
  num: number;
  img: string;
};

export function ProductContainer({ productName, unit, num, img }: ProductContainerProps) {
  return (
    <S.Container>
      <S.ProductText>
        <ViewportTypography size="4" weight="700" marginBottom={20}>
          {productName}
        </ViewportTypography>
        <ViewportTypography size="3" weight="600">
          {num.toLocaleString()}
          {unit}을(를) 살 수 있었을텐데..
        </ViewportTypography>
      </S.ProductText>
      <S.ProductImg src={img} />
    </S.Container>
  );
}
