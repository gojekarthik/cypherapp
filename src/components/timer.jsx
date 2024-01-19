import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSync } from '@fortawesome/free-solid-svg-icons';

const Timer = () => {
  const [sessionLength, setSessionLength] = useState(3);
  const [breakLength, setBreakLength] = useState(1);
  const [timer, setTimer] = useState(sessionLength * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(sessionLength * 60);
  };

  return (
    <div className="w-[393px] h-[539.27px] relative">
      <div className="w-[393px] h-[539.27px] left-0 top-0 absolute bg-secondary rounded-2xl border-8 border-black"></div>
      <div className="w-[155px] h-[29px] left-[42px] top-[33px] absolute text-slate-200 text-xl font-black font-['Inter']">
        Session
      </div>
      <div className="w-[212px] h-[33px] left-[42px] top-[176px] absolute text-slate-200 text-xl font-black font-['Inter']">
        Session Length
      </div>
      <div className="w-[212px] h-[33px] left-[42px] top-[294px] absolute text-slate-200 text-xl font-black font-['Inter']">
        Break
      </div>
      <div className="w-[63px] h-[60px] left-[89px] top-[441px] absolute"></div>
      <div className="w-[63px] h-[60px] left-[238px] top-[441px] absolute"></div>
      <div className="w-[267px] h-[115px] left-[104px] top-[77px] absolute text-slate-200 text-[64px] font-black font-['Inter']">
        {formatTime(timer)}
      </div>
      <div className="w-[111px] h-[46px] left-[163px] top-[224px] absolute text-slate-200 text-5xl font-semibold font-['Inter']">
        {String(sessionLength).padStart(2, '0')}
      </div>
      <div className="w-[111px] h-[46px] left-[163px] top-[327px] absolute text-slate-200 text-5xl font-semibold font-['Inter']">
        {String(breakLength).padStart(2, '0')}
      </div>
      <button onClick={toggleTimer} className="w-[63px] h-[60px] left-[89px] top-[441px] absolute">
        {isActive ? (
          <FontAwesomeIcon icon={faPause} className="text-slate-200 text-3xl" />
        ) : (
          <FontAwesomeIcon icon={faPlay} className="text-slate-200 text-3xl" />
        )}
      </button>
      <button onClick={resetTimer} className="w-[63px] h-[60px] left-[238px] top-[441px] absolute">
        <FontAwesomeIcon icon={faSync} className="text-slate-200 text-3xl" />
      </button>
      <div className="w-[303px] h-[0px] left-[42px] top-[418px] absolute bg-slate-200 border-4 border-white"></div>
    </div>
  );
};

export default Timer;
