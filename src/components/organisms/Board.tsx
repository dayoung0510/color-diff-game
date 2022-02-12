import React from 'react';
import Cell from 'components/atoms/Cell';
import Grid from 'components/atoms/Grid';
import useCreateColorArray from 'hooks/useCreateColorsArray';

type Props = {
  stage: number;
  handleCorrect: () => void;
  handleIncorrect: () => void;
};

const Board: React.FC<Props> = ({ stage, handleCorrect, handleIncorrect }) => {
  const { colorArray, answerNumber } = useCreateColorArray(stage);

  //빙고판 한 변의 길이
  const side = Math.round((stage + 0.5) / 2) + 1;

  const handleAnswer = (idx: number) => {
    if (idx === answerNumber) {
      handleCorrect();
    } else {
      handleIncorrect();
    }
  };

  return (
    <Grid side={side}>
      {colorArray.map((color, idx) => (
        <Cell key={idx} bgColor={color} onClick={() => handleAnswer(idx)} />
      ))}
    </Grid>
  );
};

export default React.memo(Board);
