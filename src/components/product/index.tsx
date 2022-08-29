import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import pepeImage from '../../assets/images/pepe.svg';
import ProductList from '../../assets/jsons/products.json';
import { IProduct, IProductProps } from '../../types/coin';
import { calculationPriceAtom } from '../../atoms';
import gunPepeImg from '../../assets/images/gunPepe.svg';
import { ProductContainer } from './productContainer';
import PepeImage from '../common/PepeImage';

const S = {
  Container: styled.div``,

  PepeContainer: styled.div`
    display: block;
    float: right;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 40%;
    overflow: hidden;
  `,
  PepeImage: styled.img`
    transform: scaleX(-1);
    height: 100vh;
  `,

  WhiteContainer: styled.div`
    height: 100vh;
  `,

  GunPepe: styled.div`
    height: 100vh;
    text-align: center;
    .gunPepe {
      height: 100vh;
    }
  `,
};

function Product() {
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
  }, [calculationPrice]);
  return (
    <S.Container>
      <div>
        <S.PepeContainer>
          <Slide direction="right">
            <S.PepeImage src={pepeImage} alt="pepe" />
          </Slide>
        </S.PepeContainer>
        <S.WhiteContainer />
        {productProps?.map((item) => (
          <ProductContainer
            key={item.productName}
            productName={item.productName}
            unit={item.unit}
            img={item.img}
            num={item.num}
          />
        ))}
        <S.WhiteContainer />
      </div>
      <S.WhiteContainer />
      <PepeImage src={gunPepeImg} left="20vw" />
      {/* <S.GunPepe>
        <img className="gunPepe" src={gunPepeImg} alt="gunPepe" />
      </S.GunPepe> */}
    </S.Container>
  );
}

export default Product;
