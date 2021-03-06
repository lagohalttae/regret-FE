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
  NextPageArrowImgBox,
};
