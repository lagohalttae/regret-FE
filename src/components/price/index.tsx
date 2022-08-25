import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Fade } from 'react-awesome-reveal';
import downarrow from '../../assets/images/downarrow.svg';
import {
  calculationPriceAtom,
  coinCurrentPriceAtom,
  coinPriceAtom,
  selectedCoinAtom,
} from '../../atoms';
import { ISelectedCoin } from '../../types/coin';
import { axiosGet } from '../../api';
import { BlueColor, RedColor } from '../../constants';

const Wrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 80%;
  margin: 0 auto;
  padding-top: 13vh;
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

const NextPage = styled.div`
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translate(-50%, 0);
  width: fit-content;
  color: black;
  text-align: center;
  font-size: x-large;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  @media (hover: hover) {
    &:hover {
      transform: translate(-50%, 10px);
      transition-duration: 0.7s;
      transition-delay: 0s;
    }
  }
`;

const NextPageArrowImgBox = styled.div`
  margin-right: 15px;
  animation: slideArrow 1.7s linear infinite;
  padding-right: 20px;
  @keyframes slideArrow {
    from {
      opacity: 1;
      transform: translateY(-20px);
    }
    to {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;

const NextPageArrowImg = styled.img`
  border-style: none;
  background-color: transparent;
  position: absolute;
  width: 3.5vh;
  cursor: pointer;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);

  &.arrow1 {
    margin-top: 15px;
    opacity: 0.6;
  }
  &.arrow2 {
    margin-top: 30px;
    opacity: 0.8;
  }
  transition-duration: 0.7s;
`;

const Lowest = styled.div``;
const Highest = styled.div``;

function Price() {
  // 전역상태관리
  const coinObject = useRecoilValue(selectedCoinAtom);
  const [coinPrice, setCoinPrice] = useRecoilState(coinPriceAtom);
  const [coinCurrentPrice, setCoinCurrentPrice] = useRecoilState(coinCurrentPriceAtom);
  const [, setCalculationPrice] = useRecoilState(calculationPriceAtom);

  const axiosSetCoinPrice = async (): Promise<void> => {
    setCoinPrice(await axiosGet('coinPrice', coinObject.coinId));
  };
  const axiosSetCoinCurrentPrice = async (): Promise<void> => {
    setCoinCurrentPrice(await axiosGet('coinCurrentPrice', coinObject.coinId));
  };

  // 선택된 코인이 바뀔때마다 코인 정보 동기화
  // api 데이터 가져오기
  useEffect(() => {
    axiosSetCoinPrice();
    axiosSetCoinCurrentPrice();
    setCalculationPrice({ price: 0 });
  }, [coinObject]);

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
        <Fade direction="up" triggerOnce>
          <CurrentPrice>
            <CurrentPriceInfo>
              <CurrentPriceTitle>{coinCurrentPrice?.label} 현재 가격</CurrentPriceTitle>
              <TermText>
                {coinCurrentPrice ? new Date(coinCurrentPrice?.lastUpdated).toLocaleString() : ''}
              </TermText>
            </CurrentPriceInfo>

            <CurrentPriceText>{coinCurrentPrice?.price?.won?.toLocaleString()}원</CurrentPriceText>
          </CurrentPrice>
        </Fade>
        <PastPrice>
          <Fade delay={500} direction="up" triggerOnce>
            <Lowest>
              <PastDateText>
                {coinPrice ? dateToString(new Date(coinPrice?.minPrice?.atMillis)) : ''}에 살걸..
              </PastDateText>

              <PastPriceText color={BlueColor}>
                {coinPrice?.minPrice.won?.toLocaleString()}원
              </PastPriceText>

              <TermText>
                {monthAgo} ~ {today} 간 최저가
              </TermText>
            </Lowest>
          </Fade>
          <Fade delay={1000} direction="up" triggerOnce>
            <Highest>
              <PastDateText>
                {coinPrice ? dateToString(new Date(coinPrice?.maxPrice?.atMillis)) : ''}에 팔걸..
              </PastDateText>

              <PastPriceText color={RedColor}>
                {coinPrice?.maxPrice?.won?.toLocaleString()}원
              </PastPriceText>

              <TermText>
                {monthAgo} ~ {today} 간 최고가
              </TermText>
            </Highest>
          </Fade>
        </PastPrice>
      </PriceBox>
      <Fade delay={1500} triggerOnce>
        <NextPage>
          <p>행복회로 가동하기</p>
          <NextPageArrowImgBox onClick={handleNextPage}>
            <NextPageArrowImg className="arrow1" src={downarrow} alt=" " />
            <NextPageArrowImg className="arrow2" src={downarrow} alt=" " />
          </NextPageArrowImgBox>
        </NextPage>
      </Fade>
    </Wrapper>
  );
}

export default Price;
