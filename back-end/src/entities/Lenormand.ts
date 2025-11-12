import { ICard } from "./interfaces/ICard";
import { DeckType } from "./types/enums/DeckType";
import { LenormandCard } from "./types/enums/LenormandCard";
  

export class Lenormand implements ICard {
  protected _name: string;
  protected _deckType: DeckType;

  constructor({ card }: { card: LenormandCard }) {
  this._name = card;
  this._deckType = DeckType.Lenormand;
  }

  get deckType(): DeckType {
  return this._deckType;
  }
  
  get name(): string {
    return this._name;
  }

  
}
