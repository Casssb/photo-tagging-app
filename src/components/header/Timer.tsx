import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';

const formatTime = (seconds: number) => {
  const secsToMs = seconds * 1000;
  const result = new Date(secsToMs).toISOString().slice(11, 19);

  return result;
};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return <div>{`${formatTime(seconds)}`}</div>;
};

export default Timer;
