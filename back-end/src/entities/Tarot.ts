import { MinorArcana } from "./TarotArcanes/MinorArcana";
import { MajorArcana } from "./TarotArcanes/MajorArcana";
import { TarotCardDTO } from "./DTO/TarotCardDTO";
import { Card } from "./abstract/Card";
import { ICardName } from "./interfaces/ICardName";

export class Tarot extends Card implements ICardName {
  private _name: string;
  constructor(private _arcane: MinorArcana | MajorArcana) {
    super();

    this._arcane = _arcane;
    this._name = this.identifyCardName();
  }

  get name(): string {
    return this._name;
  }

  get minorArcana(): MinorArcana | undefined {
    return this._arcane instanceof MinorArcana ? this._arcane : undefined;
  }

  get majorArcana(): MajorArcana | undefined {
    return this._arcane instanceof MajorArcana ? this._arcane : undefined;
  }

  static getAllCards(): TarotCardDTO[] {
    const minorArcana = MinorArcana.getAllCards();
    const majorArcana = MajorArcana.getAllCards();

    return [...majorArcana, ...minorArcana];
  }

  identifyCardName(): string {
    return this._arcane.name;
  }
}
