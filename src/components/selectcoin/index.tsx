import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { getCoins } from '../../api';
import downarrow from '../../images/downarrow.svg';
import {
  Wrapper,
  CurrentCoin,
  CurrentCoinImg,
  CurrentCoinLabel,
  ArrowImg,
  AllCoin,
  CoinCard,
  CoinImg,
  CoinLabel,
  NextPage,
  NextPageArrowImg,
  TransitionStyles,
} from './Styled';

interface ICoinInfo {
  coinId: string;
  label: string;
  imageUrl: string;
}

// state
export interface ICoinMainState {
  coinId: string;
}

function SelectCoin(): any {
  // 코인 api
  const [coinList, setCoinList] = useState<ICoinInfo[]>([]);

  // 코인 api에서 받아온 index 번호
  const [index, setIndex] = useState<number>(0);

  // 전체 코인 리스트 제어용
  const [showCoinList, setShowCoinList] = useState<boolean>(false);

  // 리스트 상태 전환
  const isShowCoinList = (): void => {
    setShowCoinList(!showCoinList);
  };

  // 페이지 이동에 이용되는 함수
  const navigate = useNavigate();

  // 다음 페이지로 이동
  const handleNextPage: React.MouseEventHandler<HTMLDivElement> = () => {
    const { coinId }: ICoinMainState = coinList[index];
    navigate('/price', { state: { coinId } });
  };

  // 전체 코인 두개의 그룹화
  // groupOne : 0~4 , groupTwo : 5~9
  const groupOne = coinList.map((data, i) =>
    i < 5 ? (
      <CoinCard
        key={data.coinId}
        onClick={() => {
          setIndex(i);
          isShowCoinList();
        }}
        protect={showCoinList}
      >
        <CoinImg src={data.imageUrl} alt=" " />
        <CoinLabel>{data.label}</CoinLabel>
      </CoinCard>
    ) : undefined
  );

  const groupTwo = coinList.map((data, i) =>
    i > 4 ? (
      <CoinCard
        key={data.coinId}
        onClick={() => {
          setIndex(i);
          isShowCoinList();
        }}
        protect={showCoinList}
      >
        <CoinImg src={data.imageUrl} alt=" " />
        <CoinLabel>{data.label}</CoinLabel>
      </CoinCard>
    ) : undefined
  );

  useEffect(() => {
    // api 가져오기
    getCoins(setCoinList);
  }, []);

  return (
    <Wrapper>
      {/* 현재 선택된 코인 */}
      <CurrentCoin>
        <div>
          <CurrentCoinImg src={coinList[index]?.imageUrl} alt=" " />
        </div>
        <CurrentCoinLabel>&nbsp;{coinList[index]?.label}&nbsp;</CurrentCoinLabel>
        <ArrowImg show={showCoinList} onClick={isShowCoinList} src={downarrow} alt="arrow" />
        <p>&nbsp;살걸..</p>
      </CurrentCoin>
      {/* /현재 선택된 코인 */}

      {/* 전체 코인 리스트 */}
      <Transition timeout={30} in={showCoinList}>
        {(state) => (
          <AllCoin
            style={{
              ...TransitionStyles[state],
            }}
          >
            <div>{groupOne}</div>
            <div>{groupTwo}</div>
          </AllCoin>
        )}
      </Transition>
      {/* /전체 코인 리스트 */}

      {/* 다음페이지 이동 */}
      <NextPage>
        <p>한달간 비트코인 가격을 알아보자..</p>
        <NextPageArrowImg src={downarrow} alt=" " onClick={handleNextPage} />
      </NextPage>
      {/* /다음페이지 이동 */}
    </Wrapper>
  );
}
export default SelectCoin;
