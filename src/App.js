import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { FaPlay, FaPause, FaUndo, FaMusic } from 'react-icons/fa';

import './timer.scss';
import churchbell from './static/audio/bells.wav';

const Timer = () => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');

  const startTime = 300;
  const [play] = useSound(churchbell);
  const [timerFinished, setTimerFinished] = useState(false);
  const [seconds, setSeconds] = useState(startTime);
  const [isActive, setIsActive] = useState(false);
  const toggle = () => { setIsActive(!isActive); setTimerFinished(false); };
  const reset = () => { setSeconds(startTime); setIsActive(false); setTimerFinished(false); };

  const playSound = () => { if (!timerFinished) { play(); setTimerFinished(true); } };

  useEffect(() => {
    let interval = null;
    if (seconds <= 0) {
      setIsActive(false);
      playSound();
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, playSound]);

  return (
    <div className='app'>
      <div className='time'>
        <div className={`timer-circle ${isActive ? 'timer-circle-grow' : ''}`}>
          {(Math.floor(seconds / 60))}:{zeroPad(seconds % 60, 2)}
        </div>
      </div>
      <div className='row'>
        <button className={`circle-button button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive
            ? <FaPause />
            : <FaPlay />}
          {/* // 'pause' : 'start'} */}
        </button>
        <button className='circle-button button-primary-inactive' onClick={reset}>
          <FaUndo />
          {/* reset */}
        </button>
        <button className='circle-button button-primary-inactive' onClick={() => play()}>
          <FaMusic />
          {/* sound */}
        </button>
        <button className='circle-button button-primary-inactive' onClick={() => setSeconds((s) => Math.max(0, s + 300))}>
          +5min
        </button>
        <button className='circle-button button-primary-inactive' onClick={() => setSeconds((s) => Math.max(0.0, s - 60))}>
          -1min
        </button>
        <div />
      </div>
    </div>
  );
};

export default Timer;
