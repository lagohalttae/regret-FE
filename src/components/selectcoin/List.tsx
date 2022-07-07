import styled from 'styled-components';

const CoinListSpace = styled.div`
  position: relative;
  top: 2vh;
  background-color: white;
  // 크기 생각하기
  height: 30vh;
  width: 70vw;
  // 모서리
  border: 1px solid black;
  border-radius: 30px;
  padding: 30px;
  // ListText
  font-size: 4vh;
  color: black;
  // 수정x
  transition: opacity 0.3s ease;
  opacity: 0;
`;

const ListCard = styled.div`
  display: flex;
  align-items: center;
  width: 10vw;
  padding-inline: 2vw;
  cursor: pointer;
  &:hover {
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

export { CoinListSpace, List, ListCard, ListImg, ListOne, ListText, ListTwo };
