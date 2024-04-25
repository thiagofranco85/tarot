import { Card } from "./abstract/Card";
import { LennormandCards } from "./Types/Lennormand";
import { LennormandTarotReference } from "./Types/LennormandTarotReference";
import { Rank } from "./Types/Rank";
import { Suit } from "./Types/Suit";

export class Lennormand extends Card {
  private _tarotReference: string;
  private _suit: Suit;
  private _rank: Rank;
  private _number: number;
  constructor(
    id: string | null,
    private _name: LennormandCards,
  ) {
    super(id);
    this._number = Object.values(LennormandCards).indexOf(_name) + 1;
    const { rank, suit } =
      LennormandTarotReference[
        this._number as keyof typeof LennormandTarotReference
      ];
    this._rank = rank;
    this._suit = suit;
    this._tarotReference = rank + " of " + suit;
  }

  get tarotReference(): string {
    return this._tarotReference;
  }

  get suit(): Suit {
    return this._suit;
  }

  get rank(): Rank {
    return this._rank;
  }

  get name(): LennormandCards {
    return this._name;
  }
}
const l = new Lennormand(null, LennormandCards.Bear);
console.log(l.suit);
