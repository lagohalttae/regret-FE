import styled from 'styled-components';

type ImageProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;

  src: string;
  height?: string;
  reverse?: boolean;
};

const PepeImage = styled.img<ImageProps>`
  position: absolute;
  top: ${(props) => props.top || 'none'};
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.right || 'none'};
  bottom: ${(props) => props.bottom || 'none'};
  src: ${(props) => props.src};
  height: ${(props) => props.height || '100vh'};
  transform: ${(props) => props.reverse && 'scaleX(-1)'};
`;

export default PepeImage;
