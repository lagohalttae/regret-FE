import { useState } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
// import uparrow from '../../images/uparrow.svg';
import downarrow from '../../images/downarrow.svg';
import Coins from '../../Dummy_Data/Coins.json';

const Selection = styled.div`
  margin-top: 5vh;

  // media query 복사용
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
  align-items: center;
`;

const ArrowBtn = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

const ArrowImgDown = styled.img`
  width: 5vh;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  /* @media (hover: hover) {
    transition-duration: 0.2s;
    &:hover {
      transform: translateY(10px);
      transition-property: all;
      transition-duration: 0.3s;
      transition-delay: 0s;
    }
  } */
`;

const CoinListSpace = styled.div`
  position: relative;
  top: 2vh;
  color: blue;
  height: 30vh;
  width: 70vw;
  /* @media (max-width: 767px) {
    width: 60vw;
  } */
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  transition: opacity 0.5s ease;
  opacity: 0;
  padding: 1vh;
`;

const NextPage = styled.div`
  position: relative;
  display: block;
  left: -8vw;
  width: 100vw;
  bottom: -15vh;
  color: black;
  text-align: center;
  font-size: 3.5vh;
`;

const NextArrow = styled.img`
  border-style: none;
  background-color: transparent;
  width: 3.5vh;
  cursor: pointer;
  filter: opacity(0.25) drop-shadow(0 0 0 gray);
  @media (hover: hover) {
    &:hover {
      transform: translateY(10px);
      transition-property: all;
      transition-duration: 0.7s;
      transition-delay: 0s;
      width: 5vh;
    }
  }
  transition-duration: 0.7s;
`;

const TestImg = styled.img`
  border-style: none;
  background-color: transparent;
  width: 5vh;
`;

const ListCard = styled.div`
  display: flex;
  align-items: center;
  width: 10vw;
  padding-inline: 2vw;
  cursor: pointer;
  &:hover {
    /* background-color: aqua; */
    border: 3px solid pink;
    border-radius: 5px;
    background-color: plum;
  }
`;

const ListImg = styled.img`
  width: 5vh;
  padding-right: 10px;
`;
const ListText = styled.p`
  font-size: 4vh;
  color: black;
`;

const List = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 2.5vh;
`;
const ListOne = styled.div`
  padding-bottom: 5vh;
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
`;

const ListTwo = styled.div`
  padding-bottom: 5vh;
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
`;

function SelectCoin(): any {
  // 코인 불러오기용 number
  const [number, setNumber] = useState(0);

  // const number = 0;
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
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Selection>
      <SelectionText>
        <div>
          <TestImg src={Coins.coins[number].img} alt="bb" />
        </div>
        <p style={{ color: 'black' }}>&nbsp;{Coins.coins[number].label}&nbsp;</p>
        {isList === false ? (
          <ArrowBtn type="button" onClick={Viewlist}>
            <ArrowImgDown
              src={downarrow}
              alt="button"
              style={{
                transitionProperty: 'all',
                transitionDuration: '0.3s',
                transitionDelay: '0s',
              }}
            />
          </ArrowBtn>
        ) : (
          <ArrowBtn type="button" onClick={Viewlist}>
            <ArrowImgDown
              src={downarrow}
              alt="button"
              style={{
                transform: 'translateY(10px)',
                transitionProperty: 'all',
                transitionDuration: '0.3s',
                transitionDelay: '0s',
              }}
            />
          </ArrowBtn>
        )}
        <p>&nbsp;살걸..</p>
      </SelectionText>
      <Transition timeout={100} in={isList}>
        {(state) => (
          <CoinListSpace
            style={{
              ...transitionStyles[state],
            }}
          >
            <List>
              <ListOne>
                <ListCard
                  onClick={() => {
                    setNumber(0);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[0].img} alt="b" />
                  <ListText>{Coins.coins[0].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(1);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[1].img} alt="b" />
                  <ListText>{Coins.coins[1].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(2);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[2].img} alt="b" />
                  <ListText>{Coins.coins[2].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(3);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[3].img} alt="b" />
                  <ListText>{Coins.coins[3].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(4);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[4].img} alt="b" />
                  <ListText>{Coins.coins[4].label}</ListText>
                </ListCard>
              </ListOne>
              <ListTwo>
                <ListCard
                  onClick={() => {
                    setNumber(5);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[5].img} alt="b" />
                  <ListText>{Coins.coins[5].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(6);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[6].img} alt="b" />
                  <ListText>{Coins.coins[6].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(7);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[7].img} alt="b" />
                  <ListText>{Coins.coins[7].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(8);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[8].img} alt="b" />
                  <ListText>{Coins.coins[8].label}</ListText>
                </ListCard>

                <ListCard
                  onClick={() => {
                    setNumber(9);
                    setList(false);
                  }}
                >
                  <ListImg src={Coins.coins[9].img} alt="b" />
                  <ListText>{Coins.coins[9].label}</ListText>
                </ListCard>
              </ListTwo>
            </List>
          </CoinListSpace>
        )}
      </Transition>
      <NextPage>
        <p>한달간 비트코인 가격을 알아보자..</p>
        <NextArrow src={downarrow} alt="button" onClick={Viewlist} />
      </NextPage>
    </Selection>
  );
}
export default SelectCoin;
