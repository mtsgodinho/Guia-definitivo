
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
      className={`group relative overflow-hidden bg-orange-500 hover:bg-orange-400 text-white px-10 py-6 rounded-2xl font-black text-xl md:text-3xl shadow-[0_15px_40px_-5px_rgba(249,115,22,0.6)] transform transition-all hover:scale-105 active:scale-95 flex flex-col items-center border-b-8 border-orange-700 ${className}`}
    >
      <span className="relative z-10 tracking-tighter uppercase italic">{label}</span>
      {sublabel && <span className="text-[10px] md:text-xs opacity-90 font-bold mt-1 uppercase tracking-widest">{sublabel}</span>}
      
      {/* Efeito de brilho animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-[100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
      </div>
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 3s infinite ease-in-out;
        }
      `}</style>
    </button>
  );
};

export default CTAButton;
