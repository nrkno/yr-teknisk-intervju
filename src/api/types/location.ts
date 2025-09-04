export interface ILocation {
  id: string;
  locationName: string;
  temperature: number;
  precipitation: number;
  wind: number;
  units: {
    temperature: '°';
    precipitation: 'mm';
    wind: 'm/s';
  };
}
