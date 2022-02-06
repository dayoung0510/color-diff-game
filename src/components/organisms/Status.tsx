import React from 'react';

type Props = {
  second: number;
  stage: number;
  score: number;
  handleNextStage: () => void;
};

const Status: React.FC<Props> = ({ second, stage, score, handleNextStage }) => {
  return (
    <div>
      <div>남은시간 : {second}</div>
      <div>스테이지 : {stage}</div>
      <div>점수 : {score}</div>
      <div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNextStage}
        >
          next level
        </button>
      </div>
    </div>
  );
};

export default Status;
