 import { TarotCards } from "./types/enums/TarotCards";

export class Tarot  {

  private _name: string;
  constructor({ card }: { card: TarotCards }) {
    this._name = TarotCards[card];
  }

  get name(): string {
    return this._name;
  }
 
}
