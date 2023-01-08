import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="timer">⏰ {seconds.toString().padStart(3, "0")}</div>;
};

export default Timer;
