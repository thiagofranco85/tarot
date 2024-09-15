export interface ICardName {
  set name(name: string);
  get name(): string;
  identifyCardName(name?: string): string;
}
