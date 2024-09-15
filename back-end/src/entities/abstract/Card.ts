export abstract class Card {
  protected _description?: string;
  protected _image?: string;

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
