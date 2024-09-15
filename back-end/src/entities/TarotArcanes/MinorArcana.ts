import { capitalize } from "../../utils/capitalize";
import { Rank } from "../types/Rank";
import { Suit } from "../types/Suit";
import { Card } from "../abstract/Card";
import { TarotCardDTO } from "../DTO/TarotCardDTO";
import { ICardName } from "../interfaces/ICardName";

export class MinorArcana extends Card implements ICardName {
  private _suit: Suit;
  private _rank: Rank;
  protected _name: string;

  constructor(suit: Suit, rank: Rank) {
    super();
    this._suit = suit;
    this._rank = rank;
    this._name = this.identifyCardName();
  }

  identifyCardName(): string {
    return `${this._rank} of ${this._suit}`;
  }

  get suit(): string {
    const str = this._suit.toLocaleLowerCase() ?? "";
    return capitalize(str);
  }

  get rank(): string {
    const str = this._rank.toLocaleLowerCase() ?? "";
    return capitalize(str);
  }

  get name(): string {
    return this._name;
  }

  static getAllCards(): TarotCardDTO[] {
    const suits = Object.values(Suit);
    const ranks = Object.values(Rank);
    const cards: TarotCardDTO[] = [];
    let contNumberCard = 1;
    for (const suit of suits) {
      for (const rank of ranks) {
        const name = `${rank} of ${suit}`;
        const numberCard = contNumberCard;
        contNumberCard++;
        cards.push({ numberCard, name });
      }
    }
    return cards;
  }
}
