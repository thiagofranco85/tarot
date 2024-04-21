import { CardDTO } from "../DTO/CardDTO";
import { Card } from "../abstract/Card";
import { Trump, ObjTrump } from "./../Types/Trump";

export class MajorArcana extends Card {
  private _trump: string;
  private _numberCard: number;
  constructor(id: string | null, trump: Trump | string) {
    super(id);

    this._trump =
      typeof trump === "string" ? trump.replace(" ", "") : ObjTrump[trump];

    this._numberCard = Object.keys(ObjTrump).indexOf(this._trump);
  }

  get trump(): string {
    return ObjTrump[this._trump as keyof typeof Trump] as string;
  }

  get numberCard(): number {
    return this._numberCard;
  }

  get fullName(): string {
    return `${this.numberCard} - ${this.trump}`;
  }

  static getAllCards(): CardDTO[] {
    const trumps = Object.values(Trump);
    const cards: CardDTO[] = [];
    let contNumberCard = 0;

    for (const trump of trumps) {
      const name = ObjTrump[trump];
      const numberCard = contNumberCard;
      contNumberCard++;
      cards.push({ numberCard, name });
    }

    return cards;
  }
}
