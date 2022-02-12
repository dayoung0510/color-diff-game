import styled from 'styled-components';

type Props = {
  side: number;
};

const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ side }) => `repeat(${side}, 120px)`};
  grid-template-rows: ${({ side }) => `repeat(${side}, 120px)`};
  grid-gap: 5px;
`;

export default Grid;
