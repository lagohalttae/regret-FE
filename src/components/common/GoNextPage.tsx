import React from 'react';
import styled from 'styled-components';
import downarrow from '../../assets/images/downarrow.svg';

const S = {
  NextPage: styled.div`
    display: flex;
    flex-direction: column;
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
  MsgFont: styled.p`
    font-size: 1.25vw;
    font-weight: 700;
  `,
};

type GoNextPageProps = {
  msg?: string;
  page: number;
};

function GoNextPage({ msg, page }: GoNextPageProps): any {
  const handleNextPage: React.MouseEventHandler<HTMLImageElement> = () => {
    window.scroll({ top: window.innerHeight * page, left: 0, behavior: 'smooth' });
  };
  return (
    <S.NextPage>
      {msg && <S.MsgFont>{msg}</S.MsgFont>}
      <S.NextPageArrowImgBox onClick={handleNextPage}>
        <S.NextPageArrowImg className="arrow1" src={downarrow} alt=" " />
        <S.NextPageArrowImg className="arrow2" src={downarrow} alt=" " />
      </S.NextPageArrowImgBox>
    </S.NextPage>
  );
}

GoNextPage.defaultProps = {
  msg: '&nbsp',
};
export default GoNextPage;
