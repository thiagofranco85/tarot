import { ICard } from "./interfaces/ICard";
import { DeckType } from "./types/enums/DeckType";
import { LenormandCard } from "./types/enums/LenormandCard";
import { LenormandSchool } from "./types/enums/LenormandSchool";
  

export class Lenormand implements ICard {
  protected _name: string;
  protected _deckType: DeckType;
  protected _school: LenormandSchool;

  constructor({ card, school }: { card: LenormandCard, school?: LenormandSchool }) {
  this._name = card;
  this._deckType = DeckType.Lenormand;
  this._school = school ?? LenormandSchool.EuropeSchool;
  }

  get deckType(): DeckType {
  return this._deckType;
  }
  
  get name(): string {
    return this._name;
  }

  
}
