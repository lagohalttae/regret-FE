import styled from 'styled-components';

// 최상단 컴포넌트
const Selection = styled.div`
  margin-top: 5vh;

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

const SelectCoinLogo = styled.img`
  border-style: none;
  background-color: transparent;
  width: 5vh;
`;

const SelectionText = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowBtn = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
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
  position: relative;
  display: block;
  left: -8vw;
  width: 100vw;
  bottom: -10vh;
  color: black;
  text-align: center;
  font-size: 3.5vh;
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

export { Selection, SelectCoinLogo, SelectionText, ArrowBtn, ArrowImgDown, NextArrow, NextPage };
