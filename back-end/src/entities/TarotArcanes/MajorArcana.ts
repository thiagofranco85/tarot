import { TarotCardDTO } from "../DTO/TarotCardDTO";
import { Card } from "../abstract/Card";
import { ICardName } from "../interfaces/ICardName";
import { Trump, ObjTrump } from "../types/Trump";

export class MajorArcana extends Card implements ICardName {
  private _trump: string;
  private _numberCard: number;
  protected _name: string;
  static _quantidadeDeOlhos: number = 2;

  constructor(trump: Trump | string) {
    super();
    this._trump =
      typeof trump === "string" ? trump.replace(" ", "") : ObjTrump[trump];

    this._numberCard = Object.keys(ObjTrump).indexOf(this._trump);
    this._name = this.identifyCardName();
  }

  get trump(): string {
    return ObjTrump[this._trump as keyof typeof Trump] as string;
  }

  get numberCard(): number {
    return this._numberCard;
  }

  get name(): string {
    return this._name;
  }

  static getAllCards(): TarotCardDTO[] {
    const trumps = Object.values(Trump);
    const cards: TarotCardDTO[] = [];
    let contNumberCard = 0;

    for (const trump of trumps) {
      const name = ObjTrump[trump];
      const numberCard = contNumberCard;
      contNumberCard++;
      cards.push({ numberCard, name });
    }

    return cards;
  }

  identifyCardName(): string {
    return `${this.trump}`;
  }
}
