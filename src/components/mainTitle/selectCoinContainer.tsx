import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Fade } from 'react-awesome-reveal';
import { Transition } from 'react-transition-group';
import ViewportTypography from '../common/ViewportTypography';
import { GreenColor, BlackColor } from '../../constants';
import { getCoins } from '../../api';
import { selectedCoinAtom } from '../../atoms';
import downarrow from '../../assets/images/downarrow.svg';
import { ICoinInfo } from '../../types/coin';

const S = {
  Container: styled.div`
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
  `,
  // CurrentCoinLabel: styled.p`
  //   color: black;
  // `,
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

    // 모서리
    box-shadow: 0px 0px 20px #aaaaaa;
    border-radius: 30px;
    padding-block: 20px;
    padding-inline: 30px;

    // 수정x
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
  // CoinLabel: styled.p`
  //   font-size: large;
  //   color: black;
  // `,

  NextPage: styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: fit-content;
    left: 50%;
    bottom: -15vh;
    text-align: center;

    @media (hover: hover) {
      &:hover {
        transform: translateY(10px);
        transition-duration: 0.7s;
        transition-delay: 0s;
      }
    }
  `,

  NextPageArrowImgBox: styled.div`
    animation: slideArrow 1.5s linear infinite;
    margin-right: 30px;
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
    position: absolute;
    border-style: none;
    background-color: transparent;
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
};

// transition 사용
const TransitionStyles: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

// state
function SelectCoinContainer(): any {
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

  // 다음페이지로 스크롤
  const handleNextPage: React.MouseEventHandler<HTMLImageElement> = () => {
    window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
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
          setSelectedCoin({ coinId: data.coinId as any });
        }}
        protect={showCoinList}
      >
        <S.CoinImg src={data.imageUrl} alt=" " />
        {/* api 데이터 불러온거 확인후 font-size 재조정필요 */}
        <ViewportTypography size="4" weight="700" color={BlackColor}>
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
          setSelectedCoin({ coinId: data.coinId as any });
        }}
        protect={showCoinList}
      >
        <S.CoinImg src={data.imageUrl} alt=" " />
        {/* api 데이터 불러온거 확인후 font-size 재조정필요 */}
        <ViewportTypography size="4" weight="700" color={BlackColor}>
          {data.label}
        </ViewportTypography>
      </S.CoinCard>
    ) : undefined
  );

  useEffect(() => {
    getCoins(setCoinList);
  }, []);

  return (
    <S.Container>
      {/* 현재 선택된 코인 */}
      <Fade delay={1500} direction="up" triggerOnce>
        <S.CurrentCoin>
          <div>
            <S.CurrentCoinImg src={coinList[index]?.imageUrl} alt=" " />
          </div>
          <ViewportTypography size="6" weight="700" color={BlackColor}>
            &nbsp;{coinList[index]?.label}&nbsp;
          </ViewportTypography>
          <S.ArrowImg show={showCoinList} onClick={isShowCoinList} src={downarrow} alt="arrow" />
          <ViewportTypography size="6" weight="700" color={GreenColor}>
            &nbsp;살걸..
          </ViewportTypography>
        </S.CurrentCoin>
      </Fade>

      {/* /현재 선택된 코인 */}

      {/* 전체 코인 리스트 */}
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
      {/* /전체 코인 리스트 */}

      {/* 다음페이지 이동 */}
      <Fade delay={2000} triggerOnce>
        <S.NextPage>
          <ViewportTypography weight="700">한달간 비트코인 가격을 알아보자</ViewportTypography>
          <S.NextPageArrowImgBox onClick={handleNextPage}>
            <S.NextPageArrowImg className="arrow1" src={downarrow} alt=" " />
            <S.NextPageArrowImg className="arrow2" src={downarrow} alt=" " />
          </S.NextPageArrowImgBox>
        </S.NextPage>
      </Fade>
      {/* /다음페이지 이동 */}
    </S.Container>
  );
}
export default SelectCoinContainer;
