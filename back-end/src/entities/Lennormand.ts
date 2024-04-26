import { Card } from "./abstract/Card";
import { LennormandCardDTO } from "./DTO/LennormandCardDTO";
import { LennormandCards } from "./Types/LennormandCards";
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
    const { rank, suit } = Lennormand.getLennormandTarotReferenceByIndex(
      this._number,
    );
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
