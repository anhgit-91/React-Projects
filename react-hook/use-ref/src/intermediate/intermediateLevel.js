import React, { useState, useRef } from "react";

const InterRef = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerID = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerID.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(timerID.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerID.current);
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const btnStyle = {
    padding: "10px",
    marginLeft: "20px",
  };

  return (
    <div>
      <h3>Stop Watch</h3>
      <p>
        <span>Hours: {hours.toString().padStart(2, "0")} </span>
        <span>Minutes: {minutes.toString().padStart(2, "0")} </span>
        <span>Seconds: {seconds.toString().padStart(2, "0")} </span>
      </p>
      <button style={btnStyle} onClick={handleStart}>
        Start
      </button>
      <button style={btnStyle} onClick={handleStop}>
        Stop
      </button>
      <button style={btnStyle} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default InterRef;
