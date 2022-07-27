import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import pepeImage from '../../images/pepe.png';
import { ProductContainer } from './productContainer';
import ProductList from '../../productData/products.json';
import { IProduct } from '../../interface/coin';
import gunPepeImg from '../../images/gunPepe.png';

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

const WhiteContainer = styled.div`
  height: 100vh;
`;

const GunPepe = styled.div`
  height: 100vh;
`;
function Product(): any {
  // 임시 데이터
  const price = 10000000;
  const randomProducts: IProduct[] = [];

  while (randomProducts.length < 3) {
    const n = Math.floor(Math.random() * ProductList.products.length);
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
      <div>
        <PepeContainer>
          <Slide direction="right">
            <PepeImage src={pepeImage} alt="pepe" />
          </Slide>
        </PepeContainer>
        <WhiteContainer />
        {productProps.map((item) => (
          <ProductContainer
            productName={item.productName}
            unit={item.unit}
            img={item.img}
            num={item.num}
          />
        ))}
        <WhiteContainer />
      </div>
      <GunPepe>
        <img src={gunPepeImg} alt="gunPepe" />
      </GunPepe>
    </Wrapper>
  );
}

export default Product;
