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

const InputContainer = styled.div`
  width: 100%;
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
`;
const PriceInput = styled.input`
  &:focus {
    outline: none;
  }
  &.showWarning {
    border-color: #e62f32;
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
const InputWarningBox = styled.div`
  position: absolute;
  margin-top: 5px;
  display: flex;
`;

const InputWarning = styled.text`
  color: #e62f32;
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
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
  const [isClicked, setIsClicked] = useState<boolean>(false); // 행복회로 버튼 토글
  const [inputPrice, setInputPrice] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
  const coinPrice = useRecoilValue(coinPriceAtom);

  // Date 타입 인자를 'yyyy년 mm월 dd일' 형태의 문자열 타입으로 변환 후 반환하는 함수
  const dateToString = (date: Date): string =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    const removedCommaValue = Number(value.replaceAll(',', ''));

    // 값이 입력되면 행복회로 버튼 표시
    setIsClicked(false);

    // 처음에 0이 나올경우 처리
    if (removedCommaValue === 0) {
      setInputPrice('');
      return;
    }

    // 숫자가 아닐때 오류
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(removedCommaValue)) {
      setShowInputWarning(true);
    } else {
      setShowInputWarning(false);
      setInputPrice(Number(removedCommaValue).toLocaleString());
    }
  };

  const handleCalculate: any = () => {
    const regex = /[^0-9]/g; // 숫자앞에 -붙는거 처리 안돼서 regex로 한번 더 처리

    // 공백인 상태로 계산 눌렀을때 오류
    if (inputPrice === '' && !isClicked) {
      setShowInputWarning(true);
      return;
    }

    const result =
      parseInt(inputPrice.replace(regex, ''), 10) *
      (coinPrice.maxPrice.won / coinPrice.minPrice.won);

    // eslint-disable-next-line no-restricted-globals
    setPrice(Number(result.toFixed()));
    setIsClicked(true);
  };

  // 선택된 코인의 price가 바뀌었을때 마다 실행(선택된 코인이 바뀌었을때)
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

  // 엔터 눌렀을떄 submit이 실행돼 페이지 /? 로 이동 방지
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputContainer>
        <InputBox>
          <PriceInput
            placeholder="가격을 입력해주세요."
            min={0}
            value={inputPrice}
            type="text"
            onChange={handleInputChange}
            className={showInputWarning ? 'showWarning' : ''}
          />
          <div>원을</div>
        </InputBox>

        {showInputWarning ? (
          <InputWarningBox>
            <InputWarning>숫자를 입력해주세요.</InputWarning>
          </InputWarningBox>
        ) : (
          ''
        )}
      </InputContainer>
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
