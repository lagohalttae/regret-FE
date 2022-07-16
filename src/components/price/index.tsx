import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { getCoinCurrentPrice, getCoinPrice } from '../../api';
import { ICoinPrice, ICoinCurrentPrice } from '../../interface/coin';

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

const Lowest = styled.div``;
const Highest = styled.div``;

function Price(): any {
  // api 데이터 State
  const [coinPrice, setCoinPrice] = useState<ICoinPrice>();
  const [coinCurrentPrice, setCoinCurrentPrice] = useState<ICoinCurrentPrice>();

  //api 데이터 가져오기
  useEffect(() => {
    // TODO 임시로 비트코인으로 설정, 윗 페이지에서 설정한 코인으로 수정 필요
    getCoinPrice(setCoinPrice, 'bitcoin');
    getCoinCurrentPrice(setCoinCurrentPrice, 'bitcoin');
  }, []);

  //Date 타입 인자를 'yyyy년 mm월 dd일' 형태의 문자열 타입으로 변환 후 반환하는 함수
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
    </Wrapper>
  );
}

export default Price;
