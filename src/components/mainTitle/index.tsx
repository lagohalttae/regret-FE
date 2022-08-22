import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Transition } from 'react-transition-group';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import ViewportTypography from '../common/ViewportTypography';
import { GreenColor, BlackColor } from '../../constants';
import { axiosGet } from '../../api';
import { ICoinInfo } from '../../types/coin';
import { selectedCoinAtom } from '../../atoms';
import GoNextPage from '../common/GoNextPage';
import pepeImage from '../../assets/images/pepe.png';
import downarrow from '../../assets/images/downarrow.svg';

const S = {
  MainTitleContainer: styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
  `,
  ContentContainer: styled.div`
    position: absolute;
    top: 25vh;
    left: 5vw;
    z-index: 1;
  `,
  PepeImage: styled.img`
    transform: scaleX(-1);
    height: 100vh;
    margin-left: 60vw;

    @media (max-width: 1439px) {
      right: -27%;
    }
    @media (max-width: 1023px) {
      display: none;
    }
  `,
  SelectCoinContainer: styled.div`
    margin-top: 3vh;
  `,
  CurrentCoin: styled.div`
    display: flex;
    align-items: center;
  `,
  CurrentCoinImg: styled.img`
    width: 4vw;
    border-style: none;
    background-color: transparent;
    padding-bottom: 1.5vh;
  `,
  ArrowImg: styled.img`
    width: 3vw;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    filter: opacity(0.25) drop-shadow(0 0 0 gray);
    transition-property: all;
    transition-duration: 0.3s;
    transition-delay: 0s;
    transform: ${({ show }: { show: boolean }) => (show === true ? 'translateY(10px)' : null)};
  `,
  AllCoin: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    top: 3vh;
    height: 40%;
    background-color: #ffffff;

    box-shadow: 0px 0px 20px #aaaaaa;
    border-radius: 30px;
    padding-block: 20px;
    padding-inline: 30px;

    transition: opacity 0.3s ease;
    opacity: 0;

    & .coinGroup {
      display: flex;
      height: 100%;
      align-content: center;
      margin: 20px 0;
    }
  `,
  CoinCard: styled.div`
    display: flex;
    align-items: center;
    padding-inline: 1vw;

    /* 너비 및 정렬 공백 정렬 수정 하는곳 */
    width: 10vw;

    cursor: ${({ protect }: { protect: boolean }) => (protect === false ? null : 'pointer')};

    @media (hover: hover) {
      &:hover {
        transform: translateY(-5px);
        transition-property: all;
        transition-duration: 0.3s;
        transition-delay: 0s;
      }
    }
    transition-duration: 0.3s;
  `,

  CoinImg: styled.img`
    width: 5vh;
    padding-right: 1vw;
  `,

  GoNext: styled.div`
    position: absolute;
    z-index: 1;
    left: 40%;
    bottom: 10%;
  `,
};

const TransitionStyles: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function SelectCoinContainer() {
  // 코인 api
  const [coinList, setCoinList] = useState<ICoinInfo[]>([]);

  // 코인 api에서 받아온 index 번호
  const [index, setIndex] = useState<number>(0);

  // 전체 코인 리스트 제어용
  const [showCoinList, setShowCoinList] = useState<boolean>(false);

  const [, setSelectedCoin] = useRecoilState(selectedCoinAtom);

  // 리스트 상태 전환
  const isShowCoinList = (): void => {
    setShowCoinList(!showCoinList);
  };

  // 전체 코인 두개의 그룹화
  // groupOne : 0~4 , groupTwo : 5~9
  const groupOne = [...coinList].map((data, i) =>
    i < 5 ? (
      <S.CoinCard
        key={data.coinId}
        onClick={() => {
          setIndex(i);
          isShowCoinList();
          setSelectedCoin({ coinId: data.coinId });
        }}
        protect={showCoinList}
      >
        <S.CoinImg src={data.imageUrl} alt=" " />
        <ViewportTypography weight="700" color={BlackColor}>
          {data.label}
        </ViewportTypography>
      </S.CoinCard>
    ) : undefined
  );

  const groupTwo = [...coinList].map((data, i) =>
    i > 4 ? (
      <S.CoinCard
        key={data.coinId}
        onClick={() => {
          setIndex(i);
          isShowCoinList();
          setSelectedCoin({ coinId: data.coinId });
        }}
        protect={showCoinList}
      >
        <S.CoinImg src={data.imageUrl} alt=" " />
        <ViewportTypography weight="700" color={BlackColor}>
          {data.label}
        </ViewportTypography>
      </S.CoinCard>
    ) : undefined
  );

  // api 가져오기
  const axiosSetCoinList = async (): Promise<void> => {
    setCoinList(await axiosGet('coinList'));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axiosSetCoinList();
  }, []);
  return (
    <S.SelectCoinContainer>
      <Fade delay={1500} direction="up" triggerOnce>
        <S.CurrentCoin>
          <S.CurrentCoinImg src={coinList[index]?.imageUrl} alt=" " />
          <ViewportTypography size="6" weight="700" color={BlackColor}>
            &nbsp;{coinList[index]?.label}&nbsp;
          </ViewportTypography>
          <S.ArrowImg show={showCoinList} onClick={isShowCoinList} src={downarrow} alt="arrow" />
          <ViewportTypography size="6" weight="700" color={GreenColor}>
            &nbsp;살걸..
          </ViewportTypography>
        </S.CurrentCoin>
      </Fade>

      <Transition timeout={30} in={showCoinList}>
        {(state) => (
          <S.AllCoin
            style={{
              ...TransitionStyles[state],
            }}
          >
            <div className="coinGroup">{groupOne}</div>
            <div className="coinGroup">{groupTwo}</div>
          </S.AllCoin>
        )}
      </Transition>
    </S.SelectCoinContainer>
  );
}

function MainTitle() {
  return (
    <S.MainTitleContainer>
      <S.ContentContainer>
        <Fade delay={1000} direction="up" triggerOnce>
          <ViewportTypography size="6" weight="700" color={GreenColor}>
            라고 할 때
          </ViewportTypography>
        </Fade>
        <SelectCoinContainer />
      </S.ContentContainer>
      <S.GoNext>
        <Fade delay={2000} triggerOnce>
          <GoNextPage msg="한달간 비트코인 가격을 알아보자" />
        </Fade>
      </S.GoNext>
      <Slide triggerOnce direction="right" duration={1000}>
        <S.PepeImage src={pepeImage} alt="pepe" />
      </Slide>
    </S.MainTitleContainer>
  );
}

export default MainTitle;
