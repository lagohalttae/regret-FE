import styled from 'styled-components';

// 최상단 컴포넌트
const Selection = styled.div`
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
const SelectionText = styled.div`
  display: flex;
  align-items: center;
`;

const SelectCoinLogo = styled.img`
  border-style: none;
  background-color: transparent;
  width: 4vw;
`;

const SelectCoinLabel = styled.p`
  color: black;
`;

const ArrowBtn = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  width: 4vw;
`;

const ArrowImgDown = styled.img`
  width: 5vh;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  transition-property: all;
  transition-duration: 0.3s;
  transition-delay: 0s;
  transform: ${({ show }: { show: boolean }) => (show === true ? 'translateY(10px)' : null)};
`;
// -----------------코인선택 컴포넌트

// 하단 컴포넌트 -------------
const NextPage = styled.div`
  position: absolute;
  left: -8vw;
  width: 100vw;
  bottom: -30vh;
  color: black;
  text-align: center;
  /* font-size: 3.5vh; */
  font-size: x-large;
`;

const NextArrow = styled.img`
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

const CoinListSpace = styled.div`
  position: relative;
  top: 3vh;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  // 크기 생각하기
  /* height: 20vh; */
  /* max-width: 60vw; */
  height: 20vh;

  // 모서리
  box-shadow: 0px 0px 20px #aaaaaa;
  border-radius: 3vh;
  padding-block: 3vh;
  padding-inline: 5vh;

  // 수정x
  transition: opacity 0.3s ease;
  opacity: 0;

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
    width: 84vw;
    font-size: medium;
  } */
`;

const ListCard = styled.div`
  display: inline-flex;
  align-items: center;
  padding-inline: 1vw;

  /* 너비 및 정렬 공백 정렬 수정 하는곳 */
  justify-content: flex-start;
  /* min-width: 9vw; */
  /* max-width: 9vw; */
  /* max-width: 11vw; */
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

const ListImg = styled.img`
  width: 5vh;
  padding-right: 1vw;
`;
const ListText = styled.p`
  font-size: large;
  /* white-space: pre-wrap; */
  color: black;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
    flex-wrap: wrap;
    align-content: space-around;
  } */
`;

const ListGroup = styled.div`
  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
    flex-direction: column;
  } */
`;

export {
  Selection,
  SelectCoinLogo,
  SelectCoinLabel,
  SelectionText,
  ArrowBtn,
  ArrowImgDown,
  NextArrow,
  NextPage,
  CoinListSpace,
  List,
  ListCard,
  ListImg,
  ListGroup,
  ListText,
};
