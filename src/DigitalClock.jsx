import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Clock</h1>
        <div
          style={{
            fontSize: "2em",
            fontFamily: "monospace",
            textAlign: "center",
          }}
        >
          {formatTime(time)}
        </div>
      </header>
    </div>
  );
};
export default DigitalClock;
