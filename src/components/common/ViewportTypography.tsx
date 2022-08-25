import styled, { DefaultTheme } from 'styled-components';

type ViewportTypographyProps = {
  size?: '2' | '3' | '5' | '4' | '6' | '10';
  weight?: '400' | '500' | '600' | '700' | '900';
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  lineHeight?: '24' | '32' | '34';
  theme: DefaultTheme;
};

const ViewportTypography = styled.p<ViewportTypographyProps>`
  font-size: ${(props) => `${props.size}vw` || '2vw'};
  font-weight: ${(props) => props.weight || '500'};
  color: ${(props) => props.color || 'black'};
  margin-bottom: ${(props) => props.marginBottom || '0'}px;
  margin-top: ${(props) => props.marginTop || '0'}px;
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : null)};
`;

export default ViewportTypography;
