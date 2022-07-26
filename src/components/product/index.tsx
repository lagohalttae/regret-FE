import styled from 'styled-components';
import pepeImage from '../../images/pepe.png';
import { ProductContainer } from './productContainer';
import ProductList from '../../productData/products.json';
import { IProduct } from '../../interface/coin';

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
  // 임시 데이터
  const price = 10000000;
  const randomProducts: IProduct[] = [];

  while (randomProducts.length < 3) {
    const n = Math.floor(Math.random() * ProductList.products.length) + 1;
    if (!randomProducts.includes(ProductList.products[n])) {
      randomProducts.push(ProductList.products[n]);
    }
  }

  const productProps = randomProducts.map((item) => {
    const returnObj = { productName: '', unit: '', img: '', num: 0 };
    returnObj.productName = item.productName;
    returnObj.unit = item.unit;
    returnObj.img = item.image;
    returnObj.num = Math.floor(price / item.price);
    return returnObj;
  });

  return (
    <Wrapper>
      <PepeContainer>
        <PepeImage src={pepeImage} alt="pepe" />
      </PepeContainer>
      {productProps.map((item) => (
        <ProductContainer
          productName={item.productName}
          unit={item.unit}
          img={item.img}
          num={item.num}
        />
      ))}
    </Wrapper>
  );
}

export default Product;
