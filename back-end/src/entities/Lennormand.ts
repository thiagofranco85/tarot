import { Card } from "./abstract/Card";
import { LennormandCardDTO } from "./DTO/LennormandCardDTO";
import { ICardName } from "./interfaces/ICardName";
import { LennormandCards } from "./types/LennormandCards";
import { LennormandTarotReference } from "./types/LennormandTarotReference";
import { Rank } from "./types/Rank";
import { Suit } from "./types/Suit";

export class Lennormand extends Card implements ICardName {
  private _tarotReference: string;
  private _suit: Suit;
  private _rank: Rank;
  private _number: number;
  protected _name: string;

  constructor(_name: LennormandCards) {
    super();
    this._number = Object.values(LennormandCards).indexOf(_name) + 1;
    const { rank, suit } = Lennormand.getLennormandTarotReferenceByIndex(
      this._number,
    );
    this._rank = rank;
    this._suit = suit;
    this._tarotReference = rank + " of " + suit;
    this._name = this.identifyCardName(_name);
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

  get name(): string {
    return this._name;
  }

  identifyCardName(name: string): string {
    return name;
  }

  static getLennormandTarotReferenceByIndex(index: number): {
    rank: Rank;
    suit: Suit;
  } {
    return LennormandTarotReference[
      index as keyof typeof LennormandTarotReference
    ];
  }

  static getAllCards(): LennormandCardDTO[] {
    const cards: LennormandCardDTO[] = [];
    for (const card in LennormandCards) {
      const indexEnum =
        Object.values(LennormandCards).indexOf(card as LennormandCards) + 1;
      const { rank, suit } =
        Lennormand.getLennormandTarotReferenceByIndex(indexEnum);

      cards.push({
        number: indexEnum,
        name: card,
        tarotReference: `${rank} of ${suit}`,
      });
    }
    return cards;
  }
}
