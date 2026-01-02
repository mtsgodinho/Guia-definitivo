
import React from 'react';
import CountdownTimer from './components/CountdownTimer.tsx';
import CTAButton from './components/CTAButton.tsx';
import FreedomChat from './components/FreedomChat.tsx';
import { TESTIMONIALS, BENEFITS, FAQS } from './constants.tsx';

const App: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ebookCoverUrl = "https://i.imgur.com/KiI6NID.png";

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-orange-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. RELÓGIO FIXO TOPO */}
      <div className="bg-red-600 text-white py-2 flex justify-center items-center space-x-4 sticky top-0 z-[60] shadow-2xl">
        <span className="font-black text-[9px] md:text-xs uppercase tracking-widest animate-pulse">Atenção: Oferta por tempo limitado!</span>
        <div className="h-4 w-[1px] bg-white/20"></div>
        <CountdownTimer className="bg-transparent text-white py-0 px-0 scale-75" />
      </div>

      {/* 2. RELÓGIO FLUTUANTE */}
      <CountdownTimer isFloating />

      {/* Hero Section */}
      <header className="relative pt-12 md:pt-20 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-orange-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-widest">Acesso Imediato Liberado</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter">
              CHEGA DE <span className="text-red-600 underline decoration-red-600">DAR SEU SANGUE</span> PARA O SONHO DOS OUTROS
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed italic border-l-8 border-orange-500 pl-6">
              O manual proibido para quem quer largar o CLT com segurança, estratégia e dinheiro no bolso.
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <CTAButton 
                label="QUERO MEU ACESSO AGORA" 
                sublabel="R$ 19,90 - Preço promocional de lançamento"
                onClick={scrollToPricing}
              />
              <div className="flex items-center space-x-6 text-[11px] font-black uppercase tracking-tighter text-slate-500">
                 <span className="flex items-center"><span className="text-orange-500 mr-1 text-base">★</span> 12.432 Alunos</span>
                 <span className="flex items-center"><span className="text-orange-500 mr-1 text-base">✔</span> Garantia Total</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12 relative group">
            <img 
              src={ebookCoverUrl}
              alt="Ebook Capa" 
              className="w-full h-auto drop-shadow-[0_0_80px_rgba(249,115,22,0.3)] transform rotate-3 group-hover:rotate-0 transition-all duration-700 rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800";
              }}
            />
            <div className="absolute -top-6 -right-6 bg-orange-600 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-black text-xl shadow-2xl animate-float border-4 border-white">
               <span>OFF</span>
               <span>80%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section - Dor */}
      <section className="py-24 bg-white/5 border-y border-white/10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic tracking-tighter">Até quando você vai aceitar <br/><span className="text-orange-500">migalhas?</span></h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-black/40 p-10 rounded-3xl border border-white/5">
              <p className="text-slate-400 text-lg leading-relaxed">
                Você acorda, pega trânsito, entrega resultados, recebe bronca e no fim do mês o seu salário mal paga a fatura do cartão. 
                <span className="text-white font-bold block mt-4">Isso não é vida, é sobrevivência.</span>
              </p>
            </div>
            <div className="bg-orange-600 p-10 rounded-3xl text-white">
              <p className="text-xl font-black italic mb-4">"Eu estive exatamente onde você está agora."</p>
              <p className="opacity-90 leading-relaxed">
                Neste guia, eu não te vendo sonhos. Eu te entrego o plano de guerra que eu usei para sair do escritório e faturar o meu salário de um ano em apenas 3 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELÓGIO MEIO DA PÁGINA */}
      <section className="py-20 bg-black px-4">
        <div className="max-w-3xl mx-auto bg-white/5 p-12 rounded-[3rem] border-2 border-dashed border-orange-500/30 flex flex-col items-center">
          <h3 className="text-2xl font-black mb-6 uppercase text-center italic tracking-widest text-orange-500">O cronômetro não para!</h3>
          <CountdownTimer className="bg-black/50 border border-white/10 text-orange-500 mb-8" />
          <CTAButton label="APROVEITAR O DESCONTO" onClick={scrollToPricing} className="w-full md:w-auto" />
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 italic">O QUE VOCÊ VAI <span className="text-orange-500">DOMINAR:</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{benefit.icon}</div>
                <h4 className="text-xl font-black mb-4 uppercase text-orange-500 italic">{benefit.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white/5 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 uppercase italic tracking-tighter">Quem já <span className="text-green-500">pulou do barco</span> com segurança:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-black p-8 rounded-3xl border border-white/10 relative">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.avatar} className="w-14 h-14 rounded-full border-2 border-orange-500" alt={t.name} />
                  <div>
                    <h5 className="font-black text-white italic">{t.name}</h5>
                    <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 italic leading-relaxed">"{t.content}"</p>
                <div className="absolute top-4 right-8 text-6xl text-white/5 font-black">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section className="py-24 px-4">
        <FreedomChat />
      </section>

      {/* Oferta Final */}
      <section id="pricing" className="py-32 px-4 bg-orange-600 relative overflow-hidden text-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase italic tracking-tighter leading-none">ÚLTIMA CHAMADA</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 uppercase tracking-tighter">O preço vai subir. Não diga que eu não avisei.</p>
          
          <div className="bg-black text-white p-12 md:p-16 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-4 border-white/10 transform -rotate-1">
             <div className="text-slate-500 line-through text-2xl font-bold mb-4">De R$ 197,00</div>
             <div className="flex justify-center items-center space-x-4 mb-8">
                <span className="text-2xl font-bold opacity-50 uppercase tracking-widest">Por apenas:</span>
                <div className="text-7xl md:text-9xl font-black text-orange-500 tracking-tighter">R$ 19,90</div>
             </div>
             
             <div className="flex flex-col items-center space-y-8">
                <CountdownTimer className="bg-orange-600/10 border border-orange-600/30 text-orange-500 scale-125" label="OFERTA EXPIRA EM:" />
                <CTAButton 
                  label="LIBERAR MEU ACESSO VITALÍCIO" 
                  className="w-full text-2xl md:text-4xl py-10 bg-orange-600 hover:bg-orange-500 animate-pulse border-orange-800"
                />
             </div>
             
             <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs font-black uppercase text-slate-500 tracking-widest">
                <span className="flex items-center">✅ PDF COMPLETO</span>
                <span className="flex items-center">✅ 3 BÔNUS EXCLUSIVOS</span>
                <span className="flex items-center">✅ ACESSO PELO CELULAR</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. RELÓGIO RODAPÉ */}
      <footer className="bg-black py-24 px-4 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-xl font-black uppercase italic text-orange-500 mb-8">Ainda em dúvida? O tempo está acabando...</h4>
          <CountdownTimer className="bg-white/5 border border-white/10 text-white mb-12 scale-110" />
          <div className="flex justify-center space-x-8 mb-12">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" className="h-8 grayscale opacity-50" alt="Paypal" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" className="h-8 grayscale opacity-50" alt="Visa" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" className="h-8 grayscale opacity-50" alt="Mastercard" />
          </div>
          <p className="text-slate-700 text-[10px] uppercase font-bold tracking-[0.3em]">© 2024 - GUIA ANTI-CLT - TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
