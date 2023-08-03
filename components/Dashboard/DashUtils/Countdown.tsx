"use client";

import React, { useEffect, useState } from "react";

interface Props {
  stopTime: string;
  action?: any;
}

const CountdownTimer: React.FC<Props> = ({ stopTime }) => {
  const targetTime = new Date(stopTime).getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = getTimeRemaining();
      setTimeLeft(timeRemaining);

      if (timeRemaining.total <= 0) {
        clearInterval(interval);
        handleCountdownEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [stopTime]);

  function getTimeRemaining() {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = Math.floor(timeDifference / oneDay);
    const hours = Math.floor((timeDifference % oneDay) / oneHour);
    const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
    const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

    return {
      total: timeDifference,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  function formatTime(value: any) {
    return value < 10 ? `0${value}` : value;
  }

  function handleCountdownEnd() {
    // Add your code here to handle the action when the countdown ends
    console.log("Countdown has ended. Do something here.");
  }

  return (
    <div>
      {timeLeft.total > 0 ? (
        <div className="space-x-1">
          <span className="text-2xl font-bold text-violet-500">
            {formatTime(timeLeft.minutes)}
          </span>
          <span className="text-2xl font-bold text-violet-500">:</span>
          <span className="text-2xl font-bold text-violet-500">
            {formatTime(timeLeft.seconds)}
          </span>
        </div>
      ) : (
        <div>Countdown has ended.</div>
      )}
    </div>
  );
};

export default CountdownTimer;
