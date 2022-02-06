import React, { useState } from 'react';
import Score from 'components/organisms/Score';
import Board from 'components/organisms/Board';

const INITIAL_STAGE = 1;
export const INITIAL_TIME = 15;

const App: React.FC = () => {
  const [stage, setStage] = useState(INITIAL_STAGE);
  const [second, setSecond] = useState(INITIAL_TIME);

  const handleSecond = (value: number) => {
    setSecond((prev) => prev + value);
  };

  const handleNextLevel = (value: number) => {
    setStage((prev) => prev + value);
  };

  const handleInitialSecond = () => {
    setSecond(INITIAL_TIME);
  };

  return (
    <div className="App">
      <div>
        <Score
          handleSecond={handleSecond}
          handleStage={handleNextLevel}
          second={second}
          stage={stage}
        />
        <Board />
      </div>
    </div>
  );
};

export default App;
