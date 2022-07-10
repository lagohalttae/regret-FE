/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';

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
export function Calculation(
  {
    /* startDate, finalDate , startPrice,finalPrice */
  }
): any {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [inputPrice, setInputPrice] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const handleInputChange: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!(event.key >= '0' && event.key <= '9')) {
      // 숫자만 입력 가능하도록
      return;
    }
    setIsClicked(false);
    setInputPrice(event.currentTarget.value);
  };
  const handleCalculate: any = () => {
    const regex = /[^0-9]/g; // 숫자앞에 -붙는거 처리 안돼서 regex로 한번 더 처리
    const result = inputPrice.replace(regex, '');
    setPrice(2000 * parseInt(result, 10));
    setIsClicked(true);
  };
  const handleCalculateWithClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleCalculate();
  };

  const handleCalculateWithEnter: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === 'Enter') handleCalculate();
  };

  return (
    <Container>
      <InputBox>
        <PriceInput
          placeholder="가격을 입력해주세요."
          min={0}
          type="number"
          onKeyDown={handleInputChange}
          pattern="^(0|[1-9]+[0-9]*)$"
        />
        <div>원을</div>
      </InputBox>
      <DateBox>
        <LowDate>{/** startDate */}2022년 5월 2일</LowDate>에 풀매수해서
      </DateBox>
      <DateBox>
        <HighDate>{/** finalDate */}2022년 5월 5일</HighDate>에 풀매도 했다면..?
      </DateBox>
      {!isClicked ? (
        <ButtonBox>
          <HappyButton onClick={handleCalculateWithClick} onKeyDown={handleCalculateWithEnter}>
            행복회로 ON{/** on off switch */}
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
