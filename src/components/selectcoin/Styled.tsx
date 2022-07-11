import styled from 'styled-components';

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
  justify-content: space-evenly;
  height: 20vh;

  // 모서리
  box-shadow: 0px 0px 20px #aaaaaa;
  border-radius: 3vh;
  padding-block: 3vh;
  padding-inline: 5vh;

  // 수정x
  transition: opacity 0.3s ease;
  opacity: 0;
`;

const CoinCard = styled.div`
  display: inline-flex;
  align-items: center;
  padding-inline: 1vw;

  /* 너비 및 정렬 공백 정렬 수정 하는곳 */
  justify-content: flex-start;
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
  left: -8vw;
  width: 100vw;
  bottom: -30vh;
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

export {
  Wrapper,
  CurrentCoin,
  CurrentCoinImg,
  CurrentCoinLabel,
  ArrowImg,
  NextPageArrowImg,
  NextPage,
  AllCoin,
  CoinCard,
  CoinImg,
  CoinLabel,
  TransitionStyles,
};
