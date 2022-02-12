import React, { useEffect, useState, useCallback } from 'react';
import Status from 'components/organisms/Status';
import Board from 'components/organisms/Board';
import Fail from 'components/organisms/Fail';

const INITIAL_STAGE = 1;
const INITIAL_TIME = 15000;
const INITIAL_SCORE = 0;

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [stage, setStage] = useState(INITIAL_STAGE);
  const [second, setSecond] = useState(INITIAL_TIME);
  const [score, setScore] = useState(INITIAL_SCORE);

  const handleInitialize = () => {
    setIsPlaying(true);
    setSecond(INITIAL_TIME);
  };

  const handleCorrect = useCallback(() => {
    setStage((prev) => prev + 1);
    setSecond(INITIAL_TIME);
  }, []);

  const handleIncorrect = useCallback(() => {
    setSecond((prev) => prev - 3);
  }, []);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else {
        setIsPlaying(false);
        clearInterval(countDown);
      }
    }, 1000);

    return () => clearInterval(countDown);
  }, [second]);

  return (
    <div className="App">
      {isPlaying ? (
        <div>
          <Status second={second} stage={stage} score={score} />
          <Board
            stage={stage}
            handleCorrect={handleCorrect}
            handleIncorrect={handleIncorrect}
          />
        </div>
      ) : (
        <Fail handleInitialize={handleInitialize} />
      )}
    </div>
  );
};

export default React.memo(App);
