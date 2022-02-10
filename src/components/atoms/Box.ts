import styled from 'styled-components';

type Props = {
  color?: string;
};

const Box = styled.div<Props>`
  background-color: gray;
  background-color: ${({ color }) => color};
`;

export default Box;
