import { Lennormand } from "./Lennormand";
import { Tarot } from "./Tarot";
import { MajorArcana } from "./TarotArcanes/MajorArcana";
import { MinorArcana } from "./TarotArcanes/MinorArcana";
import { ICardName } from "./interfaces/ICardName";
import { LennormandCards } from "./types/LennormandCards";
import { Rank } from "./types/Rank";
import { Suit } from "./types/Suit";
import { Trump } from "./types/Trump";
import { v4 as uuidv4 } from "uuid";

export class Play<T extends ICardName> {
  private _id: string | null;
  private _cards: T[];
  private _numberOfCards: number;
  private _limitOfNumberOfCards: number = 3;

  constructor(id: string | null, numberOfCards: number) {
    this._id = id === null ? uuidv4() : id;
    this._cards = [];
    this._numberOfCards = this.verifyNumberOfCards(numberOfCards);
  }

  private verifyNumberOfCards(numberOfCards: number): number {
    if (numberOfCards > this._limitOfNumberOfCards) {
      throw new Error(
        `You can't play with more than ${this._limitOfNumberOfCards} cards`,
      );
    }

    return numberOfCards;
  }

  getId(): string | null {
    return this._id;
  }

  addCard(card: T): void {
    if (this._cards.length > this._numberOfCards - 1) {
      throw new Error(`You can't add more than ${this._numberOfCards} cards`);
    }

    if (this._cards.some((c) => c.name === card.name)) {
      throw new Error("You can't add the same card twice");
    }

    this._cards.push(card);
  }

  getCards(): T[] {
    return this._cards;
  }
}

const playLennormand = new Play<Lennormand>(null, 3);

playLennormand.addCard(new Lennormand(LennormandCards.Rider));
playLennormand.addCard(new Lennormand(LennormandCards.Bear));
playLennormand.addCard(new Lennormand(LennormandCards.Child));

const playMajor = new Play<MajorArcana>(null, 2);
playMajor.addCard(new MajorArcana(Trump.TheFool));
playMajor.addCard(new MajorArcana(Trump.TheMagician));

const minor1 = new MinorArcana(Suit.Clubs, Rank.Ace);
const major = new MajorArcana(Trump.TheFool);

const tarot1 = new Tarot(minor1);
const tarot2 = new Tarot(major);

const playTarot = new Play<Tarot>(null, 2);
playTarot.addCard(tarot1);
playTarot.addCard(tarot2);

console.log(tarot2.name);
