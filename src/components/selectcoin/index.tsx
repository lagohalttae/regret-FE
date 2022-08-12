import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { Transition } from 'react-transition-group';
import { useRecoilState } from 'recoil';
import { axiosGet } from '../../api';
import { selectedCoinAtom } from '../../atoms';
import downarrow from '../../assets/images/downarrow.svg';
import { ICoinInfo } from '../../types/coin';

// 최상단 컴포넌트
const Wrapper = styled.div`
  margin-top: 3vh;
  // media query 복사용
  @media (max-width: 1439px) {
  }
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 480px) {
  }
`;

// 코인선택 컴포넌트------------
const CurrentCoin = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentCoinImg = styled.img`
  border-style: none;
  background-color: transparent;
  width: 4vw;
`;

const CurrentCoinLabel = styled.p`
  color: black;
`;

const ArrowImg = styled.img`
  width: 3vw;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  transition-property: all;
  transition-duration: 0.3s;
  transition-delay: 0s;
  transform: ${({ show }: { show: boolean }) => (show === true ? 'translateY(10px)' : null)};
`;
// -----------------코인선택 컴포넌트

// 전체 코인 컴포넌트 ---------
const AllCoin = styled.div`
  position: relative;
  top: 3vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 40%;

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
`;

const CoinCard = styled.div`
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
`;

const CoinImg = styled.img`
  width: 5vh;
  padding-right: 1vw;
`;
const CoinLabel = styled.p`
  font-size: large;
  color: black;
`;
// transition 사용
const TransitionStyles: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

// --------- 전체 코인 컴포넌트

// 하단 컴포넌트 -------------
const NextPage = styled.div`
  position: absolute;
  left: 50%;
  width: fit-content;
  bottom: -15vh;
  color: black;
  text-align: center;
  font-size: x-large;
  display: flex;
  flex-direction: column;

  @media (hover: hover) {
    &:hover {
      transform: translateY(10px);
      transition-duration: 0.7s;
      transition-delay: 0s;
    }
  }
`;

const NextPageArrowImgBox = styled.div`
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

// state
function SelectCoin() {
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
      <CoinCard
        key={data.coinId}
        onClick={() => {
          setIndex(i);
          isShowCoinList();
          setSelectedCoin({ coinId: data.coinId });
        }}
        protect={showCoinList}
      >
        <CoinImg src={data.imageUrl} alt=" " />
        <CoinLabel>{data.label}</CoinLabel>
      </CoinCard>
    ) : undefined
  );

  const groupTwo = [...coinList].map((data, i) =>
    i > 4 ? (
      <CoinCard
        key={data.coinId}
        onClick={() => {
          setIndex(i);
          isShowCoinList();
          setSelectedCoin({ coinId: data.coinId });
        }}
        protect={showCoinList}
      >
        <CoinImg src={data.imageUrl} alt=" " />
        <CoinLabel>{data.label}</CoinLabel>
      </CoinCard>
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
    <Wrapper>
      {/* 현재 선택된 코인 */}
      <Fade delay={1500} direction="up" triggerOnce>
        <CurrentCoin>
          <div>
            <CurrentCoinImg src={coinList[index]?.imageUrl} alt=" " />
          </div>
          <CurrentCoinLabel>&nbsp;{coinList[index]?.label}&nbsp;</CurrentCoinLabel>
          <ArrowImg show={showCoinList} onClick={isShowCoinList} src={downarrow} alt="arrow" />
          <p>&nbsp;살걸..</p>
        </CurrentCoin>
      </Fade>

      {/* /현재 선택된 코인 */}

      {/* 전체 코인 리스트 */}
      <Transition timeout={30} in={showCoinList}>
        {(state) => (
          <AllCoin
            style={{
              ...TransitionStyles[state],
            }}
          >
            <div className="coinGroup">{groupOne}</div>
            <div className="coinGroup">{groupTwo}</div>
          </AllCoin>
        )}
      </Transition>
      {/* /전체 코인 리스트 */}

      {/* 다음페이지 이동 */}
      <Fade delay={2000} triggerOnce>
        <NextPage>
          <p>한달간 비트코인 가격을 알아보자</p>
          <NextPageArrowImgBox onClick={handleNextPage}>
            <NextPageArrowImg className="arrow1" src={downarrow} alt=" " />
            <NextPageArrowImg className="arrow2" src={downarrow} alt=" " />
          </NextPageArrowImgBox>
        </NextPage>
        {/* /다음페이지 이동 */}
      </Fade>
    </Wrapper>
  );
}
export default SelectCoin;
