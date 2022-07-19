import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getCoinCurrentPrice, getCoinPrice } from '../../api';
import downarrow from '../../images/downarrow.svg';
import { coinCurrentPriceAtom, coinPriceAtom, selectedCoinAtom } from '../../atoms';

const Wrapper = styled.div`
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  padding-top: 20vh;
`;

const PriceBox = styled.div`
  height: 60vh;
`;

// 현재 가격
const CurrentPrice = styled.div`
  text-align: center;
  margin-bottom: 14vh;
`;

const CurrentPriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vh;
  padding: 0 1.5vw;
`;

const CurrentPriceTitle = styled.div`
  font-size: 2vw;
  font-weight: 700;
`;

const CurrentPriceText = styled.div`
  font-size: 10.5vw;
  font-weight: 700;
  color: #43841f;
`;

// 최대가, 최저가
const PastPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PastDateText = styled.p`
  font-size: 3.2vw;
  font-weight: 700;
`;

const PastPriceText = styled.p`
  font-size: 3.7vw;
  font-weight: 700;
  margin: 2vh 0 2vh 0;
  color: ${(props) => props.color};
`;

const TermText = styled.p`
  font-size: 1.6vw;
  color: lightgray;
`;

// 하단 컴포넌트 -------------
const NextPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 20vh;
`;

const NextPage = styled.div`
  color: black;
  text-align: center;
  font-size: x-large;
  margin-bottom: 5vh;
`;

const NextPageArrowImg = styled.img`
  border-style: none;
  background-color: transparent;
  width: 3.5vh;
  cursor: pointer;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  @media (hover: hover) {
    &:hover {
      transform: translateY(10px);
      transition-property: all;
      transition-duration: 0.7s;
      transition-delay: 0s;
      width: 5vh;
    }
  }
  transition-duration: 0.7s;
`;

const Lowest = styled.div``;
const Highest = styled.div``;

function Price(): any {
  const coinObject = useRecoilValue(selectedCoinAtom);
  const [coinPrice, setCoinPrice] = useRecoilState(coinPriceAtom);
  const [coinCurrentPrice, setCoinCurrentPrice] = useRecoilState(coinCurrentPriceAtom);

  useEffect(() => {
    getCoinPrice(setCoinPrice, coinObject.coinId as any);
    getCoinCurrentPrice(setCoinCurrentPrice, coinObject.coinId as any);
  }, [coinObject]);

  // api 데이터 가져오기

  // Date 타입 인자를 'yyyy년 mm월 dd일' 형태의 문자열 타입으로 변환 후 반환하는 함수
  const dateToString = (date: Date): string =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  // 현재 시간
  const now = new Date();
  // 현재 시간 문자열
  const today = dateToString(now);
  // 한달 전 시간 문자열
  const monthAgo = dateToString(new Date(now.setMonth(now.getMonth() - 1)));

  const handleNextPage: React.MouseEventHandler<HTMLImageElement> = () => {
    window.scroll({ top: window.innerHeight * 2 + 10, left: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <PriceBox>
        <CurrentPrice>
          <CurrentPriceInfo>
            <CurrentPriceTitle>{coinCurrentPrice?.label} 현재 가격</CurrentPriceTitle>
            <TermText>
              {coinCurrentPrice ? new Date(coinCurrentPrice.lastUpdated).toLocaleString() : ''}
            </TermText>
          </CurrentPriceInfo>
          <CurrentPriceText>{coinCurrentPrice?.price.won.toLocaleString()}KRW</CurrentPriceText>
        </CurrentPrice>
        <PastPrice>
          <Lowest>
            <PastDateText>
              {coinPrice ? dateToString(new Date(coinPrice.minPrice.atMillis)) : ''}에 살걸..
            </PastDateText>
            <PastPriceText color="#E92C2C">
              {coinPrice?.minPrice.won.toLocaleString()}KRW
            </PastPriceText>
            <TermText>
              {monthAgo} ~ {today} 간 최저가
            </TermText>
          </Lowest>
          <Highest>
            <PastDateText>
              {coinPrice ? dateToString(new Date(coinPrice.maxPrice.atMillis)) : ''}에 팔걸..
            </PastDateText>
            <PastPriceText color="#0085FF">
              {coinPrice?.maxPrice.won.toLocaleString()}KRW
            </PastPriceText>
            <TermText>
              {monthAgo} ~ {today} 간 최고가
            </TermText>
          </Highest>
        </PastPrice>
      </PriceBox>
      <NextPageBox>
        <NextPage>
          <p>행복회로 가동하기</p>
          <NextPageArrowImg src={downarrow} alt=" " onClick={handleNextPage} />
        </NextPage>
      </NextPageBox>
    </Wrapper>
  );
}

export default Price;
