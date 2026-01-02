
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  label?: string;
  className?: string;
  isFloating?: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ label, className = "", isFloating = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 24,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  if (isFloating) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-float pointer-events-none md:pointer-events-auto">
        <div className="bg-orange-600 text-white p-4 rounded-2xl shadow-[0_20px_60px_-15px_rgba(234,88,12,0.6)] border-2 border-white/20 flex flex-col items-center backdrop-blur-md">
          <p className="text-[9px] uppercase font-black tracking-widest mb-1 opacity-80">Corre! Expira em</p>
          <div className="flex space-x-2 text-xl font-black font-mono">
            <span>{format(timeLeft.hours)}</span>
            <span className="animate-pulse">:</span>
            <span>{format(timeLeft.minutes)}</span>
            <span className="animate-pulse">:</span>
            <span>{format(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-4 px-8 rounded-2xl inline-flex flex-col items-center ${className}`}>
      {label && <span className="font-black text-[10px] uppercase tracking-widest mb-2 opacity-80">{label}</span>}
      <div className="flex space-x-4 text-3xl md:text-4xl font-black font-mono tracking-tighter">
        <div className="flex flex-col items-center">
          <span>{format(timeLeft.hours)}</span>
          <span className="text-[8px] uppercase font-bold opacity-50 tracking-widest">Hrs</span>
        </div>
        <span className="opacity-30 mt-1">:</span>
        <div className="flex flex-col items-center">
          <span>{format(timeLeft.minutes)}</span>
          <span className="text-[8px] uppercase font-bold opacity-50 tracking-widest">Min</span>
        </div>
        <span className="opacity-30 mt-1">:</span>
        <div className="flex flex-col items-center">
          <span>{format(timeLeft.seconds)}</span>
          <span className="text-[8px] uppercase font-bold opacity-50 tracking-widest">Seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
