import React from 'react';

type Props = {
  handleSecond: (value: number) => void;
  handleStage: (value: number) => void;
  second: number;
  stage: number;
};

const Score: React.FC<Props> = ({
  handleStage,
  handleSecond,
  second,
  stage,
}) => {
  return (
    <div>
      <div>남은시간 : {second}</div>
      <div>스테이지 : {stage}</div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => handleStage(1)}
        >
          next level
        </button>
      </div>
      <div>
        <button className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">
          fail
        </button>
      </div>
    </div>
  );
};

export default Score;
