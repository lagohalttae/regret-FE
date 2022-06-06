import { useState } from 'react';
import styled from 'styled-components';
import uparrow from '../../images/uparrow.svg';
import downarrow from '../../images/downarrow.svg';
import Coins from '../../Dummy_Data/Coins.json';

const Selection = styled.div`
  margin-inline: 1vw;
  // 버튼 위치 조절
  @media (max-width: 1439px) {
  }
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 480px) {
  }
`;

const ArrowBtn = styled.button`
  display: block;
  margin: auto;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  //임시로 색 추가
  /* &:hover {
    background-color: gray;
  } */
`;

const ArrowImg = styled.img`
  width: 4vh;
`;

function SelectCoin(): any {
  const [number, setNumber] = useState(0);

  // 무한루프용
  const onUp = (): any => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(Coins.coins.length - 1);
    }
  };

  const onDown = (): any => {
    if (number < Coins.coins.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
  };
  return (
    <Selection>
      <ArrowBtn type="button">
        <ArrowImg src={uparrow} alt="button" onClick={onUp} />
      </ArrowBtn>
      {Coins.coins[number].label}
      <ArrowBtn type="button">
        <ArrowImg src={downarrow} alt="button" onClick={onDown} />
      </ArrowBtn>
    </Selection>
  );
}

export default SelectCoin;
