import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import downarrow from '../../images/downarrow.svg';
import Coins from '../../Dummy_Data/Coins.json';
import { Selection, SelectCoinLogo, SelectionText, ArrowBtn, ArrowImgDown, NextArrow, NextPage } from './FS';
import { CoinListSpace, List, ListCard, ListImg, ListGroup } from './List';

function SelectCoin(): any {
  // 코인 불러오기용 number
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber(0);
  }, []);
  // 리스트 불러오기용 상태 state
  const [isList, setList] = useState(false);

  // 리스트 상태 전환
  const Viewlist = (): any => {
    if (isList === true) {
      setList(false);
    } else {
      setList(true);
    }
  };

  // transition 사용 array
  const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const FirstLine = Coins.coins.map((v, index) =>
    index < 5 ? (
      <ListCard>
        <ListImg src={v.img} alt="dd" />
        <p>{v.label}</p>
      </ListCard>
    ) : undefined
  );

  const SecondLine = Coins.coins.map((v, index) =>
    index > 4 ? (
      <ListCard>
        <ListImg src={v.img} alt="dd" />
        <p>{v.label}</p>
      </ListCard>
    ) : undefined
  );

  return (
    <Selection>
      <SelectionText>
        <div>
          <SelectCoinLogo src={Coins.coins[number].img} alt="bb" />
        </div>
        <p style={{ color: 'black' }}>&nbsp;{Coins.coins[number].label}&nbsp;</p>

        <ArrowBtn type="button" onClick={Viewlist}>
          <ArrowImgDown show={isList} src={downarrow} alt="button" />
        </ArrowBtn>

        <p>&nbsp;살걸..</p>
      </SelectionText>
      <Transition timeout={30} in={isList}>
        {(state) => (
          <CoinListSpace
            style={{
              ...transitionStyles[state],
            }}
          >
            <List>
              <ListGroup>{FirstLine}</ListGroup>
              <ListGroup>{SecondLine}</ListGroup>
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
