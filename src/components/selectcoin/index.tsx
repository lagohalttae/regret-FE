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

const PrevCoin = styled.div`
  color: #b3cda5;
  font-size: 1vw;
  text-align: center;
  margin-bottom: 0.5vh;
  //drag 방지
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
const NextCoin = styled.div`
  color: #b3cda5;
  font-size: 1vw;
  text-align: center;
  margin-top: 0.5vh;
  //drag 방지
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
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

      {number === 0 ? (
        <PrevCoin onClick={onUp}>{Coins.coins[Coins.coins.length - 1].label}</PrevCoin>
      ) : (
        <PrevCoin onClick={onUp}>{Coins.coins[number - 1].label}</PrevCoin>
      )}

      {Coins.coins[number].label}

      {number === Coins.coins.length - 1 ? (
        <NextCoin onClick={onDown}>{Coins.coins[0].label}</NextCoin>
      ) : (
        <NextCoin onClick={onDown}>{Coins.coins[number + 1].label}</NextCoin>
      )}
      <ArrowBtn type="button" onClick={onDown}>
        <ArrowImg src={downarrow} alt="button" onClick={onDown} />
      </ArrowBtn>
    </Selection>
  );
}

export default SelectCoin;
