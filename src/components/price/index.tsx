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
import { axiosGet } from '../../api';
import { BlueColor, RedColor } from '../../constants';

const S = {
  Container: styled.div`
    position: relative;
    height: 90vh;
    width: 80%;
    margin: 0 auto;
    padding-top: 13vh;
  `,

  PriceBox: styled.div`
    height: 60vh;
  `,

  // 현재 가격
  CurrentPrice: styled.div`
    text-align: center;
    margin-bottom: 14vh;
  `,

  CurrentPriceInfo: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vh;
    padding: 0 1.5vw;
  `,

  CurrentPriceTitle: styled.div`
    font-size: 2vw;
    font-weight: 700;
  `,

  CurrentPriceText: styled.div`
    font-size: 10.5vw;
    font-weight: 700;
    color: #43841f;
  `,

  // 최대가, 최저가
  PastPrice: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  PastDateText: styled.p`
    font-size: 3.2vw;
    font-weight: 700;
  `,

  PastPriceText: styled.p`
    font-size: 3.7vw;
    font-weight: 700;
    margin: 2vh 0 2vh 0;
    color: ${(props) => props.color};
  `,

  TermText: styled.p`
    font-size: 1.6vw;
    color: lightgray;
  `,

  // 하단 컴포넌트 -------------

  NextPage: styled.div`
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
  `,

  NextPageArrowImgBox: styled.div`
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
  `,

  NextPageArrowImg: styled.img`
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
  `,

  Lowest: styled.div``,
  Highest: styled.div``,
};

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
    <S.Container>
      <S.PriceBox>
        <Fade direction="up" triggerOnce>
          <S.CurrentPrice>
            <S.CurrentPriceInfo>
              <S.CurrentPriceTitle>{coinCurrentPrice?.label} 현재 가격</S.CurrentPriceTitle>
              <S.TermText>
                {coinCurrentPrice ? new Date(coinCurrentPrice?.lastUpdated).toLocaleString() : ''}
              </S.TermText>
            </S.CurrentPriceInfo>

            <S.CurrentPriceText>
              {coinCurrentPrice?.price?.won?.toLocaleString()}원
            </S.CurrentPriceText>
          </S.CurrentPrice>
        </Fade>
        <S.PastPrice>
          <Fade delay={500} direction="up" triggerOnce>
            <S.Lowest>
              <S.PastDateText>
                {coinPrice ? dateToString(new Date(coinPrice?.minPrice?.atMillis)) : ''}에 살걸..
              </S.PastDateText>

              <S.PastPriceText color={BlueColor}>
                {coinPrice?.minPrice.won?.toLocaleString()}원
              </S.PastPriceText>

              <S.TermText>
                {monthAgo} ~ {today} 간 최저가
              </S.TermText>
            </S.Lowest>
          </Fade>
          <Fade delay={1000} direction="up" triggerOnce>
            <S.Highest>
              <S.PastDateText>
                {coinPrice ? dateToString(new Date(coinPrice?.maxPrice?.atMillis)) : ''}에 팔걸..
              </S.PastDateText>

              <S.PastPriceText color={RedColor}>
                {coinPrice?.maxPrice?.won?.toLocaleString()}원
              </S.PastPriceText>

              <S.TermText>
                {monthAgo} ~ {today} 간 최고가
              </S.TermText>
            </S.Highest>
          </Fade>
        </S.PastPrice>
      </S.PriceBox>
      <Fade delay={1500} triggerOnce>
        <S.NextPage>
          <p>행복회로 가동하기</p>
          <S.NextPageArrowImgBox onClick={handleNextPage}>
            <S.NextPageArrowImg className="arrow1" src={downarrow} alt=" " />
            <S.NextPageArrowImg className="arrow2" src={downarrow} alt=" " />
          </S.NextPageArrowImgBox>
        </S.NextPage>
      </Fade>
    </S.Container>
  );
}

export default Price;
