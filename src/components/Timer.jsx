import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds + 1) % 61);
      console.log(seconds);
    }, 1000);

    return () => setInterval(interval);
  }, [seconds]);

  return (
    <div style={{ marginLeft: "600px", fontSize: "20px" }}>
      <p>Timer: {seconds}</p>
    </div>
  );
};

export default Timer;
