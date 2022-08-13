import styled from 'styled-components';
import Typography from '../components/common/Typography';
import { StyledBtn } from '../components/common/StyledBtn';
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

function Temp(): any {
  return (
    <S.Container>
      <StyledBtn color="primary" size="sm">
        Hele
      </StyledBtn>
      <StyledBtn color="primary" size="md">
        Hele
      </StyledBtn>
      <StyledBtn size="lg">Hele</StyledBtn>
      <StyledBtn color="primary" disabled>
        Hele
      </StyledBtn>

      <S.TempBox>styled component 사용법</S.TempBox>
      <Typography weight="700" color={GreenColor}>
        타이포그래피 사용법
      </Typography>
    </S.Container>
  );
}

export default Temp;
