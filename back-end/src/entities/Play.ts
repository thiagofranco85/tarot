import { uuidv7 } from "uuidv7";
import { ICard } from "./interfaces/ICard";
import { Subjects } from "./types/enums/Subjects";

export class Play<T extends ICard> {

  private _id: string;
  private _question: string;
  private _cards: T[];
  private _subjects: Subjects[];
  private _numberOfCards: number;
  private readonly _limitOfNumberOfCards: number = 3;

  constructor({id, numberOfCards, question}: {id?: string, numberOfCards: number, question: string}) {
    this._id = id ?? uuidv7();
    this._numberOfCards = this.verifyNumberOfCards(numberOfCards);
    this._question = question;
    this._cards = [];
    this._subjects = [];
  }

  getId(): string {
    return this._id;
  }

  getCards(): readonly T[] {
    return [...this._cards]; // Retorna cópia para imutabilidade
  }

  getSubjects(): readonly Subjects[] {
    return [...this._subjects]; // Retorna cópia para imutabilidade
  }

  getQuestion(): string {
    return this._question;
  }

  private verifyNumberOfCards(numberOfCards: number): number {
    if (numberOfCards > this._limitOfNumberOfCards) {
      throw new Error(
        `You can't play with more than ${this._limitOfNumberOfCards} cards`,
      );
    }

    return numberOfCards;
  }

  private verifyNumberOfSubjectsAndCards(): void {
    if (this._subjects.length !== this._cards.length) {
      throw new Error(`Number of subjects and cards must be the same`);
    }
  }

  public addCard(subject: Subjects, card: T): void {
    if (this._cards.length >= this._numberOfCards) {
      throw new Error(`You can't add more than ${this._numberOfCards} cards`);
    }

    if (this._cards.some((c) => c.name === card.name)) {
      throw new Error("You can't add the same card twice");
    }

    if (this._subjects.includes(subject)) {
      throw new Error("You can't add the same subject twice");
    }

    this._subjects.push(subject);
    this._cards.push(card);
  }

  public buildCompleteQuestion(): string {
    this.verifyNumberOfSubjectsAndCards();
    
    if (this._cards.length === 0) {
      throw new Error("No cards added to the play");
    }

    const typeOfCard = this._cards[0].constructor.name;
    let completeQuestion = `Perguntei ao ${typeOfCard} sobre: ${this._question}. A resposta foi: `;

    for (let i = 0; i < this._subjects.length; i++) {
      const separator = i === this._subjects.length - 1 ? "." : ", ";
      completeQuestion += `${this._subjects[i]}: ${this._cards[i].name}${separator}`;
    }

    completeQuestion += ` Aja como um tarólogo experiente e intuitivo, com profundo conhecimento 
    do simbolismo das cartas de tarot. Seu objetivo é fornecer uma interpretação clara, 
    perspicaz e útil, que vá além do significado literal. A interpretação não deve iludir o consulente, 
    com possibilidades irreais ou falsas esperanças. A interpretação deve ser sincera e prática, 
    ajudando o consulente a compreender melhor sua situação e a tomar decisões informadas.

    A sua resposta vai alimentar uma API que retornará a resposta para o usuário final, portante, se o 
    usuário não falou seu gênero, utilize termos neutros. 
    
    O texto da sua resposta deve ser em Português do Brasil e dividido em parágrafos.

    Os parágrafos devem vir precedidos de título com a nota conforme a seguir: **Título do Parágrafo**.

    O 1º parágrafo: Visão Geral: Um parágrafo conciso que resume a mensagem central da jogada.

    Os parágrafos seguintes: Interpretação das Cartas: Um parágrafo para cada carta, detalhando seu significado
    individual e como ela se relaciona com o assunto à qual foi designado e a pergunta do consulente.

    O último parágrafo: Síntese e Conselho: Um parágrafo final que integra as interpretações das cartas
    em uma mensagem coesa, oferecendo conselhos práticos ou reflexões para o consulente.
    `; 

    return completeQuestion;
  }
}