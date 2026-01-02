
import { Benefit, FAQItem, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Santos',
    role: 'Ex-Analista Financeiro',
    content: 'Eu estava preso em uma rotina de 10 horas. O capítulo sobre reserva de emergência foi o que me salvou de quebrar.',
    avatar: 'https://picsum.photos/seed/ricardo/100/100'
  },
  {
    id: '2',
    name: 'Mariana Lima',
    role: 'Ex-Vendedora',
    content: 'O manual é pé no chão. Me ensinou que coragem sozinha não paga boleto. Fiz minha transição segura em 4 meses.',
    avatar: 'https://picsum.photos/seed/mariana/100/100'
  },
  {
    id: '3',
    name: 'Julio César',
    role: 'Empreendedor Digital',
    content: 'Saí do CLT sem medo porque já tinha testado minha fonte de renda paralela como o guia ensina no capítulo 2.',
    avatar: 'https://picsum.photos/seed/julio/100/100'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'A Mentira da Liberdade',
    description: 'Entenda por que "ser dono do seu tempo" sem disciplina é o atalho para o desespero.',
    icon: '🚫'
  },
  {
    title: 'Planejamento de Salto',
    description: 'As 3 perguntas fundamentais que você deve responder antes de assinar sua demissão.',
    icon: '🪂'
  },
  {
    title: 'Renda Online Real',
    description: 'A diferença entre a ilusão dos gurus e o mercado digital que exige consistência brutal.',
    icon: '💻'
  },
  {
    title: 'Primeiros Passos',
    description: 'Como conseguir seus primeiros clientes usando sua própria rede de contatos atual.',
    icon: '🤝'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Quanto tempo de reserva eu preciso?',
    answer: 'O guia recomenda de 3 a 6 meses do seu custo de vida atual como o mínimo absoluto para uma transição sem pânico.'
  },
  {
    question: 'Posso começar enquanto ainda trabalho?',
    answer: 'Sim! A orientação é justamente testar seu projeto paralelo à noite e nos fins de semana antes de abandonar o barco.'
  },
  {
    question: 'É garantido que vou ganhar dinheiro?',
    answer: 'Não existe mágica. O guia mostra a realidade nua e crua: você vai trabalhar 3x mais no começo, mas trabalhando para você.'
  }
];
