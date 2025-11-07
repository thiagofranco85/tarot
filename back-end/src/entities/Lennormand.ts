import { LenormandCard } from "./types/enums/LenormandCard";
  

export class Lennormand  {
  protected _name: string;

  constructor({ card }: { card: LenormandCard }) {
    this._name = LenormandCard[card];
  }  
  
  get name(): string {
    return this._name;
  }

  
}
