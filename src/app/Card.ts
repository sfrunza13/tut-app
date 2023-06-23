export interface Card {
  id: number;
  name: string;
  color: string;
  text: string;
}

export type CardToAdd = Pick<Card, 'name' | 'color' | 'text'>;
