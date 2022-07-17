/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ICoinPriceState } from '../price';

const Container = styled.form`
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  display: flex;
  width: 100%;
  align-items: center;
`;
const PriceInput = styled.input`
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  margin: 0;
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
  width: 260px;
  height: 70px;
  border-radius: 50px;
  font-size: 36px;
  background-color: white;
  border-color: #090909;
  border-width: 3px;
  &:hover {
    cursor: pointer;
  }
`;
const Calculated = styled.div`
  color: #43841f;
`;

const CalculatedBox = styled.div`
  margin-top: 8vh;
  height: 100%;
  display: flex;
  justify-content: center;
`;

// useLocation을 통해 state를 받아오기 위한 interface
interface Ilocation {
  state: ICoinPriceState;
}

export function Calculation(): any {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [inputPrice, setInputPrice] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  // 이전페이지의 정보를 받기 위함 ex)path, state
  const location = useLocation() as Ilocation;

  const { atMaxPrice, atMinPrice, maxPrice, minPrice } = location.state;
  // Date 타입 인자를 'yyyy년 mm월 dd일' 형태의 문자열 타입으로 변환 후 반환하는 함수
  const dateToString = (date: Date): string =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  const handleInputChange: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    setIsClicked(false);
    setInputPrice(event.currentTarget.value);
    console.dir(event.currentTarget.value);
  };
  const handleCalculate: any = () => {
    const regex = /[^0-9]/g; // 숫자앞에 -붙는거 처리 안돼서 regex로 한번 더 처리
    const result = parseInt(inputPrice.replace(regex, ''), 10);

    setPrice(result * (maxPrice / minPrice));
    setIsClicked(true);
  };
  const handleCalculateWithClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleCalculate();
  };

  const handleCalculateWithEnter: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === 'Enter' && isClicked === false) handleCalculate();
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputBox>
        <PriceInput
          placeholder="가격을 입력해주세요."
          min={0}
          type="number"
          onKeyDown={handleInputChange}
        />
        <div>원을</div>
      </InputBox>
      <DateBox>
        <LowDate>{dateToString(new Date(atMinPrice))}</LowDate>에 풀매수해서
      </DateBox>
      <DateBox>
        <HighDate>{dateToString(new Date(atMaxPrice))}</HighDate>에 풀매도 했다면..?
      </DateBox>
      {!isClicked ? (
        <ButtonBox>
          <HappyButton onClick={handleCalculateWithClick} onKeyUp={handleCalculateWithEnter}>
            행복회로 ON
          </HappyButton>
        </ButtonBox>
      ) : (
        <CalculatedBox>
          <Calculated>{price.toLocaleString()}</Calculated>원 을 벌었을탠데...
        </CalculatedBox>
      )}
    </Container>
  );
}
