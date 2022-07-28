import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import pepeImage from '../../images/pepe.png';
import { ProductContainer } from './productContainer';
import ProductList from '../../productData/products.json';
import { IProduct, IProductProps } from '../../interface/coin';
import { calculationPriceAtom } from '../../atoms';
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
  .gunPepe {
    height: 100vh;
  }
`;
function Product(): any {
  const calculationPrice = useRecoilValue(calculationPriceAtom);
  const [productProps, setProductProps] = useState<IProductProps[]>([
    { productName: '', unit: '', img: '', num: 0 },
  ]);
  const [randomProducts, setRandomProducts] = useState<IProduct[]>([]);
  // const randomProducts: IProduct[] = [];

  const productPropsObject = randomProducts.map((item) => {
    const returnObj = { productName: '', unit: '', img: '', num: 0 };
    returnObj.productName = item?.productName;
    returnObj.unit = item?.unit;
    returnObj.img = item?.image;
    returnObj.num = item ? Math.floor(calculationPrice.price / item.price) : 0;
    return returnObj;
  });
  while (randomProducts.length < 3) {
    const n = Math.floor(Math.random() * ProductList.products.length);
    if (!randomProducts.includes(ProductList.products[n])) {
      const list = randomProducts;
      list.push(ProductList.products[n]);
      setRandomProducts(list);
    }
  }

  useEffect(() => {
    setProductProps(productPropsObject);
    // setRandomProducts([]); // calculationPrice 바뀔때마다 상품 바뀌도록
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculationPrice]);
  return (
    <Wrapper>
      <div>
        <PepeContainer>
          <Slide direction="right">
            <PepeImage src={pepeImage} alt="pepe" />
          </Slide>
        </PepeContainer>
        <WhiteContainer />
        {productProps?.map((item) => (
          <ProductContainer
            key={item.productName}
            productName={item.productName}
            unit={item.unit}
            img={item.img}
            num={item.num}
          />
        ))}
        <WhiteContainer />
      </div>
      <GunPepe>
        <img className="gunPepe" src={gunPepeImg} alt="gunPepe" />
      </GunPepe>
    </Wrapper>
  );
}

export default Product;
