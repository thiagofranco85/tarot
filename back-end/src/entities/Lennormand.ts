import { Carta } from "./abstract/Card";

export class Lennormand extends Carta {
  constructor(id: string | null, number: number, name: string) {
    super(id, number, name);
  }
}
