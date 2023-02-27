import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const toggleStartStop = () => {
    setIsRunning((isRunning) => !isRunning);
  };
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div>
      <p>Time: {time} sec</p>
      <button onClick={toggleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
