import { CardDTO } from "../DTO/CardDTO";

export interface ICards {
  getAllCards(): CardDTO[];
}
