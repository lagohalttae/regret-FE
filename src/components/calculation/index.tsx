import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 30vh;
  left: 44vw;
  font-size: 48px;
  font-weight: 700;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 49vw;
  height: 50vh;

  @media (max-width: 480px) {
    top: 10vh;
    font-size: 8vw;
  }

  // 모바일
  // @media (max-width: 767px) {
  // }
`;

const InputBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const PriceInput = styled.input`
  font-size: 48px;
  width: 57%;
  margin-right: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-width: 3px;
  border-color: #757575;
`;

const LowDate = styled.span`
  color: #e92c2c;
`;
const HighDate = styled.span`
  color: #0085ff;
`;
const DateBox = styled.div`
  margin-top: 8vh;
`;
const ButtonBox = styled.div`
  margin-top: 6vh;
  width: 57%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const HappyButton = styled.button`
  width: 230px;
  height: 70px;
  border-radius: 50px;
  font-size: 36px;
  background-color: white;
  border-color: #090909;
  border-width: 3px;
`;

export function Calculation(): any {
  return (
    <Container>
      <InputBox>
        <PriceInput />
        <div>원을</div>
      </InputBox>
      <DateBox>
        <LowDate>2022년 5월 2일</LowDate>에 풀매수해서
      </DateBox>
      <DateBox>
        <HighDate>2022년 5월 5일</HighDate>에 풀매도 했다면..?
      </DateBox>
      <ButtonBox>
        <HappyButton>행복회로{/** on off switch */}</HappyButton>
      </ButtonBox>
    </Container>
  );
}
