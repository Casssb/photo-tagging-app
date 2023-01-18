const formatTime = (seconds: number) => {
  const secsToMs = seconds * 1000;
  const result = new Date(secsToMs).toISOString().slice(11, 19);

  return result;
};

export default formatTime;
