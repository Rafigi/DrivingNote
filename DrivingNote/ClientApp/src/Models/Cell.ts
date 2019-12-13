export default class Cell {
  id: number;
  Date: Date;
  StartAddress: string;
  EndAddress: string;
  RoundTrip: string;
  Distance: string;

  constructor(id: number, date: Date, StartAddress: string, EndAddress: string, roundTrip: string, distance: string) {
    this.id = id;
    this.Date = date;
    this.StartAddress = StartAddress;
    this.EndAddress = EndAddress;
    this.RoundTrip = roundTrip;
    this.Distance = distance;
  }
}
