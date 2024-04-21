import { MinorArcana } from "./MinorArcana";
import { MajorArcana } from "./MajorArcana";
import { CardDTO } from "../DTO/CardDTO";

export class Tarot {
  constructor(
    private _minorArcana?: MinorArcana,
    private _majorArcana?: MajorArcana
  ) {
    this._minorArcana = _minorArcana;
    this._majorArcana = _majorArcana;
  }

  get minorArcana(): MinorArcana | undefined {
    return this._minorArcana;
  }

  get majorArcana(): MajorArcana | undefined {
    return this._majorArcana;
  }

  static getAllCards(): CardDTO[] {
    const minorArcana = MinorArcana.getAllCards();
    const majorArcana = MajorArcana.getAllCards();

    return [...majorArcana, ...minorArcana];
  }
}

const t = Tarot.getAllCards();
console.log(t);
