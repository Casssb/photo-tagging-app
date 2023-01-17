import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setWinningTime } from '../../redux/slices/gameSlice';

const formatTime = (seconds: number) => {
  const secsToMs = seconds * 1000;
  const result = new Date(secsToMs).toISOString().slice(11, 19);

  return result;
};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);
  const { isGameOver } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !isGameOver && interval.start();
    if (isGameOver === true) {
      interval.stop;
      dispatch(setWinningTime(seconds));
    }
    return interval.stop;
  }, [isGameOver]);

  return <div>{`${formatTime(seconds)}`}</div>;
};

export default Timer;
