import { v4 as uuidv4 } from "uuid";

export abstract class Card {
  protected _description?: string;
  protected _image?: string;

  constructor(private _id: string | null) {
    this._id = _id === null ? uuidv4() : _id;
  }

  set description(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description ?? "";
  }

  set image(image: string) {
    this._image = image;
  }

  get image(): string {
    return this._image ?? "";
  }
}
