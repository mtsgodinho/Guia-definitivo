
import React, { useState } from 'react';
import { analyzeFreedomPotential } from '../services/geminiService.ts';

const FreedomChat: React.FC = () => {
  const [job, setJob] = useState('');
  const [frustration, setFrustration] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job || !frustration) return;
    setLoading(true);
    const analysis = await analyzeFreedomPotential(job, frustration);
    setResult(analysis);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 max-w-2xl mx-auto my-20">
      <h3 className="text-2xl font-black mb-4 text-center text-white uppercase italic">
        Análise de <span className="text-yellow-500">Potencial</span>
      </h3>
      <p className="text-slate-400 mb-8 text-center text-sm">
        Nossa inteligência vai analisar seu cargo atual e te dizer se você está pronto para o manual.
      </p>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Seu cargo hoje:</label>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="Ex: Analista de Sistemas..."
              className="w-full bg-black/50 px-4 py-4 rounded-xl border border-white/10 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-slate-700"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">O que te trava hoje?</label>
            <textarea
              value={frustration}
              onChange={(e) => setFrustration(e.target.value)}
              placeholder="Falta de tempo, salário baixo, chefe tóxico..."
              className="w-full bg-black/50 px-4 py-4 rounded-xl border border-white/10 text-white focus:border-yellow-500 outline-none transition-all h-32 placeholder:text-slate-700 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-5 rounded-xl transition-all flex items-center justify-center uppercase tracking-tighter text-lg"
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>ANALISANDO...</span>
              </span>
            ) : (
              "Ver meu Diagnóstico"
            )}
          </button>
        </form>
      ) : (
        <div className="bg-yellow-500/5 p-8 rounded-2xl border border-yellow-500/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-yellow-500 font-bold mb-4 flex items-center space-x-2">
             <span className="text-2xl">🤖</span>
             <span className="uppercase text-xs tracking-tighter">Diagnóstico Final:</span>
          </div>
          <p className="text-slate-200 leading-relaxed italic mb-8 border-l-2 border-yellow-500 pl-6 text-lg">
            "{result}"
          </p>
          <button
            onClick={() => setResult(null)}
            className="text-slate-500 text-[10px] font-black hover:text-yellow-500 transition-colors uppercase tracking-widest"
          >
            ← Refazer análise
          </button>
        </div>
      )}
    </div>
  );
};

export default FreedomChat;
