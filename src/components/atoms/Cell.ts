import styled from 'styled-components';

type Props = {
  bgColor: string;
};

const Cell = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Cell;
