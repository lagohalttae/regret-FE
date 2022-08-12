import styled from 'styled-components';
import Typography from '../components/common/Typography';
import { GreenColor } from '../constants';

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  `,
  TempBox: styled.div`
    width: 200px;
    height: 200px;
    background-color: red;
  `,
};

function Temp() {
  return (
    <S.Container>
      <S.TempBox>styled component 사용법</S.TempBox>
      <Typography size="32" weight="700" color={GreenColor}>
        타이포그래피 사용법
      </Typography>
    </S.Container>
  );
}

export default Temp;
