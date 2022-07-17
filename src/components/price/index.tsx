import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCoinCurrentPrice, getCoinPrice } from '../../api';
import { ICoinPrice, ICoinCurrentPrice } from '../../interface/coin';
import { ICoinMainState } from '../selectcoin';
import downarrow from '../../images/downarrow.svg';

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
const NextPage = styled.div`
  position: absolute;
  left: -8vw;
  width: 100vw;
  bottom: -15vh;
  color: black;
  text-align: center;
  font-size: x-large;
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

export interface ICoinPriceState {
  atMinPrice: number;
  atMaxPrice: number;
  minPrice: number;
  maxPrice: number;
}

// useLocation을 통해 state를 받아오기 위한 interface
interface Ilocation {
  state: ICoinMainState;
}

function Price(): any {
  // 이전페이지의 정보를 받기 위함 ex)path, state
  const location = useLocation() as Ilocation;

  // api 데이터 State
  const [coinPrice, setCoinPrice] = useState<ICoinPrice>();
  const [coinCurrentPrice, setCoinCurrentPrice] = useState<ICoinCurrentPrice>();

  // 페이지 이동에 이용되는 함수
  const navigate = useNavigate();

  // 다음 페이지로 이동
  const handleNextPage: React.MouseEventHandler<HTMLDivElement> = () => {
    const priceState: ICoinPriceState = {
      atMinPrice: coinPrice ? coinPrice.minPrice.atMillis : 0,
      atMaxPrice: coinPrice ? coinPrice.maxPrice.atMillis : 0,
      minPrice: coinPrice ? coinPrice.minPrice.won : 0,
      maxPrice: coinPrice ? coinPrice.maxPrice.won : 0,
    };
    navigate('/calculation', {
      state: priceState,
    });
  };

  useEffect(() => {
    const { coinId } = location.state;
    getCoinPrice(setCoinPrice, coinId);
    getCoinCurrentPrice(setCoinCurrentPrice, coinId);
  }, []);

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
  return (
    <Wrapper>
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
      <NextPage>
        <p>행복회로 가동하기</p>
        <NextPageArrowImg src={downarrow} alt=" " onClick={handleNextPage} />
      </NextPage>
    </Wrapper>
  );
}

export default Price;
