import { useState } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import uparrow from '../../images/uparrow.svg';
import downarrow from '../../images/downarrow.svg';
import Coins from '../../Dummy_Data/Coins.json';

const Selection = styled.div`
  margin-top: 5vh;
  /* display: flex; */
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
const SelectionText = styled.div`
  display: flex;
  //최대 넓이 지정, media쿼리 설정필요
  max-width: 30vw;
  @media (max-width: 767px) {
    min-width: 60vw;
    max-width: 60vw;
  }
`;

const ArrowBtn = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

const ArrowImgUp = styled.img`
  width: 5vh;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  @media (max-width: 767px) {
    width: 3vh;
  }
  @media (max-width: 1023px) {
    width: 4vh;
  }
  @media (hover: hover) {
    transition-duration: 0.2s;
    &:hover {
      transform: translateY(-10px);
      transition-property: all;
      transition-duration: 0.3s;
      transition-delay: 0s;
    }
  }
`;

const ArrowImgDown = styled.img`
  width: 5vh;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  @media (max-width: 767px) {
    width: 3vh;
  }
  @media (max-width: 1023px) {
    width: 4vh;
  }
  @media (hover: hover) {
    transition-duration: 0.2s;
    &:hover {
      transform: translateY(10px);
      transition-property: all;
      transition-duration: 0.3s;
      transition-delay: 0s;
    }
  }
`;

// const NowCoin = styled.div`
//   color: #000000;
//   /* cursor: pointer; */
// `;

const CoinList = styled.div`
  color: blue;
  min-height: 30vh;
  min-width: 60vw;
  max-width: 60vw;
  background-color: red;
  word-break: break-all;
  transition: opacity 200ms ease-in-out;
  opacity: 0;
`;

const NextPage = styled.div`
  position: absolute;
  display: block;
  left: -8vw;
  width: 100vw;
  bottom: -20vh;
  color: black;
  text-align: center;
  font-size: 2vw;
`;

const ArrowImg2 = styled.img`
  border-style: none;
  background-color: transparent;
  width: 3vh;
  cursor: pointer;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  @media (max-width: 480px) {
    width: 2vh;
  }
  @media (hover: hover) {
    &:hover {
      transform: translateY(20px);
      transition-property: all;
      transition-duration: 1s;
      transition-delay: 0s;
      width: 5vh;
    }
  }
  transition-duration: 1s;
`;

function SelectCoin(): any {
  // 코인 불러오기용 number
  // const [number, setNumber] = useState(0);
  // setNumber(0);
  const number = 0;
  // 리스트 불러오기용 상태 state
  const [isList, setList] = useState(false);

  const Viewlist = (): any => {
    if (isList === true) {
      setList(false);
    } else {
      setList(true);
    }
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Selection>
      <SelectionText>
        <p style={{ color: 'black' }}>{Coins.coins[number].label}</p>

        {isList === true ? (
          <ArrowBtn type="button" onClick={Viewlist}>
            <ArrowImgUp src={uparrow} alt="button" />
          </ArrowBtn>
        ) : (
          <ArrowBtn type="button" onClick={Viewlist}>
            <ArrowImgDown src={downarrow} alt="button" />
          </ArrowBtn>
        )}

        <p>&nbsp;살걸..</p>
      </SelectionText>

      <Transition timeout={10} in={isList}>
        {(state) => (
          <CoinList
            style={{
              ...transitionStyles[state],
            }}
          >
            <p>dadsfasdfasdfasdfasjkhdfkasdhkfljhasdjfhjlaksdhflkjasdhflkjashdfkla</p>
          </CoinList>
        )}
      </Transition>
      <NextPage>
        <p>한달간 비트코인 가격을 알아보자..</p>
        <ArrowImg2 src={downarrow} alt="button" onClick={Viewlist} />
      </NextPage>
    </Selection>
  );
}
export default SelectCoin;
