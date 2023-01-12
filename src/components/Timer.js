import React from "react";
import { useState, useEffect } from "react";

let interval;

const Timer = ({ status }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (status) {
      clearInterval(interval);
    }
  }, [status]);

  return <div className="timer">⏰ {seconds.toString().padStart(3, "0")}</div>;
};

export default Timer;
