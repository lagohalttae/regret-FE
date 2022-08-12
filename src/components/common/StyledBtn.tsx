import styled from 'styled-components';

type StyleBtnProps = {
  size?: '1' | '2' | '4' | '6' | '10';
  weight?: '400' | '500' | '600' | '700' | '900';
  color?: string;
};

const StyledBtn = styled.button<StyleBtnProps>`
  align-items: center;
  font-size: ${(props) => props.size || 2.5}vw;
  font-weight: ${(props) => props.weight || '500'};
  color: ${(props) => props.color || 'black'};
  padding: 10px;
  max-height: 120px;
  border-radius: 50px;
  background-color: white;
  border-color: #090909;
  border-width: 2px;
  &:hover {
    cursor: pointer;
  }
`;

export default StyledBtn;
