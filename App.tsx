
import React from 'react';
import CountdownTimer from './components/CountdownTimer.tsx';
import CTAButton from './components/CTAButton.tsx';
import FreedomChat from './components/FreedomChat.tsx';
import { TESTIMONIALS, BENEFITS, FAQS } from './constants.tsx';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // URL da capa do ebook atualizada conforme solicitação do usuário
  const ebookCoverUrl = "https://i.imgur.com/KiI6NID.png";

  return (
    <div className="relative min-h-screen bg-dark-ebook text-slate-100 selection:bg-yellow-500 selection:text-black font-sans">
      {/* Fixed Top Countdown */}
      <div className="bg-yellow-500 text-black py-2 flex justify-center items-center space-x-4 sticky top-0 z-50 shadow-xl">
        <span className="font-black text-[10px] md:text-xs uppercase tracking-tighter">OFERTA ESPECIAL: O MANUAL QUE VOCÊ GOSTARIA DE TER LIDO</span>
        <div className="h-4 w-[1px] bg-black/20"></div>
        <CountdownTimer className="bg-transparent text-black py-0 px-0 scale-75" />
      </div>

      {/* Floating Timer */}
      <CountdownTimer isFloating />

      {/* Hero Section */}
      <header className="relative pt-20 pb-24 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-yellow-500/10 to-transparent -z-10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12 text-center lg:text-left">
            <span className="inline-block bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-4 py-1 rounded-md text-xs font-bold mb-6 tracking-widest uppercase">
              Guia Definitivo
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
              Tudo que <span className="text-yellow-500">VOCÊ PRECISA SABER</span> Antes de LARGAR O CLT
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed italic border-l-4 border-yellow-500 pl-6 py-2">
              "Por alguém que por anos se iludiu com o sonho dos outros. Este é o manual que eu gostaria de ter lido antes de tomar a decisão mais importante da minha vida."
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <CountdownTimer label="O preço sobe em:" className="bg-white/5 border border-white/10 scale-90" />
              <CTAButton 
                label="QUERO O MANUAL COMPLETO" 
                sublabel="Acesso imediato para download"
                onClick={scrollToPricing}
              />
              <div className="flex items-center space-x-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                 <span className="flex items-center">⭐ 4.9/5 AVALIAÇÃO</span>
                 <span>•</span>
                 <span>🔒 PAGAMENTO CRIPTOGRAFADO</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12 relative">
            <img 
              src={ebookCoverUrl}
              alt="Capa do Ebook Guia Anti-CLT" 
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(251,191,36,0.3)] transform hover:-translate-y-2 transition-transform duration-500 rounded-lg"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-black px-6 py-4 rounded-lg font-black text-xl shadow-2xl animate-bounce">
               -80% OFF
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 bg-white/5 border-y border-white/10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Introdução</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">Você não está louco. <br/><span className="text-slate-500">Mas coragem sozinha não paga boleto.</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-400 leading-relaxed">
              Querer sair do CLT para tentar algo novo é corajoso. É um sentimento que vem batendo na porta há meses. Mas a maioria das pessoas se perde porque confunde vontade com preparo.
            </p>
            <p className="text-slate-400 leading-relaxed border-l border-yellow-500/30 pl-8">
              "Esse guia foi criado para ser o manual que eu gostaria de ter lido antes de sair do meu emprego achando que ia ficar rico do dia para a noite."
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Capítulo 1: <span className="text-yellow-500">A Mentira da Liberdade</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <h4 className="text-slate-500 font-bold mb-4 uppercase text-xs tracking-widest">A Ilusão</h4>
                <p className="text-xl font-bold mb-4 italic">"Liberdade sem renda é prisão com vista."</p>
                <p className="text-sm text-slate-500">Linda, mas continua sendo prisão. Não pule sem rede.</p>
             </div>
             <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <h4 className="text-slate-500 font-bold mb-4 uppercase text-xs tracking-widest">A Realidade</h4>
                <p className="text-xl font-bold mb-4">Você vai trocar patrão por cliente.</p>
                <p className="text-sm text-slate-500">E o cliente pode ser mais exigente que qualquer chefe que você já teve.</p>
             </div>
             <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <h4 className="text-slate-500 font-bold mb-4 uppercase text-xs tracking-widest">A Verdade</h4>
                <p className="text-xl font-bold mb-4">Liberdade vem com disciplina.</p>
                <p className="text-sm text-slate-500">Sem ela, você vira escravo do caos. Empreender é trabalhar diferente, não menos.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Chapter 2 - Planning */}
      <section className="py-24 bg-yellow-500 px-4 text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase italic">Planejamento é o novo coragem</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black text-white p-8 rounded-2xl">
              <div className="text-4xl font-black mb-4 opacity-30">01</div>
              <h4 className="font-bold text-lg mb-2">Reserva de Emergência?</h4>
              <p className="text-sm opacity-70">3 a 6 meses é o mínimo absoluto. Menos que isso é se jogar no escuro.</p>
            </div>
            <div className="bg-black text-white p-8 rounded-2xl">
              <div className="text-4xl font-black mb-4 opacity-30">02</div>
              <h4 className="font-bold text-lg mb-2">Viver sem salário fixo?</h4>
              <p className="text-sm opacity-70">Faça as contas: aluguel, comida, imprevistos. Multiplique por 6.</p>
            </div>
            <div className="bg-black text-white p-8 rounded-2xl">
              <div className="text-4xl font-black mb-4 opacity-30">03</div>
              <h4 className="font-bold text-lg mb-2">Fonte de renda ativa?</h4>
              <p className="text-sm opacity-70">Já testou? Já vendeu algo? Ou sua idéia ainda é só teoria?</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
             <CountdownTimer className="bg-black border-2 border-black/20 text-white shadow-xl" label="Vagas com desconto terminam em:" />
             <CTAButton label="QUERO APRENDER A PLANEJAR" className="bg-black border-slate-800 hover:bg-slate-900 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Real Story */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-4 block">História Real</span>
          <h2 className="text-3xl md:text-4xl font-black mb-10">O dia que meu mundo virou de cabeça pra baixo</h2>
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>Trabalhei quase 7 anos em uma empresa. Acreditei na cultura, vesti a camisa, cumpri metas.</p>
            <div className="bg-red-600/10 border-l-4 border-red-600 p-8 my-10">
               <h3 className="text-white font-black text-2xl">650 pessoas demitidas sem nada.</h3>
            </div>
            <p>Foi nesse baque que decidi: <span className="text-white font-bold">nunca mais eu ia depender de ninguém pra viver.</span></p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-20 uppercase">Os números que <span className="text-yellow-500 underline decoration-2 underline-offset-8">ninguém quer te mostrar</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8">
              <div className="text-5xl font-black text-yellow-500 mb-2">73%</div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Desistem no 1º ano</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-black text-yellow-500 mb-2">85%</div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Sem reserva adequada</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-black text-yellow-500 mb-2">3x</div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Mais trabalho no início</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-black text-yellow-500 mb-2">40%</div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Voltam para o CLT</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Diagnostic */}
      <section className="py-24 bg-dark-ebook px-4 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <FreedomChat />
      </section>

      {/* Final Offer */}
      <section id="pricing" className="py-32 px-4 text-center bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
           <div className="text-[200px] font-black leading-none">CLT</div>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">Saia do CLT com direção</h2>
          <p className="text-xl text-slate-600 mb-12">Você não precisa de um milagre. <br/><span className="text-black font-black uppercase">Você precisa de um plano.</span></p>
          
          <div className="bg-slate-100 p-8 md:p-12 rounded-[2rem] shadow-2xl mb-12 border-2 border-black transform hover:scale-[1.02] transition-transform">
             <div className="text-slate-400 line-through text-2xl font-bold mb-2">De R$ 97,00</div>
             <div className="text-6xl md:text-8xl font-black text-orange-600 mb-4 tracking-tighter">R$ 19,97</div>
             <p className="font-bold text-sm text-slate-500 mb-8 uppercase tracking-widest">Apenas Hoje • Acesso Vitalício</p>
             
             <div className="flex flex-col items-center space-y-6">
                <CountdownTimer className="bg-orange-600 border border-orange-700 text-white animate-pulse" label="O desconto expira em:" />
                <CTAButton 
                  label="EU QUERO MINHA LIBERDADE" 
                  className="w-full text-2xl py-8 shadow-[0_20px_50px_rgba(249,115,22,0.4)]"
                />
             </div>
             
             <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-black uppercase text-slate-400">
                <div className="flex flex-col items-center"><span className="text-lg mb-1">📖</span> Ebook PDF</div>
                <div className="flex flex-col items-center"><span className="text-lg mb-1">📊</span> Planilhas</div>
                <div className="flex flex-col items-center"><span className="text-lg mb-1">✅</span> Checklists</div>
                <div className="flex flex-col items-center"><span className="text-lg mb-1">🔄</span> Atualizações</div>
             </div>
          </div>
          
          <p className="text-slate-400 text-sm italic">7 dias de garantia incondicional. Sem perguntas.</p>
        </div>
      </section>

      {/* Footer Timer */}
      <footer className="bg-black py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12">
          <div className="text-center">
            <h3 className="text-yellow-500 font-black text-2xl uppercase mb-6 italic tracking-tighter">Sua última chance de mudar o jogo</h3>
            <CountdownTimer className="bg-yellow-500/10 border-yellow-500/20 text-yellow-500 scale-110" />
          </div>
          <p className="text-slate-600 text-xs">© 2024 Guia Anti-CLT. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
