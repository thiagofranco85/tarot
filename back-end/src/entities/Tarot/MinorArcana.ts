import { capitalize } from "../../Utils/capitalize";
import { Rank } from "../Types/Rank";
import { Suit } from "../Types/Suit";
import { Card } from "../abstract/Card";
import { TarotCardDTO } from "../DTO/TarotCardDTO";

export class MinorArcana extends Card {
  private _suit: Suit;
  private _rank: Rank;

  constructor(id: string | null, suit: Suit, rank: Rank) {
    super(id);
    this._suit = Suit[suit];
    this._rank = Rank[rank];
  }

  get suit(): string {
    const str = this._suit.toLocaleLowerCase() ?? "";
    return capitalize(str);
  }

  get rank(): string {
    const str = this._rank?.toLocaleLowerCase() ?? "";
    return capitalize(str);
  }

  get fullName(): string {
    return `${this.rank} of ${this.suit}`;
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
