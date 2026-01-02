
import React from 'react';

interface CTAButtonProps {
  label: string;
  sublabel?: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, sublabel, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden bg-orange-500 hover:bg-orange-400 text-white px-8 py-6 rounded-xl font-black text-xl md:text-2xl shadow-[0_0_50px_-10px_rgba(249,115,22,0.8)] transform transition-all hover:scale-105 active:scale-95 flex flex-col items-center border-b-4 border-orange-700 ${className}`}
    >
      <span className="relative z-10 tracking-tighter uppercase">{label}</span>
      {sublabel && <span className="text-[10px] md:text-xs opacity-90 font-bold mt-1 uppercase tracking-widest">{sublabel}</span>}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 1.8s infinite;
        }
      `}</style>
    </button>
  );
};

export default CTAButton;
