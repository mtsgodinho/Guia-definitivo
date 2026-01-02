
import { GoogleGenAI } from "@google/genai";

export async function analyzeFreedomPotential(currentJob: string, mainFrustration: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analise a situação de um profissional que trabalha como ${currentJob} e sente a frustração de ${mainFrustration}.
    Crie um parágrafo persuasivo (em Português) de 3 a 4 linhas explicando por que ele é um candidato perfeito para largar o CLT e como o "Guia Anti-CLT" pode ser a chave para ele recuperar sua liberdade.
    Seja empático, direto e use gatilhos mentais de urgência e possibilidade.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text || "Parece que você está no momento certo para mudar. O guia vai te mostrar o caminho exato!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sua liberdade está mais próxima do que você imagina. O primeiro passo é o conhecimento.";
  }
}
