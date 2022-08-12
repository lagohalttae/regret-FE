import React from 'react';
import styled from 'styled-components';
import ViewportTypography from '../common/ViewportTypography';
import downarrow from '../../assets/images/downarrow.svg';

const S = {
  NextPage: styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    left: 55%;
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

function GoNextPageWrapper(): any {
  const handleNextPage: React.MouseEventHandler<HTMLImageElement> = () => {
    window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };
  return (
    <S.NextPage>
      <ViewportTypography weight="700">한달간 비트코인 가격을 알아보자</ViewportTypography>
      <S.NextPageArrowImgBox onClick={handleNextPage}>
        <S.NextPageArrowImg className="arrow1" src={downarrow} alt=" " />
        <S.NextPageArrowImg className="arrow2" src={downarrow} alt=" " />
      </S.NextPageArrowImgBox>
    </S.NextPage>
  );
}
export default GoNextPageWrapper;
