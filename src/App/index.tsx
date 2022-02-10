import React, { useEffect, useState, useCallback } from 'react';
import Status from 'components/organisms/Status';
import Board from 'components/organisms/Board';
import Fail from 'components/organisms/Fail';

const INITIAL_STAGE = 1;
const INITIAL_TIME = 15000;
const INITIAL_SCORE = 0;

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(true);
  const [stage, setStage] = useState(INITIAL_STAGE);
  const [second, setSecond] = useState(INITIAL_TIME);
  const [score, setScore] = useState(INITIAL_SCORE);

  const handleInitialize = () => {
    setIsSuccess(true);
    setSecond(INITIAL_TIME);
  };

  const handleNextStage = useCallback(() => {
    setStage((prev) => prev + 1);
    setSecond(INITIAL_TIME);
  }, []);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else {
        setIsSuccess(false);
        clearInterval(countDown);
      }
    }, 1000);

    return () => clearInterval(countDown);
  }, [second]);

  return (
    <div className="App">
      {isSuccess ? (
        <div>
          <Status
            second={second}
            stage={stage}
            score={score}
            handleNextStage={handleNextStage}
          />
          <Board stage={stage} handleNextStage={handleNextStage} />
        </div>
      ) : (
        <Fail handleInitialize={handleInitialize} />
      )}
    </div>
  );
};

export default App;
