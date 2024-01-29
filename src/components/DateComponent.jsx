/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDate(new Date());
    }, 30 * 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <div className="time_div">
      <div className="date_div">
        <h3>
          {day}/{month + 1}/{year}
        </h3>
      </div>
      <div className="clock_div">
        <h1>
          {hours < 10 ? `0${hours}` : hours} :{" "}
          {minutes < 10 ? `0${minutes}` : minutes}
        </h1>
      </div>
    </div>
  );
};
