import styled, { css } from 'styled-components';

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
};

const SIZE = {
  sm: css`
    font-size: 0.875rem;
    padding: 8px 12px;
    border-radius: 4px;
  `,
  md: css`
    font-size: 1rem;
    padding: 12px 16px;
    border-radius: 8px;
  `,
  lg: css`
    font-size: 1.25rem;
    padding: 16px 20px;
    border-radius: 12px;
  `,
};

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
    &:hover {
      background: linear-gradient(#2421f9, #e012c7);
    }
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
    &:hover {
      background: linear-gradient(#bdbdcf, #bcb1b1);
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
  &:hover {
    background: #d4d4d4;
    color: #f5f5f5;
    box-shadow: none;
  }
`;

export const StyledBtn = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 8px;
  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.size && SIZE[props.size]}
  ${(props) => props.disabled && DISABLED}
`;

//참고 사이트
// https://github.com/huferr/Components-With-Typescript/tree/main/src/components/Button
