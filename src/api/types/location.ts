export interface ILocation {
  id: string;
  name: string;
  category: string;
  elevation: number;
  symbol: {
    src: string;
    description: string;
  };
  temperature: number;
  precipitation: number;
  wind: number;
  windGust?: number;
}
