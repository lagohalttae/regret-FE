import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Fade } from 'react-awesome-reveal';
import { Transition } from 'react-transition-group';
import ViewportTypography from '../common/ViewportTypography';
import { GreenColor, BlackColor } from '../../constants';
import GoNextPage from './goNextPage';
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
        <ViewportTypography size="1" weight="700" color={BlackColor}>
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
        <ViewportTypography size="1" weight="700" color={BlackColor}>
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

      <Fade delay={2000} triggerOnce>
        <GoNextPage />
      </Fade>
    </S.Container>
  );
}
export default SelectCoinContainer;
