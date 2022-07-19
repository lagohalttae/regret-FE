/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { coinPriceAtom } from '../../atoms';

const Container = styled.form`
  z-index: 1;
  font-size: 48px;
  font-weight: 700;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50vh;
  margin-right: 13vw;
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
  &:focus {
    outline: none;
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
  width: 85%;
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

export function Calculation(): any {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [inputPrice, setInputPrice] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const coinPrice = useRecoilValue(coinPriceAtom);

  // Date 타입 인자를 'yyyy년 mm월 dd일' 형태의 문자열 타입으로 변환 후 반환하는 함수
  const dateToString = (date: Date): string =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    const removedCommaValue = Number(value.replaceAll(',', ''));
    setIsClicked(false);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(removedCommaValue)) {
      setInputPrice('');
    } else {
      setInputPrice(Number(removedCommaValue).toLocaleString());
    }
  };

  const handleCalculate: any = () => {
    const regex = /[^0-9]/g; // 숫자앞에 -붙는거 처리 안돼서 regex로 한번 더 처리
    const result =
      parseInt(inputPrice.replace(regex, ''), 10) *
      (coinPrice.maxPrice.won / coinPrice.minPrice.won);

    setPrice(Number(result.toFixed()));
    setIsClicked(true);
  };

  useEffect(() => {
    handleCalculate();
    setIsClicked(false);
  }, [coinPrice]);

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
          className="input"
          placeholder="가격을 입력해주세요."
          min={0}
          value={inputPrice}
          type="text"
          onChange={handleInputChange}
        />
        <div>원을</div>
      </InputBox>
      <DateBox>
        <LowDate>{dateToString(new Date(coinPrice.minPrice.atMillis))}</LowDate>에 풀매수해서
      </DateBox>
      <DateBox>
        <HighDate>{dateToString(new Date(coinPrice.maxPrice.atMillis))}</HighDate>에 풀매도
        했다면..?
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
