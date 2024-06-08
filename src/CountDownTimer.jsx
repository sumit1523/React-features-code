import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const CountDownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, time]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const stopTimer = () => {
    setIsPaused(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(initialTime);
  };

  const restartTimer = () => {
    setTime(initialTime);
    setIsActive(true);
    setIsPaused(false);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <div id="timer">{formatTime(time)}</div>
      <div className="buttons">
        <button
          id="start-button"
          onClick={startTimer}
          disabled={isActive && !isPaused}
        >
          Start
        </button>
        <button
          id="stop-button"
          onClick={stopTimer}
          disabled={!isActive || isPaused}
        >
          Stop
        </button>
        <button id="reset-button" onClick={resetTimer}>
          Reset
        </button>
        <button id="restart-button" onClick={restartTimer}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
