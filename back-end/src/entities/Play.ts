import { uuidv7 } from "uuidv7";
import { ICardName } from "./interfaces/ICardName";
import { Subjects } from "./types/Subjects";

export class Play<T extends ICardName> {

  private _id: string | null;
  private _question: string;
  private _cards: T[];
  private _subjects: Subjects[];
  private _numberOfCards: number;
  private _limitOfNumberOfCards: number = 3;


  constructor(id: string | null, numberOfCards: number, question: string) {
    this._id = id === null ? uuidv7() : id;
    this._numberOfCards = this.verifyNumberOfCards(numberOfCards);
    this._question = question;
    this._cards = [];
    this._subjects = [];
  }

  getId(): string | null {
    return this._id;
  }

  getCards(): T[] {
    return this._cards;
  }

  getSubjects(): Subjects[] {
    return this._subjects;
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

  private verifyNumberOfSubjectsAndCards() {
    console.log(this._subjects.length, this._cards.length);
    if (this._subjects.length !== this._cards.length) {
      throw new Error(`Number of subjects and cards must be the same`);
    }
  }

  public addCard(subject: Subjects, card: T): void {
    if (this._cards.length > this._numberOfCards - 1) {
      throw new Error(`You can't add more than ${this._numberOfCards} cards`);
    }

    if (this._cards.some((c) => c.name === card.name)) {
      throw new Error("You can't add the same card twice");
    }

    if (this._subjects.some(s => s === subject)) {
      throw new Error("You can't add the same subject twice");
    }

    this._subjects.push(subject);
    this._cards.push(card);
  }

  public buildCompleteQuestion(): string {
    this.verifyNumberOfSubjectsAndCards();
    const typeOfCard = this._cards[0].constructor.name;
    let completeQuestion = `I have asked to ${typeOfCard} about: ${this._question}. It answered me with these cards: `;

    for (let i = 0; i < this._subjects.length; i++) {
      const separator = i === this._subjects.length - 1 ? "." : ", ";
      completeQuestion += `${this._subjects[i]}: ${this._cards[i].name}${separator}`;
    }

    completeQuestion += ` Now you will interpret the cards like you were a professional Fortune Teller 
    and answer the question totally in Portuguese. The answer must have only the interpretation of the
     cards, without any other information.`;

    return completeQuestion;
  }

}


