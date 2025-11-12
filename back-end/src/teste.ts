import { Lenormand } from './entities/Lenormand';
import { Tarot } from './entities/Tarot';
import { LenormandCard } from './entities/types/enums/LenormandCard';
import { TarotCards } from './entities/types/enums/TarotCards';
/*
const lennormand1 = new Lennormand(null, LennormandCards.Rider);
const lennormand2 = new Lennormand(null, LennormandCards.Mountain);

const pergunta = `Fiz uma pergunta ao baralho cigano. A pergunta foi: 
Como será meu passeio no parque amanhã?
A combinaçao de cartas que saiu foi: ${lennormand1.name} e ${lennormand2.name}.
Qual é a resposta do baralho cigano?`;
*/

/*
const tarot1 = new Tarot(undefined, new MajorArcana(null, Trump.Death));
const tarot2 = new Tarot(new MinorArcana(null, Suit.Spades, Rank.Nine));

const pergunta = `Fiz uma pergunta ao Tarot. A pergunta foi: 
Como será meu passeio no parque amanhã?
A pergunta foi respondida com combinaçao de 1 arcano maior e 1 arcano menor, sendo que o menor complementa o sentido do maior:
${tarot1.majorArcana?.fullName} e ${tarot2.minorArcana?.fullName}.
Qual é a resposta do Tarot?`;


const tarot2 = new Tarot(new MinorArcana(null, Suit.Clubs, Rank.Eight));
const pergunta = `Pedi um conselho para o meu dia ao Tarot.
A pergunta foi respondida com 1 arcano menor:
  ${tarot2.minorArcana?.fullName}.
Qual é a resposta do Tarot?`;

console.log(pergunta);

(async function () {
  const r = new IAGemini(pergunta);
  const resp = await r.sendRequest();
  console.log(resp);
})();
*/


const rider = new Lenormand({ card: LenormandCard['Rider'] });
console.log(rider)

try {
  console.log(TarotCards.AceOfWands)
  const aceOfWands = new Tarot({ card: TarotCards.AceOfWands });
  console.log(aceOfWands);  
} catch (error) {
  throw new Error("Error creating Tarot card: " + error);
}

