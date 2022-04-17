import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


const formatRemainingTime = time => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  if (seconds <= 9){
    return `${minutes}:0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">

      <div className="value">{formatRemainingTime(remainingTime)}</div>
    </div>
  );
};


const Timer = () => {
    const [duration, setDuration] = useState(0);
    const [key, setKey] = useState(0);
    const [disable, setDisable] = useState(false);


    const handleStart = (add) => {
        setDuration(add);
        setKey(key + 1);
    };
    const handleComplete = (add) => {
        setDuration(global.time + add);
        setKey(key + 1);
    };
  return (
  <div className="container">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          duration={duration}
          isPlaying={true}
          colors={[["#0075FF"]]}
          size={140}
        >
         {(timerProps) => {
        global.time= timerProps.remainingTime; // here you save the remainigTime to the ref
        return renderTime(timerProps);
        }}
        </CountdownCircleTimer>
      </div>

      <div className="button_container">
        <button className="time" disabled={disable} onClick={() => {handleStart(50); setDisable(true)}}>Start Timer</button>
        <button className="time" onClick={() => handleComplete(50)}>Extends +50sec</button>
        </div>
  </div>

  );
};
export default Timer;
