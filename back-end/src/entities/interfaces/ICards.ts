import { CardDTO } from "../DTO/TarotCardDTO";

export interface ICards {
  getAllCards(): CardDTO[];
}
