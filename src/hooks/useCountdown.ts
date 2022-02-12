import { useEffect, useState } from 'react';

const INITIAL_TIME = 15000;

const useCountdown = () => {
  const [second, setSecond] = useState(INITIAL_TIME);
  const [isPlaying, setIsPlaying] = useState(true);

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

  return { setSecond, second, setIsPlaying, isPlaying };
};

export default useCountdown;
