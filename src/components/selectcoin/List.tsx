import styled from 'styled-components';

const CoinListSpace = styled.div`
  position: relative;
  top: 2vh;
  background-color: white;

  /* right: 8vw; */
  // 크기 생각하기
  /* height: 30vh; */
  /* max-width: 60vw; */

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
    width: 84vw;
    font-size: medium;
  } */
  // 모서리
  border: 1px solid black;
  border-radius: 30px;
  /* padding-inline: 30px; */
  padding-block: 20px;
  // ListText
  font-size: x-large;
  color: black;
  // 수정x
  transition: opacity 0.3s ease;
  opacity: 0;
`;

const ListCard = styled.div`
  display: inline-flex;
  align-items: center;

  min-width: 10vw;
  cursor: pointer;

  &:hover {
    background-color: pink;
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
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
    flex-wrap: wrap;
    align-content: space-around;
  } */
`;

const ListGroup = styled.div`
  display: flex;

  /* 모바일 미디어쿼리 */
  /* @media (max-width: 767px) {
    flex-direction: column;
  } */
`;

export { CoinListSpace, List, ListCard, ListImg, ListGroup, ListText };
