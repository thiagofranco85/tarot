 import { ICard } from "./interfaces/ICard";
import { DeckType } from "./types/enums/DeckType";
import { TarotCards } from "./types/enums/TarotCards";

export class Tarot implements ICard {

  private _name: string;
  private _deckType: DeckType;

  constructor({ card }: { card: TarotCards }) {
    this._name = card;
    this._deckType = DeckType.Tarot;
  }

  get name(): string {
    return this._name;
  }

  get deckType(): DeckType {
    return this._deckType;
  }
 
}
