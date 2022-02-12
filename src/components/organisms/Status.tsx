import React from 'react';

type Props = {
  second: number;
  stage: number;
  score: number;
};

const Status: React.FC<Props> = ({ second, stage, score }) => {
  return (
    <div>
      <div>남은시간 : {second}</div>
      <div>스테이지 : {stage}</div>
      <div>점수 : {score}</div>
    </div>
  );
};

export default Status;
