import React from 'react';
import INITIAL_TIME from 'App';

type Props = {
  handleInitialize: () => void;
};

const Fail: React.FC<Props> = ({ handleInitialize }) => {
  return (
    <div>
      <div>GAME OVER!</div>
      <div>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleInitialize}
        >
          다시하기
        </button>
      </div>
    </div>
  );
};

export default Fail;
